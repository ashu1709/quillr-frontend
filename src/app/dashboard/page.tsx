// src/app/dashboard/page.tsx
import React from "react";
import { cookies } from "next/headers";

function readingTime(text: string) {
  const words = text?.trim().split(/\s+/).length || 0;
  return Math.max(1, Math.ceil(words / 200));
}

export default async function Dashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get("quillr_token")?.value;

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Not signed in</h2>
          <a
            href="/login"
            className="px-4 py-2 bg-black text-white rounded-full"
          >
            Sign in
          </a>
        </div>
      </div>
    );
  }

  const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  // Fetch user
  const userRes = await fetch(`${API}/auth/me`, {
    cache: "no-store",
    headers: {
      Cookie: `quillr_token=${token}`,
    },
  });

  const userData = await userRes.json();
  const user = userData.user;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">Not signed in</h2>
      </div>
    );
  }

  // Fetch user articles
  const articlesRes = await fetch(`${API}/articles/me/all`, {
    cache: "no-store",
    headers: { Cookie: `quillr_token=${token}` },
  });

  const data = await articlesRes.json();
  const articles = data.articles || [];

  return (
    <main className="max-w-6xl mx-auto py-16 px-6 flex gap-12">

      {/* LEFT SIDEBAR */}
      <aside className="w-64 hidden md:block border-r pr-6 pt-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full border flex items-center justify-center text-lg font-semibold">
            {user.name ? user.name[0] : "Q"}
          </div>
          <div>
            <div className="font-semibold text-gray-800">{user.name}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </div>
        </div>

        <nav className="flex flex-col gap-3 text-gray-600">
          <a href="/write" className="hover:text-black transition">✏️ New Article</a>
          <a href="#" className="hover:text-black transition">📄 My Articles</a>
          <a href="#" className="hover:text-black transition">📊 Stats (coming soon)</a>
          <a href="#" className="hover:text-black transition">⚙️ Settings</a>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <section className="flex-1">
        <h2 className="text-3xl font-semibold mb-6">Your Articles</h2>

        {articles.length === 0 ? (
          <p className="text-gray-500">You currently have no articles.</p>
        ) : (
          <div className="flex flex-col gap-6">

            {articles.map((a: any) => (
              <a
                key={a.id}
                href={`/post/${a.id}`}
                className="group border rounded-xl p-6 flex gap-6 hover:shadow-md transition-all bg-white"
              >
                {/* Thumbnail */}
                {a.cover_image ? (
                  <img
                    src={a.cover_image}
                    className="w-40 h-28 rounded-lg object-cover border"
                  />
                ) : (
                  <div className="w-40 h-28 rounded-lg bg-gray-100 border flex items-center justify-center text-xs text-gray-400">
                    No image
                  </div>
                )}

                {/* Article Details */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-black transition">
                      {a.title}
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-2 mt-1 max-w-xl">
                      {a.content}
                    </p>
                  </div>

                  <div className="text-xs text-gray-500 mt-4">
                    {readingTime(a.content)} min read •{" "}
                    {new Date(a.created_at).toLocaleDateString()}
                  </div>
                </div>
              </a>
            ))}

          </div>
        )}
      </section>
    </main>
  );
}
