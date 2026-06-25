import { useLang } from "@/lib/i18n";

export function Specialty() {
  const { t, tArr } = useLang();
  return (
    <section id="specialty" className="bg-white text-black py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-xs uppercase tracking-[0.3em] text-[#888888] mb-6">
          {t("nav_specialty")}
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-10 max-w-4xl leading-tight">
          {t("spec_title")}
        </h2>
        <div className="h-px w-24 bg-black mb-10" />
        <p className="text-lg text-[#2d2d2d] mb-8">{t("spec_intro")}</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-16">
          {tArr("spec_list").map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-[#1a1a1a]">
              <span className="text-[#888888] mt-2 select-none">—</span>
              <span className="text-base md:text-lg">{item}</span>
            </li>
          ))}
        </ul>
        <div className="bg-black text-white p-10 md:p-14">
          <p className="text-xl md:text-2xl font-medium leading-relaxed">{t("spec_box")}</p>
        </div>
      </div>
    </section>
  );
}
