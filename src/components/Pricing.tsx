import styles from './Pricing.module.css';

const packages = [
	{
		number: '01',
		name: 'Standard',
		price: '$200',
		priceNote: '',
		recommended: false,
		description:
			'One-page static business website: company info, services, hours, contact, map links, responsive mobile design.',
		example: 'A new salon or contractor needing a basic presence.',
		turnaround: 'Typical turnaround: 3–5 business days.'
	},
	{
		number: '02',
		name: 'Standard Plus',
		price: '$275',
		priceNote: '',
		recommended: true,
		description:
			'Everything in Standard, plus animations, reactive sections, transitions, and additional visual polish.',
		example: 'A local service business ready to make a stronger first impression.',
		turnaround: 'Typical turnaround: 5–7 business days.'
	},
	{
		number: '03',
		name: 'Pro',
		price: '$450+',
		priceNote: '',
		recommended: false,
		description:
			'Up to 3 pages with custom design, responsive layouts, motion, and advanced interactive sections.',
		example: 'A growing company that needs distinct pages for its offer, story, and contact path.',
		turnaround: 'Typical turnaround: 1–2 weeks.'
	},
	{
		number: '04',
		name: 'Pro Plus',
		price: '$650+',
		priceNote: '',
		recommended: false,
		description:
			'3–5 pages with business functionality: contact forms, email workflows, databases, or basic admin features.',
		example:
			'A business replacing manual inquiries with forms, email, and a simple admin workflow.',
		turnaround: 'Typical turnaround: 2–3 weeks.'
	},
	{
		number: '05',
		name: 'Max',
		price: '$950+',
		priceNote: '',
		recommended: false,
		description:
			'5+ pages with advanced functionality, backend systems, email automation, payments, integrations, and custom business logic.',
		example: 'A larger operation that needs its website to support daily business processes.',
		turnaround: 'Typical turnaround: 3–5 weeks.'
	},
	{
		number: '06',
		name: 'Max Plus',
		price: 'Custom',
		priceNote: 'Typically starting around $1,500+',
		recommended: false,
		description:
			'Larger or more complex projects: custom admin panels, desktop applications, in-store kiosks, POS/inventory integrations, or multi-surface systems requiring substantial custom development.',
		example: 'A retailer or organization connecting a public site to custom internal tools.',
		turnaround: 'Scoped project timeline, quoted before work begins.'
	}
];

export default function Pricing() {
	return (
		<section id="pricing" className={styles.pricing} aria-label="Pricing and rates">
			<div className={styles.pricingContainer}>
				<header className={styles.pricingHeader}>
					<span className="kicker">Rates</span>
					<h2 className={styles.pricingTitle}>
						<span className={styles.pricingTitleSerif}>Investment</span>
					</h2>
					<p className={styles.pricingPositioning}>
						A one-time build shaped around your business—not an ongoing monthly subscription
						tool.
					</p>
				</header>

				<div className={styles.pricingList} role="list">
					{packages.map((pkg) => (
						<article
							key={pkg.name}
							className={`${styles.pricingRow} glass-interactive`}
							role="listitem"
						>
							<div className={styles.pricingRowInner}>
								<div className={styles.pricingNameCol}>
									<span className={styles.pricingIndex}>{pkg.number}</span>
									<span className={styles.pricingName}>{pkg.name}</span>
									{pkg.recommended && (
										<span className={styles.recommendedBadge}>Recommended</span>
									)}
								</div>
								<div className={styles.pricingPriceCol}>
									<span className={styles.pricingPrice}>{pkg.price}</span>
									{pkg.priceNote && <span className={styles.pricingPriceNote}>{pkg.priceNote}</span>}
								</div>
								<div className={styles.pricingDescCol}>
									<p className={styles.pricingDesc}>{pkg.description}</p>
									<p className={styles.pricingExample}>
										<strong>Good fit:</strong> {pkg.example}
									</p>
									<p className={styles.pricingTurnaround}>{pkg.turnaround}</p>
								</div>
							</div>
						</article>
					))}
				</div>

				<div className={styles.pricingFooter}>
					<p className={styles.pricingAddl}>Additional pages from $50, depending on complexity.</p>
					<p className={styles.pricingDisclaimer}>
						Listed prices are starting points. Final pricing depends on content, integrations,
						functionality, and project scope. Entry-tier pricing covers simple one-page sites;
						kiosks, POS, and inventory systems sit in the Max and Custom tiers above.
					</p>

					<div className={styles.pricingCta}>
						<a className="btn-primary" href="#contact">
							Start a Project
							<span aria-hidden="true">↗</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
