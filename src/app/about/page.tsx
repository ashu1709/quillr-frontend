export default function AboutPage() {
  return (
    <main className="w-full min-h-screen pt-28 pb-32 flex flex-col items-center px-6 text-center">
      
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
        About Quillr
      </h1>

      {/* Intro Text */}
      <p className="max-w-3xl text-gray-600 text-lg leading-relaxed">
        Quillr was built with one belief: <span className="font-medium text-gray-800">writing should feel free</span>. 
        No clutter. No endless ads. No complicated dashboards. 
        Just a clean space where your thoughts flow into words.
      </p>

      {/* Mission */}
      <section className="max-w-3xl mt-12">
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          To create the simplest, most beautiful writing experience on the internet —
          where anyone, anywhere, can write and publish freely without restrictions.
        </p>
      </section>

      {/* What Makes Quillr Different */}
      <section className="max-w-3xl mt-16">
        <h2 className="text-2xl font-semibold mb-3">What Makes Quillr Different</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-8">
          <div className="p-6 border rounded-xl hover:shadow-sm transition">
            <h3 className="font-semibold mb-2">Pure Writing</h3>
            <p className="text-gray-600">
              A distraction-free editor designed to make writing feel natural.
            </p>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-sm transition">
            <h3 className="font-semibold mb-2">Zero Paywalls</h3>
            <p className="text-gray-600">
              Your stories deserve to be read — no locked content, ever.
            </p>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-sm transition">
            <h3 className="font-semibold mb-2">Global Access</h3>
            <p className="text-gray-600">
              Publish instantly and reach readers worldwide with one click.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="max-w-3xl mt-16">
        <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          To empower millions of writers — from beginners to professionals —
          by giving them a platform where their words take center stage.
          No noise. No pressure. Just genuine expression.
        </p>
      </section>

      {/* Final Message */}
      <p className="max-w-3xl text-gray-600 text-lg leading-relaxed mt-16 italic">
        Quillr is more than a writing tool — it's a movement to bring authentic
        writing back to the internet.
      </p>
    </main>
  );
}
