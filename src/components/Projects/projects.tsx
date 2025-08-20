import { projects } from "@/components/Projects/projectsData";
import Project from "@/components/Projects/project";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full flex flex-col gap-4 justify-center"
    >
      <header>
        <h2 className="font-medium">Latest Projects</h2>
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
