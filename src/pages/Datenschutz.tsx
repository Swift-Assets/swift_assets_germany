import { useEffect } from "react";
import { LegalLayout } from "@/components/LegalLayout";

export default function Datenschutz() {
  useEffect(() => {
    document.title = "Datenschutzerklärung — Swift Assets UG";
  }, []);

  return (
    <LegalLayout title="Datenschutzerklärung">
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#111111]">1. Verantwortlicher</h2>
        <p className="whitespace-pre-line">
          {`Verantwortlich für die Datenverarbeitung auf dieser Website ist:

Swift Assets UG (haftungsbeschränkt) i.G.
Konrad-Adenauer-Straße 8
42651 Solingen
E-Mail: info@swift-assets.de
Telefon: 017643788687`}
        </p>
        <p className="mt-3">
          Weitere Angaben zum Unternehmen finden Sie in unserem{" "}
          <a href="/impressum" className="underline underline-offset-4 hover:text-black">
            Impressum
          </a>
          .
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#111111]">
          2. Allgemeines zur Datenverarbeitung
        </h2>
        <p>
          Diese Website ist eine rein informative Unternehmenswebsite. Es besteht keine Möglichkeit
          zur Registrierung, kein Benutzerkonto und kein Login-Bereich. Über das Kontaktformular
          hinaus werden keine personenbezogenen Daten aktiv von Ihnen erhoben. Eine Verarbeitung
          personenbezogener Daten findet ausschließlich in dem nachfolgend beschriebenen Umfang
          statt.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#111111]">3. Hosting (Netlify)</h2>
        <p>
          Diese Website wird bei Netlify gehostet (Netlify, Inc., 512 2nd Street, Suite 200, San
          Francisco, CA 94107, USA). Beim Aufruf der Website werden durch den Hosting- Anbieter
          technisch notwendige Verbindungsdaten verarbeitet, um die Website auszuliefern und ihre
          Stabilität und Sicherheit zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an einer sicheren und effizienten Bereitstellung der Website).
          Soweit personenbezogene Daten in ein Drittland (USA) übertragen werden, erfolgt dies auf
          Grundlage geeigneter Garantien.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#111111]">4. Server-Logfiles</h2>
        <p>
          Beim Besuch der Website werden durch den Hosting-Anbieter automatisch Informationen
          erfasst, die Ihr Browser übermittelt (sogenannte Server-Logfiles). Hierzu können gehören:
          aufgerufene Seite, Datum und Uhrzeit des Zugriffs, übertragene Datenmenge, Referrer-URL,
          verwendeter Browsertyp sowie die IP-Adresse. Diese Daten werden zur Gewährleistung des
          technischen Betriebs und der Sicherheit verarbeitet (Art. 6 Abs. 1 lit. f DSGVO) und nicht
          mit anderen Datenquellen zusammengeführt.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#111111]">
          5. Kontaktformular / Kontaktbox
        </h2>
        <p>
          Wenn Sie uns über das Kontaktformular eine Nachricht senden, verarbeiten wir die von Ihnen
          angegebenen Daten: Name und E-Mail-Adresse (Pflichtfelder) sowie optional Telefonnummer,
          Unternehmen und Ihre Nachricht. Die Übermittlung und Zustellung des Formulars erfolgt
          technisch über den Formulardienst „Netlify Forms“ unseres Hosting-Anbieters. Die Daten
          werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
        </p>
        <p className="mt-3">
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Bearbeitung einer vorvertraglichen
          Anfrage) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von
          Anfragen). Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer
          Erhebung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten
          entgegenstehen.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#111111]">6. Kontaktaufnahme per E-Mail</h2>
        <p>
          Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben einschließlich Ihrer
          E-Mail-Adresse zum Zweck der Bearbeitung Ihrer Anfrage gespeichert. Rechtsgrundlage ist
          Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO. Diese Daten geben wir nicht ohne Ihre Einwilligung
          weiter.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#111111]">7. Cookies und Tracking</h2>
        <p>
          Diese Website setzt keine Tracking- oder Analyse-Cookies ein und bindet keine Tracking-,
          Werbe- oder Analysedienste Dritter ein. Es findet kein Profiling statt. Sofern technisch
          notwendige Cookies eingesetzt werden, dienen diese ausschließlich dem ordnungsgemäßen
          Betrieb der Website.
        </p>
        {/* Interner Hinweis (nicht öffentlich anzeigen): Bei späterer Einbindung von
            Analyse-/Marketing-Diensten (z. B. Google Analytics, Meta Pixel) ist diese
            Erklärung anzupassen und ggf. ein Cookie-Banner erforderlich. */}
      </div>

      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#111111]">8. Keine weiteren Funktionen</h2>
        <p>
          Diese Website bietet kein Kundenportal, keinen Login-/Dashboard-Bereich, keinen Newsletter
          und keine Datenbank-gestützte Nutzerverwaltung. Es werden keine personenbezogenen Daten zu
          Werbe- oder Newsletter-Zwecken verarbeitet.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#111111]">9. Ihre Rechte</h2>
        <p>
          Sie haben im Rahmen der gesetzlichen Bestimmungen das Recht auf Auskunft (Art. 15 DSGVO),
          Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung
          (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie ein Widerspruchsrecht (Art. 21
          DSGVO). Zudem steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu.
          Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an: info@swift-assets.de.
        </p>
      </div>

      <p className="text-sm text-[#888888]">Stand: 12. Juli 2026</p>
    </LegalLayout>
  );
}
