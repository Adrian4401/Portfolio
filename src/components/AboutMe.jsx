import { LanguageContext } from "../context/LanguageContext"
import { useContext } from "react"
import ProfilePhoto from '../assets/adrian.jpg'


export default function AboutMe() {
    const { t } = useContext(LanguageContext)

    return (
        <div className="flex flex-col-reverse lg:flex-row w-full h-fit justify-between items-center mt-32 gap-20">
            <div id="about_me" className="flex flex-col max-w-screen-sm gap-8">
                <p className="text-secondary dark:text-dark-secondary text-base font-normal text-center lg:text-left">{ t.hey_my_name }</p>
                <h1 className="title-text text-center lg:text-left">Adrian Zakrzewski</h1>
                <h2 className="headline-text text-center lg:text-left">Junior Frontend Developer</h2>
                <p className="description-text" dangerouslySetInnerHTML={{ __html: t.about_me }} />
            </div>
            <div 
                id="photo" 
                className="flex bg-cover bg-center w-64 h-64 md:w-96 md:h-96 rounded-full"
                style={{ backgroundImage: `url(${ProfilePhoto})` }}
            />
        </div>
    )   
}