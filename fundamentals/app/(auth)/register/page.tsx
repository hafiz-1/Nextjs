export default function RegisterPage() {
  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white p-8 shadow-sm"><p className="text-sm font-semibold text-cyan-700">GET STARTED</p><h1 className="mt-2 text-3xl font-bold">Create your DevHub account</h1><form className="mt-8 space-y-5"><label className="block text-sm font-medium">Name<input className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Your name" /></label><label className="block text-sm font-medium">Email<input type="email" className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="you@example.com" /></label><label className="block text-sm font-medium">Password<input type="password" className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Create a password" /></label><button type="button" className="w-full rounded-lg bg-slate-900 px-4 py-3 font-semibold text-white">Create account</button></form></div>
  );
}
