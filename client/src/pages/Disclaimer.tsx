import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Disclaimer() {
  return (
    <>
      <SEO
        title="Haftungsausschluss | KI Substitutionsmedizin"
        description="Haftungsausschluss und Disclaimer für die Website zur KI in der Substitutionsmedizin."
        canonical="https://mikon28wa.github.io/faq-website/disclaimer"
      />
      
      <div className="min-h-screen bg-background">
        <div className="container max-w-7xl py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-8">
              Haftungsausschluss (Disclaimer)
            </h1>

            <div className="space-y-6 prose dark:prose-invert">
              <section className="bg-card rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Haftung für Inhalte
                </h2>
                <p>
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>
              </section>

              <section className="bg-card rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Haftung für links auf Webseiten Dritter
                </h2>
                <p>
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte können wir keine Gewähr übernehmen.
                </p>
              </section>

              <section className="bg-card rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Urheberrecht
                </h2>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                </p>
              </section>

              <section className="bg-card rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Medizinische Hinweise
                </h2>
                <p>
                  <strong>Wichtiger Hinweis:</strong> Die auf dieser Website bereitgestellten Informationen dienen ausschließlich der allgemeinen Information und ersetzen keinesfalls eine professionelle medizinische Beratung, Diagnose oder Behandlung.
                </p>
                <p className="mt-2">
                  Bei gesundheitlichen Fragen oder Beschwerden wenden Sie sich bitte immer an Ihren Arzt oder Ihre Ärztin.
                </p>
              </section>

              <section className="bg-card rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  KI-gestützte Inhalte
                </h2>
                <p>
                  KI-Systeme sind Hilfsmittel und ersetzen nicht die menschliche Fachkompetenz. Entscheidungen müssen immer durch qualifiziertes medizinisches Personal überprüft werden.
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