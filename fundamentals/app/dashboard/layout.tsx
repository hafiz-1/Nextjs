"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const dashboardLinks = [
    { href: "/dashboard", label: "Overview" },
    { href: "/dashboard/settings", label: "Settings" },
  ];

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row">
      <aside className="rounded-xl bg-slate-950 p-5 text-white md:w-56 md:shrink-0"><p className="text-sm font-semibold text-cyan-300">DEVHUB</p><h2 className="mt-1 text-xl font-bold">Dashboard</h2><nav aria-label="Dashboard navigation" className="mt-6 flex gap-2 md:flex-col">{dashboardLinks.map((link) => {
        const isActive = pathname === link.href;

        return <Link key={link.href} href={link.href} aria-current={isActive ? "page" : undefined} className={`rounded-lg px-3 py-2 text-sm transition hover:bg-slate-800 ${isActive ? "bg-cyan-300 font-semibold text-slate-950 hover:bg-cyan-200" : "text-slate-200"}`}>{link.label}</Link>;
      })}</nav></aside>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
