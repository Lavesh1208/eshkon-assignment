import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const role = [
	"HRIS",
	"Talent Management",
	"Talent Marketers",
	"Recruiters",
	"CHRO",
	"Talent Acquisition",
];

const Hero = () => {
	return (
		<section className="hero">
			<div>
				{/* Top Section */}
				<div className="hero-section-top">
					{/* Left Section */}
					<div className="hero-section-left">
						<div>
							{/* Dropdown */}
							<div className="hero-dropdown-closed">
								<Image
									className="hero-dropdown-image"
									src="https://images.ctfassets.net/0d3i1kfsuaq3/1dqQiq5617BHW7taoDykG9/5c4cbce59ebe1e97a075b03cadd3c580/Hiring_managers_1.webp"
									alt="menu"
									width={45}
									height={45}
								/>
								<p>Hiring Managers</p>
								<ChevronDown style={{ marginTop: "3px" }} size={20} />
							</div>
							<div className="hero-dropdown-open">
								<p className="hero-dropdown-open-text">
									Role <ChevronUp size={20} />
								</p>
								{role.map((role, index) => (
									<div key={index}>
										<Image
											className="hero-dropdown-open-image"
											src="https://images.ctfassets.net/0d3i1kfsuaq3/1dqQiq5617BHW7taoDykG9/5c4cbce59ebe1e97a075b03cadd3c580/Hiring_managers_1.webp"
											alt="menu"
											width={45}
											height={45}
										/>
										<p>{role}</p>
									</div>
								))}
							</div>
							<div className="hero-section-content">
								<p>
									Phenom for{" "}
									<span className="highlighted-text">Hiring Managers</span>
								</p>
							</div>
						</div>
						<div>
							<p className="call-to-action-info">
								Build high performance teams that scale — with insights.
							</p>
							<Link href="#" className="filled-button">
								Book a Demo
							</Link>
						</div>
					</div>

					{/* Right Section for Image*/}
					<div className="hero-section-right">
						<div className="hero-section-image" />
					</div>
				</div>

				{/*Bottom Section */}
				<div className="hero-section-bottom">
					<p>
						You need <span className="highlighted-text">top talent</span> to
						join your team – fast. But bottlenecks are slowing things down.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
