<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount, onDestroy } from 'svelte';

	type Testimonial = {
		shortQuote: string;
		quote: string;
		name: string;
		title: string;
	};

	type Props = {
		testimonials: Testimonial[];
		class?: string;
	};

	let { testimonials, class: className = '' }: Props = $props();

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
				class="testimonial-slide flex items-center w-full"
				class:slide-out-left={isAnimating && slideDirection === 'left'}
				class:slide-out-right={isAnimating && slideDirection === 'right'}
				class:slide-in-left={!isAnimating && slideDirection === 'right'}
				class:slide-in-right={!isAnimating && slideDirection === 'left'}
			>
				<!-- Left: large bold headline -->
				<div class="pl-4 mr-6 shrink-0 md:w-1/2">
					<p class="text-2xl font-black leading-tight text-black">
						{testimonials[activeTestimonial].shortQuote}
					</p>
				</div>

				<!-- Right: full quote + attribution -->
				<div class="md:w-1/2">
					<p class="text-sm leading-relaxed text-black mb-4">
						{testimonials[activeTestimonial].quote}
					</p>
					<p class="font-bold text-sm text-black">{testimonials[activeTestimonial].name}</p>
					<p class="text-sm text-black">{testimonials[activeTestimonial].title}</p>
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
