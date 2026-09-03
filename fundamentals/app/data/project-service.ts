import { projects, projectStatuses, type Project, type ProjectStatus } from "./projects";

export type ProjectFilters = { search?: string; status?: ProjectStatus };
export type CreateProjectInput = Omit<Project, "id">;

// Temporary local data source. These methods are the only layer UI routes use.
export async function getProjects(): Promise<Project[]> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return projects;
}

export async function getFilteredProjects(filters: ProjectFilters): Promise<Project[]> {
  const allProjects = await getProjects();
  const search = filters.search?.trim().toLowerCase();
  return allProjects.filter((project) => {
    const matchesSearch = !search || `${project.title} ${project.description}`.toLowerCase().includes(search);
    return matchesSearch && (!filters.status || project.status === filters.status);
  });
}

// This metadata is independent from the project query, so pages can request both in parallel.
export async function getProjectStatuses(): Promise<readonly ProjectStatus[]> {
  return projectStatuses;
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return projects.find((project) => project.id === id);
}

export async function createProject(input: CreateProjectInput): Promise<Project> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const id = `${input.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}-${Date.now()}`;
  const project = { id, ...input };
  projects.push(project);
  return project;
}
