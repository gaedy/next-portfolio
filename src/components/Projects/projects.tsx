import { projects } from "@/components/Projects/projectsData";
import Project from "@/components/Projects/project";

import React from "react";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full flex flex-col gap-4 justify-center"
    >
      <header className="flex justify-between items-center">
        <h2 className="font-medium">Latest Projects</h2>

        {/* <Link href="/projects">
          <div className=" flex items-center transition-colors duration-200 gap-1.5 text-sm cursor-pointer hover:text-foreground text-muted-foreground">
            View All
            <ArrowRight size={16} />
          </div>
        </Link> */}
      </header>

      <ul className="flex flex-col gap-3">
        {projects.map((project, index) => (
          <li key={index}>
            <Project project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
