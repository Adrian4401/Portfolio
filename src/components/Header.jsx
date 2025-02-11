import DarkModeSwitch from "./ui/DarkModeSwitch"
import LanguageSwitch from "./ui/LanguageSwitch"

export default function Header() {
    return (
        <div className="flex w-full h-fit justify-between my-4">
            <div id="navigation" className="flex gap-12">
                <div id="button" className="btn-nav-checked">Home</div>
                <div id="button" className="btn-nav">Projects</div>
                <div id="button" className="btn-nav">Skills</div>
                <div id="button" className="btn-nav">Links</div>
            </div>
            <div className="flex gap-4">
                <LanguageSwitch />
                <DarkModeSwitch />
            </div>
        </div>
    )   
}