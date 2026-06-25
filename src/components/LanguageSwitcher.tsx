import type { ReactElement } from "react";
import { useLang, type Lang } from "@/lib/i18n";

function FlagDE() {
  return (
    <svg viewBox="0 0 6 3" className="w-full h-full block">
      <rect width="6" height="1" y="0" fill="#000" />
      <rect width="6" height="1" y="1" fill="#DD0000" />
      <rect width="6" height="1" y="2" fill="#FFCE00" />
    </svg>
  );
}
function FlagGB() {
  return (
    <svg viewBox="0 0 60 30" className="w-full h-full block">
      <clipPath id="gb">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#gb)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}
function FlagSY() {
  return (
    <svg viewBox="0 0 6 3" className="w-full h-full block">
      <rect width="6" height="1" y="0" fill="#007A3D" />
      <rect width="6" height="1" y="1" fill="#fff" />
      <rect width="6" height="1" y="2" fill="#000" />
      <g fill="#CE1126">
        <polygon points="2.2,1.35 2.32,1.62 2.6,1.62 2.38,1.78 2.46,2.05 2.2,1.88 1.94,2.05 2.02,1.78 1.8,1.62 2.08,1.62" />
        <polygon points="3.8,1.35 3.92,1.62 4.2,1.62 3.98,1.78 4.06,2.05 3.8,1.88 3.54,2.05 3.62,1.78 3.4,1.62 3.68,1.62" />
      </g>
    </svg>
  );
}
function FlagTR() {
  return (
    <svg viewBox="0 0 60 40" className="w-full h-full block">
      <rect width="60" height="40" fill="#E30A17" />
      <circle cx="22" cy="20" r="8" fill="#fff" />
      <circle cx="24.5" cy="20" r="6.4" fill="#E30A17" />
      <polygon fill="#fff" points="31,20 36.5,18.2 33.1,23 33.1,17 36.5,21.8" />
    </svg>
  );
}

const FLAGS: { code: Lang; label: string; Flag: () => ReactElement }[] = [
  { code: "de", label: "Deutsch", Flag: FlagDE },
  { code: "en", label: "English", Flag: FlagGB },
  { code: "ar", label: "العربية", Flag: FlagSY },
  { code: "tr", label: "Türkçe", Flag: FlagTR },
];

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center gap-3">
      {FLAGS.map(({ code, label, Flag }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-label={label}
          title={label}
          className={`w-10 h-7 overflow-hidden border transition-all ${
            lang === code
              ? "border-white opacity-100 scale-110"
              : "border-[#2d2d2d] opacity-50 hover:opacity-100 hover:border-white"
          }`}
        >
          <Flag />
        </button>
      ))}
    </div>
  );
}
