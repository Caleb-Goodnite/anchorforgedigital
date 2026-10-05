'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const EMAIL = 'anchorforgedigital@gmail.com';

const NAV_LINKS = [
	{ label: 'Work', href: '#work' },
	{ label: 'Studio', href: '#studio' },
	{ label: 'Services', href: '#services' },
	{ label: 'Rates', href: '#pricing' },
	{ label: 'Contact', href: '#contact' }
];

export default function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const dialogRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	// Lock body scroll while the mobile menu is open
	useEffect(() => {
		document.body.style.overflow = mobileOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [mobileOpen]);

	// Focus trap for the mobile menu dialog
	useEffect(() => {
		if (!mobileOpen) return;

		const dialog = dialogRef.current;
		dialog?.focus();

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setMobileOpen(false);
				return;
			}
			if (event.key !== 'Tab' || !dialog) return;

			const focusable = dialog.querySelectorAll<HTMLElement>(
				'a[href], button:not([disabled])'
			);
			if (focusable.length === 0) return;

			const first = focusable[0];
			const last = focusable[focusable.length - 1];

			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		};

		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [mobileOpen]);

	const closeMobile = useCallback(() => setMobileOpen(false), []);

	return (
		<header className="nav-bar" data-scrolled={scrolled || undefined} aria-label="Site header">
			<nav className="nav-inner" aria-label="Main navigation">
				<a className="nav-brand" href="/#top" aria-label="Anchorforge Digital home">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img className="logo-mark" src="/logo.svg" alt="" width={28} height={28} />
					<span className="wordmark">Anchorforge Digital</span>
				</a>

				<div className="nav-links-desktop">
					{NAV_LINKS.map((link) => (
						<a key={link.label} className="nav-link" href={`/${link.href}`}>
							{link.label}
						</a>
					))}
				</div>

				<a className="nav-cta btn-primary" href="/#contact">
					Start a Project
					<span aria-hidden="true">↗</span>
				</a>

				<button
					className="nav-hamburger"
					type="button"
					aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
					aria-expanded={mobileOpen}
					aria-controls="mobile-navigation-menu"
					onClick={() => setMobileOpen((open) => !open)}
				>
					<span className="hamburger-line" data-open={mobileOpen || undefined} />
					<span className="hamburger-line" data-open={mobileOpen || undefined} />
				</button>
			</nav>

			{mobileOpen && (
				<div
					className="mobile-overlay"
					role="presentation"
					onClick={(event) => {
						if (event.target === event.currentTarget) closeMobile();
					}}
				>
					<div
						id="mobile-navigation-menu"
						ref={dialogRef}
						className="mobile-menu glass-heavy"
						role="dialog"
						aria-modal="true"
						aria-labelledby="mobile-navigation-title"
						tabIndex={-1}
					>
						<div className="mobile-menu-header">
							<span id="mobile-navigation-title" className="mobile-brand">
								Anchorforge Digital
							</span>
							<button className="mobile-close-btn" type="button" aria-label="Close menu" onClick={closeMobile}>
								✕
							</button>
						</div>
						<nav className="mobile-nav" aria-label="Mobile navigation">
							{NAV_LINKS.map((link) => (
								<a key={link.label} className="mobile-link" href={`/${link.href}`} onClick={closeMobile}>
									{link.label}
								</a>
							))}
							<a className="mobile-cta btn-primary" href={`mailto:${EMAIL}?subject=Anchorforge Digital project inquiry`} onClick={closeMobile}>
								Start a Project
								<span aria-hidden="true">↗</span>
							</a>
						</nav>
					</div>
				</div>
			)}
		</header>
	);
}
