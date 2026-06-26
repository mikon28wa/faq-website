import { AlertTriangle } from "lucide-react";
import { Link } from "wouter";

export default function InfoBanner() {
  return (
    <div className="bg-muted/50 border border-border rounded-lg p-4 mb-8">
      <div className="flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-sm text-foreground">
            <strong>Wichtiger medizinischer Hinweis:</strong> Die auf dieser Website bereitgestellten
            Informationen dienen ausschließlich der allgemeinen Information und ersetzen keinesfalls eine
            professionelle medizinische Beratung.
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <Link href="/impressum" className="text-primary hover:underline">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-primary hover:underline">
              Datenschutz
            </Link>
            <Link href="/disclaimer" className="text-primary hover:underline">
              Haftungsausschluss
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}