"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Something went wrong
      </h1>

      <p className="mt-4">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 rounded bg-black px-4 py-2 text-white"
      >
        Try Again
      </button>
    </main>
  );
}