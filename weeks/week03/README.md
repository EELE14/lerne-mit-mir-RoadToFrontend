# Woche 03 – Projekt **w03-productivity**

> **Ziel:** Komposition + lokale Persistenz; Custom Hooks; UX-Details.  
> **Kernfeatures:** Todo-Liste (Filter), Pomodoro-Timer, LocalStorage.  
> **Akzeptanzkriterien:** Keine unkontrollierten Inputs, Tastaturbedienung.  
> **Deliverables:** GIF/Loom-Demo, kurze Architekturskizze.

---

## Projektstart

- Projekt scaffolden: `npm create vite@latest w03-productivity -- --template react-ts`  
- Tailwind installieren: `npm i -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`  
- `tailwind.config.js` → content: `["./index.html","./src/**/*.{ts,tsx}"]`  
- `src/index.css` vorbereiten mit: `@tailwind base; @tailwind components; @tailwind utilities;`  
- In `tsconfig.json` strict-Mode aktivieren.  

---

## Tagesplan

### 📅 Tag 1 – Scaffold & Pages
- Projekt aufsetzen, Seitenstruktur anlegen (`Home.tsx`, `Focus.tsx`).  
- Navigation hinzufügen (`react-router-dom`).  

### 📅 Tag 2 – Todos Basis
- Komponenten: `TodoInput`, `TodoItem`, `TodoList`.  
- Strikte Typen (`Todo`-Interface mit id, text, done).  
- State: Array von Todos.  

### 📅 Tag 3 – Filter & Bulk Actions
- Filter: alle, aktive, erledigte Todos.  
- Bulk-Aktion: alle erledigen, erledigte löschen.  
- Leere Zustände: Illustration + Text.  

### 📅 Tag 4 – Persistenz
- Custom Hook `useLocalStorage<T>()` einsetzen.  
- Todos persistieren zwischen Reloads.  

### 📅 Tag 5 – Pomodoro-Timer
- Countdown-Logik (25 Min Fokus, 5 Min Pause).  
- Start/Stop/Reset Buttons.  
- Optional: Browser Notification bei Ablauf.  

### 📅 Tag 6 – UI Polish
- Tastatur-Shortcuts (Enter fügt Todo hinzu, Space toggelt).  
- Labels und ARIA-Attribute hinzufügen.  
- Kleine Tests (Counter, TodoInput).  

### 📅 Tag 7 – Review
- Refactor, unnötige Props entfernen.  
- README + GIF Demo aufnehmen.  
- Architekturskizze in `ARCH.md`.  

---

## Quellen & Ressourcen
- React Docs: https://react.dev/  
- TypeScript Handbook: https://www.typescriptlang.org/docs/  
- Tailwind Forms: https://tailwindcss.com/docs/forms  
- Pomodoro Inspiration: https://pomofocus.io/  

---

## Erfolgskontrolle
- Todos bleiben nach Reload erhalten?  
- Pomodoro läuft zuverlässig?  
- Tastaturbedienung überall möglich?  
- Keine TypeScript-Fehler (`tsc --noEmit`)?  
- ✅ Dann Woche 03 abgeschlossen.
