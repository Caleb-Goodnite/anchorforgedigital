export default function ForgeScene() {
	return (
		<div className="forge-scene" aria-hidden="true">
			{/* Atmospheric gradients */}
			<div className="forge-atmosphere">
				<div className="forge-glow forge-glow-1" />
				<div className="forge-glow forge-glow-2" />
				<div className="forge-glow forge-glow-3" />
			</div>

			{/* Full-bleed forge image — LCP, preloaded in page head */}
			<div className="forge-image-wrap">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					className="forge-image"
					src="/images/anchorforge-hero.webp"
					alt=""
					width={1600}
					height={1067}
					fetchPriority="high"
					decoding="async"
				/>
			</div>

			{/* Subtle particle sparks */}
			<div className="forge-sparks">
				<span className="spark spark-1" />
				<span className="spark spark-2" />
				<span className="spark spark-3" />
				<span className="spark spark-4" />
			</div>
		</div>
	);
}
