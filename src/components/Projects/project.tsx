// components/Project.tsx
"use client";
import {ArrowUpRight, ExternalLink, Github} from "lucide-react";

import {
    AkarIconsReduxFill,
    AkarIconsTypescriptFill,
    JavascriptIcon,
    Nextjs,
    ReactIcon,
    TailwindcssIcon,
} from "@/components/jsxIcons";
import Link from "next/link";
import {useRouter} from "next/navigation";



interface ProjectProps {
    project: {
        title: string;
        description: string;
        githubLink?: string;
        liveDemoLink: string;
        isNew?: boolean;
        technologies?: string[];
        customIcon?: React.ElementType;
    };
}

const Project: React.FC<ProjectProps> = ({project}) => {
    const {
        title,
        description,
        githubLink,
        liveDemoLink,
        isNew,
        technologies = [],
        customIcon: CustomIcon,
    } = project;


    return (

            <div
                className="bg-neutral-900 transition-colors duration-300
                hover:bg-neutral-950  border
                border-neutral-800 sm:h-32 h-fit
                  rounded-2xl flex flex-col px-4 p-4 group"
            >

                <div className="flex flex-col justify-between sm:flex-row gap-2 w-full">
                    <div className="flex gap-2 flex-wrap group-hover:underline items-center">
                        <Link href={liveDemoLink} target={"_blank"}>
                            <span>{title}</span>
                        </Link>

                        <ExternalLink size={16} className=" opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>

                    <div className="flex gap-2 justify-between items-center">

                        {githubLink && (
                            <Link href={githubLink} target={"_blank"}

                                  className="opacity-80 group-hover:opacity-100 transition-all hover:scale-105 active:scale-100 duration-300 bg-neutral-800 group-hover:bg-neutral-900
                                hover:bg-neutral-800 text-xs w-fit h-full p-1 px-2 rounded-full flex justify-between items-center cursor-pointer gap-1 ">
                                <Github size={16}/>
                                <p>Github</p>
                            </Link>
                        )}
                        <div
                            className="flex w-fit gap-1 transition-opacity duration-300 group-hover:opacity-100 opacity-80 items-center">
                            {technologies.map((tech, index) => {
                                switch (tech) {
                                    case "javascript":
                                        return <JavascriptIcon key={index}/>;
                                    case "typescript":
                                        return <AkarIconsTypescriptFill key={index}/>;
                                    case "nextjs":
                                        return <Nextjs key={index}/>;
                                    case "react":
                                        return <ReactIcon key={index}/>;
                                    case "tailwind":
                                        return <TailwindcssIcon key={index}/>;
                                    case "redux":
                                        return (
                                            <div key={index} className="scale-75">
                                                <AkarIconsReduxFill/>
                                            </div>
                                        );
                                    default:
                                        return null;
                                }
                            })}
                        </div>
                    </div>
                </div>
                <hr className="opacity-20 my-2.5"/>
                <p className="text-[14px] text-neutral-400">{description}</p>
            </div>



    );
};

export default Project;