// src/components/ArticleCard.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";

type Article = {
  id: number | string;
  title: string;
  content: string;
  created_at?: string;
  cover_image?: string | null;
};

export default function ArticleCard({ article, onDelete }: { article: Article; onDelete?: (id: string|number) => void; }) {
  const router = useRouter();

  const created = article.created_at ? new Date(article.created_at) : null;

  // estimate reading time: 200 words/min
  const words = (article.content || "").split(/\s+/).filter(Boolean).length;
  const readMins = Math.max(1, Math.round(words / 200));

  const excerpt = (article.content || "").slice(0, 220);

  return (
    <article className="bg-white rounded-2xl border p-6 shadow-sm hover:shadow-md transition group">
      <div className="flex items-start gap-6">
        {/* thumbnail */}
        <div className="w-36 h-24 flex-shrink-0 rounded-lg overflow-hidden border">
          {article.cover_image ? (
            <img src={article.cover_image} alt="thumb" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
              <span>Preview</span>
            </div>
          )}
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-1">{article.title}</h3>
          <p className="text-sm text-gray-500 mb-3">{excerpt}{(article.content || "").length > 220 ? "…" : ""}</p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <span>By <span className="font-medium">Author</span></span>
              {created && (
                <span>• {created.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}</span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full border text-sm">{readMins} min read</span>

              {/* actions */}
              <button
                onClick={() => router.push(`/post/${article.id}`)}
                className="px-3 py-1 border rounded-md hover:bg-gray-50"
                aria-label="Open article"
              >
                Read
              </button>

              <button
                onClick={() => router.push(`/write?edit=${article.id}`)}
                className="px-3 py-1 border rounded-md hover:bg-gray-50"
                aria-label="Edit article"
              >
                Edit
              </button>

              <button
                onClick={() => {
                  if (!confirm("Delete this article? This cannot be undone.")) return;
                  onDelete && onDelete(article.id);
                }}
                className="px-3 py-1 rounded-md border text-red-600 hover:bg-red-50"
                aria-label="Delete article"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
