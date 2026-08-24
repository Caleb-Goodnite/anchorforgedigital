<script>
	import Footer from '$lib/components/Footer.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
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
	<meta property="og:image:alt" content="Warm, atmospheric Anchorforge Digital forge scene" />
	<meta property="og:site_name" content="Anchorforge Digital" />
	<meta property="og:locale" content="en_US" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Affordable Small Business Websites | Anchorforge Digital" />
	<meta
		name="twitter:description"
		content="Professional websites for small businesses that need a clear, affordable place to start online."
	/>
	<meta name="twitter:image" content="https://anchorforgedigital.com/images/anchorforge-hero.png" />
	<meta name="twitter:image:alt" content="Warm, atmospheric Anchorforge Digital forge scene" />
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
				<article class="guide-answer">
					<h3>Do I need a website for my small business?</h3>
					<p>
						If customers search for your business, a website gives them one reliable place to
						understand what you do and take the next step. Social profiles and directory listings
						are useful, but they are rented spaces: layouts change, information gets buried, and not
						everyone uses the same platform. A simple website can bring together your services,
						hours, location, contact options, photos, and answers to the questions people ask before
						they call.
					</p>
					<p>
						You may not need a large site. For many new salons, contractors, shops, and independent
						professionals, one focused page is enough to look established and make the business easy
						to find. The right first site should match where your business is now, not force you
						into a large monthly tool or a complicated system you will not use.
					</p>
					<p>
						It also gives you an asset you control: a stable address you can put on a sign, business
						card, invoice, email signature, and Google Business Profile. If your business changes,
						the site can change with it without rebuilding your whole online presence.
					</p>
				</article>
				<article class="guide-answer">
					<h3>What should go on my first business website?</h3>
					<p>
						Start with the information a customer needs to decide whether to contact you. Explain
						what you offer in plain language, who you serve, where you work, and how someone can
						reach you. Include current hours, service areas, pricing guidance when useful, an
						address or map link, and one obvious action such as call, email, book, or request a
						quote. A short introduction and a few real photos can also do more for trust than a long
						list of features.
					</p>
					<p>
						Your first website does not need to answer every possible question or launch with ten
						pages. It should be accurate, quick to load, easy to use on a phone, and structured so
						search engines understand your business. From there, you can add service pages, FAQs,
						booking, payments, or other tools when a real business need appears.
					</p>
					<p>
						Before building, gather your logo, business description, service list, hours, contact
						details, photos, service area, and any links customers should use. Clear source material
						makes the build faster and helps the finished site sound like your business.
					</p>
				</article>
				<article class="guide-answer">
					<h3>How does a new website start showing up in Google?</h3>
					<p>
						Google first needs to discover and index your site. A clear page title, useful headings,
						descriptive copy, fast mobile experience, sitemap, and Search Console submission help it
						understand what the site is about. For local businesses, consistent business details and
						a complete Google Business Profile are just as important as the website itself.
					</p>
					<p>
						Ranking takes time and depends on competition, relevance, location, and trust. A new
						site is unlikely to rank immediately for broad terms like “website” or “contractor.” It
						has a better starting chance with specific searches that match the business, such as a
						service and city. Publishing genuinely useful answers, earning relevant local mentions,
						and keeping business information current gives search engines more reasons to show it
						over time.
					</p>
					<p>
						There is no honest shortcut or guaranteed position. The goal is to make each page the
						clearest, most useful answer for a real customer search, then measure impressions and
						clicks in Search Console and improve from there. SEO is an ongoing process, not a switch
						that gets flipped at launch.
					</p>
				</article>
			</div>
		</div>
	</section>
	<Pricing />
	<ContactForm />
</main>
<Footer />

<style>
	.section-container {
		max-width: var(--page-max);
		margin: 0 auto;
		padding: 0 var(--page-padding);
		min-width: 0;
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
		min-width: 0;
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
		min-width: 0;
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
	.guide-answer {
		padding: var(--space-8) 0;
		border-bottom: 1px solid var(--color-border);
	}
	.guide-answer h3 {
		margin-bottom: var(--space-4);
		font-family: var(--font-display);
		font-size: clamp(1.6rem, 3vw, 2.4rem);
		font-style: italic;
		line-height: 1.1;
	}
	.guide-answer p {
		max-width: 760px;
		margin-top: var(--space-4);
		font-size: var(--text-sm);
		font-weight: 300;
		line-height: 1.75;
		color: var(--color-text-secondary);
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
