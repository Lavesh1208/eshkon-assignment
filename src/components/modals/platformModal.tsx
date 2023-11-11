import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";

const PlatformModal = () => {
	return (
		<section className="platform-modal">
			<div className="platform-card-1">
				<p>Best-fit candidates find and choose you fast.</p>
				<Link href="#">Candidate Experience</Link>
				<Image
					className=""
					src="https://images.ctfassets.net/0d3i1kfsuaq3/67NNty3jLcL8iz8bnAk3MC/c5c89a897a994ff164010e482e92ab7e/CX_nav_2x.png"
					alt="logo"
					width={150}
					height={150}
				/>
				<>
					<svg
						width="354"
						height="149"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						role="presentation"
					>
						<path
							opacity="0.5"
							d="M-156 313.849c204.63-73.827 314.08-45.761 500.206-166.214C531.8 26.247 712.301 115.638 712.301 115.638s207.164 78.413 227.293 314.725"
							stroke="url(#person-line-2_svg__a)"
							stroke-width="166.216"
							stroke-miterlimit="10"
						></path>
						<defs>
							<linearGradient
								id="person-line-2_svg__a"
								x1="995.221"
								y1="120.257"
								x2="-150.199"
								y2="307.837"
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
				</>
			</div>
		</section>
	);
};

export default PlatformModal;
