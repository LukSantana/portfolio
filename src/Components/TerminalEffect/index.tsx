import { TypeAnimation } from "react-type-animation";

const TerminalEffect = () => {
	return (
		<div className="flex w-1/3 -z-50 h-36 text-center">
			<TypeAnimation
				sequence={[
					`Brazilian Developer,
          21 Years Old,
          In love with problem solving,
          Fast Learning, Big Growth Potential,
          Independent`,
					3000,
					"",
					3000,
				]}
				wrapper="p"
				speed={50}
				style={{
					fontSize: "1.5em",
					display: "inline-block",
					color: "#4AF626",
					fontFamily: "VT323",
				}}
				repeat={Infinity}
			/>
		</div>
	);
};

export default TerminalEffect;
