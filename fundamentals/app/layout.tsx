import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Learning",
  description: "Learning Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <nav className="flex items-center justify-between bg-gray-900 px-8 py-4 text-white">
          <h2 className="text-xl font-bold">Next Learning</h2>

          <div className="flex gap-6">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>

            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>

            <Link href="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="mt-10 border-t bg-white p-6 text-center text-gray-500">
          My Footer
        </footer>
      </body>
    </html>
  );
}