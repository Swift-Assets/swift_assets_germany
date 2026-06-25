import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "de" | "en" | "ar" | "tr";

type Dict = Record<string, string | string[]>;

const T: Record<Lang, Dict> = {
  de: {
    nav_home: "Start",
    nav_about: "Über uns",
    nav_services: "Leistungen",
    nav_specialty: "Spezialgebiet",
    nav_contact: "Kontakt",
    nav_portal: "Portal",
    hero_title: "Vermögenswerte. Schnell. Sicher.",
    hero_sub:
      "Wir erwerben und verwerten Insolvenzmassen — mit Fokus auf medizinische und pharmazeutische Güter.",
    hero_cta: "Kontakt aufnehmen",
    about_title: "Über uns",
    about_body:
      "Swift Assets UG ist ein junges, dynamisches Handelsunternehmen mit Sitz in Solingen, Deutschland. Wir sind spezialisiert auf den Erwerb, die Bewertung, den Transport, die Lagerung und den Wiederverkauf von Vermögenswerten aus Insolvenzverfahren — insbesondere aus dem medizinischen und pharmazeutischen Bereich.",
    services_title: "Leistungen",
    sv1_t: "Erwerb von Vermögenswerten",
    sv1_d:
      "Strategischer Erwerb von Vermögenswerten aus Insolvenzverfahren, Unternehmensrestrukturierungen und Sondersituationen.",
    sv2_t: "Verwertung von Vermögenswerten",
    sv2_d:
      "Effiziente Umwandlung von Sachwerten in liquide Mittel über etablierte Kanäle und Partnernetzwerke.",
    sv3_t: "Handelsvermittlung",
    sv3_d:
      "Ermöglichung handelsrechtlich konformer Vermittlungslösungen für pharmazeutische Produkte und regulierte Güter, soweit gesetzlich zulässig. Swift Assets tritt als Vermittler auf und erwirbt solche Güter nicht auf eigene Rechnung.",
    sv4_t: "Bestandsbewertung",
    sv4_d:
      "Professionelle Bestandsaufnahme, Katalogisierung und Bewertung vor Ort über verschiedene Vermögensklassen hinweg.",
    sv5_t: "Koordination externer Experten",
    sv5_d:
      "Koordination mit unabhängigen externen Spezialisten für Vermögensbewertung, Due Diligence, Asset Assessment und Optimierung der Verwertung.",
    sv6_t: "Marktforschung & Identifikation von Chancen",
    sv6_d:
      "Kontinuierliche Marktbeobachtung zur Identifikation von Erwerbs- und Vermittlungsmöglichkeiten in regulierten und unregulierten Sektoren.",
    sv7_t: "Logistikkoordination",
    sv7_d:
      "Durchgängige Koordination von sicherem Transport, Lagerung und konformer Handhabung – einschließlich temperaturgeführter Umgebungen.",
    sv8_t: "Strategische Beratung",
    sv8_d:
      "Beratungsleistungen für Stakeholder bei der Verwertung von Vermögenswerten, Restrukturierungen und grenzüberschreitenden Handelstransaktionen.",
    process_eyebrow: "Unser Prozess",
    process_title: "Ein strukturierter Weg von der Beschaffung bis zur Umsetzung.",
    process_steps: [
      "Entdeckung",
      "Bewertung",
      "Expertenprüfung",
      "Handelsvermittlung",
      "Umsetzung",
    ],
    process_body:
      "Unser Ansatz kombiniert strategische Beschaffung, Marktintelligenz, Vermittlungskompetenz und die Unterstützung externer Spezialisten, um den Wert von Vermögenswerten und die Effizienz der Umsetzung zu maximieren.",
    spec_title: "Unser Spezialgebiet: Apotheken & Kliniken",
    spec_intro:
      "Wir verfügen über ein einzigartiges Netzwerk für den Ankauf und die Weiterverwertung von:",
    spec_list: [
      "Apothekenpflichtigen Medikamenten aller Art",
      "Betäubungsmitteln und verschreibungspflichtigen Präparaten",
      "Kühlkettenprodukten und temperaturempfindlichen Waren",
      "Laborchemikalien und pharmazeutischen Rohstoffen",
      "Medizinischen Verbrauchsmaterialien",
      "Pflegeartikeln und Hilfsmitteln",
      "Kosmetika und Hautpflegeprodukten",
      "Ausstattung von Arztpraxen, Kliniken und Pflegeheimen",
    ],
    spec_box:
      "Wir garantieren eine diskrete, schnelle und rechtskonforme Abwicklung — auch bei sensiblen Warengruppen wie Betäubungsmitteln.",
    contact_title: "Kontakt",
    contact_address: "Konrad-Adenauer-Straße 8\n42651 Solingen, Deutschland",
    contact_hr: "Handelsregister: [wird nachgetragen]",
    contact_tax: "Steuernummer: [wird nachgetragen]",
    f_name: "Name",
    f_email: "E-Mail",
    f_msg: "Nachricht",
    f_send: "Senden",
    f_phone: "Telefon (optional)",
    f_company: "Unternehmen (optional)",
    f_sending: "Wird gesendet…",
    f_success: "Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns zeitnah bei Ihnen.",
    f_error:
      "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut oder schreiben Sie direkt an info@swift-assets.de",
    f_fallback: "Oder schreiben Sie uns direkt an",
    f_note: "Wir antworten innerhalb von 24 Stunden.",
    footer_rights: "Alle Rechte vorbehalten",
    portal_title: "Internes Portal",
    portal_email: "E-Mail",
    portal_password: "Passwort",
    portal_login: "Anmelden",
    portal_back: "← Zurück zur Website",
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_specialty: "Specialty",
    nav_contact: "Contact",
    nav_portal: "Portal",
    hero_title: "Assets. Fast. Secure.",
    hero_sub:
      "We acquire and liquidate insolvency assets — specializing in medical and pharmaceutical goods.",
    hero_cta: "Get in Touch",
    about_title: "About Us",
    about_body:
      "Swift Assets UG is a young, dynamic trading company based in Solingen, Germany. We specialize in acquiring, evaluating, transporting, storing and reselling assets from insolvency proceedings — with a particular focus on medical and pharmaceutical assets.",
    services_title: "Services",
    sv1_t: "Asset Acquisition",
    sv1_d:
      "Strategic acquisition of assets from insolvency proceedings, corporate restructurings and special situations.",
    sv2_t: "Asset Liquidation",
    sv2_d:
      "Efficient conversion of tangible assets into liquidity through established channels and partner networks.",
    sv3_t: "Commercial Brokerage",
    sv3_d:
      "Facilitation of legally compliant intermediation solutions for pharmaceutical products and regulated goods, where permitted by law. Swift Assets acts solely as an intermediary and does not acquire such goods on its own account.",
    sv4_t: "Inventory Evaluation",
    sv4_d:
      "Professional on-site inventory, cataloguing and valuation across multiple asset classes.",
    sv5_t: "External Expert Coordination",
    sv5_d:
      "Coordination with independent external specialists for asset valuation, due diligence, asset assessment and liquidation optimization.",
    sv6_t: "Market Research & Opportunity Identification",
    sv6_d:
      "Continuous market monitoring to identify acquisition and brokerage opportunities in regulated and unregulated sectors.",
    sv7_t: "Logistics Coordination",
    sv7_d:
      "End-to-end coordination of secure transport, storage and compliant handling — including temperature-controlled environments.",
    sv8_t: "Strategic Consulting",
    sv8_d:
      "Advisory services for stakeholders in asset liquidation, restructuring and cross-border commercial transactions.",
    process_eyebrow: "Our Process",
    process_title: "A structured path from sourcing to execution.",
    process_steps: ["Discovery", "Evaluation", "Expert Review", "Brokerage", "Execution"],
    process_body:
      "Our approach combines strategic sourcing, market intelligence, brokerage expertise and the support of external specialists to maximize asset value and execution efficiency.",
    spec_title: "Our Specialty: Pharmacies & Clinics",
    spec_intro: "We have a unique network for the purchase and reuse of:",
    spec_list: [
      "Prescription medication of all kinds",
      "Controlled substances and prescription-only preparations",
      "Cold-chain products and temperature-sensitive goods",
      "Laboratory chemicals and pharmaceutical raw materials",
      "Medical consumables",
      "Care products and aids",
      "Cosmetics and skin care products",
      "Equipment from medical practices, clinics and care homes",
    ],
    spec_box:
      "We guarantee discreet, fast and legally compliant processing — even for sensitive goods such as controlled substances.",
    contact_title: "Contact",
    contact_address: "Konrad-Adenauer-Straße 8\n42651 Solingen, Germany",
    contact_hr: "Commercial register: [to be added]",
    contact_tax: "Tax ID: [to be added]",
    f_name: "Name",
    f_email: "Email",
    f_msg: "Message",
    f_send: "Send",
    f_phone: "Phone (optional)",
    f_company: "Company (optional)",
    f_sending: "Sending…",
    f_success: "Your message has been sent successfully. We will get back to you shortly.",
    f_error:
      "The message could not be sent. Please try again later or write directly to info@swift-assets.de",
    f_fallback: "Or write us directly at",
    f_note: "We respond within 24 hours.",
    footer_rights: "All rights reserved",
    portal_title: "Internal Portal",
    portal_email: "Email",
    portal_password: "Password",
    portal_login: "Login",
    portal_back: "← Back to site",
  },
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_services: "الخدمات",
    nav_specialty: "تخصصنا",
    nav_contact: "تواصل",
    nav_portal: "البوابة",
    hero_title: "الأصول. بسرعة. بأمان.",
    hero_sub: "نشتري ونُسيّل أصول الإفلاس — بتخصص في المواد الطبية والصيدلانية.",
    hero_cta: "تواصل معنا",
    about_title: "من نحن",
    about_body:
      "Swift Assets UG شركة تجارية ناشئة وديناميكية مقرها زولينغن، ألمانيا. متخصصون في شراء وتقييم ونقل وتخزين وإعادة بيع الأصول الناتجة عن الإفلاس، مع تركيز خاص على القطاع الطبي والصيدلاني.",
    services_title: "الخدمات",
    sv1_t: "الاستحواذ على الأصول",
    sv1_d: "استحواذ استراتيجي على الأصول من إجراءات الإفلاس وإعادة هيكلة الشركات والحالات الخاصة.",
    sv2_t: "تسييل الأصول",
    sv2_d: "تحويل فعّال للأصول العينية إلى سيولة عبر قنوات راسخة وشبكات شركاء.",
    sv3_t: "الوساطة التجارية",
    sv3_d:
      "تسهيل حلول وساطة متوافقة قانونياً للمنتجات الصيدلانية والسلع الخاضعة للتنظيم، حيثما يسمح القانون. تعمل Swift Assets كوسيط فقط ولا تشتري هذه السلع لحسابها الخاص.",
    sv4_t: "تقييم المخزون",
    sv4_d: "جرد وتصنيف وتقييم احترافي في الموقع لمختلف فئات الأصول.",
    sv5_t: "تنسيق الخبراء الخارجيين",
    sv5_d:
      "التنسيق مع متخصصين خارجيين مستقلين لتقييم الأصول والعناية الواجبة وتحسين عمليات التسييل.",
    sv6_t: "أبحاث السوق وتحديد الفرص",
    sv6_d: "مراقبة مستمرة للسوق لتحديد فرص الاستحواذ والوساطة في القطاعات المنظمة وغير المنظمة.",
    sv7_t: "تنسيق الخدمات اللوجستية",
    sv7_d:
      "تنسيق شامل للنقل الآمن والتخزين والمناولة المتوافقة — بما في ذلك البيئات المتحكم بدرجة حرارتها.",
    sv8_t: "الاستشارات الاستراتيجية",
    sv8_d:
      "خدمات استشارية لأصحاب المصلحة في تسييل الأصول وإعادة الهيكلة والمعاملات التجارية العابرة للحدود.",
    process_eyebrow: "عمليتنا",
    process_title: "مسار منظم من التوريد إلى التنفيذ.",
    process_steps: ["الاكتشاف", "التقييم", "مراجعة الخبراء", "الوساطة التجارية", "التنفيذ"],
    process_body:
      "يجمع نهجنا بين التوريد الاستراتيجي وذكاء السوق وخبرة الوساطة ودعم المتخصصين الخارجيين لتعظيم قيمة الأصول وكفاءة التنفيذ.",
    spec_title: "تخصصنا: الصيدليات والعيادات",
    spec_intro: "نمتلك شبكة فريدة لشراء وإعادة تسويق:",
    spec_list: [
      "الأدوية الموصوفة بجميع أنواعها",
      "المواد المخدرة والمستحضرات التي تتطلب وصفة طبية",
      "منتجات سلسلة التبريد والبضائع الحساسة للحرارة",
      "الكيماويات المخبرية والمواد الخام الصيدلانية",
      "المستهلكات الطبية",
      "منتجات الرعاية والمساعدات",
      "مستحضرات التجميل والعناية بالبشرة",
      "تجهيزات العيادات والمستشفيات ودور الرعاية",
    ],
    spec_box: "نضمن معالجة سرية وسريعة ومتوافقة قانونياً — حتى للبضائع الحساسة كالمواد المخدرة.",
    contact_title: "تواصل معنا",
    contact_address: "Konrad-Adenauer-Straße 8\n42651 زولينغن، ألمانيا",
    contact_hr: "السجل التجاري: [يضاف لاحقاً]",
    contact_tax: "الرقم الضريبي: [يضاف لاحقاً]",
    f_name: "الاسم",
    f_email: "البريد الإلكتروني",
    f_msg: "الرسالة",
    f_send: "إرسال",
    f_phone: "الهاتف (اختياري)",
    f_company: "الشركة (اختياري)",
    f_sending: "جارٍ الإرسال…",
    f_success: "تم إرسال رسالتك بنجاح. سنقوم بالرد عليك قريبًا.",
    f_error: "تعذر إرسال الرسالة. يرجى المحاولة لاحقًا أو مراسلتنا مباشرة على info@swift-assets.de",
    f_fallback: "أو راسلنا مباشرة على",
    f_note: "نرد خلال 24 ساعة.",
    footer_rights: "جميع الحقوق محفوظة",
    portal_title: "البوابة الداخلية",
    portal_email: "البريد الإلكتروني",
    portal_password: "كلمة المرور",
    portal_login: "تسجيل الدخول",
    portal_back: "← العودة إلى الموقع",
  },
  tr: {
    nav_home: "Ana Sayfa",
    nav_about: "Hakkımızda",
    nav_services: "Hizmetler",
    nav_specialty: "Uzmanlık",
    nav_contact: "İletişim",
    nav_portal: "Portal",
    hero_title: "Varlıklar. Hızlı. Güvenli.",
    hero_sub:
      "İflas varlıklarını satın alır ve nakde çeviririz — tıbbi ve farmasötik mallara odaklanarak.",
    hero_cta: "İletişime Geç",
    about_title: "Hakkımızda",
    about_body:
      "Swift Assets UG, Solingen, Almanya merkezli genç ve dinamik bir ticaret şirketidir. İflas süreçlerinden çıkan varlıkların satın alınması, değerlendirilmesi, taşınması, depolanması ve yeniden satışında uzmanlaşıyoruz.",
    services_title: "Hizmetler",
    sv1_t: "Varlık Edinimi",
    sv1_d:
      "İflas süreçleri, kurumsal yeniden yapılandırmalar ve özel durumlardan stratejik varlık edinimi.",
    sv2_t: "Varlık Tasfiyesi",
    sv2_d:
      "Yerleşik kanallar ve iş ortağı ağları aracılığıyla maddi varlıkların verimli şekilde nakde dönüştürülmesi.",
    sv3_t: "Ticari Aracılık",
    sv3_d:
      "Yasaların izin verdiği ölçüde farmasötik ürünler ve düzenlemeye tabi mallar için yasal uyumlu aracılık çözümleri. Swift Assets yalnızca aracı olarak hareket eder ve bu malları kendi hesabına satın almaz.",
    sv4_t: "Envanter Değerlendirme",
    sv4_d: "Çeşitli varlık sınıflarında profesyonel yerinde envanter, kataloglama ve değerleme.",
    sv5_t: "Harici Uzman Koordinasyonu",
    sv5_d:
      "Varlık değerleme, durum tespiti ve tasfiye optimizasyonu için bağımsız harici uzmanlarla koordinasyon.",
    sv6_t: "Pazar Araştırması ve Fırsat Tespiti",
    sv6_d:
      "Düzenlenmiş ve düzenlenmemiş sektörlerde edinim ve aracılık fırsatlarını belirlemek için sürekli pazar takibi.",
    sv7_t: "Lojistik Koordinasyonu",
    sv7_d:
      "Sıcaklık kontrollü ortamlar dahil olmak üzere güvenli taşıma, depolama ve uyumlu elleçlemenin uçtan uca koordinasyonu.",
    sv8_t: "Stratejik Danışmanlık",
    sv8_d:
      "Varlık tasfiyesi, yeniden yapılandırma ve sınır ötesi ticari işlemler için paydaşlara danışmanlık hizmetleri.",
    process_eyebrow: "Sürecimiz",
    process_title: "Tedarikten uygulamaya yapılandırılmış bir yol.",
    process_steps: ["Keşif", "Değerlendirme", "Uzman İncelemesi", "Aracılık", "Uygulama"],
    process_body:
      "Yaklaşımımız; stratejik tedarik, pazar zekası, aracılık uzmanlığı ve harici uzmanların desteğini birleştirerek varlık değerini ve uygulama verimliliğini en üst düzeye çıkarır.",
    spec_title: "Uzmanlığımız: Eczaneler & Klinikler",
    spec_intro: "Satın alma ve yeniden değerlendirme için benzersiz bir ağa sahibiz:",
    spec_list: [
      "Her türlü reçeteli ilaç",
      "Kontrollü maddeler ve reçeteye tabi preparatlar",
      "Soğuk zincir ürünleri ve sıcaklığa duyarlı mallar",
      "Laboratuvar kimyasalları ve farmasötik hammaddeler",
      "Tıbbi sarf malzemeleri",
      "Bakım ürünleri ve yardımcı gereçler",
      "Kozmetik ve cilt bakım ürünleri",
      "Muayenehane, klinik ve bakımevi donanımı",
    ],
    spec_box:
      "Uyuşturucu maddeler gibi hassas ürünler dahil olmak üzere gizli, hızlı ve yasal uyumlu işlem garantisi veriyoruz.",
    contact_title: "İletişim",
    contact_address: "Konrad-Adenauer-Straße 8\n42651 Solingen, Almanya",
    contact_hr: "Ticaret sicili: [eklenecek]",
    contact_tax: "Vergi numarası: [eklenecek]",
    f_name: "Ad",
    f_email: "E-posta",
    f_msg: "Mesaj",
    f_send: "Gönder",
    f_phone: "Telefon (opsiyonel)",
    f_company: "Şirket (opsiyonel)",
    f_sending: "Gönderiliyor…",
    f_success: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
    f_error:
      "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin veya doğrudan info@swift-assets.de adresine yazın",
    f_fallback: "Veya doğrudan bize yazın",
    f_note: "24 saat içinde yanıt veriyoruz.",
    footer_rights: "Tüm hakları saklıdır",
    portal_title: "Dahili Portal",
    portal_email: "E-posta",
    portal_password: "Şifre",
    portal_login: "Giriş",
    portal_back: "← Siteye dön",
  },
};

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: string) => string;
  tArr: (k: string) => string[];
  dir: "ltr" | "rtl";
}

const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved && T[saved]) setLangState(saved);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (k: string) => {
    const v = T[lang][k];
    return typeof v === "string" ? v : "";
  };
  const tArr = (k: string) => {
    const v = T[lang][k];
    return Array.isArray(v) ? v : [];
  };

  return (
    <LangCtx.Provider value={{ lang, setLang, t, tArr, dir: lang === "ar" ? "rtl" : "ltr" }}>
      {children}
    </LangCtx.Provider>
  );
}

export function useLang() {
  const c = useContext(LangCtx);
  if (!c) throw new Error("useLang must be used inside LangProvider");
  return c;
}
