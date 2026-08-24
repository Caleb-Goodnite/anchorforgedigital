<svelte:head>
	<title>Privacy Policy | Anchorforge Digital</title>
	<meta name="description" content="Privacy Policy for Anchorforge Digital." />
	<link rel="canonical" href="https://anchorforgedigital.com/privacy" />
</svelte:head>

<main class="legal-page">
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a class="back-link" href="/">← Back to Anchorforge Digital</a>
	<p class="kicker">// Legal</p>
	<h1>Privacy Policy</h1>
	<p class="lede">How Anchorforge Digital handles information shared through this website.</p>

	<section>
		<h2>Information you provide</h2>
		<p>
			When you contact Anchorforge Digital by email or through the project form, you may provide
			your name, email address, project details, and any other information you choose to include. We
			use that information to respond to your inquiry and discuss or deliver requested services.
		</p>
	</section>
	<section>
		<h2>How information is used</h2>
		<p>
			We do not sell your personal information. Information is used to communicate with you, prepare
			project recommendations, provide services, process agreed payments, and maintain business
			records. We may use service providers needed to host a website, send email, process payments,
			or deliver a project. Those providers handle information according to their own policies.
		</p>
	</section>
	<section>
		<h2>Cookies and analytics</h2>
		<p>
			This site does not intentionally use advertising cookies. If analytics, embedded services, or
			other tools are added later, this policy will be updated to describe them and their purpose.
		</p>
	</section>
	<section>
		<h2>Contact</h2>
		<p>
			Questions about privacy can be sent to <a href="mailto:anchorforgedigital@gmail.com"
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
