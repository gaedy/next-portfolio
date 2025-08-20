"use client";
import {
  Cinema4d,
  DeviconPlainMaya,
  MageIllustrator,
} from "@/components/jsxIcons";
import React from "react";
import { ToolSection } from "./ToolSection";
import {
  SiBlender,
  SiCss,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiLucide,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

interface ToolItem {
  icon: React.ReactNode;
  name: string;
}

const Tools: React.FC = () => {
  const myFrontTools: ToolItem[] = [
    { icon: <SiHtml5 />, name: "HTML" },
    { icon: <SiCss />, name: "CSS" },
    { icon: <SiJavascript />, name: "Javascript" },
    { icon: <SiTypescript />, name: "Typescript" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "NextJS" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiShadcnui />, name: "Shadcn UI" },
    { icon: <SiLucide />, name: "Lucide icons" },
  ];
  const myUiTools: ToolItem[] = [
    { icon: <SiBlender />, name: "Blender" },
    { icon: <Cinema4d />, name: "Cinema 4D" },
    { icon: <DeviconPlainMaya />, name: "Maya" },
    { icon: <MageIllustrator />, name: "Adobe Illustrator" },
    { icon: <SiFigma />, name: "Figma" },
  ];

  return (
    <section
      id="tools"
      className="flex flex-col gap-4 "
      aria-labelledby="tools-heading"
    >
      <header>
        <h2 className="font-medium">Tools & Technologies I use</h2>
      </header>

      <ToolSection title="Front-End" tools={myFrontTools} />
      <ToolSection title="Design" tools={myUiTools} />
    </section>
  );
};

export default Tools;
