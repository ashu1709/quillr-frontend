"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/me`,
          { credentials: "include" }
        );

        if (res.ok) {
          const data = await res.json();
          setUser(data.user || null);
        }
      } catch (err) {
        console.error("Auth error:", err);
      }
    }

    fetchUser();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const logout = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    window.location.href = "/";
  };

  return (
    <header className="w-full py-6">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6">

        {/* Left Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
            <span className="text-xl font-semibold">Q</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">Quillr</span>
        </Link>

        {/* Right Nav */}
        <div className="flex items-center gap-8 text-gray-700 text-sm font-medium">

          <Link href="/write" className="hover:opacity-70 transition">Write</Link>
          <Link href="/about" className="hover:opacity-70 transition">About</Link>

          {/* If logged out → Sign In */}
          {!user && (
            <Link
              href="/login"
              className="px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-900 transition"
            >
              Sign In
            </Link>
          )}

          {/* If logged in → Avatar + Dropdown */}
          {user && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-sm font-semibold bg-white hover:bg-gray-100 transition"
              >
                {user.name ? user.name[0] : "U"}
              </button>

              {/* Dropdown */}
              {open && (
                <div
                  className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-2 animate-fadeIn"
                >
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 transition"
                    onClick={() => setOpen(false)}
                  >
                    Dashboard
                  </Link>

                  <Link
                    href="/write"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 transition"
                    onClick={() => setOpen(false)}
                  >
                    Write
                  </Link>

                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Small fade animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.15s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
