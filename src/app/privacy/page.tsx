import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Privacy Policy',
	description: 'Privacy Policy for Anchorforge Digital.',
	alternates: { canonical: '/privacy' }
};

export default function PrivacyPage() {
	return (
		<div className="legal-page">
			<p className="kicker">Legal</p>
			<h1>Privacy Policy</h1>
			<p className="lede">How Anchorforge Digital handles information shared through this website.</p>

			<section>
				<h2>Information you provide</h2>
				<p>
					When you contact Anchorforge Digital by email or through the project form, you may
					provide your name, email address, project details, and any other information you choose
					to include. We use that information to respond to your inquiry and discuss or deliver
					requested services.
				</p>
			</section>
			<section>
				<h2>Contact form email</h2>
				<p>
					The contact form sends the information you submit through our transactional email
					provider over SMTP. Your name, email address, selected project type, and message are
					sent to Anchorforge Digital so we can respond. We retain correspondence only as long as
					reasonably needed for communication, project planning, delivery, and business records.
				</p>
			</section>
			<section>
				<h2>How information is used</h2>
				<p>
					We do not sell your personal information. Information is used to communicate with you,
					prepare project recommendations, provide services, process agreed payments, and
					maintain business records. We may use service providers needed to host a website, send
					email, process payments, or deliver a project. Those providers handle information
					according to their own policies.
				</p>
			</section>
			<section>
				<h2>Cookies and analytics</h2>
				<p>
					This site does not intentionally use advertising cookies. If analytics, embedded
					services, or other tools are added later, this policy will be updated to describe them
					and their purpose.
				</p>
			</section>
			<section>
				<h2>Contact</h2>
				<p>
					Questions about privacy can be sent to{' '}
					<a href="mailto:anchorforgedigital@gmail.com">anchorforgedigital@gmail.com</a>.
				</p>
				<p className="updated">Last updated: October 2026</p>
			</section>
		</div>
	);
}
