// src/components/LogoutButton.tsx
"use client";

export default function LogoutButton() {
  const doLogout = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    window.location.href = "/";
  };

  return (
    <button onClick={doLogout} className="px-3 py-1 rounded-md border">
      Sign out
    </button>
  );
}
