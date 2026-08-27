<script>
	const projects = [
		{
			name: 'Book ReViews',
			category: 'E-commerce / Online Bookstore',
			description:
				'A full-stack online bookstore built to extend a physical book store into online sales, with a SvelteKit storefront, Square payments, PocketBase inventory, an Electron admin panel, and an in-store inventory kiosk.',
			capabilities: ['Launch', 'Business Systems', 'Payments', 'Database', 'Desktop'],
			url: 'https://bookreviewsks.vercel.app',
			screenshot: '/images/projects/bookreviews-preview.png',
			label: 'Live Project',
			problem:
				'A physical bookstore needed a storefront that could support online sales and in-store operations.',
			outcome: 'One connected system for shopping, payments, inventory, and the in-store kiosk.',
			featured: true
		}
	];
</script>

<section id="work" class="work" aria-label="Selected work">
	<div class="work-container">
		<header class="work-header">
			<span class="kicker">// Selected Work</span>
			<h2 class="work-title">
				<span class="work-title-serif">Digital Systems</span>
				<span class="work-title-sans">we've engineered</span>
			</h2>
			<p class="work-note">
				Live client projects and custom web systems deployed by Anchorforge Digital.
			</p>
		</header>

		<div class="projects-grid">
			{#each projects as project (project.name)}
				<article
					class="project"
					class:project-featured={project.featured}
					class:project-offset={!project.featured}
				>
					<!-- eslint-disable svelte/no-navigation-without-resolve -->
					<a
						class="project-preview glass-medium"
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`View live site for ${project.name}`}
					>
						<div class="preview-header">
							<div class="window-dots" aria-hidden="true">
								<span class="dot dot-red"></span>
								<span class="dot dot-yellow"></span>
								<span class="dot dot-green"></span>
							</div>

							<span class="preview-url">
								{project.url.replace('https://', '')}
							</span>

							<span class="preview-arrow" aria-hidden="true">↗</span>
						</div>

						<div class="preview-body">
							<img
								class="project-screenshot"
								src={project.screenshot}
								alt={`Screenshot of the ${project.name} website`}
								loading="lazy"
							/>
						</div>
					</a>
					<!-- eslint-enable svelte/no-navigation-without-resolve -->

					<div class="project-meta glass-light">
						<div class="project-meta-top">
							<span class="project-category">
								{project.category}
							</span>

							<span class="project-label live-badge">
								<span class="pulse-dot" aria-hidden="true"></span>
								{project.label}
							</span>
						</div>

						<h3 class="project-name">
							<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
							<a href={project.url} target="_blank" rel="noopener noreferrer">
								{project.name}
								<span class="arrow" aria-hidden="true">↗</span>
							</a>
						</h3>

						<p class="project-desc">
							{project.description}
						</p>

						<div class="project-outcomes">
							<p><strong>Problem</strong> {project.problem}</p>
							<p><strong>Outcome</strong> {project.outcome}</p>
						</div>

						<div class="project-caps">
							{#each project.capabilities as cap (cap)}
								<span class="tag">{cap}</span>
							{/each}
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.work {
		position: relative;
		padding: var(--space-section) 0;
	}

	.work-container {
		max-width: var(--page-max);
		margin: 0 auto;
		padding: 0 var(--page-padding);
	}

	.work-header {
		margin-bottom: var(--space-20);
	}

	.work-title {
		margin-bottom: var(--space-4);
	}

	.work-title-serif {
		display: block;
		font-family: var(--font-display);
		font-size: var(--text-6xl);
		font-weight: 400;
		font-style: italic;
		line-height: 0.9;
		letter-spacing: -0.02em;
	}

	.work-title-sans {
		display: block;
		font-family: var(--font-body);
		font-size: clamp(1.2rem, 3vw, 2rem);
		font-weight: 300;
		line-height: 1.4;
		color: var(--color-text-secondary);
		margin-top: var(--space-2);
	}

	.work-note {
		font-size: var(--text-sm);
		color: var(--color-text-muted);
		font-style: italic;
		max-width: 480px;
	}

	/* Projects Grid — editorial asymmetric */
	.projects-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--space-16);
	}

	.project {
		position: relative;
		border-radius: var(--radius-lg);
		transition: transform var(--duration-slow) var(--ease-out);
	}

	.project:hover {
		transform: translateY(-4px);
	}

	.project-featured {
		width: 100%;
	}

	.project-offset {
		width: 82%;
		margin-left: auto;
	}

	/* Preview Frame as block link */
	.project-preview {
		display: block;
		width: 100%;
		text-decoration: none;
		color: inherit;
		border-radius: var(--radius-lg);
		overflow: hidden;
		border: 1px solid var(--color-border);
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
		transition:
			border-color var(--duration-base) var(--ease-out),
			box-shadow var(--duration-base) var(--ease-out),
			transform var(--duration-base) var(--ease-out);
	}

	.project-preview:hover {
		border-color: rgba(255, 255, 255, 0.25);
		box-shadow:
			0 24px 60px rgba(0, 0, 0, 0.6),
			0 0 30px rgba(200, 117, 51, 0.12);
	}

	.preview-header {
		display: flex;
		align-items: center;
		padding: var(--space-3) var(--space-4);
		background: rgba(0, 0, 0, 0.6);
		border-bottom: 1px solid var(--color-border-subtle);
		gap: var(--space-4);
	}

	.window-dots {
		display: flex;
		gap: 6px;
	}

	.window-dots .dot {
		width: 9px;
		height: 9px;
		border-radius: 50%;
	}

	.dot-red {
		background: rgba(239, 68, 68, 0.6);
	}
	.dot-yellow {
		background: rgba(245, 158, 11, 0.6);
	}
	.dot-green {
		background: rgba(16, 185, 129, 0.6);
	}

	.preview-url {
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--color-text-secondary);
		letter-spacing: 0.02em;
	}

	.preview-arrow {
		margin-left: auto;
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--color-text-muted);
		transition:
			color var(--duration-fast) var(--ease-out),
			transform var(--duration-fast) var(--ease-out);
	}

	.project-preview:hover .preview-arrow {
		color: var(--color-forge-glow);
		transform: translate(2px, -2px);
	}

	.preview-body {
		padding: var(--space-8);
		background: rgba(8, 8, 8, 0.98);
	}

	.project-screenshot {
		width: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		object-position: top center;
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: var(--radius-sm);
	}

	/* Metadata */
	.project-meta {
		margin-top: var(--space-4);
		padding: var(--space-5) var(--space-6);
		border-radius: var(--radius-md);
	}

	.project-meta-top {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		margin-bottom: var(--space-2);
		min-width: 0;
	}

	.project-category {
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--color-text-muted);
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.live-badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-family: var(--font-mono);
		font-size: 0.65rem;
		color: #34d399;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		padding: 3px 8px;
		background: rgba(16, 185, 129, 0.08);
		border: 1px solid rgba(16, 185, 129, 0.25);
		border-radius: 999px;
	}

	.pulse-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #34d399;
		box-shadow: 0 0 8px #34d399;
		animation: live-pulse 2s infinite ease-in-out;
	}

	@keyframes live-pulse {
		0%,
		100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.4;
			transform: scale(0.8);
		}
	}

	.project-name {
		font-family: var(--font-display);
		font-size: var(--text-2xl);
		font-weight: 500;
		font-style: italic;
		margin-bottom: var(--space-2);
	}

	.project-name a {
		color: inherit;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		transition: color var(--duration-fast) var(--ease-out);
	}

	.project-name a:hover {
		color: var(--color-forge-glow);
	}

	.project-name .arrow {
		font-size: 0.8em;
		opacity: 0.6;
		transition:
			transform var(--duration-fast) var(--ease-out),
			opacity var(--duration-fast) var(--ease-out);
	}

	.project-name a:hover .arrow {
		transform: translate(2px, -2px);
		opacity: 1;
	}

	.project-desc {
		font-size: var(--text-sm);
		font-weight: 300;
		color: var(--color-text-secondary);
		line-height: 1.6;
		max-width: 540px;
		margin-bottom: var(--space-4);
	}

	.project-caps {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}

	.project-outcomes {
		display: grid;
		gap: var(--space-2);
		margin-bottom: var(--space-4);
		font-size: var(--text-sm);
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	.project-outcomes strong {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		font-weight: 500;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--color-forge-hot);
	}

	/* Responsive */
	@media (max-width: 900px) {
		.project-offset {
			width: 100%;
			margin-left: 0;
		}
	}

	@media (max-width: 430px) {
		.preview-header {
			gap: var(--space-2);
		}

		.window-dots {
			flex-shrink: 0;
		}

		.project-meta {
			padding: var(--space-4);
		}

		.preview-body {
			padding: var(--space-5);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.pulse-dot {
			animation: none;
		}
	}
</style>
