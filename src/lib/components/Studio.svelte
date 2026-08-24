<script>
	const principles = [
		{
			label: 'Direct Communication',
			text: 'You talk to the person building your site. No account managers, no layers, no telephone game.'
		},
		{
			label: 'Clear Scopes',
			text: 'Every project has defined deliverables and timelines before work begins. No ambiguity, no scope creep surprises.'
		},
		{
			label: 'Practical Development',
			text: 'We build what your business actually needs — not what looks impressive in a pitch deck.'
		},
		{
			label: 'Technology That Serves',
			text: "Tools, frameworks, and infrastructure chosen because they solve your problem — not because they're trendy."
		}
	];
</script>

<section id="studio" class="studio" aria-label="About the studio">
	<div class="studio-container">
		<div class="studio-intro">
			<span class="kicker">// Studio</span>
			<h2 class="studio-title">
				<span class="studio-title-serif">Small studio pace,</span>
				<span class="studio-title-serif">practical business</span>
				<span class="studio-title-serif">output</span>
			</h2>
		</div>

		<div class="studio-body">
			<p class="studio-lead">
				Anchorforge Digital focuses on clean builds, clear scopes, and web systems that match how
				your business actually operates. No unnecessary agency bureaucracy — just focused
				development work that ships.
			</p>

			<div class="studio-principles">
				{#each principles as principle (principle.label)}
					<div class="principle">
						<span class="principle-label">{principle.label}</span>
						<p class="principle-text">{principle.text}</p>
					</div>
				{/each}
			</div>

			<div class="founder-card">
				<span class="kicker">// Founder</span>
				<p>
					Anchorforge Digital is built by <strong>Caleb Goodnite</strong>, the designer and
					developer behind the work. You talk directly to the person shaping and building your
					site—from the first conversation through launch.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.studio {
		position: relative;
		padding: var(--space-section) 0;
		border-top: 1px solid var(--color-border);
	}

	.studio-container {
		display: grid;
		grid-template-columns: 1fr 1.2fr;
		gap: var(--space-24);
		max-width: var(--page-max);
		margin: 0 auto;
		padding: 0 var(--page-padding);
		align-items: start;
	}

	.studio-title {
		max-width: 11ch;
	}

	.studio-title-serif {
		display: block;
		font-family: var(--font-display);
		font-size: var(--text-5xl);
		font-weight: 400;
		font-style: italic;
		line-height: 0.92;
		letter-spacing: -0.02em;
	}

	.studio-body {
		padding-top: var(--space-16);
	}

	.studio-lead {
		font-size: var(--text-lg);
		font-weight: 300;
		line-height: 1.7;
		color: var(--color-text-secondary);
		max-width: 540px;
		margin-bottom: var(--space-16);
	}

	.studio-principles {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-8);
	}

	.principle {
		padding: var(--space-5);
		border-left: 1px solid var(--color-border-subtle);
	}

	.principle-label {
		display: block;
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		font-weight: 500;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--color-text-muted);
		margin-bottom: var(--space-3);
	}

	.principle-text {
		font-size: var(--text-sm);
		font-weight: 300;
		line-height: 1.65;
		color: var(--color-text-secondary);
	}

	.founder-card {
		margin-top: var(--space-16);
		padding: var(--space-6) 0 0 var(--space-6);
		border-left: 1px solid var(--color-forge-warm);
		border-top: 1px solid var(--color-border-subtle);
	}

	.founder-card .kicker {
		display: block;
		margin-bottom: var(--space-4);
	}

	.founder-card p {
		max-width: 500px;
		font-size: var(--text-md);
		font-weight: 300;
		line-height: 1.7;
		color: var(--color-text-secondary);
	}

	.founder-card strong {
		font-weight: 500;
		color: var(--color-text);
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.studio-container {
			gap: var(--space-16);
		}

		.studio-principles {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 768px) {
		.studio-container {
			grid-template-columns: 1fr;
			gap: var(--space-10);
		}

		.studio-body {
			padding-top: 0;
		}

		.studio-principles {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 430px) {
		.studio-title-serif {
			font-size: clamp(2rem, 10vw, 3.2rem);
		}
	}
</style>
