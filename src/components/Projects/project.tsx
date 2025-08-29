"use client";
import { ExternalLink } from "lucide-react";
import {
  SiGithub,
  SiJavascript,
  SiLucide,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";

import Link from "next/link";
import { TypescriptIcon } from "../jsxIcons";

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

const Project: React.FC<ProjectProps> = ({ project }) => {
  const {
    title,
    description,
    githubLink,
    liveDemoLink,
    isNew,
    technologies = [],
  } = project;

  const iconMap: Record<string, React.ElementType> = {
    javascript: SiJavascript,
    typescript: TypescriptIcon,
    react: SiReact,
    nextjs: SiNextdotjs,
    tailwind: SiTailwindcss,
    shadcn: SiShadcnui,
    lucide: SiLucide,
    redux: SiRedux,
  };

  return (
    <article
      className="bg-card transition-colors duration-300
                hover:bg-neutral-950  border
                border-border sm:h-32 h-fit
                  rounded-2xl flex flex-col p-4 group relative"
    >
      <Link
        href={liveDemoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 sm:hidden z-10"
      />

      <div className="flex flex-col justify-between sm:flex-row gap-2 w-full">
        <header>
          <Link href={liveDemoLink} target={"_blank"}>
            <div className="flex items-center group-hover:underline gap-1.5 font-medium">
              <h2>{title}</h2>
              <ExternalLink
                size={16}
                className="sm:opacity-0 shrink-0 opacity-100 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </Link>
        </header>

        <div className="flex gap-2 h-fit justify-between items-center">
          {githubLink && (
            <Link
              href={githubLink}
              target={"_blank"}
              className="opacity-80 group-hover:opacity-100  z-10 transition-all hover:scale-105 active:scale-100 duration-300 bg-popover group-hover:bg-neutral-900
                                hover:bg-input text-xs w-fit h-full p-1 px-1.5 rounded-full flex justify-between items-center cursor-pointer gap-1.5 pointer-events-auto"
            >
              <SiGithub size={14} />
              <p>Github</p>
            </Link>
          )}
          <div className="flex gap-1.5 transition-opacity flex-wrap duration-300 group-hover:opacity-100 opacity-80 items-center">
            {technologies.map((tech, index) => {
              const Icon = iconMap[tech];
              return Icon ? <Icon key={index} size={18} /> : null;
            })}
          </div>
        </div>
      </div>
      <hr className="opacity-45 bg-ring my-2.5" />
      <p className="text-sm text-muted-foreground">{description}</p>
    </article>
  );
};

export default Project;
