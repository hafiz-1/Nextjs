"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/docs/nextjs", label: "Docs" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-800 bg-slate-950 text-white">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">Dev<span className="text-cyan-300">Hub</span></Link>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-300 sm:gap-6">
          {links.map((link) => {
            const isActive = link.href === "/"
              ? pathname === link.href
              : pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-md px-2 py-1 transition hover:text-cyan-300 ${
                  isActive ? "bg-cyan-300 text-slate-950" : "text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/login" className="text-cyan-300 hover:text-cyan-200">Login</Link>
        </div>
      </nav>
    </header>
  );
}
