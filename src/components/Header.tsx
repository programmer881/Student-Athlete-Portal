import Link from "next/link";

export function Header() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="#" className="text-lg font-semibold tracking-tight">
          Student Athlete Profile
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#stats" className="hover:underline underline-offset-4">
            Stats
          </a>
          <a href="#highlights" className="hover:underline underline-offset-4">
            Highlights
          </a>
          <a href="#transcripts" className="hover:underline underline-offset-4">
            Transcripts
          </a>
          <a href="#schedule" className="hover:underline underline-offset-4">
            Schedule a Call
          </a>
          <a href="#faq" className="hover:underline underline-offset-4">
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
}


