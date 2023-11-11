"use client";

import { navLinks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "./modals";

const Navbar = () => {
	const [showModal, setShowModal] = useState(false);
	const [selectedLink, setSelectedLink] = useState<string>("");
	const [modalTransitionClass, setModalTransitionClass] = useState("");

	const handleLinkHover = (link: string) => {
		setModalTransitionClass("modal-transition");
		setSelectedLink(link);
		setShowModal(true);
	};

	const handleModalLeave = () => {
		setShowModal(false);
		setModalTransitionClass("");
	};

	const [isScrolled, setIsScrolled] = useState(false);
	const [prevScrollPos, setPrevScrollPos] = useState(0);

	const handleScroll = () => {
		const currentScroll = window.pageYOffset;

		// Check the scroll direction
		if (currentScroll > prevScrollPos) {
			setIsScrolled(true); // Scrolling down, hide the header
		} else {
			setIsScrolled(false); // Scrolling up, show the header
		}

		setPrevScrollPos(currentScroll);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [prevScrollPos]);

	return (
		<section className={`header ${isScrolled ? "scrolled-class" : ""}`}>
			{/* Logo */}
			<div className="logo-container">
				<Image src="/logo.svg" alt="logo" width={45} height={45} />
				<Image src="/phenom.svg" alt="logo" width={100} height={45} />
			</div>

			{/* Navigation links */}
			<ul className="nav-links">
				{navLinks.map((link, index) => (
					<li
						key={link}
						onMouseEnter={() => handleLinkHover(link)}
						onMouseLeave={handleModalLeave}
					>
						<Link className="nav-link" href={`/${link}`}>
							{link}
						</Link>
						{index !== navLinks.length - 1 && (
							<svg
								width="1em"
								height="1em"
								viewBox="0 0 12 8"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								role="presentation"
							>
								<path
									d="M1.41.59 6 5.17 10.59.59 12 2 6 8 0 2 1.41.59Z"
									fill="currentColor"
								></path>
							</svg>
						)}
					</li>
				))}
			</ul>

			{showModal && (
				<div className={`modal ${modalTransitionClass}`}>
					<Modal link={selectedLink} />
				</div>
			)}

			{/* Book Demo and Login Button */}
			<div>
				<Link href="#" className="filled-button">
					Book Demo
				</Link>
				<Link href="#" className="login-button">
					Login
				</Link>
			</div>
		</section>
	);
};

export default Navbar;
