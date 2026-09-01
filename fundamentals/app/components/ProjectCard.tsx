import Link from "next/link";
import type { Project } from "../data/projects";

const statusStyles = { Planning: "bg-amber-100 text-amber-800", "In Progress": "bg-sky-100 text-sky-800", Completed: "bg-emerald-100 text-emerald-800" };

export default function ProjectCard({ id, title, description, technology, status }: Project) {
  return <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-start justify-between gap-4"><h3 className="text-xl font-bold">{title}</h3><span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}>{status}</span></div><p className="mt-4 flex-1 leading-7 text-slate-600">{description}</p><p className="mt-5 text-sm font-medium text-slate-500">{technology}</p><Link href={`/projects/${id}`} className="mt-6 inline-flex font-semibold text-cyan-700 hover:text-cyan-900">View Details →</Link></article>;
}
