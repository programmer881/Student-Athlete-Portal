type CalendlyEmbedProps = {
  url: string; // e.g., https://calendly.com/username/15min
  height?: number;
};

export function CalendlyEmbed({ url, height = 700 }: CalendlyEmbedProps) {
  return (
    <section id="schedule" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold tracking-tight">Schedule a Meeting</h2>
      <div className="mt-6 rounded-lg border border-black/10 dark:border-white/15 overflow-hidden bg-black/5 dark:bg-white/10">
        <iframe
          src={url}
          className="w-full"
          style={{ height }}
          title="Schedule a Meeting"
        />
      </div>
    </section>
  );
}


