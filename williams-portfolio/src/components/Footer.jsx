export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-white/25 text-sm">
          Built by <span className="text-white/50 font-medium">Williams Warmate</span> · 2026
        </p>
        <p className="text-white/20 text-xs">
          React · Vite · Tailwind CSS · Framer Motion
        </p>
      </div>
    </footer>
  )
}
