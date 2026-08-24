<script>
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import Services from '$lib/components/Services.svelte';
	import Studio from '$lib/components/Studio.svelte';
	import Work from '$lib/components/Work.svelte';
</script>

<svelte:head>
	<title>Affordable Small Business Websites | Anchorforge Digital</title>
	<meta
		name="description"
		content="Affordable, professional websites for small businesses. Start with a simple online presence or build something bigger with Anchorforge Digital."
	/>
	<link rel="canonical" href="https://anchorforgedigital.com/" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://anchorforgedigital.com/" />
	<meta property="og:title" content="Affordable Small Business Websites | Anchorforge Digital" />
	<meta
		property="og:description"
		content="Professional websites for small businesses that need a clear, affordable place to start online."
	/>
	<meta property="og:image" content="https://anchorforgedigital.com/images/anchorforge-hero.png" />
	<meta property="og:site_name" content="Anchorforge Digital" />
	<meta property="og:locale" content="en_US" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="theme-color" content="#0a0a0a" />
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "ProfessionalService",
			"name": "Anchorforge Digital",
			"url": "https://anchorforgedigital.com/",
			"email": "anchorforgedigital@gmail.com",
			"description": "Affordable, professional websites and practical web systems for small businesses.",
			"areaServed": "Worldwide",
			"priceRange": "$$",
			"serviceType": ["Small business website design", "Custom website development", "Web systems"]
		}
	</script>
</svelte:head>

<Nav />
<main>
	<Hero />
	<section id="starting-points" class="starting-points" aria-labelledby="starting-points-title">
		<div class="section-container">
			<div class="section-intro">
				<span class="kicker">// Begin here</span>
				<h2 id="starting-points-title">A clear place to <em>start</em>.</h2>
				<p>
					You don’t need to know what platform, pages, or features you need. Tell us what your
					business does, and we’ll help shape the right first step.
				</p>
			</div>
			<div class="path-grid">
				<article class="path-card glass-medium">
					<span class="path-number">01 / Start small</span>
					<h3>A polished first presence</h3>
					<p>
						Everything customers need to find, trust, and contact you: services, hours, location,
						and a site that works beautifully on mobile.
					</p>
					<strong>From $200</strong>
					<a class="text-link" href="#pricing"
						>See what’s included <span aria-hidden="true">↓</span></a
					>
				</article>
				<article class="path-card path-card-featured glass-heavy">
					<span class="path-number">02 / Build bigger</span>
					<h3>A web presence built to grow</h3>
					<p>
						Multiple pages, custom interactions, forms, payments, email workflows, and the systems
						that make your business easier to run.
					</p>
					<strong>Custom scope</strong>
					<a class="text-link" href="#services"
						>Explore capabilities <span aria-hidden="true">↓</span></a
					>
				</article>
			</div>
		</div>
	</section>
	<Work />
	<Services />
	<section class="process" aria-labelledby="process-title">
		<div class="section-container">
			<div class="section-intro process-heading">
				<span class="kicker">// The process</span>
				<h2 id="process-title">From “where do I start?” to <em>launched</em>.</h2>
			</div>
			<div class="process-grid">
				{#each [['01', 'Understand', 'We learn what your business does and what customers need to find.'], ['02', 'Shape', 'We recommend the right scope, structure, and visual direction.'], ['03', 'Build', 'We design and develop your site with clear communication throughout.'], ['04', 'Launch', 'We test, refine, and put your new digital home to work.']] as step (step[0])}
					<article>
						<span>{step[0]}</span>
						<h3>{step[1]}</h3>
						<p>{step[2]}</p>
					</article>
				{/each}
			</div>
		</div>
	</section>
	<Studio />
	<section class="resources" aria-labelledby="resources-title">
		<div class="section-container resource-layout">
			<div class="section-intro">
				<span class="kicker">// Small Business Web Guide</span>
				<h2 id="resources-title">Useful answers before you <em>build</em>.</h2>
			</div>
			<div class="resource-list">
				<a href="mailto:anchorforgedigital@gmail.com?subject=Do I need a website?">
					<span>Do I need a website for my small business?</span><b>↗</b>
				</a>
				<a href="mailto:anchorforgedigital@gmail.com?subject=Small business website planning">
					<span>What should go on my first business website?</span><b>↗</b>
				</a>
				<a href="mailto:anchorforgedigital@gmail.com?subject=Website and SEO question">
					<span>How does a new website start showing up in Google?</span><b>↗</b>
				</a>
			</div>
		</div>
	</section>
	<Pricing />
</main>
<Footer />

<style>
	.section-container {
		max-width: var(--page-max);
		margin: 0 auto;
		padding: 0 var(--page-padding);
	}

	.starting-points,
	.process,
	.resources {
		padding: var(--space-section-sm) 0;
		border-top: 1px solid var(--color-border);
	}

	.section-intro {
		max-width: 600px;
		margin-bottom: var(--space-12);
	}

	.section-intro h2 {
		margin-bottom: var(--space-5);
		font-size: clamp(2.5rem, 6vw, 5.5rem);
		letter-spacing: -0.03em;
	}

	.section-intro h2 em {
		font-family: var(--font-display);
		font-weight: 400;
	}

	.section-intro p {
		max-width: 500px;
		font-size: var(--text-lg);
		font-weight: 300;
		line-height: 1.7;
		color: var(--color-text-secondary);
	}

	.path-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-6);
	}

	.path-card {
		display: flex;
		flex-direction: column;
		min-height: 330px;
		padding: var(--space-8);
		border-radius: var(--radius-lg);
	}

	.path-card-featured {
		background: linear-gradient(145deg, rgba(200, 117, 51, 0.14), rgba(255, 255, 255, 0.04));
	}

	.path-number,
	.process-grid article > span {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-forge-hot);
	}

	.path-card h3 {
		margin: auto 0 var(--space-4);
		font-family: var(--font-display);
		font-size: clamp(2rem, 4vw, 3.5rem);
		font-style: italic;
		line-height: 1;
	}

	.path-card p {
		max-width: 440px;
		margin-bottom: var(--space-6);
		color: var(--color-text-secondary);
	}

	.path-card strong {
		margin-bottom: var(--space-6);
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		font-weight: 400;
	}

	.process-heading {
		margin-bottom: var(--space-16);
	}
	.process-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--space-6);
	}

	.process-grid article {
		padding-top: var(--space-5);
		border-top: 1px solid var(--color-border-strong);
	}

	.process-grid h3 {
		margin: var(--space-8) 0 var(--space-3);
		font-size: var(--text-xl);
	}

	.process-grid p {
		color: var(--color-text-secondary);
		font-weight: 300;
	}
	.resource-layout {
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;
		gap: var(--space-16);
	}
	.resource-list {
		border-top: 1px solid var(--color-border);
	}
	.resource-list a {
		display: flex;
		justify-content: space-between;
		gap: var(--space-6);
		padding: var(--space-6) 0;
		border-bottom: 1px solid var(--color-border);
		color: var(--color-text-secondary);
		transition:
			color var(--duration-fast) var(--ease-out),
			padding var(--duration-fast) var(--ease-out);
	}
	.resource-list a:hover {
		padding-left: var(--space-3);
		color: var(--color-text);
	}
	.resource-list b {
		color: var(--color-forge-hot);
		font-weight: 400;
	}

	@media (max-width: 768px) {
		.path-grid,
		.process-grid,
		.resource-layout {
			grid-template-columns: 1fr;
		}
		.path-card {
			min-height: 280px;
		}
		.process-grid {
			gap: var(--space-8);
		}
		.resource-layout {
			gap: var(--space-8);
		}
	}
</style>
