import Link from "next/link";
import React from "react";

const links = [
	"Customers",
	"About",
	"Newsroom",
	"Careers",
	"Security & Compliance",
	"Contact Us",
	"Customer Hub",
	"Customer Success",
	"Training & Certification",
	"Global Customer Care",
	"Partners",
];

const CompanyModal = () => {
	return (
		<section className="company-modal">
			{/* Left Section Links */}
			<div className="company-modal-links">
				{links.map((link) => (
					<p key={link}>{link}</p>
				))}
			</div>

			{/* Right Section Card */}
			<div className="company-modal-card">
				<svg
					width="329"
					height="325"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					role="presentation"
				>
					<path
						opacity="0.5"
						d="M145.193-609.061c-45.352 106.558-28.891 319.204 21.672 390.77C320.238-1.206 603.59-212.192 822.857-58.968c0 0 204.163-8.362 13.624 181.26-76.332 75.936-58.045 118.933-161.392 93.045-117.636-29.471-232.7-82.885-350.973-54.399-102.971 24.789-219.735 150.245-245.607 265.051"
						stroke="url(#navCTA-gradient-line-1_svg__a)"
						stroke-width="159.801"
						stroke-miterlimit="10"
					></path>
					<defs>
						<linearGradient
							id="navCTA-gradient-line-1_svg__a"
							x1="19.5"
							y1="463"
							x2="499"
							y2="-76.5"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset="0.14" stop-color="#FF8045"></stop>
							<stop offset="0.16" stop-color="#F5905E"></stop>
							<stop offset="0.22" stop-color="#E5AB87"></stop>
							<stop offset="0.27" stop-color="#D7C1AA"></stop>
							<stop offset="0.33" stop-color="#CCD2C4"></stop>
							<stop offset="0.39" stop-color="#C5DED7"></stop>
							<stop offset="0.45" stop-color="#C0E6E2"></stop>
							<stop offset="0.51" stop-color="#BFE8E6"></stop>
							<stop offset="0.76" stop-color="#CDC4F5"></stop>
							<stop offset="1" stop-color="#FFBD45"></stop>
						</linearGradient>
					</defs>
				</svg>
				<svg
					width="452"
					height="325"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					role="presentation"
				>
					<path
						d="M-73.033-499.623C-58.126-384.78 63.832-209.807 143.69-173.737 385.925-64.324 523.267-389.81 789.943-368.844c0 0 171.764-110.678 103.607 149.353-27.32 104.148 10.236 131.945-91.976 162.005-116.346 34.21-242.609 46.478-330.132 130.975-76.204 73.555-113.282 240.882-77.402 352.964"
						stroke="url(#navCTA-gradient-line-2_svg__a)"
						stroke-width="159.801"
						stroke-miterlimit="10"
					></path>
					<defs>
						<linearGradient
							id="navCTA-gradient-line-2_svg__a"
							x1="361.927"
							y1="488.265"
							x2="501.872"
							y2="-219.829"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset="0.14" stop-color="#FF8045"></stop>
							<stop offset="0.16" stop-color="#F5905E"></stop>
							<stop offset="0.22" stop-color="#E5AB87"></stop>
							<stop offset="0.27" stop-color="#D7C1AA"></stop>
							<stop offset="0.33" stop-color="#CCD2C4"></stop>
							<stop offset="0.39" stop-color="#C5DED7"></stop>
							<stop offset="0.45" stop-color="#C0E6E2"></stop>
							<stop offset="0.51" stop-color="#BFE8E6"></stop>
							<stop offset="0.76" stop-color="#CDC4F5"></stop>
							<stop offset="1" stop-color="#FFBD45"></stop>
						</linearGradient>
					</defs>
				</svg>
				<div className="company-modal-card-content">
					<p>
						We&apos;re <span className="highlighted-text">Growing Fast!</span>{" "}
						Check Out Our Open Jobs
					</p>
				</div>
				<div className="company-modal-cta">
					<Link href="#" className="filled-button">
						Phenom Careers
					</Link>
				</div>
			</div>
		</section>
	);
};

export default CompanyModal;
