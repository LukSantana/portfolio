import downloadCurriculum from "../../functions/download"
import Button from "../Button"
import Heading from "../Heading"

const About = () => {
    return (
        <div className='flex justify-center sm:flex-row flex-col items-center gap-24 h-fit py-12' id="about">
            <div className="flex justify-end sm:w-[50%]"><img className='h-80' src="../../assets/img/developer_cartoon.png" alt="Delevoper Cartoon Image" /></div>
            <div className="flex flex-col gap-4 justify-center sm:w-[50%] sm:px-0 px-6">
                <Heading>Sobre Mim</Heading>
                <span className="break-words text-white text-lg  sm:pr-[40%]">
                    Meu nome é Lucas Santana, sou um desenvolvedor fullstack estudando
                    de forma autodidata desde o começo de 2022 e estou sempre disposto
                    a conhecer e aprender novas coisas.
                </span>
                <div className="sm:w-[30%]"><Button text="Meu Currículo" onClick={() => downloadCurriculum} /></div>
            </div>
        </div>
    )
}

export default About