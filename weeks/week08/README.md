# Woche 08 – Projekt **w08-cartify**

> **Ziel:** Globaler Zustand, Selektoren, Persist, Middleware.  
> **Kernfeatures:** Produktliste (Mock), Warenkorb, Summen, Snackbar.  
> **Akzeptanzkriterien:** Minimale Re-renders, saubere Selectors.  
> **Deliverables:** ARCHITEKTUR.md (Store-Skizze), 1–2 Store-Tests.

---

## Projektstart

- Projekt scaffolden: `npm create vite@latest w08-cartify -- --template react-ts`  
- Zustand installieren: `npm i zustand`  
- Store-Ordner `src/store/` anlegen.  

---

## Tagesplan

### 📅 Tag 1 – Store Setup
- `useCartStore` anlegen.  
- Persist-Middleware nutzen.  

### 📅 Tag 2 – Produktkatalog
- Produktliste (Mockdaten).  
- Buttons für Add/Remove/Qty.  

### 📅 Tag 3 – Selektoren
- Selektoren für Totals & Count.  
- Memoization gegen unnötige Renders.  

### 📅 Tag 4 – Snackbar/Toasts
- Snackbar beim Hinzufügen/Entfernen.  
- Optional: Undo-Funktion.  

### 📅 Tag 5 – Persistenz
- LocalStorage prüfen.  
- Edgecases: leerer Korb.  

### 📅 Tag 6 – Tests
- 1–2 Tests für Totals & Qty.  
- Performance-Check mit React Profiler.  

### 📅 Tag 7 – Review
- ARCHITEKTUR.md mit Store-Skizze erstellen.  
- README + Screenshots.  

---

## Quellen & Ressourcen
- Zustand Docs: https://docs.pmnd.rs/zustand/getting-started/introduction  
- React Profiler: https://react.dev/reference/react/Profiler  
- Toast-Komponenten Inspiration: https://tailwindui.com/components  

---

## Erfolgskontrolle
- Warenkorb-Operationen fehlerfrei?  
- Keine unnötigen Renders?  
- Persistenz stabil?  
- ✅ Dann Woche 08 abgeschlossen.
