export const projectStatuses = ["Planning", "In Progress", "Completed"] as const;

export type ProjectStatus = (typeof projectStatuses)[number];

export type Project = {
  id: string;
  title: string;
  description: string;
  technology: string;
  status: ProjectStatus;
};

export const projects: Project[] = [
  { id: "devtask", title: "DevTask", description: "A focused task board that helps small developer teams plan their weekly work.", technology: "Next.js + TypeScript", status: "In Progress" },
  { id: "component-lab", title: "Component Lab", description: "A shared space for documenting and testing reusable interface components.", technology: "React + Tailwind CSS", status: "In Progress" },
  { id: "portfolio-starter", title: "Portfolio Starter", description: "A clean portfolio template for developers who want to showcase their work.", technology: "Next.js + Tailwind CSS", status: "Completed" },
  { id: "team-notes", title: "Team Notes", description: "A lightweight workspace for keeping project decisions and meeting notes together.", technology: "TypeScript + React", status: "Planning" },
  { id: "api-playground", title: "API Playground", description: "A learning project for exploring API requests, responses, and error states.", technology: "React + JavaScript", status: "Completed" },
];
