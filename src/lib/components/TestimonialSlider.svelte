<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount, onDestroy } from 'svelte';

	type Testimonial = {
		shortQuote: string;
		quote: string;
		name: string;
		title: string;
	};

	const defaultTestimonials: Testimonial[] = [
		{
			shortQuote: 'Guidance really helped',
			quote:
				'I really connected with and appreciated the style and approach. The one-on-one guidance really helped.',
			name: 'Claire',
			title: 'Senior Manager'
		},
		{
			shortQuote: 'Helped me achieve',
			quote:
				'My goal was to maintain focus on my most important leadership priorities and this program has helped me achieve this.',
			name: 'Andrew',
			title: 'General Counsel'
		},
		{
			shortQuote: 'Program helped me in so many ways',
			quote:
				'My learnings from this program have helped me in so many ways both personally and professionally.',
			name: 'Deborah',
			title: 'HR Director'
		},
		{
			shortQuote: 'Insights were innovative and pragmatic',
			quote:
				'I appreciated the extensive experience from a wide range of sectors to draw upon. The insights shared were innovative and pragmatic.',
			name: 'Raj',
			title: 'GM Human Resources'
		},
		{
			shortQuote: 'Truly enriching and transformational experience',
			quote:
				'The guidance I have received has been instrumental in helping me to workout my overall vision and strategies for my career and personal goals. This has been a truly enriching and transformational experience.',
			name: 'Katarina',
			title: 'Marketing Specialist'
		}
	];

	type Props = {
		testimonials?: Testimonial[];
		class?: string;
	};

	let { testimonials = defaultTestimonials, class: className = '' }: Props = $props();

	let activeTestimonial = $state(0);
	let slideDirection = $state<'left' | 'right'>('left');
	let isAnimating = $state(false);
	let autoSlideTimer: ReturnType<typeof setInterval>;

	function slideTo(index: number, direction: 'left' | 'right') {
		if (isAnimating) return;
		slideDirection = direction;
		isAnimating = true;
		setTimeout(() => {
			activeTestimonial = index;
			isAnimating = false;
		}, 300);
	}

	function prevTestimonial() {
		resetAutoSlide();
		const prev = (activeTestimonial - 1 + testimonials.length) % testimonials.length;
		slideTo(prev, 'right');
	}

	function nextTestimonial() {
		resetAutoSlide();
		const next = (activeTestimonial + 1) % testimonials.length;
		slideTo(next, 'left');
	}

	function startAutoSlide() {
		autoSlideTimer = setInterval(() => {
			const next = (activeTestimonial + 1) % testimonials.length;
			slideTo(next, 'left');
		}, 3000);
	}

	function resetAutoSlide() {
		clearInterval(autoSlideTimer);
		startAutoSlide();
	}

	onMount(() => startAutoSlide());
	onDestroy(() => clearInterval(autoSlideTimer));
</script>

<div class={className} data-testid="testimonial-section">
	<div class="testimonial-title" data-testid="testimonial-card">
		<div class="overflow-hidden w-full">
			<div
				class="testimonial-slide flex flex-col md:flex-row items-start md:items-center w-full"
				class:slide-out-left={isAnimating && slideDirection === 'left'}
				class:slide-out-right={isAnimating && slideDirection === 'right'}
				class:slide-in-left={!isAnimating && slideDirection === 'right'}
				class:slide-in-right={!isAnimating && slideDirection === 'left'}
			>
				<!-- Left: large bold headline -->
				<div class="shrink-0 w-full md:w-1/2 md:pl-4 md:mr-6 mb-4 md:mb-0">
					<p class="text-xl md:text-2xl font-black leading-tight text-black">
						{testimonials[activeTestimonial].shortQuote}
					</p>
				</div>

				<!-- Right: full quote + attribution -->
				<div class="w-full md:w-1/2">
					<p class="text-xs md:text-sm leading-relaxed text-black mb-3">
						{testimonials[activeTestimonial].quote}
					</p>
					<p class="font-bold text-xs md:text-sm text-black">{testimonials[activeTestimonial].name}</p>
					<p class="text-xs md:text-sm text-black">{testimonials[activeTestimonial].title}</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Navigation: ← 3/5 → -->
	<div class="flex items-center justify-center gap-6 mt-4">
		<button
			onclick={prevTestimonial}
			class="text-black hover:opacity-60 transition-opacity"
			aria-label="Previous testimonial"
		>
			<Icon icon="ph:arrow-left" class="text-xl" />
		</button>
		<span class="text-black font-medium tabular-nums">
			{activeTestimonial + 1}/{testimonials.length}
		</span>
		<button
			onclick={nextTestimonial}
			class="text-black hover:opacity-60 transition-opacity"
			aria-label="Next testimonial"
		>
			<Icon icon="ph:arrow-right" class="text-xl" />
		</button>
	</div>
</div>
