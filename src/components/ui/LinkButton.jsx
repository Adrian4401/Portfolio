export default function LinkButton({ icon: Icon, description, link, download }) 
{
    return (
        <a href={link} download={download}>
            <div className="flex items-center justify-center gap-4 md:gap-8 bg-gradient h-10 w-72 md:h-12 md:w-96 rounded-md">
                <Icon className="text-primary dark:text-dark-primary text-xl md:text-3xl" />
                <p className="text-primary dark:text-dark-primary text-md md:text-xl font-normal">{ description }</p>
            </div>
        </a>
    )
}