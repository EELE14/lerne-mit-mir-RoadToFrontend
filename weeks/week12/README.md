# Woche 12 – Projekt **w12-perf-a11y**

> **Ziel:** Performance-Muster + tiefe A11y.  
> **Kernfeatures:** Virtuelle Liste (1k+ Items), Dialog/Popover (Radix/Headless).  
> **Akzeptanzkriterien:** Messbare Render-Reduktion; korrekte ARIA-Rollen und Fokusführung.  
> **Deliverables:** PERF-NOTES.md, A11Y-CHECKLIST.md.

---

## Projektstart

- Projekt scaffolden: `npm create vite@latest w12-perf-a11y -- --template react-ts`  
- Install: `npm i @tanstack/react-virtual @radix-ui/react-dialog @radix-ui/react-popover`  
- Ordnerstruktur: `src/components/ui`, `src/components/pages`, `src/lib`.  

---

## Tagesplan

### 📅 Tag 1 – Basisliste
- Dummy-Daten generieren: 1000 Items (`Array.from`).  
- `ItemList.tsx` → Items als einfache `div` rendern.  
- Performance messen: Chrome DevTools → FPS und Renderzeit notieren.  
- Ergebnis dokumentieren in PERF-NOTES.md (Baseline).

### 📅 Tag 2 – Virtualization
- `useVirtualizer` aus @tanstack/react-virtual einbauen.  
- Höhe pro Item fixieren (z. B. 48px).  
- Container mit `overflow-auto`, nur sichtbare Items rendern.  
- Vergleichsmessung: FPS & Memory.  

### 📅 Tag 3 – Profiling
- React DevTools Profiler starten.  
- Vergleich: Full List vs. Virtual List.  
- Render Counts loggen → Screenshots in PERF-NOTES.md.  
- Stolperfallen dokumentieren (z. B. Keys, Dynamic Heights).

### 📅 Tag 4 – Accessible Dialog
- `Dialog.tsx` mit Radix.  
- Props: `open`, `onOpenChange`.  
- Test: ESC schließt, Tab-Cycling im Dialog bleibt drin.  
- `role="dialog"`, `aria-modal="true"` prüfen.  

### 📅 Tag 5 – Accessible Popover
- `Popover.tsx` mit Radix.  
- Inhalte: Info-Box oder Actions.  
- Fokus nach Close zurück zum Trigger.  
- ARIA-Rollen prüfen.  

### 📅 Tag 6 – Verfeinerung
- Keyboard-Traps testen.  
- Reduced Motion berücksichtigen: `@media (prefers-reduced-motion)`.  
- `useCallback` / `useMemo` gezielt einsetzen bei Props-Drilling.  
- A11Y-CHECKLIST.md ausfüllen.  

### 📅 Tag 7 – Review
- README: Screenshots von Virtual List, Dialog, Popover.  
- PERF-NOTES.md finalisieren mit „Before/After“-Messung.  
- Push ins Repo.  

---

## Quellen & Ressourcen
- TanStack Virtual: https://tanstack.com/virtual/latest  
- Radix Dialog/Popover: https://www.radix-ui.com/primitives  
- WAI-ARIA Authoring Practices: https://www.w3.org/WAI/ARIA/apg/  

---

## Erfolgskontrolle
- Liste scrollt flüssig auch bei 1k Items?  
- Dialog/Popover sind tastatur- und screenreader-freundlich?  
- Messbare Render-Reduktion dokumentiert?  
- ✅ Woche 12 abgeschlossen.
