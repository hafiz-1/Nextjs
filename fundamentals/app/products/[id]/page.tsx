export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Project Details
      </h1>

      <p className="mt-4">
        Project ID: {id}
      </p>
    </main>
  );
} 