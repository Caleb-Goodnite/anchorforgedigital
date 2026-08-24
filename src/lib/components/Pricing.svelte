<script>
	const email = 'anchorforgedigital@gmail.com';

	const packages = [
		{
			number: '01',
			name: 'Standard',
			price: '$200',
			description:
				'One-page static reactive business website: company info, services, hours, contact, map links, responsive mobile design.',
			example: 'A new salon or contractor needing a basic presence.',
			turnaround: 'Typical turnaround: 3–5 business days.'
		},
		{
			number: '02',
			name: 'Standard Plus',
			price: '$275',
			description:
				'Everything in Standard, plus animations, reactive sections, transitions, and additional visual polish.',
			example: 'A local service business ready to make a stronger first impression.',
			turnaround: 'Typical turnaround: 5–7 business days.'
		},
		{
			number: '03',
			name: 'Pro',
			price: '$450+',
			description:
				'Up to 3 pages with custom design, responsive layouts, motion, and advanced interactive sections.',
			example:
				'A growing company that needs distinct pages for its offer, story, and contact path.',
			turnaround: 'Typical turnaround: 1–2 weeks.'
		},
		{
			number: '04',
			name: 'Pro Plus',
			price: '$650+',
			description:
				'3–5 pages with business functionality: contact forms, email workflows, databases, or basic admin features.',
			example:
				'A business replacing manual inquiries with forms, email, and a simple admin workflow.',
			turnaround: 'Typical turnaround: 2–3 weeks.'
		},
		{
			number: '05',
			name: 'Max',
			price: '$950+',
			description:
				'5+ pages with advanced functionality, backend systems, email automation, payments, integrations, and custom business logic.',
			example: 'A larger operation that needs its website to support daily business processes.',
			turnaround: 'Typical turnaround: 3–5 weeks.'
		},
		{
			number: '06',
			name: 'Max Plus',
			price: 'Custom, typically starting around $1,500+',
			description:
				'Larger or more complex projects: custom admin panels, desktop applications, in-store kiosks, POS/inventory integrations, or multi-surface systems requiring substantial custom development.',
			example: 'A retailer or organization connecting a public site to custom internal tools.',
			turnaround: 'Typical turnaround: scoped project timeline.'
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
			<p class="pricing-positioning">
				A one-time build shaped around your business—not an ongoing monthly subscription tool.
			</p>
		</header>

		<div class="pricing-list" role="list">
			{#each packages as pkg (pkg.name)}
				<article class="pricing-row glass-interactive" role="listitem">
					<div class="pricing-row-inner">
						<div class="pricing-name-col">
							<span class="pricing-index">{pkg.number}</span>
							<span class="pricing-name">{pkg.name}</span>
						</div>
						<div class="pricing-price-col">
							<span class="pricing-price">{pkg.price}</span>
						</div>
						<div class="pricing-desc-col">
							<p class="pricing-desc">{pkg.description}</p>
							<p class="pricing-example"><strong>Good fit:</strong> {pkg.example}</p>
							<p class="pricing-turnaround">{pkg.turnaround}</p>
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

	.pricing-positioning {
		max-width: 560px;
		margin-top: var(--space-6);
		font-size: var(--text-md);
		font-weight: 300;
		color: var(--color-text-secondary);
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

	.pricing-example,
	.pricing-turnaround {
		margin-top: var(--space-3);
		font-size: var(--text-xs);
		line-height: 1.55;
		color: var(--color-text-muted);
	}

	.pricing-example strong {
		font-weight: 500;
		color: var(--color-text-secondary);
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
