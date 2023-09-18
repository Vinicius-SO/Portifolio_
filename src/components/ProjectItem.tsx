import { Separator } from "./ui/separator";

interface ProjectItemProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    title: string
    description:string
}

export function ProjectItem ({ src, alt, title, description}:ProjectItemProps){
    return(
        <>
            <div>
                <img src={src} alt={alt} />
                <span>{title}</span>
            </div>  
            <div>
                <Separator></Separator>
                <p>{description}</p>
            </div>
        </>
    )
}