type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
	message: string;
	type: ToastType;
	id: number;
}

let toastState = $state<Toast | null>(null);
let toastId = 0;

export const toast = {
	get current() {
		return toastState;
	},
	show(message: string, type: ToastType = 'info', duration = 3000) {
		toastState = { message, type, id: ++toastId };
		setTimeout(() => {
			if (toastState?.id === toastId) {
				toastState = null;
			}
		}, duration);
	},
	success(message: string, duration = 3000) {
		this.show(message, 'success', duration);
	},
	error(message: string, duration = 3000) {
		this.show(message, 'error', duration);
	},
	info(message: string, duration = 3000) {
		this.show(message, 'info', duration);
	},
	warning(message: string, duration = 3000) {
		this.show(message, 'warning', duration);
	},
	dismiss() {
		toastState = null;
	}
};
