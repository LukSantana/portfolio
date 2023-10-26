import { TypeAnimation } from "react-type-animation";

const TerminalEffect = () => {
	return (
		<div className="flex justify-center px-4 -z-50 min-h-[27rem] sm:min-h-[17rem] md:min-h-[3rem] lg:min-h-fit w-1/3 md:w-full text-center">
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
					textAlign: 'center',
				}}
				repeat={Infinity}
			/>
		</div>
	);
};

export default TerminalEffect;
