import { LanguageContext } from "../context/LanguageContext"
import { useContext } from "react"
import LinkButton from "./ui/LinkButton";

import { IoDocumentAttachSharp } from "react-icons/io5";
import { SiLinkedin, SiGit } from "react-icons/si";
import { Element } from "react-scroll";

import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";



export default function Links() {
    const { lang, t } = useContext(LanguageContext)
    const year = new Date().getFullYear()

    useEffect(() => {
        Aos.init({ duration: 1200 })
    })

    const setCV = () => {
        if(lang === 'pl') {
            return '/assets/cv_pl.pdf'
        } else {
            return '/assets/cv_en.pdf'
        }
    }

    return (
        <Element name="links" data-aos="fade-up" data-aos-offset="300" className="flex flex-col w-full h-fit justify-between items-center pt-40 md:pt-56 gap-8">
            <h1 className="title-text">{ t.links }</h1>
            <div className="flex flex-col w-full items-center gap-6">
                <LinkButton
                    icon={SiLinkedin}
                    description={ t.linkedin }
                    link="https://www.linkedin.com/in/adrian-zakrzewski-7b2a13269/"
                />
                <LinkButton
                    icon={SiGit}
                    description={ t.github }
                    link="https://github.com/Adrian4401"
                />
                <LinkButton
                    icon={IoDocumentAttachSharp}
                    description={ t.cv }
                    link={setCV()}
                    download
                />
            </div>
            <p className="text-secondary dark:text-dark-secondary text-xl md:text-3xl font-normal mt-20">{ t.thank_for_visiting }</p>
            <p className="text-secondary dark:text-dark-secondary text-sm mt-80 md:mt-52">&#169; Adrian Zakrzewski {year}</p>
        </Element>
    )   
}