import DarkModeSwitch from "./ui/DarkModeSwitch"
import LanguageSwitch from "./ui/LanguageSwitch"
import { LanguageContext } from "../context/LanguageContext"
import { useContext } from "react"

export default function Header() {
    const { t } = useContext(LanguageContext)

    return (
        <div className="flex w-full h-fit justify-between items-center my-4">
            <div id="navigation" className="flex gap-12">
                <div id="button" className="btn-nav-checked">{ t.home }</div>
                <div id="button" className="btn-nav">{ t.projects }</div>
                <div id="button" className="btn-nav">{ t.skills }</div>
                <div id="button" className="btn-nav">{ t.links }</div>
            </div>
            <div className="flex gap-4">
                <LanguageSwitch />
                <DarkModeSwitch />
            </div>
        </div>
    )   
}