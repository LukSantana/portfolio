import {
  BsFillPeopleFill,
  BsFillPuzzleFill,
} from "react-icons/bs";
import {
  BiLogoNodejs,
  BiLogoTypescript
} from "react-icons/bi";
import {
  SiAzuredevops,
  SiBootstrap,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiJavascript,
  SiJest,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiPython,
  SiReact,
  SiStyledcomponents,
  SiSwagger,
  SiTailwindcss
} from "react-icons/si"
import {
  GiBrain,
  GiMagnifyingGlass
} from "react-icons/gi"
import { IconType } from "react-icons/lib";
import {
  FaJava,
  FaLanguage,
  FaRocket
} from "react-icons/fa";

interface HardSkillProps {
  title: string,
  icon: IconType
}

interface SoftSkillProps {
  title: string,
  icon: IconType,
}

export const backEndSkillsList: Array<HardSkillProps> = [
  {
    title: "Typescript",
    icon: BiLogoTypescript,
  },
  {
    title: "NodeJS",
    icon: BiLogoNodejs,
  },
  {
    title: "Express",
    icon: SiExpress,
  },
  {
    title: "Jest",
    icon: SiJest,
  },
  {
    title: "Python",
    icon: SiPython,
  },
  {
    title: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    title: "SQL Server",
    icon: SiMicrosoftsqlserver,
  },
  {
    title: "Java",
    icon: FaJava,
  },
];

export const frontEndSkillList: Array<HardSkillProps> = [
  {
    title: "Javascript",
    icon: SiJavascript,
  },

  {
    title: "React",
    icon: SiReact,
  },
  {
    title: "Bootstrap",
    icon: SiBootstrap,
  },
  {
    title: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    title: "Styled Components",
    icon: SiStyledcomponents,
  },
];

export const otherSkillList: Array<HardSkillProps> = [
  {
    title: "Git",
    icon: SiGit,
  },
  {
    title: "Azure DevOps",
    icon: SiAzuredevops,
  },
  {
    title: "GitHub",
    icon: SiGithub,
  },
  {
    title: "Swagger",
    icon: SiSwagger,
  },
  {
    title: "Figma",
    icon: SiFigma,
  },
];

export const softSkillList: Array<SoftSkillProps> = [
  {
    title: "Time Management",
    icon: BsFillPeopleFill,
  },
  {
    title: "Team Work",
    icon: BsFillPeopleFill,
  },
  {
    title: "Growth Mentality",
    icon: FaRocket,
  },
  {
    title: "Leardership Skills",
    icon: BsFillPuzzleFill,
  },
  {
    title: "Emotional Intelligence",
    icon: GiBrain,
  },
  {
    title: "Clear and Assertive Communication",
    icon: GiMagnifyingGlass,
  },
  {
    title: "Advanced English Level",
    icon: FaLanguage,
  }
];