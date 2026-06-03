import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Navigation,
  Sparkles,
  Droplets,
  Wind,
  Eraser,
  Car,
  ShieldCheck,
  ArrowRight,
  Check,
} from "lucide-react";

const PHONE_DISPLAY = "063 567 119";
const PHONE_TEL = "+38163567119";
const ADDRESS = "Jovana Cvijića 54, 21000 Novi Sad";
const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Bistar+Potok+Jovana+Cvij%C4%87a+54+Novi+Sad";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Bistar%20Potok%20Jovana%20Cvij%C4%87a%2054%2C%20Novi%20Sad&output=embed";

const HERO_IMG =
  "https://customer-assets.emergentagent.com/job_vehicle-detailing-5/artifacts/9xdq9fx0_1c300a0c-1d31-48d8-b19d-a4813791ffe4.jpg";
const ABOUT_IMG =
  "https://customer-assets.emergentagent.com/job_vehicle-detailing-5/artifacts/y3lesyey_b4fdc49b-ea83-4bb5-addc-c4a54aa1ecf4.jpg";

const HERO_COLLAGE = [
  {
    src: "https://customer-assets.emergentagent.com/job_vehicle-detailing-5/artifacts/9xdq9fx0_1c300a0c-1d31-48d8-b19d-a4813791ffe4.jpg",
    alt: "Aуtoperionica Bistar Potok — pogled na ulaz pod plavim nebom",
    caption: "Naša perionica",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_vehicle-detailing-5/artifacts/3kf0vygp_image.png",
    alt: "Aуtoperionica Bistar Potok — boksovi 1, 2 i 3 sa vozilima na pranju",
    caption: "Tri boksa, brzi servis",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_vehicle-detailing-5/artifacts/4aunoqt6_e3767dc9-0688-4e37-b4a7-7f9236ce957a.jpg",
    alt: "Udoban kutak za čekanje sa kafe aparatom",
    caption: "Kutak za kafu i čekanje",
  },
];

const GALLERY = [
  {
    src: "https://customer-assets.emergentagent.com/job_vehicle-detailing-5/artifacts/gz8kt03n_6fe1f7cf-f201-4e39-a339-5816cfaba273.jpg",
    alt: "Aуtoperionica Bistar Potok — glavni ulaz",
    caption: "Glavni ulaz perionice",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_vehicle-detailing-5/artifacts/09i6gzql_9701449b-2717-4ce5-926c-875737f92318.jpg",
    alt: "Žuti zid sa stripom uz perionicu",
    caption: "Strip mural — naš znak prepoznavanja",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_vehicle-detailing-5/artifacts/4aunoqt6_e3767dc9-0688-4e37-b4a7-7f9236ce957a.jpg",
    alt: "Sala za čekanje sa kafe aparatom i slikama",
    caption: "Naš kutak za odmor uz kafu",
  },
];

const services = [
  {
    icon: Sparkles,
    title: "Auto detailing",
    desc: "Detaljna obrada vozila spolja i iznutra — sjaj kao iz salona.",
  },
  {
    icon: Droplets,
    title: "Poliranje",
    desc: "Mašinsko poliranje laka, vraćanje dubine boje i zaštitni sloj.",
  },
  {
    icon: Eraser,
    title: "Uklanjanje ogrebotina",
    desc: "Stručno otklanjanje sitnih i srednjih ogrebotina sa laka.",
  },
  {
    icon: Wind,
    title: "Usisavanje",
    desc: "Temeljno usisavanje sedišta, tepiha i tapacirunga.",
  },
  {
    icon: Car,
    title: "Pranje enterijera",
    desc: "Čišćenje unutrašnjosti vozila do najsitnijih detalja.",
  },
  {
    icon: ShieldCheck,
    title: "Zaštita i nega",
    desc: "Voskovi i premazi koji produžuju sjaj i čuvaju lak.",
  },
];

