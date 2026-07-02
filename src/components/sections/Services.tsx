import { useState, type ComponentType } from "react";
import { Landmark, Handshake, Target, ClipboardCheck, Ship, ShieldCheck } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";

const ICONS: ComponentType<{ className?: string; strokeWidth?: number }>[] = [
  Landmark,
  Handshake,
  Target,
  ClipboardCheck,
  Ship,
  ShieldCheck,
];

interface FlipCardProps {
  Icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  front: string;
  detail: string;
  reduced: boolean;
  shown: boolean;
  index: number;
}

function FlipCard({ Icon, title, front, detail, reduced, shown, index }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  const revealStyle = {
    opacity: shown ? 1 : 0,
    transform: shown || reduced ? "none" : "translateY(24px)",
    transition: reduced ? "none" : "opacity 0.6s ease, transform 0.6s ease",
    transitionDelay: reduced ? undefined : `${index * 80}ms`,
  } as const;

  // Reduced motion: static expanded card, no 3D spin.
  if (reduced) {
    return (
      <div className="bg-[#111111] p-8 md:p-10 flex flex-col gap-4" style={revealStyle}>
        <Icon className="w-7 h-7 text-white" strokeWidth={1.25} />
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="text-white/70 text-sm">{front}</p>
        <p className="text-[#888888] leading-relaxed text-sm">{detail}</p>
      </div>
    );
  }

  return (
    <div className="flip-perspective bg-[#111111]" style={revealStyle}>
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={title}
        onClick={() => setFlipped((f) => !f)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setFlipped((f) => !f);
          }
        }}
        className="group relative block w-full min-h-[320px] cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-white"
      >
        <div
          className={`flip-inner relative w-full h-full min-h-[320px] ${flipped ? "is-flipped" : ""}`}
        >
          {/* Front face */}
          <div className="flip-face absolute inset-0 flex flex-col justify-between p-8 md:p-10 bg-[#111111]">
            <Icon className="w-7 h-7 text-white" strokeWidth={1.25} />
            <div>
              <h3 className="text-lg font-semibold mb-3 tracking-tight text-white">{title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{front}</p>
            </div>
          </div>
          {/* Back face — monochrome inversion */}
          <div className="flip-face flip-back absolute inset-0 flex flex-col justify-center p-8 md:p-10 bg-white text-black">
            <h3 className="text-base font-semibold mb-4 tracking-tight">{title}</h3>
            <p className="text-[#2d2d2d] leading-relaxed text-sm">{detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const { t } = useLang();
  const { ref, shown, reduced } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="bg-[#111111] text-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-xs uppercase tracking-[0.3em] text-[#888888] mb-6">
          {t("services_title")}
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-16">{t("services_title")}</h2>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2d2d2d]"
        >
          {ICONS.map((Icon, i) => {
            const n = i + 1;
            return (
              <FlipCard
                key={i}
                Icon={Icon}
                title={t(`svc${n}_t`)}
                front={t(`svc${n}_f`)}
                detail={t(`svc${n}_d`)}
                reduced={reduced}
                shown={shown}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
