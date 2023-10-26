import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProjectCard from "../ProjectCard";
import { projects } from "../../utils/projects";

const Projects = () => {
	const isMobile = window.innerWidth <= 1024;

	return (
		<div
			className="flex flex-col justify-center items-center gap-12 w-[80%] max-w-full"
			id="projects"
		>
			<h1 className="text-white text-5xl font-medium text-center">
				Personal Projects
			</h1>
			<Carousel
				additionalTransfrom={0}
				arrows
				autoPlaySpeed={3000}
				centerMode={false}
				containerClass="container"
				draggable
				focusOnSelect={false}
				infinite={false}
				keyBoardControl
				minimumTouchDrag={80}
				pauseOnHover
				renderArrowsWhenDisabled={false}
				renderButtonGroupOutside={false}
				renderDotsOutside={false}
				responsive={{
					desktop: {
						breakpoint: {
							max: 3000,
							min: 1024,
						},
						items: 3,
						partialVisibilityGutter: 40,
					},
					mobile: {
						breakpoint: {
							max: 464,
							min: 0,
						},
						items: 1,
						partialVisibilityGutter: 30,
					},
					tablet: {
						breakpoint: {
							max: 1024,
							min: 464,
						},
						items: 2,
						partialVisibilityGutter: 30,
					},
				}}
				rewind={false}
				rewindWithAnimation={false}
				rtl={false}
				shouldResetAutoplay
				showDots={true}
				sliderClass=""
				slidesToSlide={isMobile ? 1 : 2}
				swipeable
			>
				{projects.map((project) => (
					<ProjectCard
						key={project.title}
						imgUrl={project.imgUrl}
						title={project.title}
						description={project.description}
						projectUrl={project.projectUrl}
						responsibilities={project.responsibilities}
						gitHubUrl={project.gitHubUrl}
					/>
				))}
			</Carousel>
		</div>
	);
};

export default Projects;
