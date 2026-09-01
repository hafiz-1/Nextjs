"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-6 rounded-lg border p-6">
      <h2 className="text-xl font-bold">
        Client Component
      </h2>

      <p className="my-4">
        Count: {count}
      </p>

      <button
        onClick={() => setCount(count + 1)}
        className="rounded bg-black px-4 py-2 text-white"
      >
        Increment
      </button>
    </div>
  );
}