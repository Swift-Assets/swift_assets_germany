import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/sections/Footer";

export function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur text-white border-b border-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-24 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center" aria-label="Swift Assets">
            <Logo invert size="sm" />
          </Link>
          <Link
            to="/"
            className="text-[13px] font-medium tracking-wide text-[#bdbdbd] hover:text-white transition-colors"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-[#111111]">{title}</h1>
          <div className="space-y-8 leading-relaxed text-[#333333]">{children}</div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
