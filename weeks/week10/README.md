# Woche 10 – Projekt **w10-team-admin**

> **Ziel:** Rollen/Claims-gesteuerte UI, Admin-Sektion.  
> **Kernfeatures:** Team-Liste, Member-Rollen, Admin-only Views.  
> **Akzeptanzkriterien:** Guards zentral, kein versteckter Direktzugriff.  
> **Deliverables:** RBAC.md, Screenshots.

---

## Projektstart

- Projekt scaffolden: `npm create vite@latest w10-team-admin -- --template react-ts`  
- `Team` Datenmodell: id, name, members[].  
- `Member`: id, name, role (`"member" | "admin"`).  
- Authentifizierung (Dummy oder von Woche 9 übernehmen).  

---

## Tagesplan

### 📅 Tag 1 – Routing
- Routen: `/` (Public), `/dashboard` (Member), `/admin` (Admin only).  
- Navbar: Links sichtbar abhängig von Rolle.  
- `SkipLink` für A11y hinzufügen.

### 📅 Tag 2 – Role Provider
- `RoleContext` schreiben (`useRole()`).  
- Provider liefert `role: "member" | "admin"`.  
- Guards: `RequireRole({role: "admin"})`.  
- Test: als Member → kein Zugriff auf `/admin`.

### 📅 Tag 3 – Admin Pages
- Seite: Memberverwaltung.  
- Liste aller User + Dropdown zum Rollenwechsel.  
- Buttons mit Tailwind (Danger für Entfernen).  
- Mutation: Rolle ändern → UI sofort updaten.

### 📅 Tag 4 – Member View
- Team-Übersicht mit erlaubten Aktionen.  
- Als Member nur „Profil bearbeiten“.  
- Als Admin zusätzlich „Member entfernen“.  
- Leere Zustände (kein Team).

### 📅 Tag 5 – Fehlerkommunikation
- Zugriff verweigert: 403-Seite mit Klartext.  
- Buttons deaktiviert, wenn Rolle fehlt.  
- Logging optional.

### 📅 Tag 6 – Tests
- Unit-Test: `RequireRole` blockt falsche Rolle.  
- UI-Test: Member sieht Admin-Link nicht.  
- Snapshot: Admin-Seite.

### 📅 Tag 7 – Review
- RBAC.md mit Rollenmatrix erstellen.  
- Screenshots ins README.  

---

## Quellen & Ressourcen
- React Context: https://react.dev/learn/passing-data-deeply-with-context  
- Role-based Access Control: https://auth0.com/docs/manage-users/roles  
- Tailwind Components: https://tailwindui.com/components  

---

## Erfolgskontrolle
- Member können keine Admin-Seiten öffnen?  
- Admin kann Rollen korrekt ändern?  
- Fehler-UI klar und konsistent?  
- ✅ Woche 10 abgeschlossen.
