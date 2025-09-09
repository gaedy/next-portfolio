import { projects } from "@/components/Projects/projectsData";
import Project from "@/components/Projects/project";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full flex flex-col gap-4 justify-center"
    >
      <header className="flex justify-between items-center">
        <h2 className="font-medium">Latest Projects</h2>
        {/* <Button className="text-xs" size="sm" variant="secondary">
          View All
          <ArrowRight />
        </Button> */}
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
