import { LanguageContext } from "../context/LanguageContext"
import { useContext } from "react"
import TechIcon from '../components/ui/TechIcon'

import { SiReact, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiGit, SiDocker, SiTypescript, SiVuedotjs } from "react-icons/si";


export default function Skills() {
    const { t } = useContext(LanguageContext)

    return (
        <div className="flex flex-col w-full h-fit justify-between items-center mt-32 gap-8">
            <div className="flex flex-col w-full h-fit items-center gap-4">
                <h1 className="title-text">Skills</h1>
                <p className="standard-text">
                I'm a Junior Frontend Developer with a strong passion for modern web technologies. While my primary focus is frontend development, I have also worked with databases and even developed a backend for one of my projects.
                I stay up to date with the latest industry trends and technologies, ensuring that the tools I use are modern, efficient, and long-term supported. My goal is to build scalable, well-structured applications while continuously expanding my skills in both frontend and backend development.
                </p>
            </div>
            <div className="xl:flex xl:w-full xl:justify-between gap-6 grid grid-cols-5">
                <TechIcon icon={SiReact} name="React" />
                <TechIcon icon={SiVuedotjs} name="Vue" />
                <TechIcon icon={SiJavascript} name="Javascript" />
                <TechIcon icon={SiTypescript} name="Typescript" />
                <TechIcon icon={SiHtml5} name="HTML" />
                <TechIcon icon={SiCss3} name="CSS" />
                <TechIcon icon={SiTailwindcss} name="TailwindCSS" />
                <TechIcon icon={SiBootstrap} name="Bootstrap" />
                <TechIcon icon={SiGit} name="GitHub" />
                <TechIcon icon={SiDocker} name="Docker" />
            </div>
        </div>
    )   
}