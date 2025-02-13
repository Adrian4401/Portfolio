import ThemeSwitch from "./ui/ThemeSwitch"
import LanguageSwitch from "./ui/LanguageSwitch"
import { LanguageContext } from "../context/LanguageContext"
import { useContext } from "react"

export default function Header() {
    const { t } = useContext(LanguageContext)

    return (
        <div className="flex w-full h-fit justify-between items-center my-4">
            <div id="navigation" className="flex gap-4 sm:gap-8 lg:gap-12">
                <div id="button" className="btn-nav-checked">{ t.home }</div>
                <div id="button" className="btn-nav">{ t.projects }</div>
                <div id="button" className="btn-nav">{ t.skills }</div>
                <div id="button" className="btn-nav">{ t.links }</div>
            </div>
            <div id="switches" className="flex gap-2 sm:gap-4">
                <ThemeSwitch />
                <LanguageSwitch />
            </div>
        </div>
    )   
}