import styles from './Footer.module.css';

const EMAIL = 'anchorforgedigital@gmail.com';

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className={styles.footer} aria-label="Site footer">
			<div className={styles.footerContainer}>
				<div className={styles.footerTop}>
					<div className={styles.footerBrand}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img className={styles.footerLogo} src="/logo.svg" alt="" width={42} height={42} />
						<span className={styles.footerName}>Anchorforge Digital</span>
					</div>

					<nav className={styles.footerLinks} aria-label="Footer navigation">
						<a href="/#work">Work</a>
						<a href="/#studio">Studio</a>
						<a href="/#services">Services</a>
						<a href="/#pricing">Rates</a>
						<a href={`mailto:${EMAIL}`}>Contact</a>
						<a href="/privacy">Privacy</a>
						<a href="/terms">Terms</a>
					</nav>
				</div>

				<div className={styles.footerBottom}>
					<p className={styles.footerCopy}>© {year} Anchorforge Digital</p>
					<a className={styles.footerEmail} href={`mailto:${EMAIL}`}>
						{EMAIL}
					</a>
				</div>
			</div>
		</footer>
	);
}
