import { useLang } from "@/lib/i18n";
import logoBird from "@/assets/logo-bird.png";

export function Hero() {
  const { t } = useLang();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-6rem)] bg-black text-white flex items-center overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-16 md:py-20 w-full">
        <div className="flex flex-col items-center text-center">
          <img
            src={logoBird}
            alt="Swift Assets"
            width={480}
            height={480}
            className="h-40 md:h-52 lg:h-64 w-auto mb-10 opacity-95"
          />
          <h2
            className="font-semibold leading-none max-w-full"
            style={{
              fontSize: "clamp(2.2rem, 9vw, 6.5rem)",
              letterSpacing: "clamp(2px, 2vw, 18px)",
            }}
          >
            SWIFT&nbsp;ASSETS
          </h2>
          <div className="mt-5 text-sm md:text-base font-light tracking-[0.3em] text-[#888888] uppercase">
            UG (Haftungsbeschränkt)
          </div>

          <div className="h-px w-24 md:w-28 bg-[#2d2d2d] my-12 md:my-14" />

          <h1 className="text-2xl md:text-4xl lg:text-[3.5rem] font-light leading-snug max-w-4xl text-[#e5e5e5] tracking-tight">
            {t("hero_title")}
          </h1>
          <p className="mt-10 max-w-3xl text-lg md:text-xl lg:text-[1.4rem] text-[#a3a3a3] leading-relaxed">
            {t("hero_sub")}
          </p>
          <button
            onClick={() => scrollTo("contact")}
            className="mt-14 inline-flex items-center gap-4 px-10 md:px-12 py-5 md:py-6 border border-white text-white text-sm md:text-[15px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-colors"
          >
            {t("hero_cta")}
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
