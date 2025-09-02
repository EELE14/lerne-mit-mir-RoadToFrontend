# Woche 1 — React+TSX Fundamentals Playground

**Slug: w01-playground**
- __Ziel:__ Sichere TSX-Grundlagen, Props/State/Events, Tailwind-Basics.
- __Kernfeatures:__ Kleine, isolierte Komponenten (Button, Card, Counter, List).
- __Akzeptanzkriterien:__ Keine TypeScript-Fehler, CI-freies Linting, 1 Styleguide-Seite.
- __Deliverables:__ README mit Screens, STYLEGUIDE.md (Buttons, Cards, Typo).

**__Tagesplan__**
- __Tag 1:__ Scaffold, Tailwind, TS strict, Projektstruktur, Basislayout (<AppShell/>).
- __Tag 2:__ Komponenten 1: <Button/>, <Badge/>, <Card/> (Props sauber typisieren).
- __Tag 3:__ State/Events: <Counter/>, <Toggle/> (controlled), Tastaturtest.
- __Tag 4:__ Listen/Keys: <TagList/> mit Add/Remove; leere Zustände.
- __Tag 5:__ Hooks light: useLocalStorage<T>() (nur Demo), <ThemeToggle/>.
- __Tag 6:__ Styleguide-Seite: Alle Komponenten dokumentieren.
- __Tag 7:__ Review/Refactor, README + Screens, Lint/Types = 0 Fehler.

⸻

Woche 2 — UI-Kit Seeds (Tailwind Pro)

Slug: w02-ui-kit
Ziel: Wiederverwendbare UI-Bausteine + Farb/Typo-System.
Kernfeatures: Buttons (Varianten), Inputs, Modal/Drawer, Tabs, Alerts.
Akzeptanzkriterien: Tastatur-A11y, Fokus-Styles, Dark-Mode Toggle.
Deliverables: STYLEGUIDE.md + Live-Demo Seite.

Tagesplan
	•	Tag 1: Scaffold, Design Tokens (Farben, Spacing, Typo) in Tailwind.
	•	Tag 2: Buttons (solid/outline/ghost), IconButton; Loading-State.
	•	Tag 3: Form Controls: <Input/>, <Select/>, <Checkbox/>, <Switch/>.
	•	Tag 4: Overlay: <Modal/> (ESC/Focus-Trap), <Drawer/> (optional).
	•	Tag 5: Navigation: <Tabs/>, <Breadcrumbs/>, <Navbar/>.
	•	Tag 6: Dark-Mode, reduzierte Bewegung, Transitions, Doku.
	•	Tag 7: Review, Cleanup, README + Screens.

⸻

Woche 3 — Productivity Mini (Todos + Timer)

Slug: w03-productivity
Ziel: Komposition + lokale Persistenz; Custom Hooks; UX-Details.
Kernfeatures: Todo-Liste (Filter), Pomodoro-Timer, LocalStorage.
Akzeptanzkriterien: Keine unkontrollierten Inputs, Tastaturbedienung.
Deliverables: GIF/Loom-Demo, kurze Arch-Skizze.

Tagesplan
	•	Tag 1: Scaffold, Seiten: Home (Todos), Focus (Timer).
	•	Tag 2: <TodoInput/>, <TodoItem/>, <TodoList/> + Typen.
	•	Tag 3: Filter/Counts, Bulk-Actions, leere Zustände.
	•	Tag 4: useLocalStorage<T>() produktiv einsetzen (Persistenz).
	•	Tag 5: Pomodoro mit Pausen, Benachrichtigung (Browser API, optional).
	•	Tag 6: UI-Polish (Hotkeys, Accessible Labels), kleine tests (1–2).
	•	Tag 7: Review, README + GIF.

⸻

Woche 4 — RouterBlog (React Router)

Slug: w04-routerblog
Ziel: Layout-/Nested Routes, Params, 404, Code-Splitting.
Kernfeatures: Blog-Shell mit Artikelliste, Detail, 404, Lazy Routes.
Akzeptanzkriterien: Skip-Link, aktive Links, Breadcrumbs.
Deliverables: routes.md, Screens.

