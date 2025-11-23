"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { apiPost } from "@/src/lib/api";

export default function WriteClient() {
  const router = useRouter();
  const params = useSearchParams();
  const editId = params.get("id");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  // LOAD EXISTING ARTICLE IN EDIT MODE
  useEffect(() => {
    if (!editId) return;

    async function loadArticle() {
      try {
        const res = await fetch(`${API}/articles/${editId}`, {
          cache: "no-store",
          credentials: "include",
        });

        const data = await res.json();
        if (data?.title) setTitle(data.title);
        if (data?.content) setContent(data.content);
      } catch {
        alert("Failed to load article.");
      }
    }

    loadArticle();
  }, [editId]);

  // CREATE ARTICLE
  async function publishArticle() {
    if (!title.trim()) return alert("Please add a title");
    setLoading(true);

    try {
      const res = await apiPost("/articles", {
        title: title.trim(),
        content: content.trim(),
      });

      if (res?.detail === "Not authenticated") {
        alert("You must be logged in to publish");
        router.push("/login");
        return;
      }

      const newId = res?.article?.id;
      if (!newId) return alert("Error saving article.");

      router.push(`/post/${newId}`);
    } catch {
      alert("Publish failed.");
    } finally {
      setLoading(false);
    }
  }

  // UPDATE ARTICLE
  async function updateArticle() {
    if (!title.trim()) return alert("Please add a title");
    setLoading(true);

    try {
      const res = await fetch(`${API}/articles/${editId}`, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          content: content.trim(),
        }),
      });

      const data = await res.json();
      if (data?.success) {
        router.push(`/post/${editId}`);
      } else {
        alert("Failed to update article.");
      }
    } catch {
      alert("Update failed.");
    } finally {
      setLoading(false);
    }
  }

  // UI
  return (
    <div className="max-w-4xl mx-auto pt-20 pb-32 px-6">
      {/* HEADER */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="w-20 h-20 rounded-full border flex items-center justify-center mb-4">
          <span className="text-4xl font-semibold">Q</span>
        </div>

        <h1 className="text-4xl font-bold mb-1">
          {editId ? "Edit Article" : "Write on Quillr"}
        </h1>

        <p className="text-gray-500 text-sm">
          {editId ? "Update your article below." : "Write freely. Read freely."}
        </p>
      </div>

      {/* EDITOR */}
      <div className="bg-white border rounded-xl p-10 shadow-sm relative">

        {/* Title */}
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Your article title..."
          className="w-full text-4xl font-bold pb-3 border-b border-transparent 
                     focus:border-gray-200 outline-none placeholder:text-gray-300"
        />

        {/* Content */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing your story..."
          className="w-full mt-8 min-h-[400px] resize-none text-lg leading-8 
                     focus:outline-none placeholder:text-gray-300"
        />

        {/* Sticky Bottom */}
        <div className="flex justify-between items-center mt-10 pt-6 border-t">
          <div className="text-sm text-gray-500">
            {editId ? "Editing mode" : "Draft saved locally — cloud save coming soon"}
          </div>

          <div className="flex gap-3">
            {/* Clear */}
            <button
              onClick={() => { setTitle(""); setContent(""); }}
              className="px-4 py-2 rounded-md text-sm border hover:bg-gray-50 transition"
            >
              Clear
            </button>

            {/* Publish / Update */}
            <button
              onClick={editId ? updateArticle : publishArticle}
              disabled={loading}
              className="px-6 py-2 rounded-full bg-black text-white text-sm shadow 
                         hover:bg-gray-800 disabled:opacity-60 transition"
            >
              {loading ? "Saving..." : editId ? "Update" : "Publish"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
