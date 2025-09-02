// ===== script.js =====
// Vollständiger, nicht gekürzter Lehrplan (16 Wochen) + Glass-UI + Infinite Scroll + Progressbar

// ---------------- Dataset: Alle 16 Wochen (detailliert) ----------------
const weeks = [
  {
    id: 1,
    slug: "w01-playground",
    title: "Woche 01 — Playground (React+TSX Fundamentals)",
    goals: "Sichere TSX-Grundlagen, Props/State/Events, Tailwind-Basics.",
    features: "Kleine, isolierte Komponenten (Button, Card, Counter, TagList).",
    acceptance: "Keine TypeScript-Fehler, Linting fehlerfrei, 1 Styleguide-Seite.",
    deliverables: "README mit Screens, STYLEGUIDE.md (Buttons, Cards, Typografie).",
    days: [
      "Tag 1: Projekt scaffolden (Vite React-TS), Tailwind installieren, TS strict aktivieren; Ordnerstruktur src/components, src/pages, src/lib; AppShell mit Header/Main/Footer (max-w-3xl, mx-auto, p-4), Basis-Theming in Tailwind.",
      "Tag 2: Komponenten Button/Badge/Card implementieren; Props strikt typisieren (variant: 'primary'|'secondary'|'ghost', size, disabled), Icon-Slot über children; Fokus- und Hover-Styles in Tailwind, zusammensetzbare className-Strategie.",
      "Tag 3: State/Events: Counter (useState<number>, +/–), Toggle (controlled, value/ onChange), Tastaturtests (Space/Enter), ARIA-Attributes und Labels; keine unkontrollierten Inputs.",
      "Tag 4: Listen/Keys: TagList mit Hinzufügen/Entfernen (uuid für id), korrekte keys, leere Zustände mit Illustration/Text; Fehlerfälle (Doppelte Tags) behandeln.",
      "Tag 5: Custom Hook useLocalStorage<T>() (get/set, JSON parse/stringify, Fallback bei Fehlern); ThemeToggle (dark/light) mit Persistenz (document.documentElement.classList.toggle('dark')).",
      "Tag 6: Styleguide-Seite anlegen (alle Komponenten mit Varianten, Disabled/Loading-States, Interaktionen); Dokumentation der Props, kurze Beispiele.",
      "Tag 7: Review: Konsolidieren von Props, alle any entfernen, ESLint/Prettier laufen lassen, `tsc --noEmit` ohne Fehler; Screenshots erstellen und README ergänzen."
    ]
  },
  {
    id: 2,
    slug: "w02-ui-kit",
    title: "Woche 02 — UI-Kit Seeds (Tailwind Pro)",
    goals: "Wiederverwendbare UI-Bausteine + Farb/Typo-System.",
    features: "Buttons (Varianten), Inputs, Modal/Drawer, Tabs, Alerts.",
    acceptance: "Tastatur-A11y, Fokus-Styles, Dark-Mode Toggle.",
    deliverables: "STYLEGUIDE.md + Live-Demo-Seite.",
    days: [
      "Tag 1: Design Tokens: Tailwind theme.extend (colors.brand, spacing, radius, shadows), Typografie-Skala; Utilities testen (bg, text, ring); Variablen-Notizen in STYLEGUIDE.md.",
      "Tag 2: Buttons: Button und IconButton mit Varianten (primary/secondary/ghost), Größen (sm/md/lg), Loading-Spinner (aria-busy), FullWidth-Option; visuelle Regression via Screens.",
      "Tag 3: Form Controls: Input, Select, Checkbox, Switch; Props streng typisieren (value/onChange), Fehlermeldungen unterhalb der Felder, Fokus-Ring per focus-visible; Form-Beispiele in Demo.",
      "Tag 4: Overlay: Modal (ESC schließt, Fokus-Trap, role='dialog' aria-modal), optional Drawer (slide-in transition), Close-Button mit aria-label; inert-Hack für Hintergrund (optional).",
      "Tag 5: Navigation: Tabs mit ARIA (role tablist/tabpanel), Breadcrumbs (aria-current='page'), Navbar mit Dark-Mode Toggle; Responsive Verhalten prüfen.",
      "Tag 6: Theming & A11y: Dark/Light Themes, prefers-reduced-motion respektieren, Transitions dezent; STYLEGUIDE.md mit Anwendungsregeln und Beispielen ergänzen.",
      "Tag 7: Review: Cleanup, Props konsistent, keine TS-Fehler; README mit Screenshots & Kurzanleitung."
    ]
  },
  {
    id: 3,
    slug: "w03-productivity",
    title: "Woche 03 — Productivity Mini (Todos + Pomodoro)",
    goals: "Komposition + lokale Persistenz; Custom Hooks; UX-Details.",
    features: "Todo-Liste (Filter), Pomodoro-Timer, LocalStorage.",
    acceptance: "Keine unkontrollierten Inputs, Tastaturbedienung überall.",
    deliverables: "GIF/Loom-Demo, ARCH.md (kurze Architekturskizze).",
    days: [
      "Tag 1: Scaffold; Routen Home (Todos) und Focus (Timer); Navigationsleiste; Grundlayout; Dummy-Inhalte anzeigen.",
      "Tag 2: TodoInput/TodoItem/TodoList: `Todo {id, text, done}` strikt typisieren; Controlled Input mit Enter zum Hinzufügen; TodoItem mit Toggle/Remove.",
      "Tag 3: Filter (alle/aktiv/erledigt), Zähler (Counts), Bulk-Actions (alle erledigen/erledigte löschen), leere Zustände (freundliche Texte, Icons).",
      "Tag 4: Persistenz: useLocalStorage<T>() produktiv einbinden (Initial-Load + Sync bei Updates), fehlerresistente JSON-parse/ stringify, defensive Defaults.",
      "Tag 5: Pomodoro: 25/5 Blöcke, Start/Stop/Reset, Restzeit anzeigen, optional Notifications API bei Ablauf; Tab-Switch-Handling (Document Title Blink optional).",
      "Tag 6: UI-Polish: Hotkeys (j/k Navigation, Enter bestätigen), Accessible Labels und aria-live für Status; 1–2 Tests (Input hinzufügen, Timer tickt).",
      "Tag 7: Review & Demo: Refactor, README finalisieren, GIF/Loom aufnehmen, ARCH.md mit Struktur (Pages, Components, Hooks) erstellen."
    ]
  },
  {
    id: 4,
    slug: "w04-routerblog",
    title: "Woche 04 — RouterBlog (React Router)",
    goals: "Layout-/Nested Routes, Params, 404, Lazy Loading.",
    features: "Blog-Shell mit Artikelliste, Detail, 404, Lazy Routes.",
    acceptance: "Skip-Link, aktive Links, Breadcrumbs vorhanden.",
    deliverables: "routes.md (Routenhierarchie), Screenshots.",
    days: [
      "Tag 1: Router-Setup (react-router-dom), LayoutRoute mit Header/Sidebar/Footer; Skip-Link (visually hidden → focus sichtbar).",
      "Tag 2: Index-Route Artikel-Liste (Mock/MD-Dateien), Detail-Route `/:id` für einzelne Artikel; 404-Seite mit freundlichem Text und Home-Link.",
      "Tag 3: Lazy imports (React.lazy + Suspense) für Liste/Detail; hübsche NotFound-SEite mit Illustration; Fallback-Spinners konsistent.",
      "Tag 4: Breadcrumbs dynamisch aus Route ableiten (Start > Blog > Artikel); useSearchParams für Text-Filter in Liste.",
      "Tag 5: Markdown-Stub-Beiträge lokal laden (import.meta.glob), Typography via @tailwindcss/typography (prose/prose-invert).",
      "Tag 6: A11y-Pass: Landmarks <main>/<nav>, Fokus-Management nach Navigation, aria-current für aktive Links; Tab-Reihenfolge testen.",
      "Tag 7: Review: routes.md mit Skizze der Routen/Loader, Screenshots, README auffrischen."
    ]
  },
  {
    id: 5,
    slug: "w05-openbooks",
    title: "Woche 05 — OpenBooks Explorer (fetch)",
    goals: "Data-Fetching mit fetch, Lade-/Fehlerzustände, Skeletons.",
    features: "Suche, Ergebnisliste, Paginierung, Detailseite.",
    acceptance: "Robustes Error-Handling; sichtbare Retry-UI.",
    deliverables: "API-NOTIZEN.md (Endpoints/Limits), Screens.",
    days: [
      "Tag 1: fetchJson<T>() Utility (Timeout-Controller, JSON parse, Fehlerobjekte normieren); Types für BookSummary/BookDetail.",
      "Tag 2: Suchseite mit Debounce (setTimeout/AbortController), Ergebnisliste mit Karten, Empty-States, Tastaturnavigation.",
      "Tag 3: Paginierung (prev/next), URL-Parameter für Seite, Loading Skeletons (Pulse-Placeholders) für Karten und Details.",
      "Tag 4: Detailseite als Modal oder echte Route; Back-Navigation; Deep-Linking unterstützt.",
      "Tag 5: Fehlerfälle durchspielen: Timeout, 5xx, Network-Error; Retry-Button; Nutzerfreundliche Fehlermeldungen.",
      "Tag 6: UI-Polish: No-results Illustration, A11y Check (aria-live, Labels), Link-Farben/Kontraste.",
      "Tag 7: Review: API-NOTIZEN.md aktualisieren, Screenshots, README mit Setup/Usage."
    ]
  },
  {
    id: 6,
    slug: "w06-movies-query",
    title: "Woche 06 — Movie Explorer v2 (TanStack Query)",
    goals: "Server-State, Cache, Prefetch, Infinite Scroll.",
    features: "Trending, Suche, Detail, Bookmarks (optimistic).",
    acceptance: "Konsistente Query-Keys; korrekte Cache-Invalidation.",
    deliverables: "CACHING.md (Strategien), GIF-Demo.",
    days: [
      "Tag 1: QueryClient + Devtools einrichten; API-Schicht (getTrending, searchMovies, getDetails).",
      "Tag 2: Hook useMoviesQuery mit einheitlichen Loading/Error/Empty-States; Devtools prüfen.",
      "Tag 3: Infinite Scroll mit fetchNextPage oder Pagination; Prefetch von Detaildaten beim Hover/Fokus.",
      "Tag 4: Mutations: Bookmark/Like; Optimistic Update mit onMutate/onError/onSettled (Rollback bei Fehler).",
      "Tag 5: Cache-Strategien testen/dokumentieren (staleTime, gcTime); Leitlinien für Key-Design in CACHING.md.",
      "Tag 6: UI-Polish, Reload-Verhalten, Fehlermeldungen angleichen; Skeletons konsistent.",
      "Tag 7: Review: GIF aufnehmen, README & CACHING.md finalisieren."
    ]
  },
  {
    id: 7,
    slug: "w07-wizard-forms",
    title: "Woche 07 — Onboarding Wizard (react-hook-form + zod)",
    goals: "Formsystem mit Validierung, Stepper, Persist zwischen Steps.",
    features: "3–4 Steps (Profil, Adresse, Optionen, Review).",
    acceptance: "A11y-Labels/Errors, Async-Validierung (Username).",
    deliverables: "FORM-A11Y.md, Screens.",
    days: [
      "Tag 1: Setup RHF + zod; Resolver anbinden; Grundform mit Submit-Handler; zod-Schemas definieren.",
      "Tag 2: Step 1 Profil (Name/Email/Username) mit Fehleranzeige, label/aria-describedby korrekt; Next/Back Buttons.",
      "Tag 3: Step 2 Adresse (Straße/Stadt/PLZ), abhängige Felder (PLZ-Validierung), Inline-Fehler.",
      "Tag 4: Step 3 Optionen (Checkboxen/Selects), File-Upload Stub (nur UI, keine Server-Übertragung).",
      "Tag 5: Review-Step (Zusammenfassung aller Daten), Persistenz in LocalStorage pro Step; Wiederherstellen bei Refresh.",
      "Tag 6: Async-Validierung Username (Fake-API) mit Debounce; Loading-Indicator/aria-busy.",
      "Tag 7: A11y-Pass (Tab-Reihenfolge, Fokusfallen), FORM-A11Y.md schreiben; README mit Screenshots."
    ]
  },
  {
    id: 8,
    slug: "w08-cartify",
    title: "Woche 08 — Cartify (Zustand Store)",
    goals: "Globaler Zustand, Selektoren, Persist, Middleware.",
    features: "Produktliste (Mock), Warenkorb, Summen, Snackbar.",
    acceptance: "Minimale Re-renders, saubere Selectors.",
    deliverables: "ARCHITEKTUR.md (Store-Skizze), 1–2 Store-Tests.",
    days: [
      "Tag 1: Zustand-Store useCartStore mit add/remove/updateQty; Persist-Middleware (localStorage) aktivieren.",
      "Tag 2: Produktkatalog (Mockdaten), Karten mit Add/Remove/Qty-Controls; Disabled-States bei Grenzen.",
      "Tag 3: Selektoren für Totals/Count, Memoization sicherstellen; Komponenten nur neu rendern, wenn nötig.",
      "Tag 4: Snackbar/Toasts bei Add/Remove; optional Undo (Zeitfenster).",
      "Tag 5: Persistenz prüfen (Reload), Edgecases (leerer Korb, große Mengen, ungültige Eingaben).",
      "Tag 6: Tests: Totals/Qty-Rechner; Performance-Check im Profiler.",
      "Tag 7: Polish: ARCHITEKTUR.md (Store-Diagramm/Flows), README & Screenshots."
    ]
  },
  {
    id: 9,
    slug: "w09-notes-auth",
    title: "Woche 09 — Notes Auth (Supabase)",
    goals: "Auth-Flows (Signup/Login/Logout), geschützte Routen.",
    features: "Private Notizen (CRUD), Profilseite.",
    acceptance: ".env sicher, 401/403 UX klar.",
    deliverables: ".env.example, TESTPLAN.md.",
    days: [
      "Tag 1: Supabase-Projekt erstellen; .env mit URL/ANON_KEY; src/lib/supabase.ts createClient; erste Query supabase.from('notes').select('*').",
      "Tag 2: LoginForm/SignupForm (Email/Password); Fehlertexte klar; Fokuszustände; falsche Eingaben testen.",
      "Tag 3: ProtectedRoute-Komponente (Session prüfen); ohne Session → Redirect; Navbar: Logout.",
      "Tag 4: Notes CRUD (id, user_id, title, content); nur Owner darf CRUD (user_id prüfen).",
      "Tag 5: Profilseite (Avatar/DisplayName) über Tabelle profiles; Avatar-Upload Stub; Logout prominent.",
      "Tag 6: Manuelle E2E: falsches Login, Signup→Login→Note erstellen, Logout→/notes gesperrt; Ergebnisse in TESTPLAN.md.",
      "Tag 7: README ergänzen (Setup/Screens), Sicherheit (.env nicht committen), finaler Pass."
    ]
  },
  {
    id: 10,
    slug: "w10-team-admin",
    title: "Woche 10 — Team Hub Admin (RBAC)",
    goals: "Rollen/Claims-gesteuerte UI, Admin-Sektion.",
    features: "Team-Liste, Member-Rollen, Admin-only Views.",
    acceptance: "Guards zentral, kein versteckter Direktzugriff.",
    deliverables: "RBAC.md, Screens.",
    days: [
      "Tag 1: Routenplan / (Public), /dashboard (Member), /admin (Admin only); Navbar Links abhängig von Rolle; Skip-Link.",
      "Tag 2: RoleContext + useRole(); Guard-Komponenten `RequireRole({role: 'admin'})`; Test: Member darf /admin nicht.",
      "Tag 3: Admin-Seiten: Mitgliederliste, Rollen ändern (Dropdown), Entfernen (Danger-Button); Optimistic UI.",
      "Tag 4: Member-View: erlaubte Aktionen (eigene Daten pflegen), Admin-spezifische Aktionen verborgen.",
      "Tag 5: Fehlerkommunikation: 403-Seite mit Erklärung; deaktivierte Buttons mit Tooltip; Logging optional.",
      "Tag 6: Tests: RequireRole blockt; Member sieht Admin-Link nicht; Snapshot Admin-UI.",
      "Tag 7: Review: RBAC.md (Rollenmatrix/Flüsse), README & Screens."
    ]
  },
  {
    id: 11,
    slug: "w11-testlab",
    title: "Woche 11 — TestLab (Vitest + RTL + MSW)",
    goals: "Testkompetenz: Unit, Component, API-Mocks.",
    features: "Kleine App (Login-Form + Liste) als Test-Gegenstand.",
    acceptance: "8–12 Tests, CI-Skript, grün.",
    deliverables: "Badge (README), Coverage Report.",
    days: [
      "Tag 1: Vitest/RTL Setup (jsdom), setupTests.ts mit jest-dom; MSW Handler (/api/items); erster Testlauf.",
      "Tag 2: Unit-Tests für Utils/Hooks (sum/formatDate, kleiner fetch-Hook).",
      "Tag 3: Component-Tests LoginForm: Eingabe→Submit→API, Fehlertext bei 400; getByLabelText für A11y.",
      "Tag 4: Router-Tests mit MemoryRouter: ProtectedRoute ohne Auth→Redirect, mit Auth→Dashboard sichtbar.",
      "Tag 5: MSW-Szenarien 200/400/500; UI reagiert richtig; Retry-Button Verhalten.",
      "Tag 6: CI (GitHub Actions) mit `npm test -- --coverage`; Coverage Badge ins README.",
      "Tag 7: Stabilisierung: flaky Tests fixen, Teststrategie im README beschreiben."
    ]
  },
  {
    id: 12,
    slug: "w12-perf-a11y",
    title: "Woche 12 — Perf & A11y Lab (Virtualization + Dialogs)",
    goals: "Performance-Muster + tiefe A11y.",
    features: "Virtuelle Liste (1k+ Items), Dialog/Popover (Radix/Headless).",
    acceptance: "Messbare Render-Reduktion; korrekte ARIA/Fokusführung.",
    deliverables: "PERF-NOTES.md, A11Y-CHECKLIST.md.",
    days: [
      "Tag 1: 1000 Dummy-Items rendern; DevTools Performance + FPS messen; Baseline in PERF-NOTES.md dokumentieren.",
      "Tag 2: Virtualization mit @tanstack/react-virtual (fixe Itemhöhe, overflow-auto); Memory/FPS vergleichen.",
      "Tag 3: React DevTools Profiler: Render Counts und Commit-Zeit vorher/nachher; Screens dokumentieren.",
      "Tag 4: Accessible Dialog (Radix): ESC schließt, Focus-Trap, role='dialog', aria-modal; Tastaturtest.",
      "Tag 5: Accessible Popover: kurze Inhalte/Aktionen; Fokus nach Close zurück zum Trigger; ARIA prüfen.",
      "Tag 6: Verfeinerung: prefers-reduced-motion, gezielte useMemo/useCallback; A11Y-CHECKLIST.md ausfüllen.",
      "Tag 7: README mit Screens; PERF-NOTES finalisieren (Before/After)."
    ]
  },
  {
    id: 13,
    slug: "w13-taskflow-mvp",
    title: "Woche 13 — TaskFlow Kanban — MVP",
    goals: "Grundgerüst Kanban (Boards/Listen/Tasks) + Query + Zustand.",
    features: "CRUD, Filter, optional Drag&Drop.",
    acceptance: "0 Type-Errors, robuste Fehler-UI.",
    deliverables: "SPEC.md, Screens.",
    days: [
      "Tag 1: Types in src/types.ts; MSW Handlers (Boards/Lists/Tasks CRUD); React Query + Zustand Store initialisieren; SPEC.md Datenmodell.",
      "Tag 2: BoardsPage: Boards auflisten, Neues Board anlegen (Dialog); Fehler-UI (Server down) anzeigen.",
      "Tag 3: BoardDetail: Listen pro Board anzeigen; Add List; Delete mit Confirm; Empty States.",
      "Tag 4: TaskList je List: Create/Edit/Delete Task, Done-Checkbox; Zustand/Query Update konsistent.",
      "Tag 5: Filter/Suche über alle Tasks (Titel); No-results Zustand.",
      "Tag 6: Optional Drag&Drop (dnd-kit): Tasks zwischen Listen verschieben; Reihenfolge im Store speichern.",
      "Tag 7: Review: README, SPEC.md erweitern (Filter/DnD), Lint/Types OK."
    ]
  },
  {
    id: 14,
    slug: "w14-taskflow-collab",
    title: "Woche 14 — TaskFlow — Collaboration",
    goals: "Kommentare, Activity Log, (optional) Realtime.",
    features: "Task-Comments, History, Mentions (@).",
    acceptance: "Konfliktarme Updates; UX klar.",
    deliverables: "COLLAB.md, GIF-Demo.",
    days: [
      "Tag 1: CommentList/CommentForm; Validierung (kein leeres Kommentar), Auto-Scroll zu neuem Kommentar.",
      "Tag 2: Activity Log Panel: Events (Created/Updated/Moved) mit Zeitstempel; UI lesbar formatieren.",
      "Tag 3: Mentions: @username Erkennung (Regex), Dropdown-Vorschläge (nur UI), Pfeiltasten/Enter.",
      "Tag 4: Optional Realtime (Supabase Channels/WebSocket): neue Kommentare erscheinen live; Fallback Polling.",
      "Tag 5: Notifications/Toasts bei neuen Kommentaren; Fehlerfälle (Netz weg) → Retry; Logging.",
      "Tag 6: A11y: Screenreader-Lesereihenfolge, Focus-Management im Mentions-Dropdown; Tabindex test.",
      "Tag 7: Review: GIF-Demo aufnehmen (Kommentieren + Activity Log), COLLAB.md (Architektur/Realtime)."
    ]
  },
  {
    id: 15,
    slug: "w15-taskflow-perf",
    title: "Woche 15 — TaskFlow — Performance & Offline",
    goals: "Performance-Tuning, Code-Splitting, Offline-Resilienz.",
    features: "Lazy Boards, Prefetching, Retry/Backoff, Error Boundaries, Offline-Hinweise.",
    acceptance: "Lighthouse ≥ 90, TTI verbessert, robuste Fehlerpfade, Messdoku.",
    deliverables: "PERF-REPORT.md, LIGHTHOUSE.md, ERROR-PLAYBOOK.md.",
    days: [
      "Tag 1: Ist-Stand messen (DevTools Performance, Network Throttling, Coverage), Lighthouse, Rollup Visualizer; Baseline dokumentieren.",
      "Tag 2: Route/Component Code-Splitting (React.lazy/Suspense); Drittlibs nur auf Bedarf; Preload kritischer Assets/Routes.",
      "Tag 3: Rendering optimieren: React.memo/useMemo/useCallback, Selektoren; optional List-Virtualization; Lazy-load Bilder.",
      "Tag 4: Netz/Cache: React Query retry/retryDelay (Backoff), staleTime/cacheTime, placeholderData; Prefetch on Hover.",
      "Tag 5: Error Boundaries (AppShell/Detail-Ebene), Offline-Banner via navigator.onLine, Vite-PWA Basis (registerType 'autoUpdate').",
      "Tag 6: Asset/Font-Optimierung (WebP/AVIF, font-display swap, self-hosted), Unused CSS minimieren; Lighthouse Re-Run & dokumentieren.",
      "Tag 7: Polish & Abnahme: PERF-REPORT, LIGHTHOUSE, ERROR-PLAYBOOK final; Merge/Tag/Release Notes."
    ]
  },
  {
    id: 16,
    slug: "w16-portfolio",
    title: "Woche 16 — Portfolio + Polish",
    goals: "Portfolio-Seite + Feinschliff aller Projekte, überzeugende Präsentation inkl. Deploy.",
    features: "Projektkacheln, Projekt-Detailseiten, About, Kontakt/Impressum, SEO/OG, schnelle Ladezeiten.",
    acceptance: "Klare IA, responsive, gute Web-Vitals, eindeutige CTAs, fehlerfreie Links.",
    deliverables: "Live-Deploy, PORTFOLIO-README.md, MEDIA (Screens/GIFs), 5-min Demo-Video, Social-Post.",
    days: [
      "Tag 1: IA skizzieren (Overview/Project/:slug/About/Contact), AppShell bauen (Header/Nav/Footer), responsives Grid (1/2/3 Spalten), Skip-Link.",
      "Tag 2: Projektkarten (Thumbnail, Titel, Kurztext, Tech-Tags), Datenquelle (projects.json/ts), Interaktionen (Hover/Fokus), optional Filter nach Tech.",
      "Tag 3: Projekt-Detail (Hero, Summary, Tech-Stack, Learnings, Challenges, Galerie, Links); SEO title/meta description dynamisch; OG/Twitter Meta.",
      "Tag 4: Medien optimieren: Screens konsistent, GIF→MP4/WebM wenn groß; WebP/AVIF, width/height, loading='lazy', CLS vermeiden.",
      "Tag 5: SEO/OG/Sitemap/Robots; JSON-LD (Person/CreativeWork) minimal; privacy-freundliche Analytics; Links prüfen.",
      "Tag 6: Deploy (Vercel/Netlify), SPA-404-Fallback, Lighthouse auf Prod-URL; 5-min Demo-Video aufnehmen (Intro→3 Projekte→Code→CTA).",
      "Tag 7: Social-Post-Text (LinkedIn/GitHub), Root-README mit Projektliste/Links, Mini-Usability-Test und Tweaks; Tag/Release anlegen."
    ]
  }
];

