import { notFound } from "next/navigation";

const projects = [
  { id: "1", name: "DevTask" },
  { id: "2", name: "Portfolio" },
  { id: "3", name: "Banking System" },
];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projects.find((project) => project.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        {project.name}
      </h1>

      <p className="mt-4">
        Project ID: {project.id}
      </p>
    </main>
  );
}