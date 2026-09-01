"use client";

import { useState } from "react";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);
  return <button type="button" onClick={() => setIsFavorite(!isFavorite)} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-rose-300 hover:bg-rose-50">{isFavorite ? "♥ Favorited" : "♡ Add to Favorites"}</button>;
}
