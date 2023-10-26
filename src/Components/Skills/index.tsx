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
		<div className="flex flex-col h-full items-center py-4 gap-8" id="skills">
			<h1 className="text-white text-5xl">Habilities</h1>
			<h2 className="text-white text-3xl">Hard Skills</h2>
			<h2 className="text-white text-2xl">Front-End</h2>
			<div className="grid grid-cols-2 sm:flex sm:flex-1 sm:flex-wrap sm:justify-center gap-6">
				{frontEndSkillList.map((skill) => (
					<SkillsCard key={skill.title} title={skill.title} icon={skill.icon} />
				))}
			</div>
			<h2 className="text-white text-2xl">Back-End</h2>
			<div className="grid grid-cols-2 sm:flex sm:flex-1 sm:flex-wrap sm:justify-center gap-6">
				{backEndSkillsList.map((skill) => (
					<SkillsCard key={skill.title} title={skill.title} icon={skill.icon} />
				))}
			</div>
			<h2 className="text-white text-2xl">Other Technologies</h2>
			<div className="grid grid-cols-2 sm:flex sm:flex-1 sm:flex-wrap sm:justify-center gap-6">
				{otherSkillList.map((skill) => (
					<SkillsCard key={skill.title} title={skill.title} icon={skill.icon} />
				))}
			</div>
			<h2 className="text-white text-3xl">Soft Skills</h2>
			<div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center items-center gap-5 text-white">
				{softSkillList.map((skill) => {
					return (
						<div className="flex items-center gap-3" key={skill.title}>
							{React.createElement(skill.icon)}
							<span>{skill.title}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Skills;
