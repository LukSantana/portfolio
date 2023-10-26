import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
import { socialMedia } from "../../utils/socialMedia";
import React from "react";

const Contact = () => {
	return (
		<div
			className="flex flex-col justify-center items-center gap-8 min-h-full sm:my-16"
			id="contact"
		>
			<h1 className="text-white text-5xl font-medium">Contact</h1>
			<h2 className="text-white text-2xl">Let's have a talk:</h2>
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center text-white">
				{socialMedia.map((item) => (
					<a
						href={item.url}
						target="_blank"
						className="flex text-xl gap-2 transform ease-in-out hover:scale-105"
						key={item.title}
					>
						{React.createElement(item.icon, { size: 24 })}
						{item.username}
					</a>
				))}
			</div>
			<Link
				to="navbar"
				spy={true}
				smooth={true}
				offset={-100}
				duration={600}
				className="text-white text-center font-medium cursor-pointer border-white rounded-lg border-2 px-5 py-2 bg-stone-900 transition ease-in-out hover:scale-105 hover:bg-stone-800"
			>
				Back to the top
			</Link>
		</div>
	);
};

export default Contact;
