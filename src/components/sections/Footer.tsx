import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-black text-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="flex md:justify-start justify-center">
            <Logo invert />
          </div>
          <div className="text-center text-xs text-[#888888] tracking-wide">
            © 2025 Swift Assets UG (Haftungsbeschränkt)
          </div>
          <div className="flex md:justify-end justify-center">
            <LanguageSwitcher />
          </div>
        </div>
        <nav className="mt-8 flex justify-center gap-6 text-[12px] tracking-wide">
          <Link to="/impressum" className="text-[#bdbdbd] transition-colors hover:text-white">
            Impressum
          </Link>
          <Link to="/datenschutz" className="text-[#bdbdbd] transition-colors hover:text-white">
            Datenschutz
          </Link>
        </nav>
        <div className="mt-6 border-t border-[#1a1a1a] pt-6 text-center text-[11px] text-[#888888]">
          {t("footer_rights")}
        </div>
      </div>
    </footer>
  );
}
