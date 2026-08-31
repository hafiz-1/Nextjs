export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Documentation</h1>

      <p className="mt-4">
        Slug: {slug.join(" / ")}
      </p>
    </main>
  );
}