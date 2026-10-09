import type { Metadata } from 'next';
import { JetBrains_Mono, Playfair_Display, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const display = Playfair_Display({
	subsets: ['latin'],
	style: 'italic',
	weight: ['400', '500'],
	variable: '--font-display',
	display: 'swap'
});

const body = Space_Grotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500'],
	variable: '--font-body',
	display: 'swap'
});

const mono = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-mono',
	display: 'swap'
});

export const metadata: Metadata = {
	metadataBase: new URL('https://anchorforgedigital.com'),
	title: {
		default: 'Affordable Small Business Websites | Anchorforge Digital',
		template: '%s | Anchorforge Digital'
	},
	description:
		'Affordable, professional websites for small businesses. Start with a simple online presence or build something bigger with Anchorforge Digital.',
	icons: { icon: '/favicon.svg' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
			<body>
				<a href="#main" className="skip-link">
					Skip to main content
				</a>
				<Nav />
				<main id="main">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
