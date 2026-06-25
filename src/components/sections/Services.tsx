import {
  Briefcase,
  TrendingDown,
  Handshake,
  ClipboardList,
  Users,
  LineChart,
  Truck,
  Compass,
} from "lucide-react";
import { useLang } from "@/lib/i18n";

const ICONS = [Briefcase, TrendingDown, Handshake, ClipboardList, Users, LineChart, Truck, Compass];

export function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="bg-[#111111] text-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-xs uppercase tracking-[0.3em] text-[#888888] mb-6">
          {t("services_title")}
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-16">{t("services_title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2d2d2d]">
          {ICONS.map((Icon, i) => {
            const n = i + 1;
            return (
              <div key={i} className="bg-[#111111] p-10 hover:bg-[#1a1a1a] transition-colors">
                <Icon className="w-7 h-7 mb-6 text-white" strokeWidth={1.25} />
                <h3 className="text-lg font-semibold mb-3 tracking-tight">{t(`sv${n}_t`)}</h3>
                <p className="text-[#888888] leading-relaxed text-sm">{t(`sv${n}_d`)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