Tagesplan
	•	Tag 1: Scaffold, React Router, LayoutRoute (Header/Sidebar/Footer).
	•	Tag 2: Index-Route (Liste), Detail-Route (Param), 404.
	•	Tag 3: Lazy import + Suspense, NotFound-Seite hübsch.
	•	Tag 4: Breadcrumbs, useSearchParams für Filter.
	•	Tag 5: Markdown-Stub-Beiträge laden (local), Typography-Seite.
	•	Tag 6: A11y-Pass (Landmarks, Fokus, aria-current).
	•	Tag 7: Review + README.

⸻

Woche 5 — OpenBooks Explorer (fetch)

Slug: w05-openbooks
Ziel: Data-Fetching mit fetch, Lade/Fehlerzustände, Skeletons.
Kernfeatures: Suche, Ergebnisliste, Paginierung, Detailseite.
Akzeptanzkriterien: Robustes Error-Handling; Retry-UI.
Deliverables: API-NOTIZEN.md, Screens.

Tagesplan
	•	Tag 1: Scaffold, API-Client (fetchJson<T>()), Types.
	•	Tag 2: Suchseite mit Debounce, Ergebnisliste, leere Zustände.
	•	Tag 3: Paginierung (prev/next), Loading Skeletons.
	•	Tag 4: Detailseite (Modal/Route), Back-Navigation.
	•	Tag 5: Fehlerfälle: Timeout/Network, Retry, Friendly Errors.
	•	Tag 6: UI-Polish, No-results-Illu, A11y Check.
	•	Tag 7: Review + README.

⸻

Woche 6 — Movie Explorer v2 (TanStack Query)

Slug: w06-movies-query
Ziel: Server-State, Cache, Prefetch, Infinite Scroll.
Kernfeatures: Startseite (Trending), Suche, Detail, Bookmarks (optimistic).
Akzeptanzkriterien: Query-Keys konsistent; Cache invalidation korrekt.
Deliverables: CACHING.md, GIF-Demo.

Tagesplan
	•	Tag 1: Scaffold, QueryClient, Devtools, API-Schicht.
	•	Tag 2: useMoviesQuery, Loading/Error/Empty konsistent.
	•	Tag 3: Infinite Scroll oder Pagination; Prefetch on Hover.
	•	Tag 4: Mutations: Bookmark/Like (optimistic + rollback).
	•	Tag 5: Cache-Strategien dokumentieren; StaleTime/GC testen.
	•	Tag 6: UI-Polish, leere & Error-Zustände angleichen.
	•	Tag 7: Review, README + Caching-Notes.

⸻

Woche 7 — Onboarding Wizard (react-hook-form + zod)

Slug: w07-wizard-forms
Ziel: Formsystem mit Validierung, Stepper, Persist zwischen Steps.
Kernfeatures: 3–4 Steps (Profil, Adresse, Optionen, Review).
Akzeptanzkriterien: A11y-Labels/Errors, Async-Validierung (Username).
Deliverables: FORM-A11Y.md, Screens.

Tagesplan
	•	Tag 1: Scaffold, RHF Setup, zod-Schemas.
	•	Tag 2: Stepper-Layout, Step 1 (Profil), Fehleranzeige.
	•	Tag 3: Step 2 (Adresse), Dependent Fields.
	•	Tag 4: Step 3 (Optionen), File-Upload Stub.
	•	Tag 5: Review-Step + Persistenz (LocalStorage) zwischen Steps.
	•	Tag 6: Async-Validation (verfügbarer Username), Debounce.
	•	Tag 7: A11y-Pass + README.

⸻

Woche 8 — Cartify (Zustand Store)

Slug: w08-cartify
Ziel: Globaler Zustand, Selektoren, Persist, Middleware.
Kernfeatures: Produktliste (Mock), Warenkorb, Summen, Snackbar.
Akzeptanzkriterien: Minimale Re-renders, saubere Selectors.
Deliverables: ARCHITEKTUR.md (Store-Skizze), 1–2 Store-Tests.

