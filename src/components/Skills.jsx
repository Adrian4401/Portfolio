import { LanguageContext } from "../context/LanguageContext"
import { useContext } from "react"
import TechIcon from '../components/ui/TechIcon'

import { SiReact, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiGit, SiDocker, SiTypescript, SiVuedotjs } from "react-icons/si";


export default function Skills() {
    const { t } = useContext(LanguageContext)

    return (
        <div className="flex flex-col w-full h-fit justify-between items-center mt-32 gap-8">
            <div className="flex flex-col w-full h-fit items-center gap-4">
                <h1 className="title-text">{ t.skills }</h1>
                <p className="standard-text">{ t.skills_desc }</p>
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