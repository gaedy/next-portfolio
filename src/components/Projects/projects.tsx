import { projects } from "@/components/Projects/projectsData";
import Project from "@/components/Projects/project";
import Link from "next/link";

function Projects() {
  return (
    <div className="w-full flex justify-center font-medium">
      <div className=" w-full flex flex-col ">
        <div className="flex flex-col justify-between gap-4">
          <div className="font-medium ">Latest Projects</div>

          {/* <hr className="opacity-20 my-2.5"></hr> */}

          <div className="flex flex-col gap-3 ">
            {projects.map((project, index) => (
              <div key={index}>
                <Project key={index} project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
