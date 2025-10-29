export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} Vibe Labs. All rights reserved.</p>
          <div className="text-xs text-white/60 flex items-center gap-4">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
