import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row">
      <aside className="rounded-xl bg-slate-950 p-5 text-white md:w-56 md:shrink-0"><p className="text-sm font-semibold text-cyan-300">DEVHUB</p><h2 className="mt-1 text-xl font-bold">Dashboard</h2><nav aria-label="Dashboard navigation" className="mt-6 flex gap-2 md:flex-col"><Link href="/dashboard" className="rounded-lg px-3 py-2 text-sm hover:bg-slate-800">Overview</Link><Link href="/dashboard/settings" className="rounded-lg px-3 py-2 text-sm hover:bg-slate-800">Settings</Link></nav></aside>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
