import ForgeScene from './ForgeScene';

export default function Hero() {
	return (
		<section id="top" className="hero" aria-label="Anchorforge Digital introduction">
			<ForgeScene />

			<div className="hero-content">
				<div className="hero-eyebrow">
					<span className="kicker">Websites that bring in customers</span>
				</div>

				<h1 className="hero-headline">
					<span className="hero-line hero-line-1">Websites</span>
					<span className="hero-line hero-line-1">for businesses</span>
					<span className="hero-line hero-line-2">getting online</span>
				</h1>

				<p className="hero-subtitle">
					Not sure where to start? We build affordable, polished websites for small businesses,
					then help you grow from there when you&rsquo;re ready.
				</p>

				<div className="hero-actions">
					<a className="btn-primary" href="#contact">
						Start a Project
						<span aria-hidden="true">↗</span>
					</a>
					<a className="text-link" href="#starting-points">
						Find your starting point
						<span aria-hidden="true">↓</span>
					</a>
				</div>
			</div>

			<div className="hero-scroll-hint" aria-hidden="true">
				<div className="scroll-line" />
			</div>
		</section>
	);
}
