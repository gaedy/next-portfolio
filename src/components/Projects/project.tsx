"use client";
import { ArrowUpRight } from "lucide-react";
import {
  SiBehance,
  SiGithub,
  SiJavascript,
  SiLucide,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";

import Link from "next/link";
import { TypescriptIcon } from "../jsxIcons";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "motion/react";

interface ProjectProps {
  project: {
    title: string;
    description: string;
    githubLink?: string;
    behanceLink?: string;
    liveDemoLink: string;
    isNew?: boolean;
    technologies?: string[];
    customIcon?: React.ElementType;
    isBehance?: boolean;
    pic: string;
  };
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const {
    title,
    description,
    githubLink,
    behanceLink = "https://www.behance.net/",
    liveDemoLink,
    isNew,
    pic,
    isBehance,

    technologies = [],
  } = project;

  const iconMap: Record<string, React.ElementType> = {
    javascript: SiJavascript,
    typescript: TypescriptIcon,
    react: SiReact,
    nextjs: SiNextdotjs,
    tailwind: SiTailwindcss,
    shadCn: SiShadcnui,
    lucide: SiLucide,
    redux: SiRedux,
    prisma: SiPrisma,
    postgresql: SiPostgresql,
  };

  return (
    <article
      className="bg-card transition-colors duration-300 hover:bg-popover border border-border 
                rounded-3xl flex flex-col gap-3 p-3 group relative"
    >
      <motion.div
        className="w-full relative  rounded-2xl flex border border-border overflow-hidden"
        initial={{ opacity: 0, y: 4 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src={pic}
          className=" h-40 group-hover:brightness-100 brightness-75 transition-all duration-300 object-cover rounded-[15px] group-hover:scale-103"
          alt={title}
          width={800}
          height={400}
          // quality={90}
        ></Image>{" "}
        <div className="absolute inset-0 rounded-[15px] bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-3 right-3 flex gap-2">
          <div className="flex gap-2 transition-opacity flex-wrap duration-300 group-hover:opacity-100 opacity-80 items-center">
            {technologies.map((tech, index) => {
              const Icon = iconMap[tech];
              return Icon ? <Icon key={index} size={18} /> : null;
            })}
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col px-1 gap-1 mb-1">
        {" "}
        <div className="flex flex-col justify-between gap-2 w-full">
          <header>
            <div className="flex items-center justify-between w-full gap-1.5 font-medium">
              <h2 className="truncate">{title}</h2>
              {/* <ArrowRight
                size={16}
                className="sm:opacity-0 transition-all duration-300  group-hover:text-ring shrink-0 opacity-100  group-hover:opacity-100"
              /> */}
            </div>
          </header>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="flex gap-2 h-fit items-center">
        {githubLink && (
          <Link href={githubLink} target="_blank">
            <Button
              variant="secondary"
              size="sm"
              className="z-10  transition-all duration-300 bg-input
              hover:bg-ring text-sm rounded-full flex justify-between items-center cursor-pointer"
            >
              <SiGithub />
              <p>Github</p>
            </Button>
          </Link>
        )}

        {isBehance && (
          <Link href={behanceLink} target="_blank">
            <Button
              variant="secondary"
              size="sm"
              className="z-10   transition-all duration-300 bg-input
              hover:bg-ring text-sm rounded-full flex justify-between items-center cursor-pointer"
            >
              <SiBehance />
              <p>Behance</p>
            </Button>
          </Link>
        )}

        <Link href={liveDemoLink} target="_blank">
          <Button
            variant="secondary"
            size="sm"
            className="z-10  transition-all duration-300 bg-input
              hover:bg-ring text-sm rounded-full flex justify-between items-center cursor-pointer"
          >
            <p>Live Demo</p>
            <ArrowUpRight />
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default Project;
