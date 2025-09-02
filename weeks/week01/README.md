# Week 1

# Woche 01 – Projekt **w01-playground**

> **Ziel:** Sichere TSX-Grundlagen, Props/State/Events, Tailwind-Basics.  
> **Kernfeatures:** Kleine, isolierte Komponenten (Button, Card, Counter, List).  
> **Akzeptanzkriterien:** Keine TypeScript-Fehler, CI-freies Linting, 1 Styleguide-Seite.  
> **Deliverables:**  
> - `README.md` mit Screenshots und kurzer Erklärung  
> - `STYLEGUIDE.md` mit Buttons, Cards, Typografie  

---

## Tagesplan

**Tag 1** – Scaffold & Basislayout
- Projekt mit Vite + TSX aufsetzen (siehe oben).
- Komponentenstruktur anlegen: src/components/, src/pages/, src/lib/.
- AppShell.tsx erstellen:
- Enthält <header>, <main>, <footer>.
- Mit Tailwind einfache Layout-Struktur (max-w-3xl, mx-auto, p-4).
- Lint/Format einrichten (ESLint + Prettier).
- Source: Vite React TS Doku, Tailwind Setup.

⸻

**Tag 2** – Erste Komponenten (Props)
- Button.tsx, Badge.tsx, Card.tsx erstellen
- Props streng typisieren (Beispiel: variant: "primary" | "secondary").
- Storybook-artig in App.tsx rendern.
- Tailwind-Varianten mit className kombinieren.
- Source: React Docs – Props.

⸻

**Tag 3** – State & Events
- Counter.tsx: mit useState<number>, Buttons für + / –.
- Toggle.tsx: Checkbox als controlled component, State in Parent.
- Tastaturtest: Tab-Navigation, Enter/Space.
- Source: React Docs – State.

⸻

**Tag 4** – Listen & Keys
- TagList.tsx: Array von Strings als State.
- Eingabefeld + Button → fügt Tag hinzu.
- Entfernen-Button je Tag.
- Keys korrekt setzen (key={tag}).
- Leere Zustände rendern („Keine Tags“).
- Source: React Docs – Rendering Lists.

⸻

**Tag 5** – Custom Hooks (Light)
- useLocalStorage<T>() Hook bauen (nur Demo: speichern + laden).
- <ThemeToggle/> implementieren:
- Dark/Light Mode Toggle, Wert in localStorage.
- document.documentElement.classList.toggle("dark").
- Source: React Hooks, Custom Hooks Tutorial.

⸻

**Tag 6** – Styleguide-Seite
- Neue Seite Styleguide.tsx.
- Alle Komponenten (Button, Badge, Card, Counter, Toggle, TagList) darstellen.
- Dokumentation in STYLEGUIDE.md: Screenshots + kurze Beschreibung.
- Source: Tailwind UI Inspiration.

⸻

**Tag 7** – Review & Refactor
- Code Cleanup: keine any, Props sauber.
- ESLint + Prettier laufen lassen → keine Fehler.
- Screenshots machen (Styleguide-Seite + AppShell).
- README.md erweitern mit:
  - Kurze Projektbeschreibung
  - Screenshots
  - Install/Run-Anleitung
  - Finaler Commit → “Week 01 Complete”.

⸻

### Quellen & Ressourcen
- React Docs (Beta): https://react.dev/
- TypeScript Handbook: https://www.typescriptlang.org/docs/
- Tailwind Docs: https://tailwindcss.com/docs
- ESLint + Prettier Setup: https://eslint.org/

⸻

Erfolgskontrolle
- Kannst du einen Button mit klar typisierten Props verwenden
- Funktioniert dein Counter korrekt und ohne TS-Fehler?
- Hat dein Styleguide alle Komponenten sichtbar?
- Sind Linting und TS ohne Fehler (npm run lint, tsc --noEmit)?
- Dann Woche 01 bestanden!
