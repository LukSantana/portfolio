import SkillsCard from "../SkillsCard";

import {
	backEndSkillsList,
	frontEndSkillList,
	otherSkillList,
	softSkillList,
} from "../../utils/skillsList";
import React from "react";

const Skills = () => {
	return (
		<div className="flex flex-col h-full items-center py-4 mx-4 gap-8" id="skills">
			<h1 className="text-white text-5xl font-medium">Habilities</h1>
			<h2 className="text-white text-3xl">Hard Skills</h2>
			<h2 className="text-white text-2xl">Front-End</h2>
			<div className="flex flex-wrap flex-row justify-center items-center gap-6">
				{frontEndSkillList.map((skill) => (
					<SkillsCard key={skill.title} title={skill.title} icon={skill.icon} />
				))}
			</div>
			<h2 className="text-white text-2xl">Back-End</h2>
			<div className="flex flex-wrap flex-row justify-center items-center gap-6">
				{backEndSkillsList.map((skill) => (
					<SkillsCard key={skill.title} title={skill.title} icon={skill.icon} />
				))}
			</div>
			<h2 className="text-white text-2xl">Other Technologies</h2>
			<div className="flex flex-wrap flex-row justify-center items-center gap-6">
				{otherSkillList.map((skill) => (
					<SkillsCard key={skill.title} title={skill.title} icon={skill.icon} />
				))}
			</div>
			<h2 className="text-white text-3xl">Soft Skills</h2>
			<div className="flex flex-wrap flex-row justify-center items-center gap-6 max-w-[80%] text-white">
				{softSkillList.map((skill) => {
					return (
						<div
							className="flex flex-wrap flex-col lg:flex-row justify-center items-center gap-1 lg:gap-6"
							key={skill.title}
						>
							{React.createElement(skill.icon)}
							<span className="text-center">{skill.title}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Skills;
