# Woche 05 – Projekt **w05-openbooks**

> **Ziel:** Data-Fetching mit fetch, Lade/Fehlerzustände, Skeletons.  
> **Kernfeatures:** Suche, Ergebnisliste, Paginierung, Detailseite.  
> **Akzeptanzkriterien:** Robustes Error-Handling; Retry-UI.  
> **Deliverables:** API-NOTIZEN.md, Screenshots.

---

## Projektstart

- Projekt scaffolden: `npm create vite@latest w05-openbooks -- --template react-ts`  
- Fetch-Wrapper schreiben: `fetchJson<T>()` mit Typen.  
- Ordnerstruktur: `lib/api`, `components`, `pages`.  

---

## Tagesplan

### 📅 Tag 1 – Scaffold & API Client
- Projekt starten, fetchJson<T>() Utility erstellen.  
- Erste Anfrage gegen Dummy-API (z. B. Open Library).  

### 📅 Tag 2 – Suche & Ergebnisse
- Suchfeld mit Debounce.  
- Ergebnisse in Liste rendern.  
- Leere Zustände behandeln.  

### 📅 Tag 3 – Pagination
- Prev/Next Buttons, Seitenstatus anzeigen.  
- Loading Skeletons für bessere UX.  

### 📅 Tag 4 – Detailseite
- Detailansicht als Modal oder neue Route.  
- Back-Navigation ermöglichen.  

### 📅 Tag 5 – Fehlerbehandlung
- Network-Timeout abfangen.  
- Retry-Button für erneuten Versuch.  
- Nutzerfreundliche Fehlermeldungen.  

### 📅 Tag 6 – UI Polish
- Kein-Ergebnis-Illustration.  
- A11y: ARIA-Labels, Tastaturtests.  

### 📅 Tag 7 – Review
- Screenshots für README.  
- API-NOTIZEN.md ergänzen (Endpoints, Limits).  

---

## Quellen & Ressourcen
- Open Library API: https://openlibrary.org/developers/api  
- MDN Fetch: https://developer.mozilla.org/docs/Web/API/Fetch_API  
- Tailwind Skeletons: Inspiration via https://tailwindcomponents.com/  

---

## Erfolgskontrolle
- Suche mit Debounce funktioniert?  
- Pagination stabil?  
- Fehlerfälle abgefangen?  
- Keine TS-Fehler (`tsc --noEmit`)?  
- ✅ Dann Woche 05 abgeschlossen.
