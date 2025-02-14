import AboutMe from "../components/AboutMe";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";


export default function Home() {
    return (
        <div className="flex justify-center min-h-screen w-full text-center bg-background dark:bg-dark-background px-2 xl:px-0">
            <div className="w-[1200px] flex flex-col">
                <Header />
                <AboutMe />
                <Projects />
                <Skills />
            </div>
        </div>
    )
}