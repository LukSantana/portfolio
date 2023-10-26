import { FaDownload } from "react-icons/fa";
import downloadCurriculum from "../../functions/download";
import Button from "../Button";
import { socialMedia } from "../../utils/socialMedia";
import React from "react";
import TerminalEffect from "../TerminalEffect";

const About = () => {
	return (
		<div className="flex flex-col items-center justify-center pt-12" id="about">
			<div className="flex flex-col justify-center items-center gap-8 px-6">
				<h1 className="flex flex-col gap-2 max-w-[80%] text-white text-4xl font-thin text-center">
					<div className="text-purple-500 font-medium">Lucas Santana</div>
					<div className="text-center">{`{ Full Stack Developer }`}</div>
				</h1>
				<span className="text-white text-center text-lg break-words max-w-full sm:w-1/2">
					I'm a developer with 2 developing years of experience and 1 year of
					professional experience in building and maintaining technologic
					solutions focused on problem solving.
				</span>
				<TerminalEffect />
				<div className="flex justify-center items-center">
					<Button
						text="Download My CV"
						onClick={() =>
							downloadCurriculum(
								"assets/Lucas-Santana-Resume.pdf",
								"Lucas-Santana-Resume.pdf"
							)
						}
						icon={FaDownload}
					/>
				</div>
				<div className="flex items-center justify-center gap-4">
					{socialMedia.map((item) => (
						<a
							href={item.url}
							target="_blank"
							key={item.title}
							className="whitespace-nowrap text-base font-medium text-white hover:text-gray-200 ease-in-out hover:scale-105"
						>
							{React.createElement(item.icon, {
								size: 30,
								color: "#fff",
							})}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default About;