Tagesplan
	•	Tag 1: Scaffold, Zustand Store (cart), Persist-Middleware.
	•	Tag 2: Produktkatalog + Add/Remove/Qty.
	•	Tag 3: Selektoren (Totals, Count), Memoization.
	•	Tag 4: Snackbar/Toasts, Undo (optional).
	•	Tag 5: Persistenz prüfen, Edgecases (leerer Korb).
	•	Tag 6: 1–2 Tests (Totals, Qty), Performance-Check.
	•	Tag 7: Polish + README.

⸻

Woche 9 — Notes Auth (Supabase)

Slug: w09-notes-auth
Ziel: Auth-Flows (Signup/Login/Logout), geschützte Routen.
Kernfeatures: Private Notizen (CRUD), Profilseite.
Akzeptanzkriterien: .env sicher, 401/403 UX klar.
Deliverables: .env.example, TESTPLAN.md.

Tagesplan
	•	Tag 1: Scaffold, Supabase Projekt, .env, Client init.
	•	Tag 2: Auth-Screens (Login/Signup), Fehlertexte.
	•	Tag 3: Protected Routes + Redirects.
	•	Tag 4: Notes CRUD (nur Owner), List + Detail.
	•	Tag 5: Profil (Avatar/DisplayName), Logout.
	•	Tag 6: Manuelle E2E-Tests, Bug-List fixen.
	•	Tag 7: README, Sicherheitshinweise.

⸻

Woche 10 — Team Hub Admin (Roles & Guarded UI)

Slug: w10-team-admin
Ziel: Rollen/Claims-gesteuerte UI, Admin-Sektion.
Kernfeatures: Team-Liste, Member-Rollen, Admin-only Views.
Akzeptanzkriterien: Guards zentral, kein versteckter Direktzugriff.
Deliverables: RBAC.md, Screens.

Tagesplan
	•	Tag 1: Scaffold, Routenplan (Public, Member, Admin).
	•	Tag 2: Role-Provider (Context), Guards/HOCs.
	•	Tag 3: Admin-Seiten: Member verwalten, Rollen ändern.
	•	Tag 4: Member-Sicht: nur erlaubte Aktionen.
	•	Tag 5: Fehler/Verbote klar kommunizieren (403 Seite).
	•	Tag 6: Review/Refactor Guards, kurze Tests.
	•	Tag 7: README + RBAC-Notizen.

⸻

Woche 11 — TestLab (Vitest + RTL + MSW)

Slug: w11-testlab
Ziel: Testkompetenz: Unit, Component, API-Mocks.
Kernfeatures: Kleine App (Login-Form + Liste) als Test-Gegenstand.
Akzeptanzkriterien: 8–12 Tests, CI-skript, grün.
Deliverables: Badge (README), Coverage Report.

Tagesplan
	•	Tag 1: Scaffold, Vitest/RTL Setup, MSW einbinden.
	•	Tag 2: Unit-Tests Utils/Hooks (2–3).
	•	Tag 3: Component-Tests Form + Validierung.
	•	Tag 4: Router-Tests (MemoryRouter), Guard-Pfad.
	•	Tag 5: MSW-API Szenarien (200/400/500).
	•	Tag 6: GitHub Actions CI, Coverage Badge.
	•	Tag 7: Stabilisierung, README mit Teststrategie.

⸻

Woche 12 — Perf & A11y Lab (Virtualization + Dialogs)

Slug: w12-perf-a11y
Ziel: Performance-Muster + tiefe A11y.
Kernfeatures: Virtuelle Liste (1k+ Items), Dialog/Popover (Radix/Headless).
Akzeptanzkriterien: Messbare Render-Reduktion; korrekte ARIA.
Deliverables: PERF-NOTES.md, A11Y-CHECKLIST.md.

