<script>
	let { variant = 'hero' } = $props();
</script>

<div
	class="forge-scene"
	class:hero-variant={variant === 'hero'}
	class:services-variant={variant === 'services'}
	aria-hidden="true"
>
	<!-- Atmospheric gradients -->
	<div class="forge-atmosphere">
		<div class="forge-glow forge-glow-1"></div>
		<div class="forge-glow forge-glow-2"></div>
		<div class="forge-glow forge-glow-3"></div>
	</div>

	<!-- Forge image -->
	<div class="forge-image-wrap">
		<img
			class="forge-image"
			src="/images/anchorforge-hero.png"
			alt=""
			loading={variant === 'hero' ? 'eager' : 'lazy'}
		/>
	</div>

	<!-- Subtle particle sparks -->
	<div class="forge-sparks">
		<span class="spark spark-1"></span>
		<span class="spark spark-2"></span>
		<span class="spark spark-3"></span>
		<span class="spark spark-4"></span>
	</div>
</div>

<style>
	.forge-scene {
		position: absolute;
		inset: 0;
		overflow: hidden;
		pointer-events: none;
		z-index: 0;
	}

	/* Atmospheric gradients */
	.forge-atmosphere {
		position: absolute;
		inset: 0;
	}

	.forge-glow {
		position: absolute;
		border-radius: 50%;
		filter: blur(80px);
	}

	.forge-glow-1 {
		width: 600px;
		height: 500px;
		top: 20%;
		left: 50%;
		transform: translateX(-50%);
		background: radial-gradient(
			ellipse,
			rgba(200, 117, 51, 0.08) 0%,
			rgba(200, 117, 51, 0.03) 40%,
			transparent 70%
		);
		animation: glow-pulse-1 8s ease-in-out infinite;
	}

	.forge-glow-2 {
		width: 400px;
		height: 350px;
		top: 40%;
		right: 10%;
		background: radial-gradient(ellipse, rgba(212, 148, 58, 0.06) 0%, transparent 60%);
		animation: glow-pulse-2 12s ease-in-out infinite;
	}

	.forge-glow-3 {
		width: 300px;
		height: 300px;
		bottom: 15%;
		left: 15%;
		background: radial-gradient(ellipse, rgba(168, 90, 32, 0.05) 0%, transparent 60%);
		animation: glow-pulse-3 10s ease-in-out infinite;
	}

	/* Forge Image */
	.forge-image-wrap {
		position: absolute;
		width: min(1200px, 100vw);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -45%);
		opacity: 0.3;
		mix-blend-mode: screen;
	}

	.hero-variant .forge-image-wrap {
		top: 45%;
		opacity: 0.25;
	}

	.services-variant .forge-image-wrap {
		top: 30%;
		opacity: 0.2;
	}

	.forge-image {
		width: 100%;
		height: auto;
		filter: saturate(1.1) contrast(1.05);
		animation: forge-breathe 7s ease-in-out infinite;
	}

	/* Sparks */
	.forge-sparks {
		position: absolute;
		inset: 0;
	}

	.spark {
		position: absolute;
		width: 2px;
		height: 2px;
		border-radius: 50%;
		background: var(--color-forge-hot);
		opacity: 0;
		box-shadow: 0 0 4px 1px rgba(232, 164, 74, 0.4);
	}

	.spark-1 {
		top: 42%;
		left: 48%;
		animation: spark-float 4s ease-out 0s infinite;
	}

	.spark-2 {
		top: 45%;
		left: 52%;
		animation: spark-float 5s ease-out 1.2s infinite;
	}

	.spark-3 {
		top: 40%;
		left: 50%;
		animation: spark-float 4.5s ease-out 2.5s infinite;
	}

	.spark-4 {
		top: 44%;
		left: 46%;
		animation: spark-float 6s ease-out 3.8s infinite;
	}

	/* Animations */
	@keyframes forge-breathe {
		0%,
		100% {
			filter: saturate(1.1) contrast(1.05) brightness(1);
		}
		50% {
			filter: saturate(1.2) contrast(1.08) brightness(1.08);
		}
	}

	@keyframes glow-pulse-1 {
		0%,
		100% {
			opacity: 1;
			transform: translateX(-50%) scale(1);
		}
		50% {
			opacity: 0.7;
			transform: translateX(-50%) scale(1.08);
		}
	}

	@keyframes glow-pulse-2 {
		0%,
		100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.6;
			transform: scale(1.1);
		}
	}

	@keyframes glow-pulse-3 {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}

	@keyframes spark-float {
		0% {
			opacity: 0;
			transform: translate(0, 0) scale(0.5);
		}
		10% {
			opacity: 0.8;
			transform: translate(2px, -4px) scale(1);
		}
		50% {
			opacity: 0.3;
			transform: translate(-5px, -25px) scale(0.6);
		}
		100% {
			opacity: 0;
			transform: translate(-8px, -50px) scale(0.2);
		}
	}

	/* Responsive */
	@media (max-width: 768px) {
		.forge-glow-1 {
			width: 350px;
			height: 300px;
		}

		.forge-glow-2 {
			width: 250px;
			height: 200px;
		}

		.forge-glow-3 {
			width: 200px;
			height: 200px;
		}

		.forge-image-wrap {
			width: 140vw;
			opacity: 0.18;
		}

		.forge-sparks {
			display: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.forge-image,
		.forge-glow-1,
		.forge-glow-2,
		.forge-glow-3,
		.spark {
			animation: none !important;
		}

		.spark {
			display: none;
		}
	}
</style>
