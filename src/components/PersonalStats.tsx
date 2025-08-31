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
    <section id="stats" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-8 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
        Athletic & Academic Stats
      </h2>
      <div className="overflow-x-auto">
        <div className="flex gap-6 pb-4 min-w-max">
          {metrics.height && (
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700 border border-blue-200 dark:border-slate-600 min-w-[160px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{metrics.height}</div>
              <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">Height</div>
            </div>
          )}
          {metrics.weight && (
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-slate-800 dark:to-slate-700 border border-green-200 dark:border-slate-600 min-w-[160px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{metrics.weight}</div>
              <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">Weight</div>
            </div>
          )}
          {metrics.wingspan && (
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-100 dark:from-slate-800 dark:to-slate-700 border border-purple-200 dark:border-slate-600 min-w-[160px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{metrics.wingspan}</div>
              <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">Wingspan</div>
            </div>
          )}
          {metrics.sprint50m && (
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-100 dark:from-slate-800 dark:to-slate-700 border border-orange-200 dark:border-slate-600 min-w-[160px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">{metrics.sprint50m}</div>
              <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">50m Sprint</div>
            </div>
          )}
          {metrics.vertical && (
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-red-50 to-pink-100 dark:from-slate-800 dark:to-slate-700 border border-red-200 dark:border-slate-600 min-w-[160px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">{metrics.vertical}</div>
              <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">Vertical</div>
            </div>
          )}
          {metrics.gpa && (
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-slate-800 dark:to-slate-700 border border-amber-200 dark:border-slate-600 min-w-[160px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">{metrics.gpa}</div>
              <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">GPA</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
