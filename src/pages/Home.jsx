import AboutMe from "../components/AboutMe";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Links from "../components/Links";


export default function Home() {
    return (
        <div className="flex justify-center min-h-screen w-full text-center bg-background dark:bg-dark-background">
            <Navbar />
            <div className="w-[1200px] flex flex-col px-4 xl:px-0">
                <AboutMe />
                <Projects />
                <Skills />
                <Links />
            </div>
        </div>
    )
}