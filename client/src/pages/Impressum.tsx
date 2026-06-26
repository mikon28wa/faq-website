import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Impressum() {
  return (
    <>
      <SEO
        title="Impressum | KI Substitutionsmedizin"
        description="Impressum der Website für KI in der Substitutionsmedizin mit Kontaktdaten und rechtlichen Informationen."
        canonical="https://mikon28wa.github.io/faq-website/impressum"
      />
      
      <div className="min-h-screen bg-background">
        <div className="container max-w-7xl py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-8">
              Impressum
            </h1>

            <div className="space-y-8 prose dark:prose-invert">
              <section className="bg-card rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Angaben gemäß § 5 TMG
                </h2>
                <p>
                  <strong>Betreiber dieser Website:</strong><br />
                  Praxis für Substitutionsmedizin<br />
                  Musterstraße 123<br />
                  10115 Berlin
                </p>
              </section>

              <section className="bg-card rounded-lg p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Vertreten durch:
                </h2>
                <p>
                  Dr. med. Max Mustermann<br />
                  Facharzt für Psychiatrie und Psychotherapie
                </p>
              </section>

              <section className="bg-card rounded-lg p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Kontakt
                </h2>
                <p>
                  Telefon: +49 (0)30 1234567<br />
                  Telefax: +49 (0)30 1234568<br />
                  E-Mail: <a href="mailto:info@substitutionsmedizin.de" className="text-primary hover:underline">
                    info@substitutionsmedizin.de
                  </a>
                </p>
              </section>

              <section className="bg-card rounded-lg p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Berufsbezeichnung und berufsrechtliche Regelungen
                </h2>
                <p>
                  <strong>Berufsbezeichnung:</strong> Arzt<br />
                  <strong>Zuständige Kammer:</strong> Ärztekammer Berlin<br />
                  <strong>Berufsrechtliche Regelungen:</strong> Bundesärzteordnung (BÄO)
                </p>
              </section>

              <section className="bg-card rounded-lg p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Hinweis auf EU-Streitbeilegung
                </h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                  <br />
                  <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:underline">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  <br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <div className="mt-8 pt-6 border-t border-border">
                <Link href="/" className="text-primary hover:underline">
                  Zurück zur Startseite
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}