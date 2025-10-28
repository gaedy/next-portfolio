
import blogData from "@/app/data/blog.json";
import Article from "@/components/article";
import { Metadata } from "next";
import { projects } from "@/components/Projects/projectsData";
import Project from "@/components/Projects/project";

export const metadata: Metadata = {
  title: "Projects | Ahmed Gaeedy",
  description: "View my latest projects.",
};
export default function ProjectsPage() {
  const projectsList = Object.entries(projects).map(([slug, project]) => ({
    slug,
    ...project,
  }));

  return (
    <section className="flex flex-col gap-4 justify-between">
      <header>
        <h1 className="font-medium text-xl">Projects</h1>
      </header>

      <hr className="bg-border" />
      {projectsList.length === 0 ? (
        <p className="text-muted-foreground text-center">
          No projects found.
        </p>
      ) : (
        projectsList.map((project) => (
          <Project key={project.slug} project={project} />
        ))
      )}
    </section>
  );
}