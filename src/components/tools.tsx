"use client";

import {
  AkarIconsReduxFill,
  Cinema4d,
  CssIcon,
  DeviconPlainMaya,
  HtmlIcon,
  JavascriptIcon,
  LucideIcon,
  MageIllustrator,
  Nextjs,
  ReactIcon,
  ShadcnIcon,
  SimpleIconsBlender,
  SolarFigmaLinear,
  TailwindcssIcon,
  TypescriptIcon,
} from "@/components/jsxIcons";
import React from "react";
import Tooltip from "@/components/ui/tooltip";

interface ToolItem {
  icon: React.ReactNode;
  name: string;
}

const Tools: React.FC = () => {
  const myFrontTools: ToolItem[] = [
     { icon: <HtmlIcon />, name: "HTML" },
     { icon: <CssIcon />, name: "CSS" },
    { icon: <JavascriptIcon />, name: "Javascript" },
     { icon: <TypescriptIcon />, name: "Typescript" },
    { icon: <ReactIcon />, name: "React" },
    
   
    { icon: <Nextjs />, name: "NextJS" },
    { icon: <TailwindcssIcon />, name: "Tailwind CSS" },
    { icon: <AkarIconsReduxFill />, name: "Redux" },
    { icon: <ShadcnIcon />, name: "Shadcn UI" },
    { icon: <LucideIcon />, name: "Lucide icons" },
  ];

  const myUiTools: ToolItem[] = [
    { icon: <SimpleIconsBlender />, name: "Blender" },
    { icon: <Cinema4d />, name: "Cinema 4D" },
    { icon: <DeviconPlainMaya />, name: "Maya" },
    { icon: <MageIllustrator />, name: "Adobe Illustrator" },
    { icon: <SolarFigmaLinear />, name: "Figma" },
  ];

  return (
    <div className="flex flex-col justify-between gap-4 ">
      <div className="font-medium ">Tools & Technologies I use</div>

      <div className="flex flex-col gap-2">
        <p className="text-[14px] ">Front-End</p>
        <div className="flex flex-row justify-start gap-2 items-center flex-wrap">
          {myFrontTools.map((tool, index) => (
            <Tooltip key={index} content={tool.name}>
              <div className="w-14 h-14 bg-neutral-800 flex items-center justify-center rounded-lg">
                {tool.icon}
              </div>
            </Tooltip>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-[14px]">Design</p>
        <div className="flex flex-row justify-start gap-2 items-center flex-wrap">
          {myUiTools.map((tool, index) => (
            <Tooltip key={index} content={tool.name}>
              <div className="w-14 h-14 bg-neutral-800 flex items-center justify-center rounded-lg">
                {tool.icon}
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
