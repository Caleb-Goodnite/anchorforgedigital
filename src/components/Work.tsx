import styles from './Work.module.css';

const project = {
	name: 'Book ReViews',
	category: 'E-commerce / Online Bookstore',
	description:
		'A full-stack online bookstore built to extend a physical book store into online sales, with a web storefront, Square payments, PocketBase inventory, an Electron admin panel, and an in-store inventory kiosk.',
	capabilities: ['Launch', 'Business Systems', 'Payments', 'Database', 'Desktop'],
	url: 'https://bookreviewsks.vercel.app',
	screenshot: '/images/projects/bookreviews-preview.webp',
	label: 'Live Project',
	problem:
		'A physical bookstore needed a storefront that could support online sales and in-store operations.',
	outcome: 'One connected system for shopping, payments, inventory, and the in-store kiosk.'
};

export default function Work() {
	return (
		<section id="work" className={styles.work} aria-label="Selected work">
			<div className={styles.workContainer}>
				<header className={styles.workHeader}>
					<span className="kicker">Selected Work</span>
					<h2 className={styles.workTitle}>
						<span className={styles.workTitleSerif}>Digital Systems</span>
						<span className={styles.workTitleSans}>we&rsquo;ve engineered</span>
					</h2>
					<p className={styles.workNote}>
						A live client project and custom web system deployed by Anchorforge Digital. More
						case studies coming soon.
					</p>
				</header>

				<div className={styles.projectsGrid}>
					<article className={`${styles.project} ${styles.projectFeatured}`}>
						<a
							className={`${styles.projectPreview} glass-medium`}
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`View live site for ${project.name}`}
						>
							<div className={styles.previewHeader}>
								<div className={styles.windowDots} aria-hidden="true">
									<span className={styles.dotRed} />
									<span className={styles.dotYellow} />
									<span className={styles.dotGreen} />
								</div>

								<span className={styles.previewUrl}>
									{project.url.replace('https://', '')}
								</span>

								<span className={styles.previewArrow} aria-hidden="true">
									↗
								</span>
							</div>

							<div className={styles.previewBody}>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									className={styles.projectScreenshot}
									src={project.screenshot}
									alt={`Screenshot of the ${project.name} website`}
									width={1200}
									height={900}
									loading="lazy"
									decoding="async"
								/>
							</div>
						</a>

						<div className={`${styles.projectMeta} glass-light`}>
							<div className={styles.projectMetaTop}>
								<span className={styles.projectCategory}>{project.category}</span>

								<span className={`${styles.liveBadge}`}>
									<span className={styles.pulseDot} aria-hidden="true" />
									{project.label}
								</span>
							</div>

							<h3 className={styles.projectName}>
								<a href={project.url} target="_blank" rel="noopener noreferrer">
									{project.name}
									<span className={styles.arrow} aria-hidden="true">
										↗
									</span>
								</a>
							</h3>

							<p className={styles.projectDesc}>{project.description}</p>

							<div className={styles.projectOutcomes}>
								<p>
									<strong>Problem</strong> {project.problem}
								</p>
								<p>
									<strong>Outcome</strong> {project.outcome}
								</p>
							</div>

							<div className={styles.projectCaps}>
								{project.capabilities.map((cap) => (
									<span key={cap} className="tag">
										{cap}
									</span>
								))}
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}
