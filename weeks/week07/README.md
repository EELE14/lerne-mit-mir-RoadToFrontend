# Woche 07 – Projekt **w07-wizard-forms**

> **Ziel:** Formsystem mit Validierung, Stepper, Persist zwischen Steps.  
> **Kernfeatures:** 3–4 Steps (Profil, Adresse, Optionen, Review).  
> **Akzeptanzkriterien:** A11y-Labels/Errors, Async-Validierung (Username).  
> **Deliverables:** FORM-A11Y.md, Screenshots.

---

## Projektstart

- Projekt scaffolden: `npm create vite@latest w07-wizard-forms -- --template react-ts`  
- Libraries installieren: `npm i react-hook-form zod @hookform/resolvers`  
- Stepper-Layout in `AppShell.tsx` vorbereiten.  

---

## Tagesplan

### 📅 Tag 1 – Setup
- react-hook-form einrichten.  
- zod-Schemas für Validierung erstellen.  

### 📅 Tag 2 – Step 1 (Profil)
- Felder: Name, Email, Username.  
- Fehleranzeige mit A11y-Labels.  

### 📅 Tag 3 – Step 2 (Adresse)
- Felder: Straße, Stadt, PLZ.  
- Dependent Fields (z. B. PLZ validiert Stadt).  

### 📅 Tag 4 – Step 3 (Optionen)
- Auswahlfelder, Checkboxen.  
- File-Upload (nur Stub).  

### 📅 Tag 5 – Review-Step
- Zusammenfassung aller Eingaben.  
- Persistenz via LocalStorage.  

### 📅 Tag 6 – Async-Validierung
- Username-Verfügbarkeit simulieren.  
- Debounce bei API-Call.  

### 📅 Tag 7 – Review
- Accessibility-Check.  
- Dokumentation in FORM-A11Y.md.  
- Screenshots ins README einfügen.  

---

## Quellen & Ressourcen
- React Hook Form: https://react-hook-form.com/  
- zod: https://zod.dev/  
- A11y Forms: https://www.w3.org/WAI/tutorials/forms/  

---

## Erfolgskontrolle
- Validierungen greifen korrekt?  
- Stepper speichert Eingaben zwischen?  
- Async-Checks funktionieren?  
- ✅ Dann Woche 07 abgeschlossen.
