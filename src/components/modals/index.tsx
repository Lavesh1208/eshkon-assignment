import React from "react";
import PlatformModal from "./platformModal";
import SolutionModal from "./solutionModal";
import CompanyModal from "./companyModal";
import ResourcesModal from "./resourcesModal";

const Modal = ({ link }: { link: string }) => {
	switch (link) {
		case "Platform":
			return;
		case "Solutions":
			return <SolutionModal />;
		case "Company":
			return <CompanyModal />;
		case "Resources":
			return <ResourcesModal />;
	}
};

export default Modal;
