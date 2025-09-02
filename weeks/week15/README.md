# Woche 15 – Projekt **w15-taskflow-perf**

> **Ziel:** Performance-Tuning, Code-Splitting, Offline-Resilienz.  
> **Kernfeatures:** Lazy Boards, Prefetching, Retry/Backoff, Error Boundaries, Offline-Hinweise.  
> **Akzeptanzkriterien:** Lighthouse ≥ 90 (Performance, Best Practices, A11y, SEO), TTI deutlich verbessert, robuste Fehlerpfade, saubere Messdokumentation.  
> **Deliverables:** PERF-REPORT.md (Vorher/Nachher-Messungen, Screens, Entscheidungen), LIGHTHOUSE.md (Scores + Maßnahmen), ERROR-PLAYBOOK.md (Fehlerpfade & UX).

---

## Projektstart (falls noch nicht geschehen)
- In `w13/w14`-Codebasis arbeiten (TaskFlow).  
- Abhängigkeiten prüfen und aktualisieren: `npm outdated` → ggf. `npm i <pkg>@latest`.  
- Branch anlegen: `git checkout -b feat/perf-offline`.

---

## Tagesplan

### 📅 Tag 1 – Ist-Stand messen (Baseline) & Bottlenecks finden
**Ziel:** Objektive Basiswerte, klare Engpässe.  
**Aufgaben:**  
- Dev-Server starten und eine reale Nutzerstrecke definieren: Startseite → Login (falls aktiv) → Boards → Board-Detail → Task-Detail.  
- Chrome DevTools öffnen: Performance-Profil aufzeichnen (Record 20–30 s). Notiere `CPU time`, `Scripting`, `Rendering`, `Painting`.  
- Netzwerk-Tab: `Disable cache` aktivieren, `Fast 3G` oder `Slow 4G` Throttling testen.  
- Coverage-Tab prüfen (Command Palette → Show Coverage): Übertragene Bytes vs. genutzte Bytes dokumentieren (JS/CSS).  
- Lighthouse lokal ausführen (im DevTools oder `npx lighthouse <url>` im Preview-Build): Scores in eine Tabelle notieren.  
- Erste Bundle-Analyse: `npm i -D rollup-plugin-visualizer` und in `vite.config.ts` den Visualizer-Plugin-Eintrag hinzufügen (als letzten Plugin-Aufruf). Dann `npm run build` und Report öffnen (Dateiname in Plugin-Option setzen).  
**Checks:** Baselinewerte in PERF-REPORT.md festhalten (Screens + Zahlen).  
**Deliverables:** Abschnitt „Baseline“ mit Screenshots (DevTools Performance, Lighthouse, Visualizer).

### 📅 Tag 2 – Code-Splitting (Route- & Component-Level) + Preload
**Ziel:** Initialer JS-Footprint reduzieren, Navigation dennoch flüssig halten.  
**Aufgaben:**  
- Routen Lazy-laden: Für Boards-Übersicht, Board-Detail, Task-Detail jeweils `React.lazy` verwenden; in den Routen `Suspense` mit sinnvollem Fallback integrieren.  
- Große Drittlibs nur dort importieren, wo sie gebraucht werden (z. B. DnD nur auf Board-Detail).  
- Kritische UI-Elemente Preloaden: `link rel="preload"` für wichtigste Font und Key-Route-Chunks im `index.html` setzen; oder programmatic prefetch beim Hover über Board-Karte via `router.preload` (je nach Router-API) oder Dummy-Import `import(/* webpackPrefetch: true */ ...)` Äquivalent für Vite nutzen (Prefetch-Pattern in Docs prüfen).  
- CSS: Prüfen, ob globale CSS/Komponenten CSS sinnvoll aufgeteilt werden kann (Tailwind bleibt global, aber Drittkomponenten-CSS auf Route-Ebene importieren).  
**Checks:** Erneut Build + Visualizer öffnen; initiale Chunks verkleinert? First Route schneller?  
**Deliverables:** PERF-REPORT.md Abschnitt „Code-Splitting & Preload“ mit Größenvergleich der Chunks.

### 📅 Tag 3 – Rendering optimieren (Memoization, List-Virtualization wo sinnvoll)
**Ziel:** Re-Render minimieren, interaktive Listen beschleunigen.  
**Aufgaben:**  
- Re-Render-Hotspots identifizieren: React DevTools → Profiler → Commit-Phasen; Komponenten mit vielen Re-Renders markieren.  
- `React.memo` hinzufügen bei reinen Presentational-Components, `useMemo`/`useCallback` für stabile Referenzen bei heavy Child Props einsetzen.  
- Selektoren/Derived State: Wenn Zustand-Store (Zustand/RTK) genutzt wird, mit selektiven `useSelector`-Selektoren arbeiten (nur benötigte Teilbereiche).  
- Große Task-Listen optional virtualisieren (falls > 200 Elemente sichtbar): `@tanstack/react-virtual` einführen, Höhe je Item definieren; erst, wenn wirklich nötig (Komplexität vs. Nutzen).  
- Bilder/Avatare Lazy-loaden (`loading="lazy"`), Platzhaltergrößen definieren um Layout Shifts zu vermeiden.  
**Checks:** Profiler-Vergleich vorher/nachher (Commit-Time & Render-Counts).  
**Deliverables:** PERF-REPORT.md „Rendering-Optimierung“ mit Profiler-Screens, vor/nach.

