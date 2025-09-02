# Woche 04 – Projekt **w04-routerblog**

> **Ziel:** Layout-/Nested Routes, Params, 404, Code-Splitting.  
> **Kernfeatures:** Blog-Shell mit Artikelliste, Detail, 404, Lazy Routes.  
> **Akzeptanzkriterien:** Skip-Link, aktive Links, Breadcrumbs.  
> **Deliverables:** routes.md, Screenshots.

---

## Projektstart

- Projekt scaffolden: `npm create vite@latest w04-routerblog -- --template react-ts`  
- React Router installieren: `npm i react-router-dom`  
- Basislayout `AppShell.tsx` mit Header, Sidebar, Footer.  

---

## Tagesplan

### 📅 Tag 1 – Scaffold & Layout
- Projekt aufsetzen, Layout-Route anlegen.  
- Skip-Link für Barrierefreiheit.  

### 📅 Tag 2 – Index- & Detail-Route
- Index: Liste von Artikeln.  
- Detail: dynamische Route mit `:id`.  
- 404-Seite hinzufügen.  

### 📅 Tag 3 – Lazy Loading
- Lazy imports mit `React.lazy` + `Suspense`.  
- NotFound-Seite optisch ansprechend.  

### 📅 Tag 4 – Breadcrumbs & Filter
- Breadcrumbs basierend auf aktueller Route.  
- Query-Parameter mit `useSearchParams`.  

### 📅 Tag 5 – Markdown-Artikel
- Dummy-Markdown-Dateien laden.  
- Typographie mit Tailwind-Prosa (`prose`-Klassen).  

### 📅 Tag 6 – Accessibility
- Landmarks (`<main>`, `<nav>`).  
- Fokus-Management.  
- Aktive Links mit `aria-current`.  

### 📅 Tag 7 – Review
- Dokumentation `routes.md`.  
- Screenshots erstellen und ins README packen.  

---

## Quellen & Ressourcen
- React Router Docs: https://reactrouter.com/en/main  
- Tailwind Typography: https://tailwindcss.com/docs/typography-plugin  
- A11y Skip Links: https://webaim.org/techniques/skipnav/  

---

## Erfolgskontrolle
- Alle Seiten navigierbar?  
- Lazy Loading funktioniert?  
- Breadcrumbs dynamisch und korrekt?  
- Keine TypeScript-Fehler?  
- ✅ Dann Woche 04 abgeschlossen.
