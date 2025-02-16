import AboutMe from "../components/AboutMe";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Links from "../components/Links";


export default function Home() {
    const year = new Date().getFullYear()

    return (
        <div className="flex justify-center min-h-screen w-full text-center bg-background dark:bg-dark-background px-2 xl:px-0">
            <div className="w-[1200px] flex flex-col">
                <Header />
                <AboutMe />
                <Projects />
                <Skills />
                <Links />
                <p className="text-secondary dark:text-dark-secondary text-sm mt-32">&#169; Adrian Zakrzewski {year}</p>
            </div>
        </div>
    )
}