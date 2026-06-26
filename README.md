FAQ-Website



Eine einfache, statische FAQ-Website mit Akkordeon-Funktionalität für häufig gestellte Fragen.



📌 Über das Projekt

Diese FAQ-Website bietet eine benutzerfreundliche, interaktive Oberfläche, um häufig gestellte Fragen und deren Antworten anzuzeigen. Die Seite ist statisch und basiert auf HTML, CSS und JavaScript, sodass sie leicht anpassbar und auf jedem Hosting-Dienst (z. B. GitHub Pages, Netlify, Manus) gehostet werden kann.

✨ Features





Akkordeon-Design: Fragen werden kompakt angezeigt, Antworten lassen sich per Klick aufklappen.



Responsive: Optimiert für Desktop und mobile Geräte.



Leichtgewichtig: Keine Abhängigkeiten von externen Bibliotheken oder Frameworks.



Einfach erweiterbar: Neue FAQ-Einträge können direkt im HTML-Code hinzugefügt werden.



🚀 Schnellstart

Voraussetzungen





Ein Webserver oder Hosting-Dienst (z. B. GitHub Pages, Netlify, Manus).



Ein Texteditor (z. B. VS Code, Sublime Text) zur Bearbeitung der Dateien.

Installation





Repository klonen (falls auf GitHub gehostet):

 git clone https://github.com/blubamnrey/faq-website.git
 cd faq-website



Dateien anpassen:



Öffne die Datei `index.html` in einem Texteditor.

Ersetze die **Beispiel-Fragen und -Antworten** durch deine eigenen Inhalte.

Optional: Passe das **Styling** in der `<style>`-Sektion an.



Lokal testen:



Öffne die `index.html` in einem Browser, um die Änderungen zu überprüfen.



Bereitstellen:



Lade die Dateien auf deinen **Hosting-Dienst** hoch (z. B. per FTP, GitHub Pages oder Drag & Drop bei Netlify).



📂 Projektstruktur

faq-website/
├── index.html          # Haupt-FAQ-Seite mit HTML, CSS und JS
└── README.md           # Diese Datei



🛠️ Anpassung

Neue FAQ-Einträge hinzufügen

Füge im <div class="faq-container">-Bereich der index.html folgende Struktur ein:

<div class="faq-item">
    <div class="faq-question" onclick="toggleFaq(this)">
        <span>Deine Frage hier</span>
        <span class="faq-toggle">+</span>
    </div>
    <div class="faq-answer">
        <p>Deine Antwort hier.</p>
    </div>
</div>

Design anpassen





Farben: Ändere die Farbcodes im <style>-Bereich (z. B. background: #f4f4f4;).



Schriftarten: Ersetze font-family: Arial, sans-serif; durch deine gewünschte Schriftart.



Animationen: Passe die transition-Eigenschaften an, um die Öffnungs-/Schließanimation zu ändern.



🌐 Hosting-Optionen







Anbieter



Anleitung



Kosten





GitHub Pages



Offizielle Anleitung



Kostenlos





Netlify



Dokumentation



Kostenlos





Manus



Hochladen per FTP oder Dateimanager



Kostenpflichtig





Vercel



Dokumentation



Kostenlos



🤝 Beitrag leisten

Beiträge sind willkommen! Falls du Verbesserungen oder Erweiterungen vorschlagen möchtest:





Fork das Repository.



Erstelle einen Branch für deine Änderungen (git checkout -b feature/neue-funktion).



Commit deine Änderungen (git commit -m "Füge neue Funktion hinzu").



Push den Branch (git push origin feature/neue-funktion).



Erstelle einen Pull Request.



📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Siehe LICENSE für weitere Informationen.



📞 Support





Fragen oder Probleme? Öffne ein Issue in diesem Repository.



Kontakt: Michael Konradi (Projektverantwortlicher).



🏗️ Technologien





HTML5



CSS3



Vanilla JavaScript

