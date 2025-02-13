import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function ProjectCard({ image, title, description, link }) {
    return (
        <div className="flex flex-col w-full h-fit items-center bg-accent dark:bg-dark-accent rounded-md">
            <div className="flex w-full h-fit">
                <div id="photo" className="hidden md:flex bg-cover bg-center min-h-full w-100">
                    <img src={image} alt="StudyNote Website" className="aspect-16/9 rounded-l-md" />
                </div>
                <div id="info" className="flex flex-col flex-10 w-full h-fit gap-4 p-4">
                    <h2 className="headline-text text-left">{title}</h2>
                    <p className="standard-text text-left">{description}</p>
                    <div className="flex items-center min-w-full justify-end opacity-50 hover:opacity-100">
                        <a href={link} className="standard-text cursor-pointer mr-1">More</a>
                        <FontAwesomeIcon icon={faChevronRight} className='text-secondary dark:text-dark-secondary cursor-pointer' />
                        <FontAwesomeIcon icon={faChevronRight} className='text-secondary dark:text-dark-secondary cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}