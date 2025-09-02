# Woche 14 – Projekt **w14-taskflow-collab**

> **Ziel:** Kommentare, Activity Log, (optional) Realtime.  
> **Kernfeatures:** Task-Comments, History, Mentions (@).  
> **Akzeptanzkriterien:** Konfliktarme Updates; UX klar.  
> **Deliverables:** COLLAB.md, GIF-Demo.

---

## Projektstart

- Projekt scaffolden: `npm create vite@latest w14-taskflow-collab -- --template react-ts`  
- Aufbau basiert auf Woche 13.  
- Zusätzliche Tabellen: Comments { id, taskId, author, content, createdAt }.  

---

## Tagesplan

### 📅 Tag 1 – Comments
- `CommentList.tsx` & `CommentForm.tsx`.  
- Input mit Validation (kein leeres Kommentar).  
- Auto-Scroll zu neuem Kommentar.  

### 📅 Tag 2 – Activity Log
- Neues Panel „Aktivität“.  
- Einträge: Task Created, Updated, Deleted.  
- Format: `User X hat Task Y geändert – Zeit`.  

### 📅 Tag 3 – Mentions
- `@username` Erkennung mit Regex.  
- UI: Dropdown bei `@` → Vorschläge.  
- Nur UI, keine echten User nötig.  

### 📅 Tag 4 – Optional Realtime
- Supabase Channels oder WS.  
- Kommentare erscheinen ohne Refresh.  
- Fallback: Polling.  

### 📅 Tag 5 – Notifications
- Toasts bei neuen Kommentaren.  
- Fehlerfälle: Netz weg → Retry.  
- Logging in Console.  

### 📅 Tag 6 – A11y
- Kommentare per Screenreader vorlesbar.  
- Focus-Trap in Mentions-Dropdown.  
- Tastaturbedienung prüfen.  

### 📅 Tag 7 – Review
- GIF-Demo aufnehmen (Kommentieren + Activity Log).  
- COLLAB.md schreiben (Architektur, Realtime-Strategie).  
- Cleanup & Commit.  

---

## Quellen & Ressourcen
- Supabase Realtime: https://supabase.com/docs/guides/realtime  
- Regex Mentions Inspiration: https://regex101.com/  
- Toast-UI Beispiele: https://tailwindui.com/components  

---

## Erfolgskontrolle
- Kommentare zuverlässig gespeichert?  
- Activity Log zeigt richtige Events?  
- Mentions Dropdown funktioniert?  
- ✅ Woche 14 abgeschlossen.
