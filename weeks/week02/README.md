# Woche 02 – Projekt **w02-ui-kit**

> **Ziel:** Wiederverwendbare UI-Bausteine + Farb/Typo-System.  
> **Kernfeatures:** Buttons (Varianten), Inputs, Modal/Drawer, Tabs, Alerts.  
> **Akzeptanzkriterien:** Tastatur-A11y, Fokus-Styles, Dark-Mode Toggle.  
> **Deliverables:** STYLEGUIDE.md + Live-Demo-Seite.

---

## Projektstart

- Neues Projekt scaffolden: `npm create vite@latest w02-ui-kit -- --template react-ts`  
- Tailwind installieren: `npm i -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`  
- In `tailwind.config.js` content setzen: `["./index.html","./src/**/*.{ts,tsx}"]`  
- In `src/index.css` folgende Direktiven hinzufügen: `@tailwind base; @tailwind components; @tailwind utilities;`  
- `tsconfig.json` prüfen → `strict: true`  

---

## Tagesplan

### 📅 Tag 1 – Design Tokens
- Farben, Typografie und Spacing in Tailwind konfigurieren.  
- Theme erweitern: `extend: { colors: { brand: {...} } }`.  
- Utility-Klassen testen (z. B. Buttons mit Brand-Farben).  

### 📅 Tag 2 – Buttons
- Komponenten `Button.tsx` und `IconButton.tsx`.  
- Props: `variant: "primary" | "secondary" | "ghost"`.  
- Loading-Props mit Spinner.  
- Story-Komponente erstellen, die alle Varianten zeigt.  

### 📅 Tag 3 – Form Controls
- Komponenten `Input.tsx`, `Select.tsx`, `Checkbox.tsx`, `Switch.tsx`.  
- Sauber typisierte Props (`onChange`, `value`, etc.).  
- Tailwind Fokus-Styles mit `focus:ring-2`.  

### 📅 Tag 4 – Overlay-Komponenten
- `Modal.tsx`: ESC schließt, Fokus-Trap (Tab bleibt im Dialog).  
- `Drawer.tsx` (optional): slide-in Animation per Tailwind Transition.  
- ARIA-Rollen hinzufügen (`role="dialog"`, `aria-modal="true"`).  

### 📅 Tag 5 – Navigationselemente
- `Tabs.tsx` (mit ARIA `role="tablist"` und `role="tabpanel"`).  
- `Breadcrumbs.tsx` mit Props für Pfadsegmente.  
- `Navbar.tsx` (flex layout, Dark-Mode Toggle integriert).  

### 📅 Tag 6 – Theming & Accessibility
- Dark-Mode Toggle (`document.documentElement.classList.toggle("dark")`).  
- Reduced motion berücksichtigen (`@media (prefers-reduced-motion: reduce)`).  
- Transitions dezent einsetzen.  
- Dokumentation in STYLEGUIDE.md ergänzen.  

### 📅 Tag 7 – Review
- Code Cleanup: keine ungenutzten Props, keine TypeScript-Fehler.  
- Screenshots der Komponenten machen.  
- STYLEGUIDE.md + README finalisieren.  
- Commit: `Week 02 Complete`.  

---

## Quellen & Ressourcen
- **Tailwind Docs:** https://tailwindcss.com/docs  
- **React Accessibility:** https://react.dev/learn/accessibility  
- **Headless UI (Inspiration):** https://headlessui.dev/  
- **Radix Primitives (Referenz):** https://www.radix-ui.com/primitives  

---

## Erfolgskontrolle
- Funktionieren Buttons, Inputs, Modal und Tabs per Tastaturbedienung?  
- Sind Props korrekt typisiert, keine TypeScript-Fehler (`tsc --noEmit`)?  
- Gibt es eine Dark-Mode Umschaltung?  
- Enthält STYLEGUIDE.md Screenshots und kurze Beschreibungen?  
- ✅ Wenn ja → Woche 02 abgeschlossen.
