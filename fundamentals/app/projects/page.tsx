import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return <section className="mx-auto max-w-6xl px-6 py-16"><p className="text-sm font-semibold text-cyan-700">PROJECT DIRECTORY</p><h1 className="mt-2 text-4xl font-bold tracking-tight">Explore projects</h1><p className="mt-4 max-w-2xl text-slate-600">Static project data keeps this example focused on App Router pages and reusable components.</p><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map((project) => <ProjectCard key={project.id} {...project} />)}</div></section>;
}
