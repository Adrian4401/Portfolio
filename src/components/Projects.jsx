import { LanguageContext } from "../context/LanguageContext"
import { useContext } from "react"
import ProjectCard from "./ui/ProjectCard"

import { FaChevronRight } from "react-icons/fa";

import StudyNoteWebsite from '../assets/studynote_website.png'
import Alledrogo from '../assets/alledrogo.png'
import StudyNote from '../assets/studynote.png'



export default function Projects() {
    const { t } = useContext(LanguageContext)

    return (
        <div className="flex flex-col w-full h-fit justify-between items-center mt-32 gap-8">
            <div className="flex flex-col w-full h-fit items-center gap-4">
                <h1 className="title-text">{ t.projects }</h1>
                <p className="standard-text">{ t.projects_desc }</p>
            </div>
            <ProjectCard
                image={Alledrogo}
                title="Alledrogo"
                description={ t.alledrogo_desc }
                link="https://github.com/Adrian4401/AngularMarketplace"
            />
            <ProjectCard
                image={StudyNote}
                title="StudyNote"
                description={ t.studynote_desc }
                link="https://github.com/Adrian4401/StudyNote"
            />
            <ProjectCard
                image={StudyNoteWebsite}
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
                <a href="https://github.com/Adrian4401?tab=repositories" className="flex items-center cursor-pointer">
                    <h1 className="title-text mr-2">{ t.all_projects }</h1>
                    <FaChevronRight className="icons-gradient text-3xl md:text-5xl" />
                    <FaChevronRight className="icons-gradient text-3xl md:text-5xl" />
                </a>
            </div>
        </div>
    )   
}