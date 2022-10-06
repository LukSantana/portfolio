interface ProjectCardProps {
    imgUrl: string
    title: string
    description: string
    projectUrl: string
    gitHubUrl: string
}

const ProjectCard = ({ imgUrl, title, description, projectUrl, gitHubUrl }: ProjectCardProps) => {
    return (
        <div className='flex flex-col min-h-full justify-start items-center gap-4 bg-[#212529] text-white relative m-6 rounded-lg'>
            <a className="cursor-pointer" href={projectUrl}>
                <img className='w-full object-contain rounded-t-lg brightness-75' src={imgUrl} alt="project img" />
            </a >
            <div className="flex flex-col items-center justify-center gap-3 px-3">
                <h2 className='font-medium text-2xl'>{title}</h2>
                <span className='break-words text-center px-2'>{description}</span>
                <a className='border-2 rounded-lg px-3 py-1 mb-4 cursor-pointer transition ease-in-out hover:scale-105' href={gitHubUrl}>Github</a>
            </div>
        </div>
    )
}

export default ProjectCard