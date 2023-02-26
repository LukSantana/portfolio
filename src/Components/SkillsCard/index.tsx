interface SkillCardProps {
	title: string;
	imgUrl: string;
	skillLevel: string;
}

const SkillsCard = ({ title, imgUrl, skillLevel }: SkillCardProps) => {
	return (
		<div className="flex flex-col justify-center items-center w-24 gap-4">
			<img src={imgUrl} alt={title} className="w-14"/>
			<h2 className="text-center text-white w-full h-12">{title}</h2>
			<div className="bg-[#4a5158] rounded-lg h-1 w-full">
				<div
					className={`bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800 rounded-lg h-1`}
					style={{ width: `${skillLevel}` }}
				></div>
			</div>
		</div>
	);
};

export default SkillsCard;
