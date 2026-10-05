const principles = [
	{
		label: 'Direct Communication',
		text: 'You talk to the person building your site. No account managers, no layers, no telephone game.'
	},
	{
		label: 'Clear Scopes',
		text: 'Every project has defined deliverables and timelines before work begins. No ambiguity, no scope creep surprises.'
	},
	{
		label: 'Practical Development',
		text: 'We build what your business actually needs — not what looks impressive in a pitch deck.'
	},
	{
		label: 'Technology That Serves',
		text: "Tools, frameworks, and infrastructure chosen because they solve your problem — not because they're trendy."
	}
];

import styles from './Studio.module.css';

export default function Studio() {
	return (
		<section id="studio" className={styles.studio} aria-label="About the studio">
			<div className={styles.studioContainer}>
				<div className={styles.studioIntro}>
					<span className="kicker">Studio</span>
					<h2 className={styles.studioTitle}>
						<span className={styles.studioTitleSerif}>Small studio pace,</span>
						<span className={styles.studioTitleSerif}>practical business</span>
						<span className={styles.studioTitleSerif}>output</span>
					</h2>
				</div>

				<div className={styles.studioBody}>
					<p className={styles.studioLead}>
						Anchorforge Digital focuses on clean builds, clear scopes, and web systems that match
						how your business actually operates. No unnecessary agency bureaucracy — just focused
						development work that ships.
					</p>

					<div className={styles.studioPrinciples}>
						{principles.map((principle) => (
							<div key={principle.label} className={styles.principle}>
								<span className={styles.principleLabel}>{principle.label}</span>
								<p className={styles.principleText}>{principle.text}</p>
							</div>
						))}
					</div>

					<div className={styles.founderCard}>
						<span className="kicker">Founder</span>
						<p>
							Anchorforge Digital is built by <strong>Caleb Goodnite</strong>, the designer and
							developer behind the work. You talk directly to the person shaping and building
							your site—from the first conversation through launch.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
