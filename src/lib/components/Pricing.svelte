<script>
	const email = 'anchorforgedigital@gmail.com';

	const packages = [
		{
			name: 'Standard',
			price: '$200',
			description:
				'One-page business website with company information, services, hours, contact information, map links, and responsive mobile design.'
		},
		{
			name: 'Standard Plus',
			price: '$275+',
			description:
				'Everything in Standard, plus animations, reactive sections, transitions, and additional visual polish.'
		},
		{
			name: 'Pro',
			price: '$400+',
			description:
				'Up to 3 pages with custom design, responsive layouts, motion, and more advanced interactive sections.'
		},
		{
			name: 'Pro Plus',
			price: '$550+',
			description:
				'3–5 pages with business functionality such as contact forms, email workflows, databases, or basic admin features.'
		},
		{
			name: 'Max',
			price: '$750+',
			description:
				'5+ pages with advanced functionality, backend systems, email automation, payments, integrations, and custom business logic.'
		},
		{
			name: 'Max Plus',
			price: 'Custom',
			description:
				'Larger or more complex projects requiring substantial custom development, ecommerce, advanced dashboards, accounts, complex integrations, or functionality outside the standard packages.'
		}
	];
</script>

<section id="pricing" class="pricing" aria-label="Pricing and rates">
	<div class="pricing-container">
		<header class="pricing-header">
			<span class="kicker">// Rates</span>
			<h2 class="pricing-title">
				<span class="pricing-title-serif">Investment</span>
			</h2>
		</header>

		<div class="pricing-list" role="list">
			{#each packages as pkg, i (pkg.name)}
				<article class="pricing-row glass-interactive" role="listitem">
					<div class="pricing-row-inner">
						<div class="pricing-name-col">
							<span class="pricing-index">{String(i + 1).padStart(2, '0')}</span>
							<span class="pricing-name">{pkg.name}</span>
						</div>
						<div class="pricing-price-col">
							<span class="pricing-price">{pkg.price}</span>
						</div>
						<div class="pricing-desc-col">
							<p class="pricing-desc">{pkg.description}</p>
						</div>
					</div>
				</article>
			{/each}
		</div>

		<div class="pricing-footer">
			<p class="pricing-addl">Additional pages from $50, depending on complexity.</p>
			<p class="pricing-disclaimer">
				Listed prices are starting points. Final pricing depends on content, integrations,
				functionality, and project scope.
			</p>

			<div class="pricing-cta">
				<a class="btn-primary" href={`mailto:${email}?subject=Anchorforge Digital project inquiry`}>
					Start a Project
					<span aria-hidden="true">↗</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.pricing {
		position: relative;
		padding: var(--space-section) 0;
		border-top: 1px solid var(--color-border);
	}

	.pricing-container {
		max-width: var(--page-max);
		margin: 0 auto;
		padding: 0 var(--page-padding);
	}

	.pricing-header {
		margin-bottom: var(--space-20);
	}

	.pricing-title-serif {
		display: block;
		font-family: var(--font-display);
		font-size: var(--text-6xl);
		font-weight: 400;
		font-style: italic;
		line-height: 0.9;
		letter-spacing: -0.02em;
	}

	/* Pricing List */
	.pricing-list {
		border-top: 1px solid var(--color-border);
	}

	.pricing-row {
		border-bottom: 1px solid var(--color-border);
		border-left: none;
		border-right: none;
		border-top: none;
		border-radius: 0;
		background: transparent;
		backdrop-filter: none;
		-webkit-backdrop-filter: none;
		box-shadow: none;
		overflow: visible;
	}

	.pricing-row::before {
		display: none;
	}

	.pricing-row:hover {
		background: rgba(255, 255, 255, 0.02);
		border-color: var(--color-border);
		box-shadow: none;
		transform: none;
	}

	.pricing-row-inner {
		display: grid;
		grid-template-columns: 0.7fr 0.5fr 1.5fr;
		gap: var(--space-8);
		align-items: baseline;
		padding: var(--space-8) 0;
	}

	.pricing-name-col {
		display: flex;
		align-items: baseline;
		gap: var(--space-4);
	}

	.pricing-index {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--color-text-muted);
		letter-spacing: 0.05em;
	}

	.pricing-name {
		font-family: var(--font-body);
		font-size: var(--text-base);
		font-weight: 500;
		letter-spacing: 0.02em;
		color: var(--color-text);
	}

	.pricing-price {
		font-family: var(--font-display);
		font-size: clamp(2rem, 4vw, 3.5rem);
		font-weight: 400;
		font-style: italic;
		line-height: 1;
		letter-spacing: -0.02em;
		color: var(--color-text);
	}

	.pricing-desc {
		font-size: var(--text-sm);
		font-weight: 300;
		line-height: 1.6;
		color: var(--color-text-secondary);
		max-width: 480px;
	}

	/* Footer */
	.pricing-footer {
		margin-top: var(--space-16);
		padding-top: var(--space-8);
	}

	.pricing-addl {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--color-text-muted);
		letter-spacing: 0.03em;
		margin-bottom: var(--space-3);
	}

	.pricing-disclaimer {
		font-size: var(--text-sm);
		font-weight: 300;
		color: var(--color-text-muted);
		max-width: 560px;
		line-height: 1.6;
		margin-bottom: var(--space-12);
	}

	.pricing-cta {
		display: flex;
	}

	/* Responsive */
	@media (max-width: 900px) {
		.pricing-row-inner {
			grid-template-columns: 1fr;
			gap: var(--space-3);
			padding: var(--space-6) 0;
		}

		.pricing-price {
			font-size: clamp(1.8rem, 6vw, 2.5rem);
		}
	}

	@media (max-width: 430px) {
		.pricing-header {
			margin-bottom: var(--space-12);
		}
	}
</style>
