import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';

import { LanguageContext } from '../../context/LanguageContext';
import { useContext } from 'react';

import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";



export default function ProjectCard({ icon: Icon, image, title, description, link }) {
    const { t } = useContext(LanguageContext)

    useEffect(() => {
        Aos.init({ duration: 800 })
    })

    return (
        <a href={link}>
            <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">
                <div className="md:flex w-full p-3 md:h-56 items-center bg-accent dark:bg-dark-accent rounded-lg transform transition duration-300 ease-in hover:scale-[1.01] cursor-pointer">
                    <div id="photo" className="h-full md:w-1/3 mb-4 md:mb-0">
                        <img src={image} alt={title} className="w-full h-full object-cover rounded-md" />
                    </div>
                    {/* <div id="icon" className="md:hidden flex h-full w-1/6 items-center justify-center">
                        <Icon className="w-8 h-8 icons-gradient" />
                    </div> */}
                    <div id="info" className="flex flex-col md:w-2/3 w-full h-full justify-between content-between md:p-2 md:pl-6 ">
                        <h2 className="headline-text text-center md:text-left mb-3 md:mb-0">{title}</h2>
                        <p className="standard-text text-left md:my-2">{description}</p>
                        <div className="hidden md:flex w-fit ml-auto mr-0 items-center justify-end cursor-pointer transition-opacity duration-300 opacity-70 hover:opacity-100">
                            <text className="standard-text mr-3">{ t.more }</text>
                            <FontAwesomeIcon icon={faForward} className='text-secondary dark:text-dark-secondary' />
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}