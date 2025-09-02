# Woche 06 – Projekt **w06-movies-query**

> **Ziel:** Server-State, Cache, Prefetch, Infinite Scroll.  
> **Kernfeatures:** Startseite (Trending), Suche, Detail, Bookmarks (optimistic).  
> **Akzeptanzkriterien:** Query-Keys konsistent; Cache invalidation korrekt.  
> **Deliverables:** CACHING.md, GIF-Demo.

---

## Projektstart

- Projekt scaffolden: `npm create vite@latest w06-movies-query -- --template react-ts`  
- TanStack Query installieren: `npm i @tanstack/react-query @tanstack/react-query-devtools`  
- QueryClient in `main.tsx` einbinden.  

---

## Tagesplan

### 📅 Tag 1 – Scaffold & QueryClient
- QueryClient und Devtools konfigurieren.  
- API-Schicht erstellen: `getTrendingMovies()`, `searchMovies(query)`.  

### 📅 Tag 2 – Grundlegendes Fetching
- Hook `useMoviesQuery` erstellen.  
- Lade-, Fehler- und leere Zustände konsistent behandeln.  

### 📅 Tag 3 – Pagination / Infinite Scroll
- Infinite Scroll mit `fetchNextPage`.  
- Prefetch auf Hover für Detailseiten.  

### 📅 Tag 4 – Mutationen & Optimistic UI
- Bookmarks hinzufügen/entfernen.  
- Optimistic Updates implementieren.  
- Rollback bei Fehler.  

### 📅 Tag 5 – Cache-Strategien
- `staleTime`, `gcTime` ausprobieren.  
- Dokumentation in `CACHING.md`.  

### 📅 Tag 6 – UI Polish
- Loading Skeletons vereinheitlichen.  
- Konsistente Fehleranzeigen.  

### 📅 Tag 7 – Review
- GIF-Demo aufnehmen.  
- README + CACHING.md finalisieren.  

---

## Quellen & Ressourcen
- TanStack Query Docs: https://tanstack.com/query/latest  
- TMDB API (Beispiel): https://developers.themoviedb.org/3  
- React Suspense Patterns: https://react.dev/learn/suspense  

---

## Erfolgskontrolle
- Funktioniert Infinite Scroll zuverlässig?  
- Werden Prefetches sichtbar im Devtool?  
- Keine TypeScript-Fehler (`tsc --noEmit`)?  
- ✅ Dann Woche 06 abgeschlossen.