// ---------------- Rendering & Interactions ----------------
const listEl = document.getElementById("list");
const sentinel = document.getElementById("sentinel");
const progressEl = document.getElementById("progress");

let page = 0;
const PAGE_SIZE = 4; // 4 Wochen pro Ladezyklus (infinite scroll)

function createWeekCard(week) {
  const card = document.createElement("article");
  card.className =
    "glass rounded-2xl p-5 sm:p-6 shadow-glass border border-white/10 transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-white/25 focus-within:-translate-y-1";
  card.tabIndex = 0;

  const daysList = week.days
    .map((d) => `<li class="pl-2 sm:pl-3 marker:text-cyan-300 list-disc ml-5">${d}</li>`)
    .join("");

  card.innerHTML = `
    <header class="mb-3 sm:mb-4">
      <div class="flex items-center justify-between gap-3">
        <h2 class="text-lg sm:text-xl font-semibold tracking-tight">
          <span class="text-cyan-300">${String(week.id).padStart(2, "0")}</span>
          <span class="mx-1.5 text-slate-400">•</span>
          ${week.title}
        </h2>
        <span class="hidden sm:inline-flex px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/10 border border-white/20">${week.slug}</span>
      </div>
    </header>

    <div class="grid gap-3 sm:gap-4">
      <p class="text-sm text-slate-200"><span class="text-slate-400">Ziel:</span> ${week.goals}</p>
      <p class="text-sm text-slate-200"><span class="text-slate-400">Kernfeatures:</span> ${week.features}</p>
      <p class="text-sm text-slate-200"><span class="text-slate-400">Akzeptanzkriterien:</span> ${week.acceptance}</p>
      <p class="text-sm text-slate-200"><span class="text-slate-400">Deliverables:</span> ${week.deliverables}</p>

      <section class="mt-2">
        <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-300 mb-1.5">Tagesplan</h3>
        <ul class="text-sm leading-relaxed text-slate-200 space-y-1">
          ${daysList}
        </ul>
      </section>
    </div>
  `;

  // sanfte Entrittsanimation
  card.style.opacity = "0";
  card.style.transform = "translateY(10px) scale(.98)";
  requestAnimationFrame(() => {
    card.style.transition = "opacity .5s ease, transform .5s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0) scale(1)";
  });

  return card;
}

function loadNextPage() {
  if (page * PAGE_SIZE >= weeks.length) return;
  const start = page * PAGE_SIZE;
  const end = Math.min(start + PAGE_SIZE, weeks.length);
  const batch = weeks.slice(start, end);
  batch.forEach((w) => listEl.appendChild(createWeekCard(w)));
  page++;
}

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        loadNextPage();
        // Sentinel nach unten verschieben
        listEl.after(sentinel);
      }
    });
  },
  { rootMargin: "200px" }
);
io.observe(sentinel);

// initiale Ladung
loadNextPage();

// Scroll-Progressbar
function updateProgress() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const p = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  progressEl.style.width = `${p}%`;
}
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();
