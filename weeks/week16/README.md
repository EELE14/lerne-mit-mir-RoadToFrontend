# Woche 16 – Projekt **w16-portfolio**

> **Ziel:** Portfolio-Seite + Feinschliff aller Projekte, überzeugende Präsentation inkl. Deploy.  
> **Kernfeatures:** Projektkacheln mit Tech-Stack, Detailseiten mit Screens/GIFs, About, Kontakt/Impressum, SEO/OG, schnelle Ladezeiten.  
> **Akzeptanzkriterien:** Saubere Informationsarchitektur, responsives Design, gute Web-Vitals, eindeutige CTAs, fehlerfreie Links.  
> **Deliverables:** Live-Deploy (Vercel/Netlify o. ä.), PORTFOLIO-README.md (Inhalte, Tech, Deploy), MEDIA/ Screens & GIFs, 5-min Demo-Video, LinkedIn/GitHub-Update-Text.

---

## Projektstart
- Neues Repo/Ordner `w16-portfolio` im bestehenden Monorepo-Verzeichnis `projects` verwenden.  
- Projektliste zusammenstellen (W01–W15) mit Kurzbeschreibungen, Hauptlernzielen und Link zu Live-Demos/Repos.  
- Content-Ordner `public/media` für Screens & GIFs.

---

## Tagesplan

### 📅 Tag 1 – IA, Routing, Shell
**Ziel:** Struktur & Navigation festlegen, Layout aufsetzen.  
**Aufgaben:**  
- IA-Diagramm skizzieren: Start (Grid aller Projekte), Projekt-Detail, About, Kontakt/Impressum.  
- Router-Konzept: `/` (Overview), `/project/:slug`, `/about`, `/contact`.  
- `AppShell` mit Header (Name/Logo, Nav), Footer (Copyright, Links).  
- Responsives Grid: 1 Spalte (< 480px), 2 Spalten (≥ 768px), 3 Spalten (≥ 1024px).  
- CTA auf Startseite: „Kontaktiere mich“ → Link zu Kontaktformular.  
**Checks:** Navigation keyboard-fähig, Skip-Link vorhanden.  
**Deliverables:** Skizze (PNG/JPG) in `docs/IA.png`, Basislayout läuft.

### 📅 Tag 2 – Projektkarten & Content-Model
**Ziel:** Einheitliche Darstellung, klare Infos je Karte.  
**Aufgaben:**  
- Card-Design definieren (Thumbnail, Titel, kurze Beschreibung, Tags für Tech: `React`, `TypeScript`, `Tailwind`, `TanStack Query` etc.).  
- Content-Quelle: JSON/YAML in `src/data/projects.json` oder TS-Datei `projects.ts` mit stark getyptem Interface.  
- Karten interaktiv: Hover-Effekt, Fokusstil, „Mehr erfahren“-Button führt zur Detailroute.  
- Filter/Chips optional: nach Tech filtern (`?tech=react`).  
**Checks:** Karte ist mit Tastatur erreichbar, `aria-label` sinnvoll.  
**Deliverables:** Erster Satz an Projekten sichtbar (mind. W01–W05).

### 📅 Tag 3 – Projekt-Detailseiten
**Ziel:** Tiefe Darstellung pro Projekt mit Outcomes.  
**Aufgaben:**  
- Vorlage `ProjectDetail` erstellen: Hero mit Titel, kurze Summary, Tech-Stack, Abschnitt „Was ich gelernt habe“, Abschnitt „Herausforderungen & Lösungen“, Galerie (Screens/GIFs), Links (Live, Repo).  
- SEO: `title`, `meta description` pro Seite dynamisch setzen (Router Hook oder Head-Komponente).  
- Lesbarkeit: Typografie (max-width, line-height, Farbschema).  
**Checks:** OG/Twitter-Preview lokal prüfen (HTML `meta` korrekt, Bildgrößen 1200×630).  
**Deliverables:** Mind. 6 Projekte mit Detailseiten (W01–W06).

