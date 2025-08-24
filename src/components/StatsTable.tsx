type StatsTableProps = {
  title?: string;
  columns: string[];
  rows: Array<Record<string, string | number>>;
};

export function StatsTable({ title = "Athlete Stats", columns, rows }: StatsTableProps) {
  return (
    <section id="stats" className="mx-auto max-w-6xl px-4 py-4">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-black/10 dark:border-white/15">
        <table className="min-w-full text-sm">
          <thead className="bg-black/[.04] dark:bg-white/[.06]">
            <tr>
              {columns.map((col) => (
                <th key={col} className="text-left px-4 py-3 font-medium">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="border-t border-black/10 dark:border-white/10">
                {columns.map((col) => (
                  <td key={col} className="px-4 py-3 whitespace-nowrap">
                    {row[col] as React.ReactNode}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}


