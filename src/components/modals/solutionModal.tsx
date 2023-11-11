const role = [
	"Recruiters",
	"Talent Marketers",
	"Hiring Managers",
	"Talent Acquisition",
	"Talent Management",
	"HRIS",
	"CHRO",
];

const industry = [
	"Healthcare",
	"Technology & IT",
	"Transportation & Logistics",
	"Retail & Hospitality",
	"Manufacturing",
	"Financial Services",
	"Energy & Utilities",
];

const partnership = [
	"Workday",
	"SAP SuccessFactors",
	"Cornerstone OnDemand",
	"ADP",
	"See All Partners",
];

const SolutionModal = () => {
	return (
		<section className="solution-modal">
			{/* Role */}
			<div className="solution-modal-role">
				<p>Role</p>
				{role.map((role) => (
					<p key={role}>{role}</p>
				))}
			</div>

			{/* Industry */}
			<div className="solution-modal-industry">
				<p>Industry</p>
				{industry.map((industry) => (
					<p key={industry}>{industry}</p>
				))}
			</div>

			{/* Partnership */}
			<div className="solution-modal-partnership">
				<p>Partnership</p>
				{partnership.map((partnership) => (
					<p key={partnership}>{partnership}</p>
				))}
			</div>
		</section>
	);
};

export default SolutionModal;
