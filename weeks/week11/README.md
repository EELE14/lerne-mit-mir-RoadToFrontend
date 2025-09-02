# Woche 11 – Projekt **w11-testlab**

> **Ziel:** Testkompetenz: Unit, Component, API-Mocks.  
> **Kernfeatures:** Kleine App (Login-Form + Liste) als Test-Gegenstand.  
> **Akzeptanzkriterien:** 8–12 Tests, CI-Skript, alles grün.  
> **Deliverables:** Badge (README), Coverage Report.

---

## Projektstart

- Projekt scaffolden: `npm create vite@latest w11-testlab -- --template react-ts`  
- Vitest installieren: `npm i -D vitest @testing-library/react @testing-library/jest-dom msw`  
- `setupTests.ts` anlegen → RTL + jest-dom importieren.  
- `package.json` Script: `"test": "vitest --environment jsdom"`  

---

## Tagesplan

### 📅 Tag 1 – Setup
- Vitest + RTL konfigurieren.  
- MSW Handler für Dummy-API anlegen (`/api/items`).  
- Testlauf mit `npm run test` prüfen.

### 📅 Tag 2 – Unit Tests
- Utils: `sum(a,b)` und `formatDate()`.  
- Testfälle: Normal, Edge Cases.  
- `expect(sum(2,2)).toBe(4)`.

### 📅 Tag 3 – Component Tests: Login
- `LoginForm.tsx`: Felder Email + Passwort.  
- Test: Eingabe → Submit → API-Call.  
- Fehler: falsches Passwort → Meldung sichtbar.  
- A11y: `getByLabelText("Email")`.

### 📅 Tag 4 – Router Tests
- MemoryRouter nutzen.  
- ProtectedRoute testen: ohne Auth → Redirect.  
- Mit Auth → Dashboard sichtbar.

### 📅 Tag 5 – MSW Szenarien
- Handler: 200 OK, 400 Bad Request, 500 Error.  
- Tests: API reagiert korrekt → UI zeigt passende States.  
- Retry-Button Verhalten testen.

### 📅 Tag 6 – CI & Coverage
- GitHub Actions Workflow `.github/workflows/test.yml`.  
- Coverage Report: `--coverage`.  
- Badge im README verlinken.  

### 📅 Tag 7 – Review
- Stabilisierung: Flaky Tests fixen.  
- README: Teststrategie + Screenshots.  
- Push ins Repo.  

---

## Quellen & Ressourcen
- Vitest Docs: https://vitest.dev/  
- RTL Docs: https://testing-library.com/docs/react-testing-library/intro/  
- MSW Docs: https://mswjs.io/  

---

## Erfolgskontrolle
- Mindestens 8–12 Tests grün?  
- CI läuft ohne Fehler?  
- Coverage Report ≥ 80%?  
- ✅ Woche 11 abgeschlossen.
