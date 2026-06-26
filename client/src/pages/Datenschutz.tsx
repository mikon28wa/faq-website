import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Datenschutz() {
  return (
    <>
      <SEO
        title="Datenschutzerklärung | KI Substitutionsmedizin"
        description="Datenschutzerklärung für die Website zur KI in der Substitutionsmedizin mit Informationen zur Datenverarbeitung."
        canonical="https://mikon28wa.github.io/faq-website/datenschutz"
      />
      
      <div className="min-h-screen bg-background">
        <div className="container max-w-7xl py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-8">
              Datenschutzerklärung
            </h1>

            <div className="space-y-8 prose dark:prose-invert">
              <section className="bg-card rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Datenschutz auf einen Blick
                </h2>
                <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">
                  Allgemeine Hinweise
                </h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.
                </p>
              </section>

              <section className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Datenerfassung auf unserer Website
                </h3>
                <p>
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                </p>
                <p className="mt-2">
                  Praxis für Substitutionsmedizin<br />
                  Musterstraße 123<br />
                  10115 Berlin
                </p>
              </section>

              <section className="bg-card rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Allgemeine Hinweise und Pflichtinformationen
                </h2>
                <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">
                  Datenschutz
                </h3>
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
              </section>

              <section className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Verantwortlicher
                </h3>
                <p>
                  Verantwortlicher für die Datenverarbeitung auf dieser Website ist die Praxis für Substitutionsmedizin, Musterstraße 123, 10115 Berlin.
                </p>
              </section>

              <section className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Ihre Rechte
                </h3>
                <p>
                  Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerruf Ihrer Einwilligung.
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