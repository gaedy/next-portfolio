import React, { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
interface Tool {
  name: string;
  icon: ReactNode;
}

interface ToolSectionProps {
  title: string;
  tools: Tool[];
}

export function ToolSection({ title, tools }: ToolSectionProps) {
  return (
    <article className="flex flex-col gap-2">
      <header>
        <h3 className="text-sm">{title}</h3>
      </header>
      <ul className="flex flex-row justify-start gap-2 items-center flex-wrap">
        {/* {tools.map((tool, index) => (
          <Tooltip key={index}>
            <TooltipTrigger>
              <li className="w-14 p-4.5 h-14 bg-secondary flex items-center justify-center rounded-lg">
                {tool.icon}
              </li>
            </TooltipTrigger>
            <TooltipContent className="font-medium">
              {tool.icon}
            </TooltipContent>
          </Tooltip>
        ))} */}

        {tools.map((tool, index) => (
          <li
            key={index}
            className="flex text-sm rounded-md bg-secondary items-center gap-2 p-2"
          >
            <span className="w-4 h-4 [&>svg]:w-full [&>svg]:h-full">
              {tool.icon}
            </span>

            {tool.name}
          </li>
        ))}
      </ul>
    </article>
  );
}
