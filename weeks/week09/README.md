# Woche 09 – Projekt **w09-notes-auth**

> **Ziel:** Auth-Flows (Signup/Login/Logout), geschützte Routen.  
> **Kernfeatures:** Private Notizen (CRUD), Profilseite.  
> **Akzeptanzkriterien:** .env sicher, 401/403 UX klar.  
> **Deliverables:** .env.example, TESTPLAN.md.

---

## Projektstart

- Projekt scaffolden: `npm create vite@latest w09-notes-auth -- --template react-ts`  
- Supabase installieren: `npm i @supabase/supabase-js`  
- `.env.example` anlegen mit Variablen:  
  - `VITE_SUPABASE_URL=`  
  - `VITE_SUPABASE_ANON_KEY=`  
- Client initialisieren: `src/lib/supabase.ts`

---

## Tagesplan

### 📅 Tag 1 – Setup & Supabase Init
- Supabase Projekt im Dashboard erstellen.  
- `.env` Datei mit Keys füllen (nicht commiten!).  
- `createClient()` in `src/lib/supabase.ts` exportieren.  
- Erste API-Abfrage: `supabase.from("notes").select("*")` in Console loggen.

### 📅 Tag 2 – Auth Screens
- Komponenten `LoginForm.tsx` und `SignupForm.tsx`.  
- Felder: Email, Password.  
- Fehlertexte klar anzeigen (`setError`).  
- Tailwind: Fokuszustände + Labels.  
- Test: Falsche E-Mail → Fehler erscheint.

### 📅 Tag 3 – Protected Routes
- React Router einrichten.  
- `ProtectedRoute` Komponente schreiben → prüft Supabase Session.  
- Bei fehlender Session: Redirect auf Login.  
- Logout-Button in Navbar → `supabase.auth.signOut()`.

### 📅 Tag 4 – Notes CRUD
- Tabelle `notes`: id, user_id, title, content.  
- `NotesList.tsx`: alle Notizen des Users.  
- `NoteEditor.tsx`: neue Notiz hinzufügen.  
- Detailseite mit Vollansicht.  
- Nur Owner darf CRUD (über `user_id` prüfen).

### 📅 Tag 5 – Profilseite
- `Profile.tsx` erstellen.  
- Felder: Avatar, DisplayName.  
- Speichern in Tabelle `profiles`.  
- Logout-Button prominent.

### 📅 Tag 6 – E2E Tests (manuell)
- Szenario 1: Login falsch → Fehler.  
- Szenario 2: Signup → sofort Login → Notiz erstellen.  
- Szenario 3: Logout → Zugriff auf `/notes` verweigert.  
- Ergebnisse in `TESTPLAN.md`.

### 📅 Tag 7 – Review
- README ergänzen: Setup, Screenshots.  
- `.env.example` prüfen.  
- Sicherheitshinweis: Keys nicht commiten.

---

## Quellen & Ressourcen
- Supabase Docs: https://supabase.com/docs  
- React Router Protected Routes: https://reactrouter.com/en/main/start/tutorial  
- Tailwind Forms: https://tailwindcss.com/docs/forms  

---

## Erfolgskontrolle
- Auth funktioniert inkl. Redirects?  
- CRUD nur für eigenen User?  
- Profilseite speichert Daten?  
- Keine TypeScript-Fehler?  
- ✅ Woche 09 abgeschlossen.
