import { notFound } from "next/navigation";
import Link from "next/link";
import FavoriteButton from "../../components/FavoriteButton";
import { getProjectById } from "../../data/project-service";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/projects" className="text-sm font-semibold text-cyan-700 hover:text-cyan-900">← Back to Projects</Link>
      <article className="mt-8 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-sm font-semibold text-cyan-700">PROJECT DETAILS</p><h1 className="mt-2 text-4xl font-bold">{project.title}</h1></div><span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-800">{project.status}</span></div>
        <p className="mt-6 text-lg leading-8 text-slate-600">{project.description}</p>
        <dl className="mt-8 grid gap-6 border-y border-slate-200 py-6 sm:grid-cols-2"><div><dt className="text-sm font-medium text-slate-500">Technology</dt><dd className="mt-1 font-semibold">{project.technology}</dd></div><div><dt className="text-sm font-medium text-slate-500">Project ID</dt><dd className="mt-1 font-mono text-sm">{project.id}</dd></div></dl>
        <div className="mt-6"><FavoriteButton /></div>
      </article>
    </section>
  );
}
