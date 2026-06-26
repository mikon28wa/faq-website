import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Praxis für Substitutionsmedizin
            </p>
            <p className="text-xs text-muted-foreground/70 mt-1">
              KI-Implementierung in der Substitutionsmedizin
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Startseite
            </Link>
            <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Link href="/impressum" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Datenschutz
            </Link>
            <Link href="/disclaimer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}