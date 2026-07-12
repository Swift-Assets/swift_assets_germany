import { useEffect } from "react";
import { LegalLayout } from "@/components/LegalLayout";

export default function Impressum() {
  useEffect(() => {
    document.title = "Impressum — Swift Assets UG";
  }, []);

  return (
    <LegalLayout title="Impressum">
      <p className="text-sm text-[#888888]">Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</p>

      {/* Schreibweisen beabsichtigt und KEIN Tippfehler:
          "Aljasem" (Himmat, ein s) vs. "Aljassem" (Mohammad, doppel-s). */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#111111]">Diensteanbieter</h2>
        <p className="whitespace-pre-line">
          {`Swift Assets UG (haftungsbeschränkt) i.G.
Konrad-Adenauer-Straße 8
42651 Solingen
Deutschland`}
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#111111]">Vertreten durch</h2>
        <p className="whitespace-pre-line">
          {`Geschäftsführer: Mohammad Aljassem
Himmat Aljasem (bevollmächtigter Vertreter von Mohammad Aljassem in allen Angelegenheiten der Gesellschaft)`}
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#111111]">Kontakt</h2>
        <p className="whitespace-pre-line">
          {`Telefon: 017643788687
E-Mail: info@swift-assets.de`}
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#111111]">Registereintrag</h2>
        <p className="whitespace-pre-line">
          {`Registergericht: Amtsgericht Wuppertal
Handelsregisternummer: Die Gesellschaft befindet sich in Gründung (i.G.); die Eintragung in das Handelsregister ist beantragt. Die HRB-Nummer wird nach Erteilung an dieser Stelle nachgetragen.`}
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#111111]">Umsatzsteuer-ID</h2>
        <p className="whitespace-pre-line">
          {`Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
Die Erteilung ist beantragt; die USt-IdNr. wird nach Vergabe an dieser Stelle nachgetragen.`}
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#111111]">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <p className="whitespace-pre-line">
          {`Himmat Aljasem und Mohammad Aljassem
Konrad-Adenauer-Straße 8, 42651 Solingen`}
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#111111]">Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#111111]">Haftung für Links</h2>
        <p>
          Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf deren Inhalte
          wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
          übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
          Betreiber der Seiten verantwortlich.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-semibold text-[#111111]">Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die
          Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
          bzw. Erstellers.
        </p>
      </div>
    </LegalLayout>
  );
}
