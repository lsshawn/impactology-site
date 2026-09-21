/**
 * Umami custom events.
 *
 * The script is loaded with `defer` from a third-party origin, so an ad blocker
 * drops it outright and `window.umami` is absent far more often than you would
 * expect. Tracking must never be load-bearing: this returns silently rather
 * than throwing inside a submit handler and costing someone their enquiry.
 *
 * `defer` also means the script can still be in flight when a page-view event
 * fires on first load, so events that arrive early are queued and flushed once
 * it appears. The queue is dropped after a short wait so a blocked script does
 * not leave a timer running.
 *
 * The Umami script itself is loaded from src/app.html. This file only fires
 * events at it.
 */
type UmamiTrack = (event: string, data?: Record<string, unknown>) => void;

type QueuedEvent = [string, Record<string, unknown> | undefined];

const queue: QueuedEvent[] = [];
let waiting = false;

function getUmami(): UmamiTrack | undefined {
	if (typeof window === 'undefined') return undefined;
	return (window as { umami?: { track?: UmamiTrack } }).umami?.track;
}

function send(fn: UmamiTrack, event: string, data?: Record<string, unknown>) {
	try {
		fn(event, data);
	} catch {
		/* analytics must never break a form */
	}
}

function waitForUmami() {
	if (waiting) return;
	waiting = true;

	let elapsed = 0;
	const interval = 200;
	const timeout = 5000;

	const timer = setInterval(() => {
		const fn = getUmami();
		elapsed += interval;
		if (!fn && elapsed < timeout) return;

		clearInterval(timer);
		waiting = false;
		const pending = queue.splice(0);
		if (fn) for (const [event, data] of pending) send(fn, event, data);
	}, interval);
}

export function track(event: string, data?: Record<string, unknown>) {
	if (typeof window === 'undefined') return;
	const fn = getUmami();
	if (fn) {
		send(fn, event, data);
		return;
	}
	queue.push([event, data]);
	waitForUmami();
}
