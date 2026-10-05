import Link from 'next/link';

export default function NotFound() {
	return (
		<section className="notfound" aria-labelledby="notfound-title">
			<div className="notfound-inner">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src="/logo.svg" alt="" width={64} height={64} className="notfound-logo" />
				<p className="kicker">404 — Page not found</p>
				<h1 id="notfound-title">
					This page got <em>lost in the forge</em>.
				</h1>
				<p className="notfound-lede">
					The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
				</p>
				<div className="notfound-actions">
					<Link className="btn-primary" href="/">
						Back to Anchorforge Digital
						<span aria-hidden="true">↗</span>
					</Link>
					<a className="text-link" href="/#contact">
						Contact us <span aria-hidden="true">↓</span>
					</a>
				</div>
			</div>
		</section>
	);
}
