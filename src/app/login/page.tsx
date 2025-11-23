// src/app/login/page.tsx
"use client";

export default function LoginPage() {
  const googleLogin = () => {
    // full redirect to backend - backend will redirect back to /dashboard
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/auth/google/login`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6">Sign in to Quillr</h1>
        <button
          onClick={googleLogin}
          className="w-full inline-flex items-center justify-center gap-3 px-4 py-3 rounded-md border hover:bg-gray-50"
        >
          <img src="google.svg" alt="Google" className="w-5 h-5" />
          <span>Sign in with Google</span>
        </button>

        <p className="text-sm text-gray-500 mt-6">
          We only use Google to authenticate your identity. No password required.
        </p>
      </div>
    </div>
  );
}
