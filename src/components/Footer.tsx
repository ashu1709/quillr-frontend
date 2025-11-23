export default function Footer() {
  return (
    <footer className="mt-24 py-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Quillr — Write Freely. Read Freely.
        </p>

        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#" className="hover:opacity-70 transition">Privacy</a>
          <a href="#" className="hover:opacity-70 transition">Terms</a>
          <a href="#" className="hover:opacity-70 transition">Support</a>
        </div>

      </div>
    </footer>
  );
}
