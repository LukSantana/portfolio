interface ProjectCardProps {
	imgUrl: string;
	title: string;
	description: string;
	projectUrl: string;
	gitHubUrl: string;
}

const ProjectCard = ({
	imgUrl,
	title,
	description,
	projectUrl,
	gitHubUrl,
}: ProjectCardProps) => {
	return (
		<div className="flex flex-col justify-start items-center gap-4 backdrop-blur-sm bg-white/5 text-white relative m-6 rounded-lg lg:min-h-[36rem] ease-in-out hover:-translate-y-1">
			<a className="cursor-pointer" href={projectUrl} target="_blank">
				{
					<img
						className="w-full object-contain rounded-t-lg brightness-75"
						src={imgUrl}
						alt="project img"
					/>
				}
			</a>
			<div className="flex flex-col items-center justify-evenly min-h-[14rem] px-3">
				<h2 className="font-medium text-2xl">{title}</h2>
				<span className="break-words text-center px-2">{description}</span>
				<a
					className="border-2 rounded-lg px-3 py-1 mb-4 cursor-pointer transition ease-in-out hover:scale-105"
					href={gitHubUrl}
					target="_blank"
				>
					Github
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
