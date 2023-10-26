import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface SocialMediaProps {
  title: string,
  icon: IconType,
  url: string
}

export const socialMedia: Array<SocialMediaProps> = [
  {
    title: "GitHub",
    icon: FaGithub,
    url: "https://github.com/LukSantana"
  },
  {
    title: "Linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/luksantana"
  }
]