import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { LanguageContext } from '../../context/LanguageContext';
import { useContext } from 'react';

export default function ProjectCard({ image, title, description, link }) {
    const { t } = useContext(LanguageContext)

    return (
        <div className="flex flex-col w-full md:h-56 items-center bg-accent dark:bg-dark-accent rounded-md">
            <div className="flex w-full h-full">
                <div id="photo" className="hidden md:flex h-full w-1/3">
                    <img src={image} alt={title} className="w-full h-full object-cover rounded-l-md" />
                </div>
                <div id="info" className="flex flex-col md:w-2/3 h-full justify-between p-4">
                    <div className="flex-grow">
                        <h2 className="headline-text text-left">{title}</h2>
                        <p className="standard-text text-left my-2">{description}</p>
                    </div>
                    <div className="flex items-center justify-end opacity-50 hover:opacity-100">
                        <a href={link} className="standard-text cursor-pointer mr-1">{ t.more }</a>
                        <FontAwesomeIcon icon={faChevronRight} className='text-secondary dark:text-dark-secondary cursor-pointer' />
                        <FontAwesomeIcon icon={faChevronRight} className='text-secondary dark:text-dark-secondary cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}