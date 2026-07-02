import { useLang } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";

export function About() {
  const { t, tArr } = useLang();
  const paragraphs = tArr("purpose_body");
  const { ref, shown, reduced } = useReveal<HTMLDivElement>();

  const lead = paragraphs[0];
  const middle = paragraphs.slice(1, -1);
  const fine = paragraphs.length > 1 ? paragraphs[paragraphs.length - 1] : "";

  return (
    <section id="about" className="bg-white text-black py-24 md:py-32 border-t border-[#e5e5e5]">
      <div
        ref={ref}
        className="mx-auto max-w-5xl px-6"
        style={{
          opacity: shown ? 1 : 0,
          transform: shown || reduced ? "none" : "translateY(24px)",
          transition: reduced ? "none" : "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div className="text-xs uppercase tracking-[0.3em] text-[#888888] mb-6">
          {t("purpose_eyebrow")}
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-10 max-w-4xl leading-tight">
          {t("purpose_title")}
        </h2>
        <div className="h-px w-24 bg-black mb-10" />

        {lead && (
          <p className="text-xl md:text-3xl leading-relaxed text-[#1a1a1a] font-light max-w-4xl mb-10">
            {lead}
          </p>
        )}

        <div className="space-y-6 max-w-3xl">
          {middle.map((p, i) => (
            <p key={i} className="text-base md:text-lg leading-relaxed text-[#2d2d2d]">
              {p}
            </p>
          ))}
        </div>

        {fine && (
          <>
            <div className="h-px w-24 bg-[#d4d4d4] mt-14 mb-6" />
            <p className="text-sm leading-relaxed text-[#888888] max-w-3xl">{fine}</p>
          </>
        )}
      </div>
    </section>
  );
}
