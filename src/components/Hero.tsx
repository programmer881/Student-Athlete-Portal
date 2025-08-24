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
    <section className="w-full bg-gradient-to-b from-transparent to-black/[.04] dark:to-white/[.04]">
      <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            {name}
          </h1>
          <p className="mt-3 text-base/7 text-black/70 dark:text-white/70">
            {[sport, position].filter(Boolean).join(" • ")}
          </p>
          <p className="text-base/7 text-black/70 dark:text-white/70">
            {[school, location].filter(Boolean).join(" • ")}
          </p>
          <div className="mt-4 flex gap-3 flex-wrap items-center">
            {recruitingStatus ? (
              <span className="inline-flex items-center rounded-lg bg-white/10 dark:bg-white/10 border border-white/20 px-3 py-1 text-sm font-medium">
                {recruitingStatus}
              </span>
            ) : null}
            {startTerm ? (
              <span className="inline-flex items-center rounded-lg bg-white/10 dark:bg-white/10 border border-white/20 px-3 py-1 text-sm font-medium">
                {startTerm}
              </span>
            ) : null}
          </div>
          <div className="mt-6 flex gap-3">
            <a href="#highlights" className="rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90">
              Watch Highlights
            </a>
            <a href="#schedule" className="rounded-md border border-black/15 dark:border-white/20 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">
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
          <div className="size-48 sm:size-56 md:size-64 rounded-xl overflow-hidden border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/10">
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


