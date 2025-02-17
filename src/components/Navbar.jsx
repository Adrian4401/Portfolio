import ThemeSwitch from "./ui/ThemeSwitch"
import LanguageSwitch from "./ui/LanguageSwitch"
import { LanguageContext } from "../context/LanguageContext"
import { useContext, useEffect } from "react"
import NavbarButton from "./ui/NavbarButton"
import { scrollSpy } from "react-scroll"


export default function Navbar() {
    const { t } = useContext(LanguageContext)

    useEffect(() => {
        const handleScroll = () => {
            scrollSpy.update();
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                console.log("Scrolled to bottom, forcing update!");
                scrollSpy.update();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 w-full h-fit flex justify-center py-4 bg-background/50 dark:bg-dark-background/50 backdrop-blur-xl shadow-md z-1000">
            <div className="flex max-w-[1200px] w-full justify-between items-center px-2 xl:px-0">
                <div id="navigation" className="flex gap-3 sm:gap-8 lg:gap-12">
                    <NavbarButton element="about_me" text={ t.home } />
                    <NavbarButton element="projects" text={ t.projects } />
                    <NavbarButton element="skills" text={ t.skills } />
                    <NavbarButton element="links" text={ t.links } />
                </div>
                <div id="switches" className="flex gap-2 sm:gap-4">
                    <ThemeSwitch />
                    <LanguageSwitch />
                </div>
            </div>
        </div>
    )   
}