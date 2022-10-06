import { BsFillPeopleFill, BsFillPuzzleFill, BsFillChatDotsFill, BsFillClockFill, BsFillSignpost2Fill } from "react-icons/bs";
import { FaRocket } from "react-icons/fa"
import Heading from '../Heading'
import SkillsCard from '../SkillsCard'

const Skills = () => {
    const skillList = [{
        "title": "Javascript",
        "imgUrl": "/assets/icon/js.png",
        "skillLevel": "80%"
    },
    {
        "title": "Typescript",
        "imgUrl": "/assets/icon/typescript.svg",
        "skillLevel": "55%"
    },
    {
        "title": "React",
        "imgUrl": "/assets/icon/react.png",
        "skillLevel": "70%"
    },
    {
        "title": "NodeJS",
        "imgUrl": "/assets/icon/nodejs.png",
        "skillLevel": "70%"
    },
    {
        "title": "Bootstrap",
        "imgUrl": "/assets/icon/bootstrap.png",
        "skillLevel": "60%"
    },
    {
        "title": "Tailwind",
        "imgUrl": "/assets/icon/tailwind.png",
        "skillLevel": "70%"
    },
    {
        "title": "PostgreSQL",
        "imgUrl": "/assets/icon/postgres.png",
        "skillLevel": "50%"
    },
    {
        "title": "Git",
        "imgUrl": "/assets/icon/git.png",
        "skillLevel": "60%"
    }
    ]

    return (
        <div className='flex flex-col h-full items-center py-8 gap-8'>
            <Heading>Habilidades</Heading>
            <h2 className='text-white text-2xl'>Hard Skills</h2>
            <div className="grid grid-cols-2 sm:flex sm:flex-1 sm:flex-wrap sm:justify-center gap-6">
                {skillList.map(skill =>  <SkillsCard key={skill.title} title={skill.title} imgUrl={skill.imgUrl} skillLevel={skill.skillLevel} /> )}
            </div>
            <div className='w-[50%] h-0 border'></div>
            <h2 className='text-white text-2xl'>Soft Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-5 text-white">
                <div className="flex items-center gap-3">
                    <BsFillClockFill size="2rem" />
                    <span>Gerenciamento de Tempo</span>
                </div>
                <div className="flex items-center gap-3">
                    <BsFillPeopleFill size="2rem" />
                    <span>Trabalho em Equipe</span>
                </div>
                <div className="flex items-center gap-3">
                    <BsFillChatDotsFill size="2rem" />
                    <span>Comunicação</span>
                </div>
                <div className="flex items-center gap-3">
                    <BsFillSignpost2Fill size="2rem" />
                    <span>Flexibilidade</span>
                </div>
                <div className="flex items-center gap-3">
                    <FaRocket size="2rem" />
                    <span>Ambição</span>
                </div>
                <div className="flex items-center gap-3">
                    <BsFillPuzzleFill size="2rem" />
                    <span>Liderança</span>
                </div>
            </div>
        </div>
    )
}

export default Skills