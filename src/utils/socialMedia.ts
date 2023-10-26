import { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

interface SocialMediaProps {
  title: string,
  icon: IconType,
  url: string
  username: string
}

export const socialMedia: Array<SocialMediaProps> = [
  {
    title: "GitHub",
    icon: FaGithub,
    url: "https://github.com/LukSantana",
    username: "LukSantana"
  },
  {
    title: "Linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/luksantana",
    username: "LukSantana"
  },
  {
    title: "Email",
    icon: FaEnvelope,
    url: "mailto:lucas.diassantana@gmail.com",
    username: "Email"
  }
]