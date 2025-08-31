type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export function FAQ({ items }: FAQProps) {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-12 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-slate-200 dark:divide-slate-700 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl">
        {items.map((item, idx) => (
          <details key={idx} className="group">
            <summary className="cursor-pointer list-none px-6 py-6 font-semibold text-lg text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              <span>{item.question}</span>
            </summary>
            <div className="px-6 pb-6 pt-2 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}


