import { useLang } from "@/lib/i18n";

export function Process() {
  const { t, tArr } = useLang();
  const steps = tArr("process_steps");
  return (
    <section id="process" className="bg-white text-black py-24 md:py-32 border-t border-[#e5e5e5]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-xs uppercase tracking-[0.3em] text-[#888888] mb-6">
          {t("process_eyebrow")}
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-16 max-w-3xl leading-tight">
          {t("process_title")}
        </h2>

        <div className="hidden md:flex items-stretch justify-between gap-2">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center flex-1 last:flex-none">
              <div className="flex-1 border border-black p-6 text-center">
                <div className="text-base lg:text-lg font-semibold tracking-tight">{step}</div>
              </div>
              {i < steps.length - 1 && (
                <div className="px-3 text-[#888888] text-xl font-light select-none">→</div>
              )}
            </div>
          ))}
        </div>

        <div className="md:hidden flex flex-col items-stretch gap-3">
          {steps.map((step, i) => (
            <div key={step}>
              <div className="border border-black p-5 text-center">
                <div className="text-base font-semibold tracking-tight">{step}</div>
              </div>
              {i < steps.length - 1 && (
                <div className="text-center text-[#888888] text-xl font-light py-1">↓</div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-3xl text-base md:text-lg text-[#2d2d2d] leading-relaxed">
          {t("process_body")}
        </p>
      </div>
    </section>
  );
}
