import { Fragment } from 'react';
import styles from './Services.module.css';

const services = [
	{
		num: '01',
		name: 'Launch',
		description:
			'Fast, polished one-page sites for businesses that need to be found, trusted, and contacted. Clean layouts, responsive design, and everything customers need to take the next step.',
		tags: ['Landing Pages', 'Business Info', 'Hours & Contact', 'Maps', 'Responsive Design']
	},
	{
		num: '02',
		name: 'Motion',
		description:
			'Interactive details and motion that give simple sites the kind of presence customers remember. Scroll-driven reactions, page transitions, and visual polish that feels intentional.',
		tags: ['Scroll Behavior', 'Transitions', 'Interaction Design', 'Visual Polish']
	},
	{
		num: '03',
		name: 'Business Systems',
		description:
			'Practical backend features for forms, payments, email workflows, dashboards, and custom business logic. Technology that directly supports how your business operates.',
		tags: ['Contact Forms', 'Email Workflows', 'Payments', 'Databases', 'Admin Tools', 'Business Logic']
	}
];


export default function Services() {
	return (
		<section id="services" className={styles.services} aria-label="Services and capabilities">
			<div className={styles.servicesContainer}>
				<header className={styles.servicesHeader}>
					<span className="kicker">Capabilities</span>
					<h2 className={styles.servicesTitle}>
						<span className={styles.servicesTitleSerif}>Business sites,</span>
						<span className={styles.servicesTitleSerif}>end to end</span>
					</h2>
				</header>

				<div className={styles.servicesList}>
					{services.map((service, i) => (
						<Fragment key={service.name}>
							<article className={styles.serviceItem}>
								<div>
									<span className={styles.serviceNum}>{service.num}</span>
								</div>

								<div className={styles.serviceContent}>
									<div className={styles.serviceHead}>
										<span className={styles.serviceDash}>—</span>
										<h3 className={styles.serviceName}>{service.name}</h3>
									</div>
									<p className={styles.serviceDesc}>{service.description}</p>
									<div className={styles.serviceTags}>
										{service.tags.map((tag) => (
											<span key={tag} className="tag">
												{tag}
											</span>
										))}
									</div>
								</div>
							</article>

							{i < services.length - 1 && <hr className="divider" />}
						</Fragment>
					))}
				</div>
			</div>
		</section>
	);
}
