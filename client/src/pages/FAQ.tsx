import { useState, useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { faqs, faqCategories, searchFaqs, getFaqsByCategory } from "@/data/faqs";
import { Search } from "lucide-react";
import SEO from "@/components/SEO";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<typeof faqCategories[number] | "">("");

  const filteredFaqs = useMemo(() => {
    let result = [...faqs];
    if (selectedCategory) {
      result = getFaqsByCategory(selectedCategory);
    }
    if (searchQuery) {
      result = searchFaqs(searchQuery);
    }
    return result;
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <SEO
        title="FAQ: KI in der Substitutionsmedizin | Häufige Fragen beantwortet"
        description="Antworten auf häufige Fragen zur KI-Implementierung in der Substitutionsmedizin: Rechtliche Anforderungen, technische Umsetzung, Risiken und Praxisbeispiele."
        canonical="https://mikon28wa.github.io/faq-website/faq"
      />
      
      <div className="min-h-screen bg-background">
        <div className="container max-w-7xl py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
              Häufig gestellte Fragen
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Informationen zur KI-Implementierung in der Substitutionsmedizin
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="FAQs durchsuchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px] bg-background">
                <SelectValue placeholder="Kategorie auswählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Alle Kategorien</SelectItem>
                {faqCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {faqCategories.map((category) => {
              const count = getFaqsByCategory(category).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(selectedCategory === category ? "" : category)}
                  className={"px-4 py-2 rounded-md text-sm font-medium transition-colors " + 
                    (selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80")}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            {filteredFaqs.length} von {faqs.length} FAQs gefunden
          </p>

          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <Accordion type="single" collapsible key={faq.id} className="border rounded-lg bg-card">
                  <AccordionItem value={"faq-" + faq.id} className="border-none">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <div className="flex flex-col gap-2 w-full">
                        <span className="text-lg font-medium text-foreground text-left">{faq.question}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-muted-foreground">{faq.category}</span>
                          {faq.tags && faq.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {faq.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">Keine FAQs gefunden</p>
                <p className="text-sm text-muted-foreground/70 mt-2">
                  Versuchen Sie, Ihre Suchanfrage zu ändern oder die Filter zurückzusetzen
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}