import { projects, type Project } from "./projects";

// Temporary local data source. Replace these functions with API calls later.
export async function getProjects(): Promise<Project[]> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return projects;
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return projects.find((project) => project.id === id);
}
