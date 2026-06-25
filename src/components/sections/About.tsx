import { useLang } from "@/lib/i18n";

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="bg-white text-black py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-xs uppercase tracking-[0.3em] text-[#888888] mb-6">
          {t("about_title")}
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-10">{t("about_title")}</h2>
        <div className="h-px w-24 bg-black mb-10" />
        <p className="text-lg md:text-2xl leading-relaxed text-[#2d2d2d] max-w-3xl">
          {t("about_body")}
        </p>
      </div>
    </section>
  );
}
