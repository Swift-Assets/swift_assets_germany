import { useState } from "react";

import { useLang } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

const items = [
  { id: "home", k: "nav_home" },
  { id: "about", k: "nav_about" },
  { id: "services", k: "nav_services" },
  { id: "specialty", k: "nav_specialty" },
  { id: "contact", k: "nav_contact" },
];

export function Nav() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };
  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur text-white border-b border-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-24 flex items-center justify-between gap-6">
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center"
          aria-label="Swift Assets"
        >
          <Logo invert size="sm" />
        </button>

        <nav className="hidden md:flex items-center gap-9 text-[13px] font-medium tracking-wide">
          {items.map((i) => (
            <button
              key={i.id}
              onClick={() => scrollTo(i.id)}
              className="text-[#bdbdbd] hover:text-white transition-colors"
            >
              {t(i.k)}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <LanguageSwitcher />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />

          <button
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="w-9 h-9 flex flex-col items-center justify-center gap-1 border border-white/40"
          >
            <span
              className={`block w-4 h-px bg-white transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`block w-4 h-px bg-white transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#1a1a1a] bg-black">
          <nav className="px-6 py-5 flex flex-col gap-4 text-sm font-medium tracking-wide">
            {items.map((i) => (
              <button
                key={i.id}
                onClick={() => scrollTo(i.id)}
                className="text-[#bdbdbd] hover:text-white transition-colors text-left"
              >
                {t(i.k)}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
