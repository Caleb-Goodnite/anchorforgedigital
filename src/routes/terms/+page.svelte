<svelte:head>
	<title>Terms of Service | Anchorforge Digital</title>
	<meta name="description" content="Terms of Service for Anchorforge Digital projects." />
	<link rel="canonical" href="https://anchorforgedigital.com/terms" />
</svelte:head>

<main class="legal-page">
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a class="back-link" href="/">← Back to Anchorforge Digital</a>
	<p class="kicker">// Legal</p>
	<h1>Terms of Service</h1>
	<p class="lede">The working terms for projects with Anchorforge Digital.</p>

	<section>
		<h2>Scope and agreement</h2>
		<p>
			Each project begins with an agreed scope, deliverables, timeline, and price. Work outside that
			scope may require a separate estimate. An email confirmation, proposal, or written agreement
			can define the project-specific terms.
		</p>
	</section>
	<section>
		<h2>Payment</h2>
		<p>
			Prices shown on this site are starting points. Final pricing depends on content, integrations,
			functionality, and project scope. Payment timing and any deposit are agreed before work
			begins. Payment processing may be handled by a third-party provider whose terms also apply.
		</p>
	</section>
	<section>
		<h2>Content and launch</h2>
		<p>
			The client is responsible for providing accurate content and having permission to use supplied
			text, images, logos, and other materials. Anchorforge Digital will identify launch
			requirements and make reasonable efforts to deliver the agreed work, but cannot guarantee
			search rankings, traffic, third-party uptime, or results outside the agreed deliverables.
		</p>
	</section>
	<section>
		<h2>Changes and cancellation</h2>
		<p>
			Requests that change the agreed scope may affect price and delivery time. If a project is
			paused or cancelled, completed work and approved third-party costs remain payable. Specific
			project agreements may replace these general terms.
		</p>
	</section>
	<section>
		<h2>Contact</h2>
		<p>
			Questions about these terms can be sent to <a href="mailto:anchorforgedigital@gmail.com"
				>anchorforgedigital@gmail.com</a
			>.
		</p>
		<p class="updated">Last updated: February 2026</p>
	</section>
</main>

<style>
	.legal-page {
		max-width: 780px;
		margin: 0 auto;
		padding: 48px var(--page-padding) 100px;
	}
	.back-link {
		display: inline-block;
		margin-bottom: 80px;
		color: var(--color-text-secondary);
		font-size: var(--text-sm);
	}
	.legal-page h1 {
		margin: 0 0 16px;
		font-family: var(--font-display);
		font-size: clamp(3.5rem, 9vw, 7rem);
		font-style: italic;
		line-height: 0.9;
	}
	.lede {
		margin-bottom: 72px;
		color: var(--color-text-secondary);
		font-size: var(--text-lg);
		font-weight: 300;
	}
	.legal-page section {
		padding: 32px 0;
		border-top: 1px solid var(--color-border);
	}
	.legal-page h2 {
		margin-bottom: 16px;
		font-size: var(--text-xl);
	}
	.legal-page p {
		color: var(--color-text-secondary);
		font-weight: 300;
		line-height: 1.8;
	}
	.legal-page a:not(.back-link) {
		color: var(--color-forge-hot);
		text-decoration: underline;
		text-underline-offset: 3px;
	}
	.updated {
		margin-top: 24px;
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--color-text-muted) !important;
	}
</style>
