import { ReactNode } from "react";
import Tooltip from "../ui/tooltip";

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
        {tools.map((tool, index) => (
          <Tooltip key={index} content={tool.name}>
            <li className="w-14 p-4.5 h-14 bg-popover flex items-center justify-center rounded-lg">
              {tool.icon}
            </li>
          </Tooltip>
        ))}
      </ul>
    </article>
  );
}
