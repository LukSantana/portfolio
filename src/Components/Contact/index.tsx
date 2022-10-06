import { BsGithub, BsLinkedin } from "react-icons/bs"
import { FaEnvelope } from "react-icons/fa"
import Heading from "../Heading"

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 min-h-full sm:my-16">
        <Heading>Contato</Heading>
        <h2 className='text-white text-2xl'>Entre em contato comigo:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center text-white">
            <a href="https://github.com/LukSantana" target="_blank" className="flex text-xl gap-2 transform ease-in-out hover:scale-105"><BsGithub size="1.5rem"/>LukSantana</a>
            <a href="https://www.linkedin.com/in/luksantana/" target="_blank" className="flex text-xl gap-2 transform ease-in-out hover:scale-105"><BsLinkedin size="1.5rem"/>LukSantana</a>
            <a href="mailto:lucas.diassantana@gmail.com" target="_blank" className="flex text-xl gap-2 transform ease-in-out hover:scale-105"><FaEnvelope size="1.5rem"/>LukSantana</a>
        </div>
    </div>
  )
}

export default Contact