export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "q1",
    category: "Strategische Grundlagen und Ziele",
    question: "Welche strategischen Vorteile bietet der Einsatz von KI in der Substitutionsmedizin?",
    answer: "Administrative Entlastung: Automatisierte Transkription von Patientengesprächen (z. B. via Whisper) und Erstellung strukturierter, BtMVV-konformer Dokumentationsentwürfe oder Arztbriefe (Zeiteinsparung von bis zu 80 %).\n\nOptimierung der Praxisabläufe: Vorhersage von Stoßzeiten bei der täglichen Vergabe und Minimierung von No-Shows durch Analyse historischer Daten.\n\nTherapeutische Unterstützung: Frühwarnsysteme für drohende Therapieabbrüche oder automatisierte Erinnerungen an Abhol- und Labortermine.\n\nInformationsmanagement: Schnelle Zugriffe auf aktuelle Leitlinien und interne SOPs via interner Wissensdatenbanken (Expert-GPT).\n\nBarrierefreiheit: Echtzeit-Übersetzung von Informationsmaterialien für Patienten in verschiedene Sprachen.",
  },
  {
    id: "q2",
    category: "Strategische Grundlagen und Ziele",
    question: "Warum ist ein Local-First-Ansatz für die KI-Implementierung in der Substitutionsmedizin zwingend erforderlich?",
    answer: "Ein Local-First-Ansatz ist notwendig, um:\n\nDie Datenhoheit in der Praxis zu behalten (keine Übertragung sensibler Patientendaten an externe Server).\n\nDie DSGVO-Konformität (Art. 9 DSGVO: besonders schützenswerte Gesundheitsdaten) und die ärztliche Schweigepflicht (§ 203 StGB) einzuhalten.\n\nSicherheitsrisiken zu minimieren, die durch Cloud-APIs (z. B. OpenAI, Anthropic) entstehen könnten.",
  },
  {
    id: "q3",
    category: "Regulatorische Anforderungen (DSGVO & MDR)",
    question: "Welche KI-Anwendungen sind von der MDR-Zertifizierungspflicht ausgenommen?",
    answer: "Von der MDR-Zertifizierungspflicht ausgenommen sind rein administrative KI-Anwendungen, die keine diagnostischen oder therapeutischen Entscheidungen beeinflussen. Dazu gehören:\n\nAutomatisierung des Schriftverkehrs:\n- Generierung von Entwürfen für Arztbriefe, Kostenübernahmeanträge oder Berichte an den Medizinischen Dienst (MD).\n- KI-gestützte Transkription von Patientengesprächen (Medical Scribbling).\n- Zusammenfassungen komplexer Patientenakten oder Befunde.\n\nIntelligente Organisation & Patientensteuerung:\n- Terminplanung (Vorhersage von Stoßzeiten).\n- No-Show-Vorhersage (Identifikation von Patienten mit hohem Ausfallrisiko).\n- Compliance-Monitoring (automatisierte Erinnerungen für Urinkontrollen oder psychosoziale Betreuung).\n\nInformationsmanagement:\n- Interne Wissensdatenbanken (Expert-GPT) für Leitlinien und SOPs.\n- Anonymisierte Trendanalysen (z. B. Abbruchquoten in Abhängigkeit von Wochentagen).\n- Mehrsprachige Aufklärung (Echtzeit-Übersetzung von Informationsmaterialien).",
  },
  {
    id: "q4",
    category: "Regulatorische Anforderungen (DSGVO & MDR)",
    question: "Wann greift die MDR-Zertifizierungspflicht für KI-Systeme in der Substitutionsmedizin?",
    answer: "Die MDR-Zertifizierungspflicht (Klasse IIa) greift, sobald die KI:\n\nDiagnostische oder therapeutische Richtungen vorgibt, z. B.:\n- Beurteilung von Beiwachstum in Urinscreenings.\n- Individuelle Dropout-Prädiktion (Risiko für Therapieabbrüche).\n- Konkrete Dosierungsvorschläge für Substitutionsmittel.\n\nAktive Entscheidungsunterstützung leistet, selbst wenn ein Human-in-the-Loop (Arzt) die finale Entscheidung trifft.",
  },
  {
    id: "q5",
    category: "Regulatorische Anforderungen (DSGVO & MDR)",
    question: "Welche Sicherheitsvorgaben müssen für eine DSGVO-konforme KI-Implementierung erfüllt werden?",
    answer: "Die wichtigsten Sicherheitsvorgaben sind:\n\nHosting: Lokale Server oder Edge-Computing (Daten verlassen nie das Praxisnetzwerk).\n\nHardware: Dedizierte Systeme (z. B. Mac Studio) für maximale Kontrolle über die Rechenlast.\n\nModelle: Nutzung von Open-Source-LLMs (z. B. Mistral, Llama), um Übermittlungen an US-Cloud-Anbieter zu vermeiden.\n\nVerschlüsselung: Alle Daten müssen lokal nach dem Stand der Technik verschlüsselt werden.\n\nVertragsgestaltung: Strikte Vertraulichkeitsvereinbarungen mit allen IT-Dienstleistern.",
  },
  {
    id: "q6",
    category: "Regulatorische Anforderungen (DSGVO & MDR)",
    question: "Warum sind Cloud-APIs wie OpenAI oder Anthropic für Patientendaten in der Substitutionsmedizin ungeeignet?",
    answer: "Cloud-APIs sind ungeeignet, weil:\n\nSie Patientendaten an externe Server übertragen, was gegen die ärztliche Schweigepflicht (§ 203 StGB) und die DSGVO (Art. 9) verstoßen kann.\n\nEs keine Garantie gibt, dass Daten unverschlüsselt oder ohne Zugriff durch Dritte verarbeitet werden.",
  },
  {
    id: "q7",
    category: "Implementierungsplan und Praxisbeispiele",
    question: "Wie sieht ein schrittweiser Implementierungsplan für KI in der Substitutionspraxis aus?",
    answer: "Der dreistufige Implementierungsplan umfasst:\n\nHospitation & Bedarfsanalyse:\n- Identifikation der zeitintensivsten manuellen Prozesse (Flaschenhälse) durch Begleitung des Praxisalltags.\n\nInfrastrukturaufbau:\n- Beschaffung und Konfiguration lokaler Hardware (z. B. Mac Studio) zur Sicherstellung der DSGVO-Konformität.\n\nProof of Concept (PoC):\n- Entwicklung eines Prototyps mit fiktiven Daten, um den messbaren Nutzen (z. B. Zeitersparnis bei der Befunderfassung) zu belegen.",
  },
  {
    id: "q8",
    category: "Implementierungsplan und Praxisbeispiele",
    question: "Welche konkreten administrativen KI-Anwendungen bieten schnellen Nutzen ohne MDR-Zertifizierung?",
    answer: "Schnellen Nutzen bieten:\n\nDokumentation:\n- Automatische Generierung von Arztbriefen, Berichten an Krankenkassen oder den MD.\n- Medical Scribbling: Transkription von Patientengesprächen für strukturierte Aktenentwürfe.\n\nTerminmanagement:\n- No-Show-Vorhersage (Reduktion von Ausfällen).\n- Optimierung der Patientenströme bei der täglichen Vergabe.\n\nCompliance:\n- Automatisierte Erinnerungen für Urinkontrollen oder psychosoziale Termine.\n\nWissensmanagement:\n- Interne Wissensdatenbanken (Expert-GPT) für SOPs und Leitlinien.\n- Anonymisierte Trendanalysen (z. B. Abbruchquoten).",
  },
  {
    id: "q9",
    category: "Abgrenzung und Risiken",
    question: "Was ist der Unterschied zwischen administrativen KI-Anwendungen und MDR-pflichtigen KI-Systemen?",
    answer: "Administrative KI-Anwendungen:\n- Zweck: Strukturierung, Zusammenfassung, Visualisierung von Daten\n- Beispiele: Arztbriefe, Terminplanung, No-Show-Vorhersage\n- Regulatorische Einstufung: Keine MDR-Zertifizierung\n- Risiko: Gering (kein Eingriff in Therapie)\n\nMDR-pflichtige KI-Systeme:\n- Zweck: Diagnostische oder therapeutische Entscheidungsunterstützung\n- Beispiele: Dosierungsvorschläge, Beurteilung von Urinscreenings\n- Regulatorische Einstufung: MDR-Zertifizierung (Klasse IIa)\n- Risiko: Hoch (aktive Einflussnahme auf Diagnose/Therapie)",
  },
  {
    id: "q10",
    category: "Abgrenzung und Risiken",
    question: "Warum befreit der Human-in-the-Loop-Ansatz KI-Systeme nicht von der MDR-Zertifizierungspflicht?",
    answer: "Der Human-in-the-Loop-Ansatz (Arzt trifft finale Entscheidung) befreit die KI nicht von der MDR-Zertifizierung, wenn sie:\n\nEine diagnostische Richtung vorgibt (z. B. Beurteilung von Beiwachstum).\n\nTherapeutische Empfehlungen generiert (z. B. Dosierungsvorschläge).\n\nAktive Entscheidungsunterstützung leistet, die den Behandlungsprozess beeinflusst.",
  },
  {
    id: "q11",
    category: "Datenschutz und Schweigepflicht",
    question: "Welche rechtlichen Rahmenbedingungen müssen bei der Verarbeitung von Patientendaten in der Substitutionsmedizin beachtet werden?",
    answer: "Die wichtigsten rechtlichen Rahmenbedingungen sind:\n\nDSGVO (Art. 9): Patientendaten gelten als besonders schützenswerte Gesundheitsdaten und erfordern eine explizite Einwilligung.\n\nÄrztliche Schweigepflicht (§ 203 StGB): Verbot der Weitergabe von Patientendaten an Dritte ohne Einwilligung.\n\nBtMVV-Vorgaben: Strukturierte Dokumentation von Substitutionsbehandlungen.\n\nVertragliche Absicherung: Vertraulichkeitsvereinbarungen mit IT-Dienstleistern sind zwingend erforderlich.",
  },
  {
    id: "q12",
    category: "Datenschutz und Schweigepflicht",
    question: "Wie kann sichergestellt werden, dass Patientendaten bei der KI-Nutzung nicht an Dritte weitergegeben werden?",
    answer: "Sicherstellung durch:\n\nLokales Hosting: Daten werden ausschließlich auf Praxis-Hardware verarbeitet (keine Cloud-Nutzung).\n\nVerschlüsselung: Alle Daten werden lokal verschlüsselt (Stand der Technik).\n\nOpen-Source-Modelle: Nutzung von selbstgehosteten LLMs (z. B. Mistral, Llama) statt Cloud-APIs.\n\nKeine externen Schnittstellen: Vermeidung von APIs, die Daten an externe Server senden.",
  },
  {
    id: "q13",
    category: "Praktische Umsetzung und Beispiele",
    question: "Welche konkreten Tools können für die administrative KI-Unterstützung in der Substitutionspraxis eingesetzt werden?",
    answer: "Empfohlene Tools für administrative KI-Anwendungen:\n\nSpracherkennung: Whisper (lokale Transkription von Patientengesprächen).\n\nDokumentenerstellung: Open-Source-LLMs (z. B. Mistral) für Arztbriefe und Berichte.\n\nTerminmanagement: Lokale KI-Modelle zur No-Show-Vorhersage und Patientensteuerung.\n\nWissensdatenbanken: Expert-GPT für schnellen Zugriff auf Leitlinien und SOPs.",
  },
  {
    id: "q14",
    category: "Praktische Umsetzung und Beispiele",
    question: "Wie kann der Nutzen eines KI-Prototyps in der Praxis gemessen werden?",
    answer: "Der Nutzen eines Proof of Concept (PoC) kann gemessen werden durch:\n\nZeiteinsparung: Reduktion der Bearbeitungszeit für Dokumentation (z. B. 80 % weniger Aufwand für Arztbriefe).\n\nFehlerreduktion: Weniger manuelle Fehler bei der Datenaufbereitung.\n\nPatientenzufriedenheit: Verbesserte Terminplanung und weniger No-Shows.\n\nCompliance: Automatisierte Erinnerungen für Urinkontrollen und psychosoziale Termine.",
  },
];

export const categories = Array.from(new Set(faqs.map(faq => faq.category)));
