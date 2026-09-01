import Link from "next/link";

export default function ProjectNotFound() {
  return <section className="mx-auto max-w-3xl px-6 py-20"><p className="text-sm font-semibold text-cyan-700">404</p><h1 className="mt-2 text-4xl font-bold">Project not found</h1><p className="mt-4 text-slate-600">The project you are looking for does not exist in DevHub.</p><Link href="/projects" className="mt-8 inline-flex rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-700">Back to Projects</Link></section>;
}
