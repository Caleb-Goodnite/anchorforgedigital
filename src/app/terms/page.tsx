import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Terms of Service',
	description: 'Terms of Service for Anchorforge Digital projects.',
	alternates: { canonical: '/terms' }
};

export default function TermsPage() {
	return (
		<div className="legal-page">
			<p className="kicker">Legal</p>
			<h1>Terms of Service</h1>
			<p className="lede">The working terms for projects with Anchorforge Digital.</p>

			<section>
				<h2>Scope and agreement</h2>
				<p>
					Each project begins with an agreed scope, deliverables, timeline, and price. Work
					outside that scope may require a separate estimate. An email confirmation, proposal, or
					written agreement can define the project-specific terms.
				</p>
			</section>
			<section>
				<h2>Payment</h2>
				<p>
					Prices shown on this site are starting points. Final pricing depends on content,
					integrations, functionality, and project scope. Payment timing and any deposit are
					agreed before work begins. Payment processing may be handled by a third-party provider
					whose terms also apply.
				</p>
			</section>
			<section>
				<h2>Content and launch</h2>
				<p>
					The client is responsible for providing accurate content and having permission to use
					supplied text, images, logos, and other materials. Anchorforge Digital will identify
					launch requirements and make reasonable efforts to deliver the agreed work, but cannot
					guarantee search rankings, traffic, third-party uptime, or results outside the agreed
					deliverables.
				</p>
			</section>
			<section>
				<h2>Changes and cancellation</h2>
				<p>
					Requests that change the agreed scope may affect price and delivery time. If a project
					is paused or cancelled, completed work and approved third-party costs remain payable.
					Specific project agreements may replace these general terms.
				</p>
			</section>
			<section>
				<h2>Contact</h2>
				<p>
					Questions about these terms can be sent to{' '}
					<a href="mailto:anchorforgedigital@gmail.com">anchorforgedigital@gmail.com</a>.
				</p>
				<p className="updated">Last updated: October 2026</p>
			</section>
		</div>
	);
}
