import { LanguageContext } from "../context/LanguageContext"
import { useContext } from "react"
import TechIcon from '../components/ui/TechIcon'

import { SiReact, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiGit, SiDocker, SiTypescript, SiVuedotjs, SiPhp } from "react-icons/si";
import { Element } from "react-scroll";

import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";



export default function Skills() {
    const { t } = useContext(LanguageContext)

    useEffect(() => {
        Aos.init({ duration: 1200 })
    })

    return (
        <Element name="skills" data-aos="fade-up" data-aos-offset="300" className="flex flex-col w-full h-fit justify-between items-center pt-40 md:pt-56 gap-8">
            <div className="flex flex-col w-full h-fit items-center gap-4">
                <h1 className="title-text">{ t.skills }</h1>
                <p className="hidden md:block standard-text">{ t.skills_desc }</p>
                <p className="block md:hidden standard-text">{ t.skills_desc_short }</p>
            </div>
            <div className="flex w-full flex-wrap justify-center gap-10">
                <TechIcon icon={SiReact} name="React" />
                <TechIcon icon={SiVuedotjs} name="Vue" />
                <TechIcon icon={SiJavascript} name="Javascript" />
                <TechIcon icon={SiTypescript} name="Typescript" />
                <TechIcon icon={SiHtml5} name="HTML" />
                <TechIcon icon={SiPhp} name="PHP" />
                <TechIcon icon={SiCss3} name="CSS" />
                <TechIcon icon={SiTailwindcss} name="TailwindCSS" />
                <TechIcon icon={SiBootstrap} name="Bootstrap" />
                <TechIcon icon={SiGit} name="GitHub" />
                <TechIcon icon={SiDocker} name="Docker" />
            </div>
        </Element>
    )   
}