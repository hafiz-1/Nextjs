import { z } from "zod";
import { projectStatuses } from "./projects";

export const createProjectSchema = z.object({
  title: z.string().trim().min(3, "Title must be at least 3 characters.").max(80, "Title must be 80 characters or fewer."),
  description: z.string().trim().min(12, "Description must be at least 12 characters.").max(500, "Description must be 500 characters or fewer."),
  technology: z.string().trim().min(2, "Technology is required.").max(80, "Technology must be 80 characters or fewer."),
  status: z.enum(projectStatuses),
});

export type CreateProjectValues = z.infer<typeof createProjectSchema>;