### 📅 Tag 4 – Netz & Cache: Retry/Backoff, Stale-While-Revalidate, Platzhalterdaten
**Ziel:** Netzwerkausfälle abfedern, UX stabilisieren.  
**Aufgaben:**  
- React Query: `retry` und `retryDelay` global oder pro Query setzen (exponentieller Backoff).  
- `staleTime` und `cacheTime` sinnvoll konfigurieren: Boards eher „stale-friendly“, Task-Details kürzer.  
- `placeholderData` nutzen, um schnelle UI-Response bei Detailwechseln zu zeigen (z. B. Daten aus Liste in Detail übernehmen, dann revalidate).  
- Error-Fälle: Server 500, Netz offline, Timeout – klare, freundliche Meldungen definieren; „Erneut versuchen“-Button.  
- Prewarming: Wenn Nutzer Board öffnet, im Hintergrund Daten für erste List-Tasks vorab holen (prefetch in `onMouseEnter`/`onFocus`).  
**Checks:** API-Monitoring im DevTools: weniger „cold feels“, sichtbare Retries, klare Fehlermeldungstexte.  
**Deliverables:** ERROR-PLAYBOOK.md mit Szenarien (Statuscodes, Offline, Timeouts) und erwarteter UX.

### 📅 Tag 5 – Error Boundaries, Offline-UX, PWA-Grundlagen
**Ziel:** Hartfehler abfangen, Offline-Hinweise geben, Basis für „Works Offline“.  
**Aufgaben:**  
- Error Boundary oberhalb großer Teilbäume einbauen (App-Shell-Ebene, Board-Detail-Ebene). Fallback-UI mit „Neu laden“ und Fehler-ID (für Logging).  
- Offline-Erkennung via `navigator.onLine` + `window.addEventListener("online"/"offline")`: globalen Banner anzeigen („Offline – Änderungen werden später synchronisiert“).  
- PWA-Low-Effort: `vite-plugin-pwa` installieren, in `vite.config.ts` `registerType: "autoUpdate"` setzen; Cache-Strategie minimal (App Shell + Assets), kritische API-Requests ggf. Network-first mit Fallback.  
- Offline-Screens: Für Routen, die frische Daten brauchen, freundliche Placeholder und „Erneut versuchen“.  
**Checks:** DevTools → Application → Service Workers: SW registriert? Offline-Modus im Netzwerk-Tab aktivieren: verhält sich die App verständlich?  
**Deliverables:** Abschnitt „Offline-UX & PWA“ in PERF-REPORT.md mit Testschritten und Screens.

### 📅 Tag 6 – Bild- und Asset-Optimierung, Fonts, Lighthouse-Re-Run
**Ziel:** Bytes sparen, Renderblockaden minimieren.  
**Aufgaben:**  
- Bilder auf sinnvolle Größen skalieren; moderne Formate bevorzugen (AVIF, WebP).  
- Kritische Fonts: `font-display: swap`, nur benötigte Schnitte einbinden; Selbst-Hosting statt Dritt-CDN (bessere Kontrolle).  
- Unused CSS prüfen (Tailwind produziert tree-shaked Styles über Content-Scan; Content-Globs korrekt?).  
- Wieder Lighthouse laufen lassen, Zahlen in LIGHTHOUSE.md dokumentieren; Maßnahmen pro Audit notieren (z. B. „Serve images in next-gen formats“ → umgesetzt).  
**Checks:** Deutlich bessere FCP/LCP/TTI; weniger CLS (Dimensions gesetzt).  
**Deliverables:** LIGHTHOUSE.md mit vorher/nachher Scores, Liste der umgesetzten Empfehlungen.

### 📅 Tag 7 – Polish & Abnahme
**Ziel:** Alles zusammenführen, dokumentieren, mergen.  
**Aufgaben:**  
- PERF-REPORT.md finalisieren (Baseline vs. Final, Diagramm/Tabellen, Trade-offs).  
- ERROR-PLAYBOOK.md und LIGHTHOUSE.md reviewen; Screens und Versionen datieren.  
- Branch mergen (`feat/perf-offline` → `main`), Tag setzen (`v15-perf`).  
- Release Notes schreiben (kurz: Key Improvements, Scores).  
**Checks:** CI grün; Smoke-Test der Hauptflows; Offline-Test wiederholen.  
**Deliverables:** Merge auf main, Release Notes, Tag.

---

## Quellen & Ressourcen
- React Docs Performance: https://react.dev/learn/optimizing-performance  
- TanStack Query Caching: https://tanstack.com/query/latest/docs/react/guides/important-defaults  
- Web Vitals & Lighthouse: https://web.dev/  
- PWA Plugin (Vite): https://vite-pwa-org.netlify.app/

---

## Erfolgskontrolle
- Initiale JS-Bytes reduziert, schnellere TTI messbar?  
- Route-/Component-Splitting sauber, keine FOUC/Spinner-Orgie?  
- Offline-UX verständlich, Fehlerpfade dokumentiert?  
- Lighthouse ≥ 90 in allen Kategorien?  
- ✅ Woche 15 abgeschlossen.