const hours = [
  { day: "Ponedeljak", time: "08:00 – 17:00" },
  { day: "Utorak", time: "08:00 – 17:00" },
  { day: "Sreda", time: "08:00 – 17:00" },
  { day: "Četvrtak", time: "08:00 – 17:00" },
  { day: "Petak", time: "08:00 – 17:00" },
  { day: "Subota", time: "08:00 – 17:00" },
  { day: "Nedelja", time: "Ne radimo" },
];

const StarRow = ({ value = 4.3 }) => {
  const full = Math.floor(value);
  return (
    <div className="flex items-center gap-1" aria-label={`Ocena ${value} od 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < full ? "fill-blue-600 text-blue-600" : "text-slate-300"
          }`}
        />
      ))}
    </div>
  );
};

const Nav = () => (
  <header className="sticky top-0 z-40 backdrop-blur-md bg-white/75 border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
      <a
        href="#pocetak"
        className="flex items-center gap-2.5 group"
        data-testid="nav-logo"
      >
        <span className="relative inline-flex w-9 h-9 rounded-xl bg-blue-600 text-white items-center justify-center font-display text-lg shadow-[0_8px_20px_-8px_rgba(37,99,235,0.7)]">
          B
          <span className="absolute -right-1 -bottom-1 w-3 h-3 rounded-full bg-sky-300 ring-2 ring-white" />
        </span>
        <div className="leading-tight">
          <div className="font-display font-semibold text-[17px] tracking-tight">
            Bistar Potok
          </div>
          <div className="text-[11px] text-slate-500 -mt-0.5">
            Auto perionica · Novi Sad
          </div>
        </div>
      </a>

      <nav className="hidden md:flex items-center gap-7 text-sm text-slate-600">
        <a href="#usluge" className="hover:text-blue-700 transition-colors">
          Usluge
        </a>
        <a href="#lokacija" className="hover:text-blue-700 transition-colors">
          Lokacija
        </a>
        <a href="#radnovreme" className="hover:text-blue-700 transition-colors">
          Radno vreme
        </a>
      </nav>

      <a
        href={`tel:${PHONE_TEL}`}
        data-testid="nav-call-button"
        className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 transition-colors"
      >
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
        <span className="sm:hidden">Pozovi</span>
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section
    id="pocetak"
    className="relative overflow-hidden"
    data-testid="hero-section"
  >
    <div className="absolute inset-0 bg-grid" aria-hidden />
    <div className="bg-blue-blob" aria-hidden />

    <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-14 md:pt-16 pb-10 md:pb-14 text-center">
      <div className="rise inline-flex items-center gap-2.5 rounded-full bg-blue-600 text-white px-5 py-2.5 text-sm md:text-base font-semibold shadow-[0_12px_30px_-12px_rgba(37,99,235,0.7)]">
        <ShieldCheck className="w-5 h-5" />
        Preko 20 godina iskustva · Novi Sad
      </div>

      <h1 className="rise d1 font-display text-[36px] leading-[1.08] md:text-[58px] md:leading-[1.05] font-semibold tracking-tight mt-6 max-w-5xl mx-auto">
        U ulici{" "}
        <span className="relative inline-block">
          <span className="relative z-10 text-blue-700">Jovana Cvijića</span>
          <span className="absolute left-0 right-0 bottom-1 h-3 bg-blue-200/70 -z-0 rounded-sm" />
        </span>{" "}
        ima jedna mala auto perionica, zove se{" "}
        <span className="text-blue-700">Bistar Potok</span>.
      </h1>

      <p className="rise d2 mt-5 font-display text-2xl md:text-3xl text-slate-800 italic">
        Mala perionica. Dobro društvo.
      </p>

      <div className="rise d3 mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href={`tel:${PHONE_TEL}`}
          data-testid="hero-call-button"
          className="pulse-ring inline-flex items-center gap-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 text-base shadow-[0_18px_40px_-18px_rgba(37,99,235,0.8)] transition-colors"
        >
          <Phone className="w-5 h-5" />
          Pozovi {PHONE_DISPLAY}
        </a>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="hero-directions-button"
          className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 hover:border-blue-600 hover:text-blue-700 text-slate-800 font-semibold px-6 py-[14px] text-base transition-colors"
        >
          <Navigation className="w-5 h-5" />
          Uputstvo do nas
        </a>
      </div>

      <div className="rise d4 mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
        <div className="flex items-center gap-2.5">
          <div className="flex items-baseline gap-1">
            <span className="font-display text-2xl font-semibold">4.3</span>
            <span className="text-slate-400 text-sm">/5</span>
          </div>
          <StarRow value={4.3} />
          <span className="text-sm text-slate-500">(104 ocene)</span>
        </div>
        <div className="hidden sm:block w-px h-6 bg-slate-200" />
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <MapPin className="w-4 h-4 text-blue-600" />
          {ADDRESS}
        </div>
      </div>
    </div>

    {/* BIG 3-image showcase — odmah vidno pri otvaranju */}
    <div
      className="relative max-w-[1500px] mx-auto px-5 md:px-8 pb-16 md:pb-20"
      data-testid="hero-collage"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {HERO_COLLAGE.map((g, i) => (
          <a
            key={g.src}
            href={g.src}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`hero-collage-${i}`}
            className={`rise d${i + 2} group relative rounded-[1.5rem] overflow-hidden ring-1 ring-blue-100 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.4)] bg-white`}
          >
            <img
              src={g.src}
              alt={g.alt}
              className="w-full h-[320px] sm:h-[420px] md:h-[460px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div className="absolute left-4 bottom-4 right-4 flex">
              <div className="inline-flex items-center rounded-full bg-white/95 backdrop-blur px-4 py-2 ring-1 ring-blue-100 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.45)]">
                <span className="font-display text-base md:text-lg font-bold tracking-tight text-blue-700">
                  {g.caption}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section
    id="usluge"
    className="relative py-24 md:py-36 overflow-hidden"
    data-testid="services-section"
  >
    {/* Decorative background */}
    <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
    <div
      className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full bg-blue-100/40 blur-3xl"
      aria-hidden
    />

    <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white text-blue-700 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
        <Droplets className="w-3.5 h-3.5" />
        Naša filozofija
      </div>

      <blockquote className="mt-10 font-display text-4xl sm:text-5xl md:text-7xl leading-[1.04] font-semibold tracking-tight text-slate-900">
        <span className="text-blue-700">Higijena</span> Vašeg automobila je{" "}
        <span className="relative inline-block">
          <span className="relative z-10">zdravlje</span>
          <span className="absolute left-0 right-0 bottom-2 h-4 md:h-5 bg-blue-200/70 -z-0 rounded-sm" />
        </span>{" "}
        za Vas i Vaš auto.
      </blockquote>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
        <a
          href={`tel:${PHONE_TEL}`}
          data-testid="services-call-button"
          className="pulse-ring inline-flex items-center gap-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 text-base shadow-[0_18px_40px_-18px_rgba(37,99,235,0.8)] transition-colors"
        >
          <Phone className="w-5 h-5" />
          Pozovi {PHONE_DISPLAY}
        </a>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="services-directions-button"
          className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 hover:border-blue-600 hover:text-blue-700 text-slate-800 font-semibold px-6 py-[14px] text-base transition-colors"
        >
          <Navigation className="w-5 h-5" />
          Uputstvo do nas
        </a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="relative py-20 md:py-24 bg-slate-50/60 border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-6">
        <div className="relative">
          <div className="absolute -inset-3 bg-blue-200/40 rounded-[1.75rem] blur-2xl" />
          <img
            src={ABOUT_IMG}
            alt="Sjajan Mercedes nakon pranja u Bistar Potoku — rezultat govori sam za sebe"
            className="relative rounded-[1.5rem] w-full h-[440px] object-cover ring-1 ring-blue-100"
            loading="lazy"
            data-testid="about-image"
          />
        </div>
      </div>
      <div className="md:col-span-6">
        <div className="text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold">
          O nama
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mt-3">
          Mala perionica, <em className="not-italic text-blue-700">veliki</em>{" "}
          rezultati.
        </h2>
        <p className="mt-5 text-[17px] text-slate-600 leading-relaxed">
          Bistar Potok je tu da Vaš automobil zasija — od svakodnevnog pranja
          do detaljnog poliranja i nege enterijera. Posao radimo pažljivo i
          posvećeno, baš onako kako bismo to uradili za svoj automobil.
        </p>

        <ul className="mt-7 grid sm:grid-cols-2 gap-3">
          {[
            "Iskusan tim",
            "Kvalitetni proizvodi",
            "Pažnja na detalje",
            "Preko 100 zadovoljnih ocena",
          ].map((t) => (
            <li
              key={t}
              className="flex items-center gap-2.5 text-slate-700"
            >
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <Check className="w-3.5 h-3.5" />
              </span>
              <span className="text-[15px] font-medium">{t}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            data-testid="about-call-button"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Pozovi {PHONE_DISPLAY}
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="about-directions-button"
            className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 hover:border-blue-600 hover:text-blue-700 text-slate-800 font-semibold px-5 py-[10px] transition-colors"
          >
            <Navigation className="w-4 h-4" />
            Otvori u Google Maps
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section
    id="galerija"
    className="relative py-20 md:py-28 bg-white"
    data-testid="gallery-section"
  >
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="grid md:grid-cols-12 gap-8 items-end mb-12">
        <div className="md:col-span-7">
          <div className="text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold">
            Galerija
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mt-3">
            Naša perionica i naš rad — uživo.
          </h2>
        </div>
        <div className="md:col-span-5 text-slate-600">
          Fotografije iz naše perionice u Jovana Cvijića 54. Tu smo svakog
          radnog dana — svratite, ili nas prvo pozovite na{" "}
          <a
            href={`tel:${PHONE_TEL}`}
            className="text-blue-700 font-semibold hover:underline"
          >
            {PHONE_DISPLAY}
          </a>
          .
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5">
        {/* Large feature (1) — col 1-7, 2 rows */}
        <a
          href={GALLERY[0].src}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="gallery-item-0"
          className="group relative lg:col-span-7 lg:row-span-2 rounded-2xl overflow-hidden ring-1 ring-slate-100 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)]"
        >
          <img
            src={GALLERY[0].src}
            alt={GALLERY[0].alt}
            className="w-full h-[300px] sm:h-[420px] lg:h-[490px] object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 via-black/20 to-transparent text-white">
            <div className="text-[11px] uppercase tracking-widest opacity-80">
              Lokacija
            </div>
            <div className="font-display text-xl md:text-2xl font-semibold">
              {GALLERY[0].caption}
            </div>
          </div>
        </a>

        {/* Two small items next to feature — col 8-12 (col-span-5 each) */}
        {GALLERY.slice(1, 3).map((g, i) => (
          <a
            key={g.src}
            href={g.src}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`gallery-item-${i + 1}`}
            className="group relative lg:col-span-5 rounded-2xl overflow-hidden ring-1 ring-slate-100 shadow-[0_18px_40px_-25px_rgba(15,23,42,0.3)]"
          >
            <img
              src={g.src}
              alt={g.alt}
              className="w-full h-[220px] sm:h-[260px] lg:h-[235px] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/65 via-black/10 to-transparent text-white">
              <div className="font-display text-base md:text-lg font-semibold">
                {g.caption}
              </div>
            </div>
          </a>
        ))}

        {/* Bottom row — 3 items, col-span-4 each */}
        {GALLERY.slice(3).map((g, i) => (
          <a
            key={g.src}
            href={g.src}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`gallery-item-${i + 3}`}
            className="group relative lg:col-span-4 rounded-2xl overflow-hidden ring-1 ring-slate-100 shadow-[0_18px_40px_-25px_rgba(15,23,42,0.3)]"
          >
            <img
              src={g.src}
              alt={g.alt}
              className="w-full h-[220px] sm:h-[240px] lg:h-[240px] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/65 via-black/10 to-transparent text-white">
              <div className="font-display text-base md:text-lg font-semibold">
                {g.caption}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Location = () => (
  <section
    id="lokacija"
    className="relative py-20 md:py-28"
    data-testid="location-section"
  >
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold">
          Lokacija
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mt-3">
          Lako do nas — usred Novog Sada.
        </h2>
        <p className="mt-4 text-slate-600 text-[17px]">
          Nalazimo se u ulici Jovana Cvijića 54. Otvorite navigaciju jednim
          klikom ili nas pozovite ako Vam treba pomoć oko prilaza.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <div className="map-frame relative ring-1 ring-slate-100 bg-white">
            <iframe
              title="Mapa — Bistar Potok"
              src={MAPS_EMBED}
              width="100%"
              height="520"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              data-testid="location-map"
            />
          </div>
        </div>

        <aside className="lg:col-span-4 flex flex-col gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </span>
              <div>
                <div className="text-[11px] uppercase tracking-widest text-slate-500">
                  Adresa
                </div>
                <div className="font-display font-semibold text-lg">
                  Jovana Cvijića 54
                </div>
              </div>
            </div>
            <div className="text-slate-600 text-sm mt-3">
              21000 Novi Sad
              <br />
              Južno-bački okrug, Srbija
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="location-directions-button"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-900 hover:bg-blue-700 text-white font-semibold px-4 py-2.5 text-sm transition-colors w-full justify-center"
            >
              <Navigation className="w-4 h-4" />
              Otvori navigaciju
            </a>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-600 text-white p-6 relative overflow-hidden">
            <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-blue-500/40 blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-white/70">
                    Telefon
                  </div>
                  <div className="font-display font-semibold text-lg">
                    Pozovite nas
                  </div>
                </div>
              </div>
              <a
                href={`tel:${PHONE_TEL}`}
                data-testid="location-call-button"
                className="block mt-4 font-display text-3xl font-semibold tracking-tight hover:underline"
              >
                {PHONE_DISPLAY}
              </a>
              <p className="text-white/80 text-sm mt-2">
                Slobodno pozovite za informacije ili dogovor termina.
              </p>
            </div>
          </div>

          <div
            id="radnovreme"
            className="rounded-2xl border border-slate-200 bg-white p-6"
            data-testid="hours-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </span>
              <div>
                <div className="text-[11px] uppercase tracking-widest text-slate-500">
                  Radno vreme
                </div>
                <div className="font-display font-semibold text-lg">
                  Otvoreno u 08:00
                </div>
              </div>
            </div>
            <ul className="divide-y divide-slate-100">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between py-2 text-sm"
                >
                  <span className="text-slate-700">{h.day}</span>
                  <span
                    className={`font-medium ${
                      h.time === "Ne radimo"
                        ? "text-slate-400"
                        : "text-slate-900"
                    }`}
                  >
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </section>
);

const CtaBanner = () => (
  <section className="relative py-16 md:py-20">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 p-8 md:p-14 text-white">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-sky-300/30 blur-2xl" />
        <div className="relative grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <h3 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Spremni da Vaš auto ponovo zasija?
            </h3>
            <p className="mt-4 text-white/85 text-[17px] max-w-xl">
              Pozovite nas — javljamo se odmah i dogovaramo termin koji Vama
              odgovara.
            </p>
          </div>
          <div className="md:col-span-5 flex md:justify-end">
            <a
              href={`tel:${PHONE_TEL}`}
              data-testid="cta-banner-call"
              className="pulse-ring inline-flex items-center gap-3 rounded-full bg-white text-blue-700 font-semibold px-7 py-5 text-lg shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)] hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FinalBanner = () => (
  <section
    className="relative w-full overflow-hidden"
    data-testid="final-banner"
  >
    <img
      src="https://customer-assets.emergentagent.com/job_vehicle-detailing-5/artifacts/gwwmyggy_IMG_0255.jpeg"
      alt="Aуtoperionica Bistar Potok uveče — gost je uvek u pravu"
      className="w-full h-[420px] md:h-[640px] object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
    <div className="absolute inset-0 flex items-end">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pb-12 md:pb-20 w-full">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white ring-1 ring-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
            Gost je uvek u pravu
          </div>
          <h2 className="mt-5 font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Vidimo se u <span className="text-blue-300">Bistar Potoku</span>.
          </h2>
          <p className="mt-4 text-white/80 text-lg max-w-xl">
            {ADDRESS} · Otvoreno svakog dana 08–17 (nedeljom ne radimo).
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              data-testid="final-banner-call"
              className="inline-flex items-center gap-2 rounded-full bg-white text-blue-700 hover:bg-blue-50 font-semibold px-5 py-3 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="final-banner-directions"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 hover:bg-white/10 text-white font-semibold px-5 py-[10px] transition-colors"
            >
              <Navigation className="w-4 h-4" />
              Uputstvo do nas
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-slate-100 bg-white">
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 grid md:grid-cols-12 gap-8">
      <div className="md:col-span-5">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex w-9 h-9 rounded-xl bg-blue-600 text-white items-center justify-center font-display text-lg">
            B
          </span>
          <div className="leading-tight">
            <div className="font-display font-semibold text-[17px] tracking-tight">
              Bistar Potok
            </div>
            <div className="text-[11px] text-slate-500 -mt-0.5">
              Auto perionica · Novi Sad
            </div>
          </div>
        </div>
        <p className="mt-4 text-slate-600 text-sm max-w-md">
          Auto perionica i detailing studio. Pranje, poliranje, uklanjanje
          ogrebotina i nega enterijera Vaših vozila.
        </p>
      </div>

      <div className="md:col-span-3">
        <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
          Kontakt
        </div>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-600" />
            <a href={`tel:${PHONE_TEL}`} className="hover:text-blue-700">
              {PHONE_DISPLAY}
            </a>
          </li>
          <li className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-blue-600 mt-0.5" />
            <span>{ADDRESS}</span>
          </li>
          <li className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>Pon–Sub 08–17 · Nedeljom ne radimo</span>
          </li>
        </ul>
      </div>

      <div className="md:col-span-4">
        <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
          Brze akcije
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            data-testid="footer-call"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 transition-colors"
          >
            <Phone className="w-4 h-4" /> Pozovi
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-directions"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 hover:border-blue-600 hover:text-blue-700 text-sm font-semibold px-4 py-2.5 transition-colors"
          >
            <Navigation className="w-4 h-4" /> Uputstvo
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
        <div>© {new Date().getFullYear()} Bistar Potok. Sva prava zadržana.</div>
        <div>Novi Sad · Južno-bački okrug</div>
      </div>
    </div>
  </footer>
);

const MobileCallBar = () => (
  <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-white/95 backdrop-blur border-t border-slate-200">
    <a
      href={`tel:${PHONE_TEL}`}
      data-testid="mobile-call-bar"
      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-semibold py-3.5"
    >
      <Phone className="w-5 h-5" />
      Pozovi {PHONE_DISPLAY}
    </a>
  </div>
);

const Home = () => (
  <div data-testid="home-page" className="pb-20 md:pb-0">
    <Nav />
    <main>
      <Hero />
      <Services />
      <About />
      <Location />
      <CtaBanner />
    </main>
    <FinalBanner />
    <Footer />
    <MobileCallBar />
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
