# Woche 13 – Projekt **w13-taskflow-mvp**

> **Ziel:** Grundgerüst Kanban (Boards/Listen/Tasks) + Query + Zustand.  
> **Kernfeatures:** CRUD, einfache Filter, optional Drag&Drop.  
> **Akzeptanzkriterien:** 0 Type-Errors, robuste Fehler-UI.  
> **Deliverables:** SPEC.md, Screens.

---

## Projektstart

- Projekt scaffolden: `npm create vite@latest w13-taskflow-mvp -- --template react-ts`  
- Install: `npm i @tanstack/react-query zustand msw`  
- Datenmodell:  
  - Board { id, title }  
  - List { id, boardId, title }  
  - Task { id, listId, title, description, done }  

---

## Tagesplan

### 📅 Tag 1 – Setup & Types
- Types definieren in `src/types.ts`.  
- MSW Handlers: Boards, Lists, Tasks → CRUD simulieren.  
- React Query + Zustand Store initialisieren.  
- SPEC.md: Datenmodell beschreiben.

### 📅 Tag 2 – Boards
- `BoardsPage.tsx` erstellen.  
- Fetch Boards → Liste anzeigen.  
- „Board erstellen“-Dialog.  
- Error-UI falls API down.

### 📅 Tag 3 – Lists
- `BoardDetail.tsx`: zeigt Listen für ein Board.  
- Add List → Input + Button.  
- Delete List mit Confirm-Dialog.  
- Leere Zustände („Noch keine Listen“).  

### 📅 Tag 4 – Tasks
- `TaskList.tsx` pro List.  
- CRUD: Task hinzufügen, bearbeiten, löschen.  
- UI: Checkbox „Done“.  
- Persistenz via MSW → Zustand Update.  

### 📅 Tag 5 – Filter
- Filterfeld: Suche nach Task-Titel.  
- Tasks dynamisch filtern.  
- „Keine Treffer“-Zustand.  

### 📅 Tag 6 – Optional Drag&Drop
- `@dnd-kit/core` installieren.  
- Tasks zwischen Listen verschiebbar.  
- Reihenfolge speichern im Zustand.  

### 📅 Tag 7 – Review
- README: Screenshots von Boards, Lists, Tasks.  
- SPEC.md erweitern (Filter, DnD optional).  
- Lint/Type-Check.  

---

## Quellen & Ressourcen
- React Query Docs: https://tanstack.com/query/latest  
- Zustand Docs: https://docs.pmnd.rs/zustand/getting-started/introduction  
- DnD Kit: https://dndkit.com/  

---

## Erfolgskontrolle
- CRUD für Boards, Lists, Tasks funktioniert?  
- Fehler-UI robust?  
- Keine TS-Fehler?  
- ✅ Woche 13 abgeschlossen.
