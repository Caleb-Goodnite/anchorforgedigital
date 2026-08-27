<script>
	import logo from '$lib/assets/anchorforge-logo.svg';

	let scrolled = $state(false);
	let mobileOpen = $state(false);

	const email = 'anchorforgedigital@gmail.com';

	const navLinks = [
		{ label: 'Work', href: '#work' },
		{ label: 'Studio', href: '#studio' },
		{ label: 'Services', href: '#services' },
		{ label: 'Rates', href: '#pricing' },
		{ label: 'Contact', href: `mailto:${email}` }
	];

	$effect(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 40;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	// Lock body scroll when mobile menu is open
	$effect(() => {
		if (mobileOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	});

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<svelte:window onkeydown={(event) => event.key === 'Escape' && closeMobile()} />

<header class="nav-wrapper" class:scrolled aria-label="Site header">
	<nav class="nav-inner" aria-label="Main navigation">
		<a class="nav-logo" href="#top" aria-label="Anchorforge Digital home">
			<img class="logo-mark" src={logo} alt="" />
		</a>

		<div class="nav-links-desktop">
			{#each navLinks as link (link.label)}
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a class="nav-link" href={link.href}>{link.label}</a>
			{/each}
		</div>

		<a
			class="nav-cta btn-primary"
			href={`mailto:${email}?subject=Anchorforge Digital project inquiry`}
		>
			Start a Project
			<span aria-hidden="true">↗</span>
		</a>

		<button
			class="nav-hamburger"
			type="button"
			aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={mobileOpen}
			aria-controls="mobile-navigation-menu"
			onclick={() => (mobileOpen = !mobileOpen)}
		>
			<span class="hamburger-line" class:open={mobileOpen}></span>
			<span class="hamburger-line" class:open={mobileOpen}></span>
		</button>
	</nav>
</header>

{#if mobileOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div class="mobile-overlay" role="presentation" onclick={closeMobile}>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div
			id="mobile-navigation-menu"
			class="mobile-menu glass-heavy"
			role="dialog"
			aria-modal="true"
			aria-labelledby="mobile-navigation-title"
			tabindex="-1"
			onclick={(e) => e.stopPropagation()}
		>
			<div class="mobile-menu-header">
				<span id="mobile-navigation-title" class="mobile-brand">Anchorforge Digital</span>
				<button
					class="mobile-close-btn"
					type="button"
					aria-label="Close menu"
					onclick={closeMobile}
				>
					✕
				</button>
			</div>
			<nav class="mobile-nav" aria-label="Mobile navigation">
				{#each navLinks as link (link.label)}
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
					<a class="mobile-link" href={link.href} onclick={closeMobile}>
						{link.label}
					</a>
				{/each}
				<a
					class="mobile-cta btn-primary"
					href={`mailto:${email}?subject=Anchorforge Digital project inquiry`}
					onclick={closeMobile}
				>
					Start a Project
					<span aria-hidden="true">↗</span>
				</a>
			</nav>
		</div>
	</div>
{/if}

<style>
	.nav-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		padding: max(var(--space-4), env(safe-area-inset-top)) var(--page-padding) 0;
		transition: padding var(--duration-base) var(--ease-out);
	}

	.nav-wrapper.scrolled {
		padding-top: var(--space-3);
		padding-bottom: var(--space-3);
	}

	.nav-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-2);
		max-width: var(--page-max);
		margin: 0 auto;
		padding: var(--space-2) var(--space-3) var(--space-2) var(--space-4);
		background: rgba(10, 10, 10, 0.7);
		backdrop-filter: blur(24px);
		-webkit-backdrop-filter: blur(24px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: var(--radius-md);
		box-shadow:
			inset 0 1px 0 rgba(255, 255, 255, 0.06),
			0 8px 32px rgba(0, 0, 0, 0.4);
		transition:
			background-color var(--duration-base) var(--ease-out),
			border-color var(--duration-base) var(--ease-out);
	}

	.nav-wrapper.scrolled .nav-inner {
		background: rgba(10, 10, 10, 0.9);
		border-color: rgba(255, 255, 255, 0.14);
	}

	.nav-logo {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 38px;
		height: 38px;
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.04);
		flex-shrink: 0;
		transition:
			border-color var(--duration-fast) var(--ease-out),
			background-color var(--duration-fast) var(--ease-out);
	}

	.nav-logo:hover {
		border-color: rgba(255, 255, 255, 0.35);
		background: rgba(255, 255, 255, 0.08);
	}

	.logo-mark {
		width: 28px;
		height: 28px;
		object-fit: cover;
		border: 0;
		border-radius: 0;
		background: none;
		flex-shrink: 0;
	}

	.nav-links-desktop {
		display: flex;
		align-items: center;
		gap: var(--space-1);
		margin-left: auto;
		margin-right: var(--space-3);
	}

	.nav-link {
		padding: var(--space-2) var(--space-3);
		font-size: var(--text-sm);
		font-weight: 400;
		color: var(--color-text-secondary);
		border-radius: var(--radius-sm);
		transition:
			color var(--duration-fast) var(--ease-out),
			background-color var(--duration-fast) var(--ease-out);
		white-space: nowrap;
	}

	.nav-link:hover {
		color: var(--color-text);
		background: rgba(255, 255, 255, 0.08);
	}

	.nav-cta {
		padding: var(--space-2) var(--space-4);
		font-size: var(--text-xs);
		letter-spacing: 0.04em;
		border-radius: var(--radius-sm);
		white-space: nowrap;
	}

	.nav-hamburger {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		width: 38px;
		height: 38px;
		padding: var(--space-2);
		margin-left: auto;
	}

	.hamburger-line {
		display: block;
		width: 100%;
		height: 1.5px;
		background: var(--color-text);
		border-radius: 1px;
		transition:
			transform var(--duration-base) var(--ease-out),
			opacity var(--duration-fast) var(--ease-out);
		transform-origin: center;
	}

	.hamburger-line.open:first-child {
		transform: translateY(3.25px) rotate(45deg);
	}

	.hamburger-line.open:last-child {
		transform: translateY(-3.25px) rotate(-45deg);
	}

	/* Mobile Overlay */
	.mobile-overlay {
		position: fixed;
		inset: 0;
		z-index: 101;
		background: rgba(0, 0, 0, 0.85);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		display: flex;
		align-items: flex-start;
		justify-content: center;
		padding: 40px var(--page-padding) var(--space-8);
		overflow-y: auto;
	}

	.mobile-menu {
		width: 100%;
		max-width: 480px;
		border-radius: var(--radius-lg);
		padding: var(--space-6);
		margin-top: var(--space-6);
	}

	.mobile-menu-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: var(--space-4);
		margin-bottom: var(--space-4);
		border-bottom: 1px solid var(--color-border-subtle);
	}

	.mobile-brand {
		font-family: var(--font-display);
		font-size: var(--text-base);
		font-style: italic;
		color: var(--color-text);
	}

	.mobile-close-btn {
		font-size: 1.1rem;
		color: var(--color-text-secondary);
		padding: 4px 8px;
		border-radius: var(--radius-sm);
		transition: color var(--duration-fast) var(--ease-out);
	}

	.mobile-close-btn:hover {
		color: var(--color-text);
	}

	.mobile-nav {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.mobile-link {
		padding: var(--space-3) var(--space-4);
		font-size: var(--text-lg);
		font-weight: 400;
		color: var(--color-text-secondary);
		border-radius: var(--radius-sm);
		transition:
			color var(--duration-fast) var(--ease-out),
			background-color var(--duration-fast) var(--ease-out);
	}

	.mobile-link:hover {
		color: var(--color-text);
		background: rgba(255, 255, 255, 0.08);
	}

	.mobile-cta {
		margin-top: var(--space-4);
		justify-content: center;
		font-size: var(--text-base);
		padding: var(--space-4) var(--space-6);
	}

	/* Responsive */
	@media (max-width: 900px) {
		.nav-links-desktop {
			display: none;
		}

		.nav-hamburger {
			display: flex;
		}

		.nav-cta {
			display: none;
		}
	}
</style>
