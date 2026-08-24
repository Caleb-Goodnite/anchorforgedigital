<script>
	import ForgeScene from './ForgeScene.svelte';

	const email = 'anchorforgedigital@gmail.com';
</script>

<section id="top" class="hero" aria-label="Anchorforge Digital introduction">
	<ForgeScene variant="hero" />

	<div class="hero-content">
		<div class="hero-eyebrow">
			<span class="kicker">// Affordable Web Development</span>
		</div>

		<h1 class="hero-headline">
			<span class="hero-line hero-line-1">Websites</span>
			<span class="hero-line hero-line-2">for businesses</span>
			<span class="hero-line hero-line-3">getting online</span>
		</h1>

		<p class="hero-subtitle">
			Not sure where to start? We build affordable, polished websites for small businesses—then help
			you grow from there when you’re ready.
		</p>

		<div class="hero-actions">
			<a class="btn-primary" href={`mailto:${email}?subject=Anchorforge Digital project inquiry`}>
				Start a Project
				<span aria-hidden="true">↗</span>
			</a>
			<a class="text-link" href="#starting-points">
				Find your starting point
				<span aria-hidden="true">↓</span>
			</a>
		</div>
	</div>

	<div class="hero-scroll-hint" aria-hidden="true">
		<div class="scroll-line"></div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		min-height: 100vh;
		min-height: 100dvh;
		padding: 0 var(--page-padding);
		padding-bottom: var(--space-16);
		overflow: hidden;
	}

	.hero-content {
		position: relative;
		z-index: 2;
		max-width: var(--page-max);
		width: 100%;
		margin: 0 auto;
	}

	.hero-eyebrow {
		margin-bottom: var(--space-10);
	}

	.hero-headline {
		margin-bottom: var(--space-10);
		max-width: 14ch;
	}

	.hero-line {
		display: block;
	}

	.hero-line-1 {
		font-family: var(--font-display);
		font-size: var(--text-hero);
		font-weight: 400;
		font-style: italic;
		line-height: 0.85;
		letter-spacing: -0.02em;
		color: var(--color-text);
	}

	.hero-line-2 {
		font-family: var(--font-body);
		font-size: clamp(1.4rem, 3.5vw, 3rem);
		font-weight: 300;
		line-height: 1.3;
		letter-spacing: -0.01em;
		color: var(--color-text-secondary);
		padding-left: 0.1em;
		margin-top: var(--space-3);
	}

	.hero-line-3 {
		font-family: var(--font-display);
		font-size: var(--text-hero);
		font-weight: 400;
		font-style: italic;
		line-height: 0.85;
		letter-spacing: -0.02em;
		color: var(--color-text);
		margin-top: var(--space-2);
	}

	.hero-subtitle {
		max-width: 520px;
		margin-bottom: var(--space-10);
		font-size: var(--text-md);
		font-weight: 300;
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	.hero-actions {
		display: flex;
		align-items: center;
		gap: var(--space-8);
	}

	/* Scroll hint */
	.hero-scroll-hint {
		position: absolute;
		bottom: var(--space-8);
		right: var(--page-padding);
		z-index: 2;
	}

	.scroll-line {
		width: 1px;
		height: 48px;
		background: linear-gradient(
			180deg,
			transparent 0%,
			rgba(255, 255, 255, 0.3) 50%,
			transparent 100%
		);
		animation: scroll-pulse 2.5s ease-in-out infinite;
	}

	@keyframes scroll-pulse {
		0%,
		100% {
			opacity: 0.3;
		}
		50% {
			opacity: 1;
		}
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.hero-headline {
			max-width: 12ch;
		}
	}

	@media (max-width: 768px) {
		.hero {
			padding-bottom: var(--space-12);
		}

		.hero-eyebrow {
			margin-bottom: var(--space-8);
		}

		.hero-headline {
			margin-bottom: var(--space-8);
		}

		.hero-actions {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--space-5);
		}

		.hero-scroll-hint {
			display: none;
		}
	}

	@media (max-width: 430px) {
		.hero-line-1,
		.hero-line-3 {
			font-size: clamp(3.5rem, 18vw, 5.5rem);
		}

		.hero-line-2 {
			font-size: clamp(1.1rem, 4vw, 1.6rem);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.scroll-line {
			animation: none;
			opacity: 0.5;
		}
	}
</style>
