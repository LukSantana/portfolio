import React from "react";
import { IconType } from "react-icons";

interface SkillCardProps {
	title: string;
	icon: IconType;
}

const SkillsCard = ({ title, icon }: SkillCardProps) => {
	return (
		<div className="flex flex-col justify-center items-center w-24 gap-4">
			{React.createElement(icon, { size: 40, color: "#22c55e" })}
			<h2 className="text-center text-white w-full h-12">{title}</h2>
		</div>
	);
};

export default SkillsCard;