Tagesplan
	•	Tag 1: Scaffold, lange Liste (ohne Virtualization) als Base.
	•	Tag 2: Virtualization (z. B. @tanstack/react-virtual).
	•	Tag 3: Profiling: render-counts vorher/nachher dokumentieren.
	•	Tag 4: Accessible <Dialog/> + <Popover/>.
	•	Tag 5: Keyboard-Traps, Focus-Management, Tests light.
	•	Tag 6: Code-Splitting, useMemo/useCallback gezielt.
	•	Tag 7: README + Notizen.

⸻

Woche 13 — TaskFlow Kanban — MVP

Slug: w13-taskflow-mvp
Ziel: Grundgerüst Kanban (Boards/Listen/Tasks) + Query + Zustand.
Kernfeatures: CRUD, einfache Filter, optional Drag&Drop.
Akzeptanzkriterien: 0 Type-Errors, robuste Fehler-UI.
Deliverables: SPEC.md, Screens.

Tagesplan
	•	Tag 1: Scaffold, Datenmodelle (Types), API-Schicht (Mock/MSW).
	•	Tag 2: Boards-Liste, Create Board.
	•	Tag 3: Lists innerhalb Board, Create/List/Delete.
	•	Tag 4: Tasks in Lists, Create/Edit/Delete.
	•	Tag 5: Filter/Suche, leere Zustände.
	•	Tag 6: (Optional) Drag&Drop für Tasks.
	•	Tag 7: Review, README, erste Roadmap.

⸻

Woche 14 — TaskFlow — Collaboration

Slug: w14-taskflow-collab
Ziel: Kommentare, Activity Log, (optional) Realtime.
Kernfeatures: Task-Comments, History, Mentions (@).
Akzeptanzkriterien: Konfliktarme Updates; UX klar.
Deliverables: COLLAB.md, GIF-Demo.

Tagesplan
	•	Tag 1: Comments Modell + UI, Query/Mutation.
	•	Tag 2: Activity Log (Created/Updated/Moved).
	•	Tag 3: Mentions (UI only), Autocomplete.
	•	Tag 4: (Optional) Realtime via Supabase channels.
	•	Tag 5: Notif/Toasts, Fehlerfälle testen.
	•	Tag 6: A11y-Durchgang, Focus-Reihenfolge.
	•	Tag 7: Review + Doku.

⸻

Woche 15 — TaskFlow — Performance & Offline

Slug: w15-taskflow-perf
Ziel: Performance-Tuning, Code-Splitting, Offline-Resilienz.
Kernfeatures: Lazy Boards, Prefetching, Retry/Backoff.
Akzeptanzkriterien: Schneller TTI, stabile Fehlerbehandlung.
Deliverables: PERF-REPORT.md, Lighthouse ≥ 90.

Tagesplan
	•	Tag 1: Bundle-Analyse, große Chunks identifizieren.
	•	Tag 2: Route-Splitting, Preload критischer Routen.
	•	Tag 3: Memoization gezielt (heavy Components).
	•	Tag 4: Offline-Hinweise, Retry-Strategien.
	•	Tag 5: Error Boundaries, leere Zustände verfeinern.
	•	Tag 6: Messung vorher/nachher dokumentieren.
	•	Tag 7: README + Report.

⸻

Woche 16 — Portfolio + Polish

Slug: w16-portfolio
Ziel: Portfolio-Seite + Feinschliff aller Projekte.
Kernfeatures: Projektkacheln, Live-Links, Screens/GIFs, About.
Akzeptanzkriterien: Klare Struktur, schnelle Ladezeiten, responsive.
Deliverables: Portfolio-Deploy, 5-min Demo-Video, LinkedIn/GitHub Update.

Tagesplan
	•	Tag 1: Scaffold Portfolio, Grid der Projekte, Routing.
	•	Tag 2: Projektseiten mit Tech-Stack, Highlights, Lessons.
	•	Tag 3: Startseiten-Hero, Kontakt/Impressum.
	•	Tag 4: Performanz (Bilder optimieren), SEO-Meta.
	•	Tag 5: Checks: A11y, Mobile, dunkles Theme.
	•	Tag 6: Final-Pass über frühere Repos (READMEs, Screens).
	•	Tag 7: Veröffentlichung + Demo aufnehmen
