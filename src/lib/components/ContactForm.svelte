<script>
	const email = 'anchorforgedigital@gmail.com';
	const projectTypes = [
		'Standard — $200',
		'Standard Plus — $275',
		'Pro — $450+',
		'Pro Plus — $650+',
		'Max — $950+',
		'Max Plus — Custom'
	];

	let name = $state('');
	let senderEmail = $state('');
	let projectType = $state(projectTypes[0]);
	let message = $state('');
	let submitted = $state(false);

	function submitForm() {
		const subject = encodeURIComponent(`Anchorforge project inquiry — ${projectType}`);
		const body = encodeURIComponent(
			`Name: ${name}\nEmail: ${senderEmail}\nProject type: ${projectType}\n\n${message}`
		);

		window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
		submitted = true;
	}
</script>

<section id="contact" class="contact" aria-labelledby="contact-title">
	<div class="contact-container">
		<div class="contact-copy">
			<span class="kicker">// Start a conversation</span>
			<h2 id="contact-title">Not sure where to <em>begin</em>?</h2>
			<p>
				Tell us what your business does, what you need, and what you’re working with. We’ll help you
				find the right starting point.
			</p>
			<a class="contact-fallback" href={`mailto:${email}`}>Or email {email} directly ↗</a>
		</div>

		<form
			class="contact-form glass-medium"
			onsubmit={(event) => {
				event.preventDefault();
				submitForm();
			}}
		>
			<div class="form-field">
				<label for="name">Name</label>
				<input id="name" bind:value={name} required autocomplete="name" />
			</div>
			<div class="form-field">
				<label for="email">Email</label>
				<input id="email" type="email" bind:value={senderEmail} required autocomplete="email" />
			</div>
			<div class="form-field">
				<label for="project-type">Project type</label>
				<select id="project-type" bind:value={projectType}>
					{#each projectTypes as type (type)}
						<option value={type}>{type}</option>
					{/each}
				</select>
			</div>
			<div class="form-field">
				<label for="message">What are you hoping to build?</label>
				<textarea id="message" bind:value={message} required rows="5"></textarea>
			</div>
			<button class="btn-primary" type="submit"
				>Open project email <span aria-hidden="true">↗</span></button
			>
			{#if submitted}
				<p class="form-note" role="status">
					Your email app should open with the project details ready to send.
				</p>
			{/if}
		</form>
	</div>
</section>

<style>
	.contact {
		padding: var(--space-section) 0;
		border-top: 1px solid var(--color-border);
	}

	.contact-container {
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;
		gap: var(--space-16);
		max-width: var(--page-max);
		margin: 0 auto;
		padding: 0 var(--page-padding);
	}

	.contact-copy h2 {
		margin-bottom: var(--space-5);
		font-size: clamp(2.5rem, 6vw, 5rem);
		letter-spacing: -0.03em;
	}

	.contact-copy h2 em {
		font-family: var(--font-display);
		font-weight: 400;
	}

	.contact-copy p {
		max-width: 420px;
		margin-bottom: var(--space-6);
		font-weight: 300;
		color: var(--color-text-secondary);
	}

	.contact-fallback {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--color-text-muted);
		text-decoration: underline;
		text-underline-offset: 4px;
	}

	.contact-form {
		display: grid;
		gap: var(--space-5);
		padding: var(--space-8);
		border-radius: var(--radius-lg);
	}

	.form-field {
		display: grid;
		gap: var(--space-2);
	}

	.form-field label {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}

	.form-field input,
	.form-field select,
	.form-field textarea {
		width: 100%;
		padding: var(--space-3) var(--space-4);
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-sm);
		background: rgba(0, 0, 0, 0.25);
		color: var(--color-text);
		font: inherit;
		font-size: var(--text-base);
	}

	.form-field textarea {
		resize: vertical;
		min-height: 120px;
	}

	.form-field input:focus,
	.form-field select:focus,
	.form-field textarea:focus {
		border-color: var(--color-forge-glow);
		outline: 2px solid rgba(212, 148, 58, 0.25);
		outline-offset: 1px;
	}

	.form-note {
		font-size: var(--text-xs);
		color: var(--color-forge-hot);
	}

	@media (max-width: 768px) {
		.contact-container {
			grid-template-columns: 1fr;
			gap: var(--space-10);
		}
		.contact-form {
			padding: var(--space-5);
		}
	}
</style>
