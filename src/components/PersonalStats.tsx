type PersonalStatsProps = {
  metrics?: {
    height?: string;
    weight?: string;
    gpa?: string;
    wingspan?: string;
    sprint50m?: string;
    vertical?: string;
  };
};

export function PersonalStats({ metrics }: PersonalStatsProps) {
  if (!metrics) return null;

  return (
    <section id="stats" className="mx-auto max-w-6xl px-4 py-6">
      <h2 className="text-2xl font-semibold tracking-tight">Stats</h2>
      <div className="mt-4 overflow-x-auto">
        <div className="flex gap-4 pb-2 min-w-max">
          {metrics.height && (
            <div className="text-center p-6 rounded-lg border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/10 min-w-[160px]">
              <div className="text-2xl font-bold text-black dark:text-white">{metrics.height}</div>
              <div className="text-sm text-black/70 dark:text-white/70 mt-2">Height</div>
            </div>
          )}
          {metrics.weight && (
            <div className="text-center p-6 rounded-lg border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/10 min-w-[160px]">
              <div className="text-2xl font-bold text-black dark:text-white">{metrics.weight}</div>
              <div className="text-sm text-black/70 dark:text-white/70 mt-2">Weight</div>
            </div>
          )}
          {metrics.wingspan && (
            <div className="text-center p-6 rounded-lg border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/10 min-w-[160px]">
              <div className="text-2xl font-bold text-black dark:text-white">{metrics.wingspan}</div>
              <div className="text-sm text-black/70 dark:text-white/70 mt-2">Wingspan</div>
            </div>
          )}
          {metrics.sprint50m && (
            <div className="text-center p-6 rounded-lg border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/10 min-w-[160px]">
              <div className="text-2xl font-bold text-black dark:text-white">{metrics.sprint50m}</div>
              <div className="text-sm text-black/70 dark:text-white/70 mt-2">50m Sprint</div>
            </div>
          )}
          {metrics.vertical && (
            <div className="text-center p-6 rounded-lg border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/10 min-w-[160px]">
              <div className="text-2xl font-bold text-black dark:text-white">{metrics.vertical}</div>
              <div className="text-sm text-black/70 dark:text-white/70 mt-2">Vertical</div>
            </div>
          )}
          {metrics.gpa && (
            <div className="text-center p-6 rounded-lg border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/10 min-w-[160px]">
              <div className="text-2xl font-bold text-black dark:text-white">{metrics.gpa}</div>
              <div className="text-sm text-black/70 dark:text-white/70 mt-2">GPA</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
