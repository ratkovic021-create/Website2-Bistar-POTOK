# Bistar Potok — Landing Page (PRD)

## Original Problem Statement
Klijent: **Bistar Potok** (auto perionica, Novi Sad, Kisačka 54, tel: 021 6341246, ocena 4.3, 104 recenzije).
Zahtev korisnika (na srpskom): napraviti landing page na **latinici**, fokusiran na **lokaciju** i **broj telefona** (bez online rezervacije). Stil: **moderno, belo + plavo**.

## Architecture
- **Frontend:** React 19 + Tailwind CSS + lucide-react (CRA + craco), statički landing page (jedna stranica).
- **Backend:** FastAPI (postojeća šablon-aplikacija nedirnuta; nije korišćena — sajt je čisto statičan front-end).
- **Bez baze, bez auth, bez integracija.**

## User Personas
1. **Vlasnik vozila u Novom Sadu** — želi brzo pozvati i/ili dobiti uputstvo do perionice.
2. **Prolaznik sa Google rezultata** — proverava lokaciju, fotografije i radno vreme.

## Core Requirements
- Sve napisano latinicom (srpski jezik).
- Istaknut **broj telefona** (021 6341246) sa `tel:` linkom.
- Istaknuta **adresa** (Kisačka 54, 21000 Novi Sad).
- **Google Maps embed** + dugme „Otvori navigaciju".
- Lista usluga: Auto detailing, Poliranje, Uklanjanje ogrebotina, Usisavanje, Pranje enterijera, Zaštita i nega.
- **Radno vreme** (Pon–Pet 08–18, Sub 08–15, Ned ne radi).
- Ocena 4.3 / 104 recenzije prikazana u hero sekciji.
- **Galerija** sa stvarnim fotografijama klijenta.

## Implemented
### 2026-01-31 — MVP
- Sticky navbar sa CTA „Pozovi", hero, marquee usluga, kartice usluga, „O nama", lokacija sa Google Maps iframe-om, kartice telefon/radno vreme, CTA banner, footer, mobilni sticky call bar.
- Tipografija: Manrope + Fraunces (display).
- `tel:` linkovi (10 instanci → `tel:+381216341246`), Maps linkovi (4 instance), embed iframe.

### 2026-01-31 — Galerija sa pravim fotografijama (update)
- Zamenjene stock slike Unsplash-a sa pravim fotografijama klijenta:
  - Hero: noćni pogled na perionicu (Aуtoperionica „Bistar Potok").
  - „O nama": radnik prilikom mašinskog poliranja crvenog vozila.
- Dodata nova sekcija **#galerija** (između „O nama" i „Lokacija") sa 4 stvarne fotografije u responsive mozaik gridu (jedna featured + 3 sekundarne). Slike se otvaraju u novom tabu pri kliku.
- „Galerija" link dodat u glavnu navigaciju.

## Backlog (P1)
- Sekcija sa stvarnim recenzijama klijenata (carousel, povezana sa Google Places API).
- SEO meta tagovi + Open Graph + JSON-LD LocalBusiness schema.
- Lightbox modal za galeriju umesto otvaranja u novom tabu.

## Backlog (P2)
- WhatsApp / Viber direktni link.
- Multi-jezička verzija (engleski).
- Cenovnik usluga.

## Enhancement Idea
- Dodati **Google Reviews snippet** ili integraciju sa stvarnim Google recenzijama — značajno povećava poverenje i konverziju poziva.
