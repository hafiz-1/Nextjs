export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <section className="mx-auto flex min-h-[70vh] max-w-md items-center px-6 py-12">{children}</section>;
}
