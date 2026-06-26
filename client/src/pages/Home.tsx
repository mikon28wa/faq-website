import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ChevronDown, ChevronUp, AlertCircle, CheckCircle2, Info } from "lucide-react";
import { faqs, categories } from "@/data/faqs";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">KI</span>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                  KI in der Substitutionsmedizin
                </h1>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  Informationsportal für Ärzte und Praxen
                </p>
              </div>
            </div>
            <p className="text-base text-slate-700 dark:text-slate-300 max-w-2xl">
              Umfassende Informationen zur rechtskonformen Implementierung von KI-Systemen unter Berücksichtigung von DSGVO und MDR-Anforderungen.
            </p>
          </div>
        </div>
      </header>

      {/* Info Banner */}
      <div className="bg-blue-50 dark:bg-blue-950 border-b border-blue-200 dark:border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900 dark:text-blue-100">
              <p className="font-medium">Wichtiger Hinweis:</p>
              <p className="mt-1">
                Dieses Informationsportal bietet Orientierung zu regulatorischen Anforderungen. Eine individuelle rechtliche Beratung ersetzt dieses Portal nicht.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-10">
          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-3">
            Fragen durchsuchen
          </label>
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
            <Input
              placeholder="z.B. 'MDR', 'Datenschutz', 'Cloud-APIs'..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-3 text-base border-slate-300 dark:border-slate-700"
            />
          </div>
        </div>

        {/* Category Navigation */}
        {categories.length > 0 && (
          <div className="mb-10">
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wide">
              Kategorien
            </h2>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
                className="rounded-full"
              >
                Alle Themen
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            <>
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                {filteredFaqs.length} {filteredFaqs.length === 1 ? "Frage" : "Fragen"} gefunden
              </div>
              {filteredFaqs.map((faq) => (
                <Card
                  key={faq.id}
                  className="overflow-hidden hover:shadow-md transition-all duration-200 cursor-pointer border-slate-200 dark:border-slate-800"
                  onClick={() => toggleExpanded(faq.id)}
                >
                  <CardHeader className="pb-3 bg-slate-50 dark:bg-slate-900/50">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <CardDescription className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                          {faq.category}
                        </CardDescription>
                        <CardTitle className="text-lg text-slate-900 dark:text-white leading-snug">
                          {faq.question}
                        </CardTitle>
                      </div>
                      <div className="flex-shrink-0 mt-1">
                        {expandedId === faq.id ? (
                          <ChevronUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-slate-400 dark:text-slate-600" />
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  {expandedId === faq.id && (
                    <CardContent className="pt-6 pb-6 border-t border-slate-200 dark:border-slate-800">
                      <div className="text-slate-700 dark:text-slate-300 space-y-4">
                        {faq.answer.split("\n\n").map((paragraph, idx) => (
                          <div key={idx}>
                            {paragraph.includes("|") ? (
                              // Render table-like content
                              <div className="overflow-x-auto">
                                <table className="w-full text-sm border-collapse">
                                  <tbody>
                                    {paragraph.split("\n").map((line, lineIdx) => {
                                      if (line.includes("|")) {
                                        const cells = line.split("|").filter(cell => cell.trim());
                                        return (
                                          <tr key={lineIdx} className="border-b border-slate-200 dark:border-slate-700">
                                            {cells.map((cell, cellIdx) => (
                                              <td
                                                key={cellIdx}
                                                className={`px-3 py-2 ${
                                                  lineIdx === 0
                                                    ? "font-semibold bg-slate-100 dark:bg-slate-800"
                                                    : ""
                                                }`}
                                              >
                                                {cell.trim()}
                                              </td>
                                            ))}
                                          </tr>
                                        );
                                      }
                                      return null;
                                    })}
                                  </tbody>
                                </table>
                              </div>
                            ) : paragraph.startsWith("-") ? (
                              // Render list items
                              <ul className="space-y-2 ml-4">
                                {paragraph.split("\n").map((item, itemIdx) => (
                                  item.startsWith("-") && (
                                    <li key={itemIdx} className="flex gap-3">
                                      <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                                      <span>{item.substring(1).trim()}</span>
                                    </li>
                                  )
                                ))}
                              </ul>
                            ) : (
                              // Render regular paragraph
                              <p className="leading-relaxed">{paragraph}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </>
          ) : (
            <Card className="text-center py-16 border-slate-200 dark:border-slate-800">
              <div className="space-y-4">
                <AlertCircle className="h-12 w-12 text-slate-400 dark:text-slate-600 mx-auto" />
                <div>
                  <p className="text-slate-900 dark:text-white font-medium text-lg">
                    Keine Fragen gefunden
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                    Versuchen Sie, einen anderen Suchbegriff zu verwenden oder eine andere Kategorie auszuwählen.
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                  }}
                  className="mt-4"
                >
                  Filter zurücksetzen
                </Button>
              </div>
            </Card>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Über dieses Portal</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Informationsressource für Ärzte und Praxen zur Implementierung von KI-Systemen in der Substitutionsmedizin.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Rechtliche Hinweise</h3>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Impressum</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Datenschutz</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Kontakt</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Fragen oder Anmerkungen?<br />
                <a href="mailto:info@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  info@example.com
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
            <p className="text-xs text-slate-600 dark:text-slate-400 text-center">
              © 2026 KI-Informationsportal für Substitutionsmedizin. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
