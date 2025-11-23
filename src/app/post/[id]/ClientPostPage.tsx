"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ClientPostPage({ id }: { id: string }) {
  const router = useRouter();

  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);

  const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API}/articles/${id}`, {
          cache: "no-store",
          credentials: "include",
        });

        const data = await res.json();
        setArticle(data);

        const me = await fetch(`${API}/auth/me`, {
          credentials: "include",
        }).then((r) => r.json());

        if (me?.user?.id === data.author_id) {
          setIsOwner(true);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [id, API]);

  async function deleteArticle() {
    if (!confirm("Delete this article?")) return;

    const res = await fetch(`${API}/articles/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    const result = await res.json();
    if (result.success) {
      alert("Article deleted.");
      router.push("/dashboard");
    } else {
      alert("Delete failed.");
    }
  }

  if (loading)
    return (
      <div className="max-w-3xl mx-auto py-24 px-6 text-center">
        Loading article...
      </div>
    );

  if (!article)
    return (
      <div className="max-w-3xl mx-auto py-24 px-6 text-center">
        <h2 className="text-2xl font-semibold">Article not found</h2>
      </div>
    );

  const created = article.created_at ? new Date(article.created_at) : null;

  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border border-gray-200 mb-6">
          <span className="text-4xl font-semibold">Q</span>
        </div>

        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          {article.title}
        </h1>

        <div className="text-sm text-gray-500 mb-10">
          By <span className="font-medium">Author</span>
          {created
            ? ` • ${created.toLocaleDateString()}`
            : ""}
        </div>

        {isOwner && (
          <div className="flex justify-center gap-4 my-6">
            <button
              onClick={() => router.push(`/write?id=${id}`)}
              className="px-4 py-2 rounded-full border text-sm hover:bg-gray-50"
            >
              ✏️ Edit
            </button>

            <button
              onClick={deleteArticle}
              className="px-4 py-2 rounded-full bg-red-500 text-white text-sm hover:bg-red-600"
            >
              🗑 Delete
            </button>
          </div>
        )}
      </div>

      {article.cover_image && (
        <img
          src={article.cover_image}
          alt="cover"
          className="w-full rounded-xl mb-10 shadow-md"
        />
      )}

      <article className="prose prose-lg max-w-none text-gray-800 leading-8">
        {article.content}
      </article>
    </main>
  );
}
