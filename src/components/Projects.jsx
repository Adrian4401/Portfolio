import { LanguageContext } from "../context/LanguageContext"
import { useContext } from "react"
import ProjectCard from "./ui/ProjectCard"

import { FaChevronRight, FaStore, FaMobile, FaDesktop } from "react-icons/fa";

import StudyNoteWebsite from '../assets/studynote_website.png'
import Alledrogo from '../assets/alledrogo.png'
import StudyNote from '../assets/studynote.png'
import { Element } from "react-scroll";

import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";



export default function Projects() {
    const { t } = useContext(LanguageContext)

    useEffect(() => {
        Aos.init({ duration: 1200 })
    })

    return (
        <Element name="projects" data-aos="fade-up" data-aos-offset="300" className="flex flex-col w-full h-fit justify-between items-center pt-40 md:pt-56 gap-6 md:gap-8">
            <div className="flex flex-col w-full h-fit items-center gap-4">
                <h1 className="title-text">{ t.projects }</h1>
                <p className="standard-text">{ t.projects_desc }</p>
            </div>
            <ProjectCard
                image={Alledrogo}
                icon={FaStore}
                title="Alledrogo"
                description={ t.alledrogo_desc }
                link="https://github.com/Adrian4401/AngularMarketplace"
            />
            <ProjectCard
                image={StudyNote}
                icon={FaMobile}
                title="StudyNote"
                description={ t.studynote_desc }
                link="https://github.com/Adrian4401/StudyNote"
            />
            <ProjectCard
                image={StudyNoteWebsite}
                icon={FaDesktop}
                title="StudyNote Website"
                description={ t.studynote_website_desc }
                link="https://studynote-az.netlify.app"
            />
            <svg width="0" height="0" className="absolute invisible">
                <defs>
                    <linearGradient id="chevronGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#09c7fb" />
                        <stop offset="50%" stopColor="#e55dcb" />
                        <stop offset="100%" stopColor="#f64f59" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="flex items-center cursor-pointer">
                <a href="https://github.com/Adrian4401?tab=repositories" className="flex items-center cursor-pointer smooth-hover custom-scale">
                    <h1 className="bg-gradient bg-clip-text text-transparent text-2xl md:text-4xl font-bold md:leading-[1.2] mr-2">{ t.all_projects }</h1>
                    <FaChevronRight className="icons-gradient text-xl md:text-3xl" />
                    <FaChevronRight className="icons-gradient text-xl md:text-3xl" />
                </a>
            </div>
        </Element>
    )   
}