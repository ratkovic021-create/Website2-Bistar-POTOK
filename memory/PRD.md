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
2. **Prolaznik sa Google rezultata** — proverava lokaciju i radno vreme.

## Core Requirements (Static)
- Sve napisano latinicom (srpski jezik).
- Istaknut **broj telefona** (021 6341246) sa `tel:` linkom.
- Istaknuta **adresa** (Kisačka 54, 21000 Novi Sad).
- **Google Maps embed** + dugme „Otvori navigaciju".
- Lista usluga sa Google profila: Auto detailing, Poliranje, Uklanjanje ogrebotina, Usisavanje, Pranje enterijera (+ Zaštita i nega).
- **Radno vreme** (Pon–Pet 08–18, Sub 08–15, Ned ne radi).
- Ocena 4.3 / 104 recenzije prikazana u hero sekciji.

## Implemented (2026-01-31)
- Sticky navbar sa CTA „Pozovi" dugmetom.
- Hero sekcija sa display tipografijom (Fraunces + Manrope), pulsirajućim CTA „Pozovi", sekundarnim „Uputstvo do nas", ocenom, adresom i hero slikom sa floating phone card-om.
- Animirana marquee traka sa uslugama.
- Sekcija „Usluge" — 6 kartica (Auto detailing, Poliranje, Uklanjanje ogrebotina, Usisavanje, Pranje enterijera, Zaštita i nega) + CTA banner.
- Sekcija „O nama" sa slikom i listom prednosti.
- Sekcija „Lokacija" sa embedded Google Maps iframe-om, karticom adrese, plavom karticom telefona i karticom radnog vremena.
- Veliki CTA banner pred footer („Spremni da Vaš auto ponovo zasija?").
- Footer sa kontaktima i brzim akcijama.
- **Mobilni sticky call bar** na dnu (samo na telefonu).
- Sve interaktivne komponente imaju `data-testid` atribute.

## Backlog (P1)
- Galerija fotografija pre/posle obrade vozila.
- Sekcija sa stvarnim recenzijama klijenata (carousel).
- SEO meta tagovi + Open Graph + JSON-LD LocalBusiness schema.

## Backlog (P2)
- WhatsApp / Viber direktni link.
- Multi-jezička verzija (engleski).
- Cenovnik usluga.

## Enhancement Idea
- Dodati **Google Reviews snippet** ili integraciju sa stvarnim Google recenzijama — značajno povećava poverenje i konverziju poziva (kao auto perionica, glavni CTA je telefonski poziv — recenzije direktno utiču na odluku da li pozvati).
