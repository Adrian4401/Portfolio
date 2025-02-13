import { LanguageContext } from "../context/LanguageContext"
import { useContext } from "react"
import StudyNoteWebsite from '../assets/studynote_website.png'
import ProjectCard from "./ui/ProjectCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


export default function Projects() {
    const { t } = useContext(LanguageContext)

    return (
        <div className="flex flex-col w-full h-fit justify-between items-center mt-32 gap-8">
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="#09c7fb" />
                    <stop offset="10%" stopColor="#11bdff" />
                    <stop offset="20%" stopColor="#41b0ff" />
                    <stop offset="30%" stopColor="#6ca2ff" />
                    <stop offset="40%" stopColor="#9390ff" />
                    <stop offset="50%" stopColor="#b381f3" />
                    <stop offset="60%" stopColor="#ce70e2" />
                    <stop offset="70%" stopColor="#e55dcb" />
                    <stop offset="80%" stopColor="#f450af" />
                    <stop offset="90%" stopColor="#fb4991" />
                    <stop offset="100%" stopColor="#f64f59" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="flex flex-col w-full h-fit items-center gap-4">
                <h1 className="title-text">Projects</h1>
                <p className="standard-text">Below you’ll find some of my projects</p>
            </div>
            <ProjectCard
                image={StudyNoteWebsite}
                title="Alledrogo"
                description="I developed a marketplace web application that connects buyers and sellers, providing a seamless platform for listing, browsing, and purchasing products or services. The project focuses on user-friendly design, smooth navigation, and secure transactions, ensuring a reliable experience for all users."
                link="https://github.com/Adrian4401/AngularMarketplace"
            />
            <ProjectCard
                image={StudyNoteWebsite}
                title="StudyNote"
                description="Mobile application designed to help students organize their studies efficiently. It combines lecture notes with important events like exams and assignments, making it easier to stay on top of deadlines.Users can create and manage notes for each subject and link them to specific events, ensuring quick access to relevant materials when preparing for exams."
                link="https://github.com/Adrian4401/StudyNote"
            />
            <ProjectCard
                image={StudyNoteWebsite}
                title="StudyNote Website"
                description="The StudyNote website provides all the essential information about the StudyNote mobile app, designed to help students organize their studies. Visitors can explore the app’s features, learn how it simplifies studying by combining lecture notes with academic events, and download the app to start using it. The website serves as a central hub for students looking for a smarter way to manage their study materials and exam schedules."
                link="https://studynote-az.netlify.app"
            />
            <div className="flex items-center cursor-pointer">
                <h1 className="title-text mr-2">All projects</h1>
                <FontAwesomeIcon icon={faChevronRight} className="text-2xl icons-gradient" />
                <FontAwesomeIcon icon={faChevronRight} className="text-2xl icons-gradient" />
            </div>
        </div>
    )   
}