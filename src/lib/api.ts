// src/lib/api.ts
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://quillr-backend.onrender.com";

export async function apiGet(path: string) {
  const res = await fetch(`${API_URL}${path}`, {
    credentials: "include",
  });
  return res.json();
}

export async function apiPost(path: string, body: any) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.json();
}
