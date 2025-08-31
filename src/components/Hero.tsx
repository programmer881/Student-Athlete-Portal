type HeroProps = {
  name: string;
  sport?: string;
  position?: string;
  school?: string;
  location?: string;
  headshotUrl?: string;
  recruitingStatus?: string;
  startTerm?: string;
  metrics?: { height?: string; weight?: string; gpa?: string };
  socials?: { websiteUrl?: string; instagramUrl?: string };
};

export function Hero({ name, sport, position, school, location, headshotUrl, recruitingStatus, startTerm, metrics, socials }: HeroProps) {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-16 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            {name}
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 font-medium">
            {[sport, position].filter(Boolean).join(" • ")}
          </p>
          <p className="text-base text-slate-500 dark:text-slate-400">
            {[school, location].filter(Boolean).join(" • ")}
          </p>
          <div className="mt-6 flex gap-3 flex-wrap items-center">
            {recruitingStatus ? (
              <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 text-sm font-semibold border border-blue-200 dark:border-blue-800">
                {recruitingStatus}
              </span>
            ) : null}
            {startTerm ? (
              <span className="inline-flex items-center rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-4 py-2 text-sm font-semibold border border-amber-200 dark:border-amber-800">
                {startTerm}
              </span>
            ) : null}
          </div>
          <div className="mt-8 flex gap-4">
            <a href="#highlights" className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Watch Highlights
            </a>
            <a href="#schedule" className="rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 text-sm font-semibold transition-all duration-200">
              Schedule a Call
            </a>
            {socials?.websiteUrl ? (
              <a aria-label="Website" href={socials.websiteUrl} className="rounded-full border border-black/15 dark:border-white/20 px-3 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">
                ⛓
              </a>
            ) : null}
            {socials?.instagramUrl ? (
              <a aria-label="Instagram" href={socials.instagramUrl} className="rounded-full border border-black/15 dark:border-white/20 px-3 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">
                ♡
              </a>
            ) : null}
          </div>
        </div>
        <div className="justify-self-center md:justify-self-end">
          <div className="size-48 sm:size-56 md:size-64 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-700 bg-white dark:bg-slate-800 shadow-2xl">
            {headshotUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={headshotUrl} alt={`${name} headshot`} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full grid place-items-center text-sm text-black/50 dark:text-white/60">
                Add headshot
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


