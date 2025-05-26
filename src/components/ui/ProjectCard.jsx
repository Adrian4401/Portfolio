import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

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
        <div className="flex w-full md:h-56 items-center bg-accent dark:bg-dark-accent rounded-md" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">
            <div id="photo" className="hidden md:flex h-full w-1/3">
                <img src={image} alt={title} className="w-full h-full object-cover rounded-l-md" />
            </div>
            <div id="icon" className="md:hidden flex h-full w-1/6 items-center justify-center">
                <Icon className="w-8 h-8 icons-gradient" />
            </div>
            <div id="info" className="flex md:flex-col md:w-2/3 w-full h-full justify-between p-4">
                <h2 className="headline-text text-left">{title}</h2>
                <p className="hidden md:flex standard-text text-left my-2">{description}</p>
                <div className="flex w-fit ml-auto mr-0 items-center justify-end cursor-pointer transition-opacity duration-300 opacity-70 hover:opacity-100">
                    <a href={link} className="standard-text mr-1">{ t.more }</a>
                    <FontAwesomeIcon icon={faChevronRight} className='text-secondary dark:text-dark-secondary' />
                    <FontAwesomeIcon icon={faChevronRight} className='text-secondary dark:text-dark-secondary' />
                </div>
            </div>
        </div>
    )
}