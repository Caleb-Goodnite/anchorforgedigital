import type { Metadata } from 'next';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
	title: 'Affordable Small Business Websites | Anchorforge Digital',
	description:
		'Affordable, professional websites for small businesses. Start with a simple online presence or build something bigger with Anchorforge Digital.',
	alternates: { canonical: '/' },
	openGraph: {
		type: 'website',
		url: 'https://anchorforgedigital.com/',
		title: 'Affordable Small Business Websites | Anchorforge Digital',
		description:
			'Professional websites for small businesses that need a clear, affordable place to start online.',
		images: [
			{
				url: 'https://anchorforgedigital.com/images/anchorforge-hero.webp',
				alt: 'Warm, atmospheric Anchorforge Digital forge scene'
			}
		],
		siteName: 'Anchorforge Digital',
		locale: 'en_US'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Affordable Small Business Websites | Anchorforge Digital',
		description:
			'Professional websites for small businesses that need a clear, affordable place to start online.',
		images: ['https://anchorforgedigital.com/images/anchorforge-hero.webp']
	}
};

const STEPS = [
	['01', 'Understand', 'We learn what your business does and what customers need to find.'],
	['02', 'Shape', 'We recommend the right scope, structure, and visual direction.'],
	['03', 'Build', 'We design and develop your site with clear communication throughout.'],
	['04', 'Launch', 'We test, refine, and put your new digital home to work.']
] as const;

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'ProfessionalService',
	name: 'Anchorforge Digital',
	url: 'https://anchorforgedigital.com/',
	email: 'anchorforgedigital@gmail.com',
	description: 'Affordable, professional websites and practical web systems for small businesses.',
	areaServed: 'Worldwide',
	priceRange: '$$',
	serviceType: ['Small business website design', 'Custom website development', 'Web systems']
};

export default function Home() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			<Hero />
			<section id="starting-points" className={styles.startingPoints} aria-labelledby="starting-points-title">
				<div className={styles.sectionContainer}>
					<div className={styles.sectionIntro}>
						<span className="kicker">Begin here</span>
						<h2 id="starting-points-title">
							A clear place to <em>start</em>.
						</h2>
						<p>
							You don&rsquo;t need to know what platform, pages, or features you need. Tell us
							what your business does, and we&rsquo;ll help shape the right first step.
						</p>
					</div>
					<div className={styles.pathGrid}>
						<article className={`${styles.pathCard} glass-medium`}>
							<span className={styles.pathNumber}>01 / Start small</span>
							<h3>A polished first presence</h3>
							<p>
								Everything customers need to find, trust, and contact you: services, hours,
								location, and a site that works beautifully on mobile.
							</p>
							<strong>From $200</strong>
							<a className="text-link" href="#pricing">
								See what&rsquo;s included <span aria-hidden="true">↓</span>
							</a>
						</article>
						<article className={`${styles.pathCard} ${styles.pathCardFeatured} glass-heavy`}>
							<span className={styles.pathNumber}>02 / Build bigger</span>
							<h3>A web presence built to grow</h3>
							<p>
								Multiple pages, custom interactions, forms, payments, email workflows, and the
								systems that make your business easier to run.
							</p>
							<strong>Custom scope</strong>
							<a className="text-link" href="#services">
								Explore capabilities <span aria-hidden="true">↓</span>
							</a>
						</article>
					</div>
				</div>
			</section>
			<Work />
			<Services />
			<section className={styles.process} aria-labelledby="process-title">
				<div className={styles.sectionContainer}>
					<div className={`${styles.sectionIntro} ${styles.processHeading}`}>
						<span className="kicker">The process</span>
						<h2 id="process-title">
							From &ldquo;where do I start?&rdquo; to <em>launched</em>.
						</h2>
					</div>
					<div className={styles.processGrid}>
						{STEPS.map(([num, title, text]) => (
							<article key={num}>
								<span>{num}</span>
								<h3>{title}</h3>
								<p>{text}</p>
							</article>
						))}
					</div>
				</div>
			</section>
			<section className={styles.resources} aria-labelledby="resources-title">
				<div className={`${styles.sectionContainer} ${styles.resourceLayout}`}>
					<div className={styles.sectionIntro}>
						<span className="kicker">Small Business Web Guide</span>
						<h2 id="resources-title">
							Useful answers before you <em>build</em>.
						</h2>
					</div>
					<div className={styles.resourceList}>
						<article className={styles.guideAnswer}>
							<h3>Do I need a website for my small business?</h3>
							<p>
								If customers search for your business, a website gives them one reliable place to
								understand what you do and take the next step. Social profiles and directory
								listings are useful, but they are rented spaces: layouts change, information gets
								buried, and not everyone uses the same platform. A simple website can bring
								together your services, hours, location, contact options, photos, and answers to
								the questions people ask before they call.
							</p>
							<p>
								You may not need a large site. For many new salons, contractors, shops, and
								independent professionals, one focused page is enough to look established and
								make the business easy to find. The right first site should match where your
								business is now, not force you into a large monthly tool or a complicated system
								you will not use.
							</p>
							<p>
								It also gives you an asset you control: a stable address you can put on a sign,
								business card, invoice, email signature, and Google Business Profile. If your
								business changes, the site can change with it without rebuilding your whole
								online presence.
							</p>
						</article>
						<article className={styles.guideAnswer}>
							<h3>What should go on my first business website?</h3>
							<p>
								Start with the information a customer needs to decide whether to contact you.
								Explain what you offer in plain language, who you serve, where you work, and how
								someone can reach you. Include current hours, service areas, pricing guidance
								when useful, an address or map link, and one obvious action such as call, email,
								book, or request a quote. A short introduction and a few real photos can also do
								more for trust than a long list of features.
							</p>
							<p>
								Your first website does not need to answer every possible question or launch
								with ten pages. It should be accurate, quick to load, easy to use on a phone, and
								structured so search engines understand your business. From there, you can add
								service pages, FAQs, booking, payments, or other tools when a real business need
								appears.
							</p>
							<p>
								Before building, gather your logo, business description, service list, hours,
								contact details, photos, service area, and any links customers should use. Clear
								source material makes the build faster and helps the finished site sound like
								your business.
							</p>
						</article>
						<article className={styles.guideAnswer}>
							<h3>How does a new website start showing up in Google?</h3>
							<p>
								Google first needs to discover and index your site. A clear page title, useful
								headings, descriptive copy, fast mobile experience, sitemap, and Search Console
								submission help it understand what the site is about. For local businesses,
								consistent business details and a complete Google Business Profile are just as
								important as the website itself.
							</p>
							<p>
								Ranking takes time and depends on competition, relevance, location, and trust. A
								new site is unlikely to rank immediately for broad terms like &ldquo;website&rdquo;
								or &ldquo;contractor.&rdquo; It has a better starting chance with specific
								searches that match the business, such as a service and city. Publishing genuinely
								useful answers, earning relevant local mentions, and keeping business information
								current gives search engines more reasons to show it over time.
							</p>
							<p>
								There is no honest shortcut or guaranteed position. The goal is to make each page
								the clearest, most useful answer for a real customer search, then measure
								impressions and clicks in Search Console and improve from there. SEO is an
								ongoing process, not a switch that gets flipped at launch.
							</p>
						</article>
					</div>
				</div>
			</section>
			<Pricing />
			<ContactForm />
		</>
	);
}
