import {
  Cinema4d,
  DeviconPlainMaya,
  MageIllustrator,
  MotionIcon,
} from "@/components/ui/JSXIcons";
import React from "react";
import {
  SiBetterauth,
  SiBlender,
  SiCss,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiLucide,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "@icons-pack/react-simple-icons";
import { ToolSection } from "./ToolSection";

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
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiShadcnui />, name: "Shadcn" },
    { icon: <MotionIcon />, name: "Motion" },
    { icon: <SiLucide />, name: "Lucide" },
    { icon: <SiPrisma />, name: "Prisma" },
    { icon: <SiPostgresql />, name: "Postgresql" },
    { icon: <SiBetterauth />, name: "Better Auth" },
    { icon: <SiZod />, name: "Zod" },
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
