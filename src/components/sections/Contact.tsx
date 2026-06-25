import { useState, type FormEvent } from "react";
import { useLang } from "@/lib/i18n";

type Status = "idle" | "sending" | "success" | "error";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

export function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data: Record<string, string> = { "form-name": "contact" };
    fd.forEach((v, k) => {
      data[k] = typeof v === "string" ? v : "";
    });
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-[#111111] text-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-xs uppercase tracking-[0.3em] text-[#888888] mb-6">
          {t("contact_title")}
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-16">{t("contact_title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-5 text-[#d4d4d4]">
            <div className="flex items-start gap-4">
              <span>📍</span>
              <span className="whitespace-pre-line">{t("contact_address")}</span>
            </div>
            <div className="flex items-start gap-4">
              <span>📧</span>
              <span>
                {t("f_fallback")}{" "}
                <a
                  href="mailto:info@swift-assets.de"
                  className="text-white underline underline-offset-4 hover:text-[#d4d4d4]"
                >
                  info@swift-assets.de
                </a>
              </span>
            </div>
            <div className="flex items-start gap-4">
              <span>🏢</span>
              <span>{t("contact_hr")}</span>
            </div>
            <div className="flex items-start gap-4">
              <span>📋</span>
              <span>{t("contact_tax")}</span>
            </div>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={onSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Do not fill: <input name="bot-field" />
              </label>
            </p>
            <input
              required
              name="name"
              placeholder={t("f_name")}
              className="w-full bg-transparent border border-[#2d2d2d] focus:border-white px-4 py-3 outline-none placeholder:text-[#888888]"
            />
            <input
              required
              type="email"
              name="email"
              placeholder={t("f_email")}
              className="w-full bg-transparent border border-[#2d2d2d] focus:border-white px-4 py-3 outline-none placeholder:text-[#888888]"
            />
            <input
              name="phone"
              placeholder={t("f_phone")}
              className="w-full bg-transparent border border-[#2d2d2d] focus:border-white px-4 py-3 outline-none placeholder:text-[#888888]"
            />
            <input
              name="company"
              placeholder={t("f_company")}
              className="w-full bg-transparent border border-[#2d2d2d] focus:border-white px-4 py-3 outline-none placeholder:text-[#888888]"
            />
            <textarea
              required
              name="message"
              placeholder={t("f_msg")}
              rows={5}
              className="w-full bg-transparent border border-[#2d2d2d] focus:border-white px-4 py-3 outline-none placeholder:text-[#888888] resize-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-white text-black font-semibold py-4 hover:bg-[#d4d4d4] transition-colors disabled:opacity-60"
            >
              {status === "sending" ? t("f_sending") : t("f_send")}
            </button>
            {status === "success" && (
              <p className="text-sm text-green-400 pt-2" role="status">
                {t("f_success")}
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400 pt-2" role="alert">
                {t("f_error")}
              </p>
            )}
            <p className="text-xs text-[#888888] pt-2">{t("f_note")}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
