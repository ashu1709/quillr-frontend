"use client";

export default function Home() {
  return (
    <main className="w-full min-h-screen pt-20 pb-32 flex flex-col items-center text-center px-4">

      {/* Brand Icon */}
      <div className="w-20 h-20 rounded-full border border-gray-200 flex items-center justify-center mb-8">
        <span className="text-4xl font-semibold">Q</span>
      </div>

      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4">
        Quillr
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-600 max-w-xl">
        Write Freely. Read Freely.
      </p>

      {/* Headline */}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-12 mb-6 leading-tight max-w-2xl">
        A new clean, global writing experience.
      </h2>

      <p className="text-gray-600 max-w-xl text-lg mb-10">
        No paywalls. No restrictions. Just pure writing and reading — for everyone.
      </p>

      {/* CTA */}
      <a
        href="/login"
        className="px-6 py-3 rounded-full bg-black text-white text-lg font-medium hover:bg-gray-900 transition"
      >
        Start Writing
      </a>

      {/* WHY QUILLR */}
      <section className="w-full max-w-4xl mt-28">
        <h2 className="text-3xl font-semibold mb-10">Why choose Quillr?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

          <div className="p-6 rounded-xl border hover:shadow-md transition bg-white">
            <h3 className="text-xl font-semibold mb-2">Minimal & Fast</h3>
            <p className="text-gray-600">
              Zero distractions. A clean editor designed for pure writing flow.
            </p>
          </div>

          <div className="p-6 rounded-xl border hover:shadow-md transition bg-white">
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p className="text-gray-600">
              Publish instantly and share your words with the world.
            </p>
          </div>

          <div className="p-6 rounded-xl border hover:shadow-md transition bg-white">
            <h3 className="text-xl font-semibold mb-2">No Paywalls</h3>
            <p className="text-gray-600">
              Every story is accessible — no locked content or subscriptions.
            </p>
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* ⭐ NEW — TRENDING ARTICLES SECTION (Option A)                            */}
      {/* ----------------------------------------------------------------------- */}
      <section className="w-full max-w-5xl mt-28">
        <h2 className="text-3xl font-semibold mb-6">Trending on Quillr</h2>
        <p className="text-gray-600 mb-10">
          Explore what writers across the world are talking about.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Trending Card 1 */}
          <div className="p-6 rounded-xl border shadow-sm hover:shadow-lg transition bg-white text-left">
            <h3 className="text-lg font-semibold mb-2">✨ Creativity & Mindfulness</h3>
            <p className="text-gray-600 text-sm">
              Writing that inspires deeper thinking and clarity.
            </p>
          </div>

          {/* Trending Card 2 */}
          <div className="p-6 rounded-xl border shadow-sm hover:shadow-lg transition bg-white text-left">
            <h3 className="text-lg font-semibold mb-2">🔥 Technology & AI</h3>
            <p className="text-gray-600 text-sm">
              Discover insights from writers shaping the future.
            </p>
          </div>

          {/* Trending Card 3 */}
          <div className="p-6 rounded-xl border shadow-sm hover:shadow-lg transition bg-white text-left">
            <h3 className="text-lg font-semibold mb-2">🌍 Personal Growth</h3>
            <p className="text-gray-600 text-sm">
              Stories that motivate, teach, and elevate your mindset.
            </p>
          </div>

        </div>
      </section>

      {/* SCREENSHOTS SECTION */}
      <section className="w-full max-w-5xl mt-28">
        <h2 className="text-3xl font-semibold mb-6">See what you're getting</h2>
        <p className="text-gray-600 mb-10">
          A simple, powerful writing interface designed for flow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition">
            <img src="/write page.png" alt="Writing preview" />
          </div>

          <div className="rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition">
            <img src="/about-page.png" alt="Reading preview" />
          </div>
        </div>
      </section>

      {/* AUDIENCE SECTION */}
      <section className="w-full max-w-4xl mt-32">
        <h2 className="text-3xl font-semibold mb-4">Built for everyone</h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Whether you're an author, blogger, student, or beginner —
          Quillr gives you a distraction-free space to think clearly
          and publish instantly.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="w-full max-w-4xl mt-20 mb-10">
        <div className="p-10 rounded-2xl border bg-white shadow-sm">
          <h2 className="text-3xl font-semibold mb-4">
            Join the next generation of writers
          </h2>

          <p className="text-gray-600 mb-6">
            Start writing your first article in seconds.
          </p>

          <a
            href="/write"
            className="px-8 py-3 rounded-full bg-black text-white text-lg font-medium hover:bg-gray-900 transition"
          >
            Start Writing →
          </a>
        </div>
      </section>

    </main>
  );
}
