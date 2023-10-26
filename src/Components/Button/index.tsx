import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
	text: string;
	onClick(): void;
	icon?: IconType;
}

const Button = ({ text, onClick, icon }: ButtonProps) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className="flex justify-center items-center gap-2 text-white font-medium py-2 px-4 rounded-md bg-clip-padding backdrop-filter border border-gray-100 transition ease-in-out hover:-translate-y-1 "
		>
			{icon && React.createElement(icon)}
			{text}
		</button>
	);
};

export default Button;
