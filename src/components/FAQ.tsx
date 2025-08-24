type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export function FAQ({ items }: FAQProps) {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
      <div className="mt-6 divide-y divide-black/10 dark:divide-white/10 rounded-lg border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/10">
        {items.map((item, idx) => (
          <details key={idx} className="group">
            <summary className="cursor-pointer list-none px-4 py-4 font-medium">
              <span>{item.question}</span>
            </summary>
            <div className="px-4 pb-4 pt-2 text-sm text-black/75 dark:text-white/70">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}


