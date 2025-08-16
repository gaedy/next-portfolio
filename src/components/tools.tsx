"use client";

import {
    AkarIconsReduxFill,
    AkarIconsTypescriptFill,
    Cinema4d,
    DeviconPlainMaya,
    JavascriptIcon,
    MageIllustrator,
    Nextjs,
    ReactIcon,
    SimpleIconsBlender,
    SolarFigmaLinear,
    TailwindcssIcon,
} from "@/components/jsxIcons";
import React from "react";
import Tooltip from "@/components/ui/tooltip";

interface ToolItem {
    icon: React.ReactNode;
    name: string;
}

const Tools: React.FC = () => {
    const myFrontTools: ToolItem[] = [
        {icon: <ReactIcon/>, name: "React"},
        {icon: <JavascriptIcon/>, name: "Javascript"},
        {icon: <AkarIconsTypescriptFill/>, name: "Typescript"},
        {icon: <Nextjs/>, name: "NextJS"},
        {icon: <TailwindcssIcon/>, name: "Tailwind CSS"},
        {icon: <AkarIconsReduxFill/>, name: "Redux"},
    ];

    const myUiTools: ToolItem[] = [
        {icon: <SimpleIconsBlender/>, name: "Blender"},
        {icon: <Cinema4d/>, name: "Cinema 4D"},
        {icon: <DeviconPlainMaya/>, name: "Maya"},
        {icon: <MageIllustrator/>, name: "Adobe Illustrator"},
        {icon: <SolarFigmaLinear/>, name: "Figma"},
    ];

    return (
        <div className="flex flex-col justify-between py-3">
            <div className="font-medium pt-2">Tools & Technologies I use</div>

            <p className="text-[14px] mt-4 mb-2">Front-End</p>
            <div className="flex flex-row justify-start gap-2 items-center flex-wrap">
                {myFrontTools.map((tool, index) => (
                    <Tooltip key={index} content={tool.name}>
                        <div className="w-14 h-14 bg-neutral-800 flex items-center justify-center rounded-lg">
                            {tool.icon}
                        </div>
                    </Tooltip>
                ))}
            </div>

            <p className="text-[14px] mt-4 mb-2">Design</p>
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
    );
};

export default Tools;
