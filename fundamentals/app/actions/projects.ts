"use server";

import { revalidatePath } from "next/cache";
import { createProjectSchema } from "../data/project-schema";
import { createProject } from "../data/project-service";

export type CreateProjectState = { success: boolean; message: string; fieldErrors?: Partial<Record<"title" | "description" | "technology" | "status", string[]>> };
export const initialCreateProjectState: CreateProjectState = { success: false, message: "" };

export async function createProjectAction(_previousState: CreateProjectState, formData: FormData): Promise<CreateProjectState> {
  const result = createProjectSchema.safeParse({ title: formData.get("title"), description: formData.get("description"), technology: formData.get("technology"), status: formData.get("status") });
  if (!result.success) return { success: false, message: "Please correct the highlighted fields.", fieldErrors: result.error.flatten().fieldErrors };

  try {
    const project = await createProject(result.data);
    // The in-memory source changed, so refresh the directory and its new detail route.
    revalidatePath("/projects");
    revalidatePath(`/projects/${project.id}`);
    return { success: true, message: `“${project.title}” was created successfully.` };
  } catch {
    return { success: false, message: "We could not create the project. Please try again." };
  }
}
