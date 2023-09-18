import { Separator } from "./ui/separator";

interface ProjectItemProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    title: string
    description:string
    link:string
}

export function ProjectItem ({ src, alt, title, description, link }:ProjectItemProps){
    return(
        <div className="flex mx-20 my-10">
            <div className="w">
                <img src={src} alt={alt} className=" w-fixed first-letter:w-[26rem] h-[20rem] mb-3 mr-[4.85rem]" />
                <a href={link} className="font-normal text-2xl hover:text-textColor/70 ">{title}</a>
            </div>  
            <div className="flex ml-5 items-center justify-center">
                <Separator  className="bg-textColor/50" orientation="vertical"></Separator>
                <p className="font-[1.5rem] w-[34rem] h-[10rem] ml-[4.85rem]">{description}</p>
            </div>
        </div>
    )
}