<script>
	const services = [
		{
			num: '01',
			name: 'Launch',
			description:
				'Fast, polished one-page sites for businesses that need to be found, trusted, and contacted. Clean layouts, responsive design, and everything customers need to take the next step.',
			tags: ['Landing Pages', 'Business Info', 'Hours & Contact', 'Maps', 'Responsive Design']
		},
		{
			num: '02',
			name: 'Motion',
			description:
				'Interactive details and motion systems that give simple sites the kind of presence customers remember. Scroll-driven reactions, page transitions, and visual polish that feels intentional.',
			tags: ['Reactive UI', 'Scroll Behavior', 'Transitions', 'Interaction Design', 'Visual Polish']
		},
		{
			num: '03',
			name: 'Business Systems',
			description:
				'Practical backend features for forms, payments, email workflows, dashboards, and custom business logic. Technology that directly supports how your business operates.',
			tags: [
				'Contact Forms',
				'Email Workflows',
				'Payments',
				'Databases',
				'Admin Tools',
				'Business Logic'
			]
		}
	];
</script>

<section id="services" class="services" aria-label="Services and capabilities">
	<div class="services-container">
		<header class="services-header">
			<span class="kicker">// Capabilities</span>
			<h2 class="services-title">
				<span class="services-title-serif">Business sites,</span>
				<span class="services-title-serif">end to end</span>
			</h2>
		</header>

		<div class="services-list">
			{#each services as service, i (service.name)}
				<article class="service-item" id={`service-${service.num}`}>
					<div class="service-num-col">
						<span class="service-num">{service.num}</span>
					</div>

					<div class="service-content">
						<div class="service-head">
							<span class="service-dash">—</span>
							<h3 class="service-name">{service.name}</h3>
						</div>
						<p class="service-desc">{service.description}</p>
						<div class="service-tags">
							{#each service.tags as tag (tag)}
								<span class="tag">{tag}</span>
							{/each}
						</div>
					</div>
				</article>

				{#if i < services.length - 1}
					<hr class="divider" />
				{/if}
			{/each}
		</div>
	</div>
</section>

<style>
	.services {
		position: relative;
		padding: var(--space-section) 0;
	}

	.services-container {
		max-width: var(--page-max);
		margin: 0 auto;
		padding: 0 var(--page-padding);
	}

	.services-header {
		margin-bottom: var(--space-24);
	}

	.services-title {
		max-width: 10ch;
	}

	.services-title-serif {
		display: block;
		font-family: var(--font-display);
		font-size: var(--text-6xl);
		font-weight: 400;
		font-style: italic;
		line-height: 0.9;
		letter-spacing: -0.02em;
	}

	/* Service items */
	.services-list {
		border-top: 1px solid var(--color-border);
	}

	.service-item {
		display: grid;
		grid-template-columns: 80px 1fr;
		gap: var(--space-8);
		padding: var(--space-16) 0;
	}

	.service-num {
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--color-text-muted);
		letter-spacing: 0.05em;
	}

	.service-content {
		max-width: 680px;
	}

	.service-head {
		display: flex;
		align-items: baseline;
		gap: var(--space-4);
		margin-bottom: var(--space-6);
	}

	.service-dash {
		font-family: var(--font-body);
		font-weight: 300;
		color: var(--color-text-muted);
		font-size: var(--text-lg);
	}

	.service-name {
		font-family: var(--font-display);
		font-size: var(--text-5xl);
		font-weight: 400;
		font-style: italic;
		line-height: 1;
		letter-spacing: -0.01em;
	}

	.service-desc {
		font-size: var(--text-md);
		font-weight: 300;
		line-height: 1.7;
		color: var(--color-text-secondary);
		margin-bottom: var(--space-6);
		max-width: 560px;
	}

	.service-tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}

	.divider {
		margin: 0;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.service-item {
			grid-template-columns: 1fr;
			gap: var(--space-4);
			padding: var(--space-10) 0;
		}

		.service-num {
			font-size: var(--text-xs);
		}

		.service-head {
			margin-bottom: var(--space-4);
		}
	}

	@media (max-width: 430px) {
		.services-header {
			margin-bottom: var(--space-16);
		}

		.service-name {
			font-size: clamp(2rem, 10vw, 3rem);
		}
	}
</style>