### 📅 Tag 4 – Medien & Performance
**Ziel:** Assets optimieren, schnelle Ladezeiten.  
**Aufgaben:**  
- Screenshots konsistent erstellen (gleiche Auflösung, Light/Dark, wichtige States).  
- GIFs kurz halten (< 10–15 s), optional in MP4/WebM konvertieren und als Video einbinden (besser als große GIFs).  
- Bilder in WebP/AVIF exportieren, `width/height` Attribute setzen, `loading="lazy"`.  
- Fonts: nur benötigte Schnitte, `font-display: swap`, self-hosted.  
**Checks:** Lighthouse Performance ≥ 90; CLS niedrig (Dimensionen gesetzt).  
**Deliverables:** `MEDIA/` befüllt, MEDIA-LIST.md mit Quellen/Größen.

### 📅 Tag 5 – SEO, OG, Sitemap, Analytics
**Ziel:** Auffindbarkeit, saubere Previews, minimale Analytics.  
**Aufgaben:**  
- Startseite und Projekte: strukturierte Daten (JSON-LD für Person/CreativeWork minimal) inline in den Head einfügen.  
- OG-Bilder: generisches Fallback plus projektspezifische Bilder.  
- Robots, Sitemap: `robots.txt` erlaubend, `sitemap.xml` generieren (Build-Script: beim Build `projects` durchiterieren und Einträge schreiben).  
- Analytics privacy-freundlich (Pageview nur, ohne Cookies).  
**Checks:** `https://www.opengraph.xyz/` oder Browser-Extensions zur Vorschau nutzen; Links funktionieren.  
**Deliverables:** SEO-CHECKLIST.md mit abgehakten Punkten, generierte `sitemap.xml`.

### 📅 Tag 6 – Deploy, QA, Demo-Video
**Ziel:** Livegang und Nachweis.  
**Aufgaben:**  
- Deployment-Ziel wählen (z. B. Vercel): Projekt verbinden, Build-Command `npm run build`, Output `dist`.  
- Umgebungs-Check: 404 Handling für SPA (Fallback auf `index.html`).  
- End-zu-Ende-Click-Through aller Routen, Broken-Links-Check (ein kleines Script oder manuell).  
- Lighthouse auf Produktions-URL laufen lassen; Ergebnisse in PORTFOLIO-README.md dokumentieren.  
- 5-min Video aufnehmen (Screenrecord): Intro, 3 Projekte kurz zeigen, Codeauszug, Kontakt-CTA.  
**Checks:** PageSpeed stabil, kein 404/500, alle Bilder optimiert.  
**Deliverables:** Live-URL, Video-Datei/Link, aktualisierte README.

### 📅 Tag 7 – Social & Feinschliff
**Ziel:** Vermarktung und letzte Kanten glätten.  
**Aufgaben:**  
- Kurzen Post-Text für LinkedIn/GitHub erstellen: 4–6 Sätze (Ziele, Tech-Stack, Link).  
- README im Root aktualisieren: Liste aller Wochenprojekte mit Links.  
- Kleiner Usability-Test mit 1–2 Personen: Feedback sammeln, kleine Tweaks (Kontrast, Spacing, Kopien).  
- Git-Tag `v16-portfolio` setzen und Release Notes schreiben.  
**Checks:** Alle Links, OG-Previews, Metriken passen.  
**Deliverables:** Social-Post-Text (SOCIAL.md), Release publiziert.

---

## Quellen & Ressourcen
- Web.dev SEO & Performance: https://web.dev/  
- Open Graph/Twitter Cards: https://ogp.me/  
- Sitemap/Robots Basics: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview  
- Vercel/Netlify Deploy Docs: https://vercel.com/docs , https://docs.netlify.com/

---

## Erfolgskontrolle
- Übersichtliche Startseite, klare CTAs, mobile-first sauber?  
- Projekt-Details mit Impact, nicht nur Screens – Lernmomente beschrieben?  
- Lighthouse ≥ 90, OG/SEO korrekt, Sitemap vorhanden?  
- Live-URL erreichbar, 5-min Video fertig, Social-Post vorbereitet?  
- ✅ Woche 16 abgeschlossen.
