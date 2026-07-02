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
    purpose_eyebrow: "Unternehmensgegenstand",
    purpose_title: "Erwerb und Verwertung notleidender Unternehmen",
    purpose_body: [
      "Gegenstand des Unternehmens ist der Erwerb und die Verwertung notleidender Unternehmen sowie von Unternehmensvermögen im Ganzen oder in Teilen, sei es im eigenen Namen und auf eigene Rechnung oder treuhänderisch im fremden Namen und für fremde Rechnung im Auftrag von Unternehmen und Privatpersonen.",
      "Die Tätigkeit der Gesellschaft erstreckt sich branchenübergreifend auf sämtliche Wirtschaftszweige, wobei ein besonderer Schwerpunkt auf der Verwertung von Vermögensgegenständen des Gesundheitssektors liegt, insbesondere von Unternehmen des Gesundheitswesens, Krankenhaus- und Klinikausstattungen, Medizingeräten und medizintechnischen Erzeugnissen, medizinischen Verbrauchsmaterialien, kosmetischen Erzeugnissen, Nahrungsergänzungsmitteln sowie Produkten des öffentlichen Gesundheitswesens und der persönlichen Hygiene.",
      "Die Gesellschaft erbringt darüber hinaus Dienstleistungen der gezielten Recherche nach Erwerbsgelegenheiten nach Maßgabe der jeweiligen Vorgaben ihrer Auftraggeber sowie die Bewertung von Übernahmegelegenheiten für Dritte, einschließlich der Prüfung von Vermögensgegenständen auf ihre Erwerbs- und Weiterveräußerungsfähigkeit und der Ermittlung ihres Potenzials zur Erzielung einer bestmöglichen Rendite.",
      "Die Gesellschaft ist ferner berechtigt, den Export von Waren in Drittländer außerhalb der Europäischen Union zu vermitteln und durchzuführen sowie die damit verbundene Zollabwicklung und den See-, Luft- und Landtransport nach Maßgabe des jeweiligen Auftrags und Bestimmungsortes zu organisieren.",
      "Die Prüfung von Rechnungen und Eigentumsübertragungsdokumenten auf ihre Rechtmäßigkeit und Gesetzeskonformität erfolgt unter Hinzuziehung zugelassener Rechtsvertreter.",
      "Die Gesellschaft ist zu allen Geschäften und Maßnahmen berechtigt, die dem Gegenstand des Unternehmens unmittelbar oder mittelbar zu dienen geeignet sind. Sie kann sich an anderen Unternehmen gleicher oder ähnlicher Art beteiligen, solche Unternehmen erwerben, veräußern und vertreten sowie Zweigniederlassungen im In- und Ausland errichten.",
    ],
    services_title: "Leistungen",
    svc1_t: "Erwerb & Verwertung",
    svc1_f: "Ganz oder in Teilen.",
    svc1_d:
      "Wir erwerben notleidende Unternehmen und Unternehmensvermögen und überführen Sachwerte effizient in liquide Mittel — über etablierte Kanäle und ein belastbares Partnernetzwerk.",
    svc2_t: "Eigenhandel & Treuhand",
    svc2_f: "Im eigenen Namen oder treuhänderisch.",
    svc2_d:
      "Wir handeln im eigenen Namen und auf eigene Rechnung ebenso wie treuhänderisch im Auftrag von Unternehmen und Privatpersonen — diskret und rechtssicher.",
    svc3_t: "Individuelle Zielsuche",
    svc3_f: "Nach Ihren Vorgaben.",
    svc3_d:
      "Auf Wunsch recherchieren wir gezielt nach konkreten Erwerbsgelegenheiten, die exakt den Vorgaben unserer Auftraggeber entsprechen.",
    svc4_t: "Bewertung & Due Diligence",
    svc4_f: "Chancen und Assets.",
    svc4_d:
      "Wir bewerten Übernahmegelegenheiten für Dritte, prüfen Vermögensgegenstände auf ihre Erwerbs- und Weiterveräußerungsfähigkeit und ermitteln ihr Potenzial für eine bestmögliche Rendite.",
    svc5_t: "Export & Logistik",
    svc5_f: "Weltweit, auch außerhalb der EU.",
    svc5_d:
      "Wir vermitteln und realisieren den Export in Drittländer und organisieren die Zollabwicklung sowie den See-, Luft- und Landtransport nach Bedarf und Bestimmungsort.",
    svc6_t: "Rechtliche Prüfung",
    svc6_f: "Geprüft durch zugelassene Vertreter.",
    svc6_d:
      "Rechnungen und Eigentumsübertragungsdokumente prüfen wir über zugelassene Rechtsvertreter auf Rechtmäßigkeit und vollständige Gesetzeskonformität.",
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
      "Vermittlung verschreibungspflichtiger und apothekenpflichtiger Ware für zugelassene Apotheken — als Vermittler",
      "Kühlkettenprodukten und temperaturempfindlichen Waren",
      "Laborchemikalien und pharmazeutischen Rohstoffen",
      "Medizinischen Verbrauchsmaterialien",
      "Pflegeartikeln und Hilfsmitteln",
      "Kosmetika und Hautpflegeprodukten",
      "Ausstattung von Arztpraxen, Kliniken und Pflegeheimen",
    ],
    spec_box:
      "Wir garantieren eine diskrete, schnelle und rechtskonforme Abwicklung — auch bei sensiblen und regulierten Warengruppen.",
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
    purpose_eyebrow: "Company Purpose",
    purpose_title: "Acquisition and Liquidation of Distressed Companies",
    purpose_body: [
      "The purpose of the company is the acquisition and liquidation of distressed companies and of corporate assets, in whole or in part — whether in its own name and for its own account, or in a fiduciary capacity in the name of and for the account of others, on behalf of companies and private individuals.",
      "The company's activities extend across all economic sectors, with a particular focus on the liquidation of assets in the healthcare sector — notably healthcare companies, hospital and clinic equipment, medical devices and medical-technology products, medical consumables, cosmetic products, dietary supplements, and products for public health and personal hygiene.",
      "In addition, the company provides services for the targeted search of acquisition opportunities according to each client's specifications, as well as the evaluation of acquisition opportunities for third parties — including the assessment of assets for their acquisition and resale potential and the determination of their capacity to achieve the best possible return.",
      "The company is further entitled to broker and carry out the export of goods to third countries outside the European Union, and to organise the associated customs clearance and sea, air and land transport according to each assignment and destination.",
      "The review of invoices and title-transfer documents for their legality and regulatory compliance is carried out with the involvement of licensed legal representatives.",
      "The company is entitled to conduct all business and take all measures suitable to serve its purpose directly or indirectly. It may participate in, acquire, dispose of and represent other companies of the same or a similar nature, and may establish branch offices in Germany and abroad.",
    ],
    services_title: "Services",
    svc1_t: "Acquisition & Liquidation",
    svc1_f: "In whole or in part.",
    svc1_d:
      "We acquire distressed companies and corporate assets and convert tangible assets efficiently into liquidity — through established channels and a robust partner network.",
    svc2_t: "Principal & Fiduciary",
    svc2_f: "On our own account or in trust.",
    svc2_d:
      "We act in our own name and for our own account, as well as in a fiduciary capacity on behalf of companies and private individuals — discreetly and with legal certainty.",
    svc3_t: "Custom Target Search",
    svc3_f: "To your specifications.",
    svc3_d:
      "On request, we conduct a targeted search for specific acquisition opportunities that precisely match our clients' criteria.",
    svc4_t: "Valuation & Due Diligence",
    svc4_f: "Opportunities and assets.",
    svc4_d:
      "We evaluate acquisition opportunities for third parties, assess assets for their acquisition and resale potential, and determine their capacity for the best possible return.",
    svc5_t: "Export & Logistics",
    svc5_f: "Worldwide, beyond the EU.",
    svc5_d:
      "We broker and execute exports to third countries and organise customs clearance and sea, air and land transport according to need and destination.",
    svc6_t: "Legal Verification",
    svc6_f: "Verified by licensed representatives.",
    svc6_d:
      "We verify invoices and title-transfer documents through licensed legal representatives for legality and full regulatory compliance.",
    process_eyebrow: "Our Process",
    process_title: "A structured path from sourcing to execution.",
    process_steps: ["Discovery", "Evaluation", "Expert Review", "Brokerage", "Execution"],
    process_body:
      "Our approach combines strategic sourcing, market intelligence, brokerage expertise and the support of external specialists to maximize asset value and execution efficiency.",
    spec_title: "Our Specialty: Pharmacies & Clinics",
    spec_intro: "We have a unique network for the purchase and reuse of:",
    spec_list: [
      "Prescription medication of all kinds",
      "Brokerage of prescription-only and pharmacy-only goods for licensed pharmacies — as an intermediary",
      "Cold-chain products and temperature-sensitive goods",
      "Laboratory chemicals and pharmaceutical raw materials",
      "Medical consumables",
      "Care products and aids",
      "Cosmetics and skin care products",
      "Equipment from medical practices, clinics and care homes",
    ],
    spec_box:
      "We guarantee discreet, fast and legally compliant processing — even for sensitive and regulated goods.",
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
    purpose_eyebrow: "غرض الشركة",
    purpose_title: "الاستحواذ على الشركات المتعثرة وتسييلها",
    purpose_body: [
      "غرض الشركة هو الاستحواذ على الشركات المتعثرة وتسييلها، وكذلك على أصول الشركات كلياً أو جزئياً، سواء باسمها ولحسابها الخاص أو بصفتها وكيلاً أميناً باسم الغير ولحسابه، بتكليف من الشركات والأفراد.",
      "يمتد نشاط الشركة ليشمل جميع القطاعات الاقتصادية دون استثناء، مع تركيز خاص على تسييل أصول القطاع الصحي، ولا سيما شركات الرعاية الصحية، وتجهيزات المستشفيات والعيادات، والأجهزة والمعدات الطبية، والمستهلكات الطبية، ومستحضرات التجميل، والمكملات الغذائية، ومنتجات الصحة العامة والنظافة الشخصية.",
      "تقدّم الشركة إضافةً إلى ذلك خدمات البحث المخصّص عن فرص الاستحواذ وفقاً لتوجيهات كل عميل، وكذلك تقييم فرص الاستحواذ لصالح الغير، بما يشمل فحص الأصول من حيث قابليتها للاستحواذ وإعادة البيع، وتقدير إمكاناتها لتحقيق أعلى عائد ممكن.",
      "كما يحق للشركة التوسّط في تصدير البضائع إلى الدول خارج الاتحاد الأوروبي وتنفيذه، وتنظيم ما يرتبط بذلك من تخليص جمركي ونقل بحري وجوي وبري، وفقاً لكل تكليف ووجهة تصدير.",
      "ويتم فحص الفواتير ووثائق نقل الملكية للتأكد من قانونيتها ومطابقتها للأنظمة، وذلك بالاستعانة بوكلاء قانونيين معتمدين.",
      "وللشركة الحق في مباشرة جميع الأعمال والإجراءات التي تخدم غرضها بشكل مباشر أو غير مباشر، ولها أن تساهم في شركات أخرى مماثلة أو مشابهة، وأن تشتريها وتبيعها وتمثّلها، وأن تنشئ فروعاً داخل ألمانيا وخارجها.",
    ],
    services_title: "الخدمات",
    svc1_t: "الاستحواذ والتسييل",
    svc1_f: "كلياً أو جزئياً.",
    svc1_d:
      "نستحوذ على الشركات المتعثرة وأصولها، ونحوّل الأصول العينية إلى سيولة بكفاءة، عبر قنوات راسخة وشبكة شركاء موثوقة.",
    svc2_t: "بالأصالة والنيابة",
    svc2_f: "باسمنا أو بالنيابة.",
    svc2_d:
      "نتصرّف باسمنا ولحسابنا الخاص، كما نعمل وكلاء أمناء بالنيابة عن الشركات والأفراد — بسرّية وأمان قانوني.",
    svc3_t: "البحث المخصّص",
    svc3_f: "وفق متطلباتك.",
    svc3_d: "بناءً على طلبك، نبحث بدقّة عن فرص استحواذ محدّدة تطابق تماماً متطلبات العميل.",
    svc4_t: "التقييم والعناية الواجبة",
    svc4_f: "الفرص والأصول.",
    svc4_d:
      "نقيّم فرص الاستحواذ لصالح الغير، ونفحص الأصول من حيث قابليتها للاستحواذ وإعادة البيع، ونقدّر إمكاناتها لتحقيق أعلى عائد.",
    svc5_t: "التصدير واللوجستيات",
    svc5_f: "عالمياً، وخارج الاتحاد الأوروبي.",
    svc5_d:
      "نتوسّط في التصدير إلى الدول خارج الاتحاد الأوروبي وننفّذه، وننظّم التخليص الجمركي والشحن البحري والجوي والبري حسب الحاجة والوجهة.",
    svc6_t: "الفحص القانوني",
    svc6_f: "عبر وكلاء قانونيين معتمدين.",
    svc6_d:
      "نفحص الفواتير ووثائق نقل الملكية عبر وكلاء قانونيين معتمدين للتأكد من قانونيتها ومطابقتها الكاملة للأنظمة.",
    process_eyebrow: "عمليتنا",
    process_title: "مسار منظم من التوريد إلى التنفيذ.",
    process_steps: ["الاكتشاف", "التقييم", "مراجعة الخبراء", "الوساطة التجارية", "التنفيذ"],
    process_body:
      "يجمع نهجنا بين التوريد الاستراتيجي وذكاء السوق وخبرة الوساطة ودعم المتخصصين الخارجيين لتعظيم قيمة الأصول وكفاءة التنفيذ.",
    spec_title: "تخصصنا: الصيدليات والعيادات",
    spec_intro: "نمتلك شبكة فريدة لشراء وإعادة تسويق:",
    spec_list: [
      "الأدوية الموصوفة بجميع أنواعها",
      "التوسّط في الأدوية الموصوفة والأدوية التي تُصرف عبر الصيدلية لصالح صيدليات مرخّصة — كوسيط",
      "منتجات سلسلة التبريد والبضائع الحساسة للحرارة",
      "الكيماويات المخبرية والمواد الخام الصيدلانية",
      "المستهلكات الطبية",
      "منتجات الرعاية والمساعدات",
      "مستحضرات التجميل والعناية بالبشرة",
      "تجهيزات العيادات والمستشفيات ودور الرعاية",
    ],
    spec_box: "نضمن معالجة سرية وسريعة ومتوافقة قانونياً — حتى للبضائع الحساسة والمنظّمة.",
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
    purpose_eyebrow: "Şirket Konusu",
    purpose_title: "Sıkıntılı Şirketlerin Devralınması ve Tasfiyesi",
    purpose_body: [
      "Şirketin konusu, sıkıntılı şirketlerin ve şirket varlıklarının bir bütün olarak veya kısmen devralınması ve tasfiyesidir; bu, ister kendi adına ve kendi hesabına, ister şirketlerin ve özel kişilerin talimatıyla başkalarının adına ve hesabına mütevelli sıfatıyla olsun.",
      "Şirketin faaliyetleri, sektör ayrımı gözetmeksizin tüm ekonomik alanlara uzanır; bununla birlikte, özellikle sağlık sektörü varlıklarının tasfiyesine ağırlık verilir; bilhassa sağlık kuruluşları, hastane ve klinik donanımları, tıbbi cihazlar ve tıbbi teknoloji ürünleri, tıbbi sarf malzemeleri, kozmetik ürünler, gıda takviyeleri ile kamu sağlığı ve kişisel hijyen ürünleri.",
      "Şirket ayrıca, müşterilerinin ilgili talimatları doğrultusunda somut devralma fırsatlarının hedefli araştırılması hizmetlerini ve üçüncü kişiler için devralma fırsatlarının değerlendirilmesini sunar; buna, varlıkların devralınabilirlik ve yeniden satılabilirlik açısından incelenmesi ile mümkün olan en yüksek getiriyi sağlama potansiyellerinin belirlenmesi dâhildir.",
      "Şirket ayrıca, malların Avrupa Birliği dışındaki üçüncü ülkelere ihracatına aracılık etmeye ve bunu gerçekleştirmeye, ilgili gümrük işlemlerini ve ilgili siparişe ve varış yerine göre deniz, hava ve kara taşımacılığını organize etmeye yetkilidir.",
      "Faturaların ve mülkiyet devri belgelerinin hukuka uygunluğu ve mevzuata uygunluğu açısından incelenmesi, yetkili hukuki temsilcilerin katılımıyla gerçekleştirilir.",
      "Şirket, konusuna doğrudan veya dolaylı olarak hizmet etmeye elverişli tüm iş ve işlemleri yapmaya yetkilidir. Aynı veya benzer nitelikteki diğer şirketlere iştirak edebilir, bu tür şirketleri devralabilir, devredebilir ve temsil edebilir; yurt içinde ve yurt dışında şubeler kurabilir.",
    ],
    services_title: "Hizmetler",
    svc1_t: "Devralma & Tasfiye",
    svc1_f: "Bir bütün olarak veya kısmen.",
    svc1_d:
      "Sıkıntılı şirketleri ve şirket varlıklarını devralır, maddi varlıkları yerleşik kanallar ve güçlü bir iş ortağı ağı aracılığıyla verimli şekilde nakde dönüştürürüz.",
    svc2_t: "Kendi Adına & Mütevelli",
    svc2_f: "Kendi adımıza veya mütevelli sıfatıyla.",
    svc2_d:
      "Hem kendi adımıza ve kendi hesabımıza hem de şirketler ve özel kişiler adına mütevelli sıfatıyla hareket ederiz — gizlilik ve hukuki güvence içinde.",
    svc3_t: "Özel Hedef Araştırması",
    svc3_f: "Sizin talimatlarınıza göre.",
    svc3_d:
      "Talebiniz üzerine, müşterilerimizin talimatlarına tam olarak uyan somut devralma fırsatlarını hedefli biçimde araştırırız.",
    svc4_t: "Değerleme & Durum Tespiti",
    svc4_f: "Fırsatlar ve varlıklar.",
    svc4_d:
      "Üçüncü kişiler için devralma fırsatlarını değerlendirir, varlıkları devralınabilirlik ve yeniden satılabilirlik açısından inceler ve mümkün olan en yüksek getiri potansiyelini belirleriz.",
    svc5_t: "İhracat & Lojistik",
    svc5_f: "Dünya çapında, AB dışında dahil.",
    svc5_d:
      "Üçüncü ülkelere ihracata aracılık eder ve bunu gerçekleştiririz; gümrük işlemleri ile deniz, hava ve kara taşımacılığını ihtiyaca ve varış yerine göre organize ederiz.",
    svc6_t: "Hukuki İnceleme",
    svc6_f: "Yetkili temsilciler tarafından doğrulanır.",
    svc6_d:
      "Faturaları ve mülkiyet devri belgelerini, yetkili hukuki temsilciler aracılığıyla hukuka ve tam mevzuat uygunluğu açısından inceleriz.",
    process_eyebrow: "Sürecimiz",
    process_title: "Tedarikten uygulamaya yapılandırılmış bir yol.",
    process_steps: ["Keşif", "Değerlendirme", "Uzman İncelemesi", "Aracılık", "Uygulama"],
    process_body:
      "Yaklaşımımız; stratejik tedarik, pazar zekası, aracılık uzmanlığı ve harici uzmanların desteğini birleştirerek varlık değerini ve uygulama verimliliğini en üst düzeye çıkarır.",
    spec_title: "Uzmanlığımız: Eczaneler & Klinikler",
    spec_intro: "Satın alma ve yeniden değerlendirme için benzersiz bir ağa sahibiz:",
    spec_list: [
      "Her türlü reçeteli ilaç",
      "Ruhsatlı eczaneler için reçeteye tabi ve eczaneden satılan ürünlerin aracılığı — aracı olarak",
      "Soğuk zincir ürünleri ve sıcaklığa duyarlı mallar",
      "Laboratuvar kimyasalları ve farmasötik hammaddeler",
      "Tıbbi sarf malzemeleri",
      "Bakım ürünleri ve yardımcı gereçler",
      "Kozmetik ve cilt bakım ürünleri",
      "Muayenehane, klinik ve bakımevi donanımı",
    ],
    spec_box:
      "Hassas ve düzenlemeye tabi ürünler dahil olmak üzere gizli, hızlı ve yasal uyumlu işlem garantisi veriyoruz.",
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
