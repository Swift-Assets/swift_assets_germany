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
        <div className="mt-10 pt-6 border-t border-[#1a1a1a] text-center text-[11px] text-[#888888]">
          {t("footer_rights")}
        </div>
      </div>
    </footer>
  );
}
