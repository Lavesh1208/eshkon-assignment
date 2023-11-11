import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const resources = [
	"All Resources",
	"Blog",
	"Case Studies",
	"Webinars & Product Tours",
	"Events",
	"eBooks & Reports",
	"Community",
];

const phenomStudios = [
	"All Videos",
	"AI Day On Demand",
	"IAMPHENOM On Demand",
	"Talent Experience Live",
	"Smarter Podcast",
];

const featuredReads = [
	{
		text: "State of Candidate Experience: 2023 Benchmarks Report",
		image:
			"https://images.ctfassets.net/0d3i1kfsuaq3/6LgxlOwSyyNpb3WqiWe7pE/9ff73d5ad2bfc49c5679fb0ad3f90d5a/SOCX-image-2.jpg",
	},
	{
		text: "The ROI of Intelligent Talent Experience",
		image:
			"https://images.ctfassets.net/0d3i1kfsuaq3/4ersCVspR2qF4lwu7femd7/00b8191a9734d12064d1c5cf7c1ba51e/PR_Newsroom_feature.jpg",
	},
	{
		text: "Buyer’s Guide: Choosing a Talent Marketplace",
		image:
			"https://images.ctfassets.net/0d3i1kfsuaq3/4XpTJgb3gnBRM4cS58IsIP/0d8b9f5f64611d187fe1689cf240d640/TMBG-Covers.png",
	},
];

const ResourcesModal = () => {
	return (
		<section className="resources-modal">
			{/* Role */}
			<div className="resources-modal-col-1">
				<p>Role</p>
				{resources.map((resource) => (
					<p key={resource}>{resource}</p>
				))}
			</div>

			{/* Industry */}
			<div className="resources-modal-col-2">
				<p>Phenom Studios</p>
				{phenomStudios.map((item) => (
					<p key={item}>{item}</p>
				))}
			</div>

			{/* Partnership */}
			<div className="solution-modal-partnership">
				<p>Partnership</p>
				{featuredReads.map((read, index) => (
					<div key={index} className="featured-reads-card">
						<Image
							className="featured-reads-card-image"
							src={read.image}
							alt={read.text}
							width={200}
							height={150}
						/>

						<div className="featured-reads-card-content">
							<p className="featured-reads-card-text">{read.text}</p>
							<p className="featured-reads-card-read-more">
								Read more{" "}
								<ChevronRight
									className="featured-reads-card-read-more-icon"
									size={17}
								/>
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ResourcesModal;
