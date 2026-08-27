<script>
	import logo from '$lib/assets/anchorforge-logo.svg';

	const email = 'anchorforgedigital@gmail.com';
	const year = new Date().getFullYear();
</script>

<footer class="footer" aria-label="Site footer">
	<div class="footer-container">
		<div class="footer-top">
			<div class="footer-brand">
				<img class="footer-logo" src={logo} alt="" />
				<span class="footer-name">Anchorforge Digital</span>
			</div>

			<nav class="footer-links" aria-label="Footer navigation">
				<a href="#work">Work</a>
				<a href="#studio">Studio</a>
				<a href="#services">Services</a>
				<a href="#pricing">Rates</a>
				<a href={`mailto:${email}`}>Contact</a>
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a href="/privacy">Privacy</a>
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a href="/terms">Terms</a>
			</nav>
		</div>

		<div class="footer-bottom">
			<p class="footer-copy">© {year} Anchorforge Digital</p>
			<a class="footer-email" href={`mailto:${email}`}>{email}</a>
		</div>
	</div>
</footer>

<style>
	.footer {
		position: relative;
		border-top: 1px solid var(--color-border);
		padding: var(--space-16) 0 var(--space-10);
	}

	.footer-container {
		max-width: var(--page-max);
		margin: 0 auto;
		padding: 0 var(--page-padding);
	}

	.footer-top {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: var(--space-16);
	}

	.footer-brand {
		display: flex;
		align-items: center;
		gap: var(--space-4);
	}

	.footer-logo {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 42px;
		height: 42px;
		object-fit: cover;
		border-radius: 50%;
	}

	.footer-name {
		font-family: var(--font-body);
		font-size: var(--text-sm);
		font-weight: 400;
		color: var(--color-text-secondary);
		letter-spacing: 0.02em;
	}

	.footer-links {
		display: flex;
		gap: var(--space-6);
	}

	.footer-links a {
		font-size: var(--text-sm);
		font-weight: 400;
		color: var(--color-text-muted);
		transition: color var(--duration-fast) var(--ease-out);
	}

	.footer-links a:hover {
		color: var(--color-text);
	}

	.footer-bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: var(--space-6);
		border-top: 1px solid var(--color-border-subtle);
	}

	.footer-copy {
		font-size: var(--text-xs);
		color: var(--color-text-muted);
	}

	.footer-email {
		max-width: 100%;
		overflow-wrap: anywhere;
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--color-text-muted);
		letter-spacing: 0.02em;
		transition: color var(--duration-fast) var(--ease-out);
	}

	.footer-email:hover {
		color: var(--color-text);
	}

	/* Responsive */
	@media (max-width: 768px) {
		.footer-top {
			flex-direction: column;
			gap: var(--space-8);
		}

		.footer-links {
			flex-wrap: wrap;
			gap: var(--space-4);
		}

		.footer-bottom {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--space-3);
		}
	}
</style>
