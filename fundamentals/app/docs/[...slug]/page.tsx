export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <section className="mx-auto max-w-4xl px-6 py-16"><p className="text-sm font-semibold text-cyan-700">DOCUMENTATION</p><h1 className="mt-2 text-4xl font-bold">{slug.at(-1)?.replaceAll("-", " ")}</h1><div className="mt-8 rounded-xl border border-slate-200 bg-white p-6"><p className="text-sm font-medium text-slate-500">Current path</p><p className="mt-2 font-mono text-sm text-slate-800">/docs/{slug.join("/")}</p><p className="mt-6 leading-7 text-slate-600">This catch-all route receives each URL part as a slug array. Try adding more segments to this address.</p></div></section>
  );
}
