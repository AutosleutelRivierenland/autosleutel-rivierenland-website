import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autosleutel Tiel | Autosleutel Rivierenland",
  description:
    "Autosleutel kwijt, extra sleutel nodig of buitengesloten in Tiel? Autosleutel Rivierenland helpt op locatie en op afspraak met autosleutels, programmeren en schadevrij openen.",
  alternates: { canonical: "/tiel" },
  openGraph: {
    title: "Autosleutel Tiel | Autosleutel Rivierenland",
    description:
      "Professionele autosleutelservice in Tiel. Extra autosleutels, alle sleutels kwijt, programmeren, Keyless Go en schadevrij openen.",
    url: "https://autosleutelrivierenland.nl/tiel",
    siteName: "Autosleutel Rivierenland",
    locale: "nl_NL",
    type: "website",
  },
};

const tel = "tel:+31648659279";
const whatsapp =
  "https://wa.me/31648659279?text=Hallo%20Autosleutel%20Rivierenland%2C%20ik%20heb%20hulp%20nodig%20in%20Tiel%20met%20mijn%20autosleutel.";

const services = [
  ["Autosleutel kwijt", "Ook wanneer u geen werkende sleutel meer heeft, bespreken we welke oplossing voor uw auto mogelijk is."],
  ["Extra autosleutel", "Een reserve sleutel met of zonder afstandsbediening, zodat u niet afhankelijk bent van één sleutel."],
  ["Schadevrij openen", "Buitengesloten in Tiel? Wij openen uw auto vakkundig en met aandacht voor het voertuig."],
  ["Autosleutel programmeren", "Nieuwe en extra sleutels programmeren voor veel voorkomende automerken en modellen."],
  ["Keyless Go", "Voor geschikte voertuigen kunnen ook keyless- en smartkeys worden gemaakt en geprogrammeerd."],
  ["Diagnose & uitlezen", "Bij elektronische sleutelproblemen kunnen we de auto uitlezen en gericht naar de oorzaak zoeken."],
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Autosleutel Tiel",
  url: "https://autosleutelrivierenland.nl/tiel",
  description:
    "Lokale autosleutelservice in Tiel van Autosleutel Rivierenland.",
  about: {
    "@type": "Locksmith",
    name: "Autosleutel Rivierenland",
    telephone: "+31648659279",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tiel",
      addressRegion: "Gelderland",
      addressCountry: "NL",
    },
  },
};

export default function TielPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="announcement">
        <div className="container announce-inner">
          <span>Autosleutelservice in Tiel</span>
          <span>Ma–do 09:00–21:00 · vrijdag gesloten · za–zo 09:00–21:00</span>
        </div>
      </div>

      <header className="header">
        <div className="container nav-inner">
          <a className="brand" href="/" aria-label="Autosleutel Rivierenland home">
            <div className="brand-icon" aria-hidden="true">AS<span>R</span></div>
            <div><b>AUTOSLEUTEL</b><small>RIVIERENLAND</small></div>
          </a>
          <nav aria-label="Hoofdnavigatie">
            <a href="/#diensten">Diensten</a>
            <a href="/#werkwijze">Werkwijze</a>
            <a href="/#werkgebied">Werkgebied</a>
            <a href="/#zakelijk">Zakelijk</a>
            <a href="/#contact">Contact</a>
          </nav>
          <a className="nav-phone" href={tel}>06 48 65 92 79 <span>→</span></a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-grid-bg" aria-hidden="true"></div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><i></i> Autosleutelservice in Tiel</div>
            <h1>Autosleutel <span>Tiel.</span></h1>
            <p className="hero-text">
              Autosleutel kwijt, buitengesloten of een extra sleutel nodig? Autosleutel Rivierenland is gevestigd in Tiel en helpt u op locatie of op afspraak.
            </p>
            <div className="actions">
              <a className="btn primary" href={tel}>Bel direct <b>→</b></a>
              <a className="btn ghost" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <b>↗</b></a>
            </div>
            <div className="hero-trust">
              <span>✓ Tiel is ons kerngebied</span>
              <span>✓ Service op locatie</span>
              <span>✓ Geen voorrijkosten binnen Tiel</span>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orb"></div>
            <div className="key-graphic"><div className="key-head"><span></span><span></span></div><div className="key-shaft"></div></div>
            <div className="floating-card"><div className="pulse"></div><div><b>Hulp nodig in Tiel?</b><small>Bel of WhatsApp ons</small></div><a href={tel}>→</a></div>
          </div>
        </div>
      </section>

      <section className="statement">
        <div className="container statement-grid">
          <div>
            <label>AUTOSLEUTEL TIEL</label>
            <h2>Lokale service. <em>Professioneel geregeld.</em></h2>
          </div>
          <div>
            <p>Vanuit Tiel verzorgen wij autosleutelservice voor particulieren, garages en autobedrijven. Omdat Tiel ons kerngebied is, kunnen we snel schakelen voor werkzaamheden op locatie.</p>
            <p>U kunt ons bellen of WhatsAppen met uw situatie. We bespreken eerst uw auto en de mogelijkheden, zodat u weet waar u aan toe bent.</p>
          </div>
        </div>
      </section>

      <section className="section services">
        <div className="container">
          <div className="section-head">
            <div><label>DIENSTEN IN TIEL</label><h2>Waarmee kunnen wij u <em>helpen?</em></h2></div>
            <p>Voor veel voorkomende automerken en situaties, op locatie of op afspraak in Tiel.</p>
          </div>
          <div className="service-grid">
            {services.map(([title, text], index) => (
              <a href="/#contact" className="service" key={title}>
                <span className="service-no">{String(index + 1).padStart(2, "0")}</span>
                <div className="service-symbol" aria-hidden="true">⌁</div>
                <h3>{title}</h3>
                <p>{text}</p>
                <b className="service-arrow">→</b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section process">
        <div className="container">
          <label>ZO WERKT HET IN TIEL</label>
          <div className="process-head">
            <h2>Van melding naar <em>werkende sleutel.</em></h2>
            <p>U hoeft vooraf niet te weten welk type sleutel of programmering uw auto nodig heeft. Wij beoordelen de situatie en bespreken de praktische oplossing.</p>
          </div>
          <div className="steps">
            <div><b>01</b><h3>Bel of WhatsApp</h3><p>Vertel ons wat er met uw sleutel of auto aan de hand is.</p></div>
            <div><b>02</b><h3>Gegevens van de auto</h3><p>We bespreken merk, model, bouwjaar en de huidige sleutelsituatie.</p></div>
            <div><b>03</b><h3>Op locatie of afspraak</h3><p>In Tiel komen we naar u toe of spreken we een afspraak af.</p></div>
            <div><b>04</b><h3>Programmeren & testen</h3><p>De sleutel wordt uitgevoerd, geprogrammeerd en gecontroleerd.</p></div>
          </div>
        </div>
      </section>

      <section className="section specialist">
        <div className="container specialist-grid">
          <div className="tech-art" aria-hidden="true"><div className="tech-circle"><span>ASR</span><small>PROFESSIONAL</small></div><i></i><i></i><i></i></div>
          <div>
            <label>WAAROM AUTOSLEUTEL RIVIERENLAND</label>
            <h2>Tiel als basis.<br/><em>Specialistische service.</em></h2>
            <p>Wij werken met professionele sleutel-, programmeer- en diagnoseapparatuur van onder andere Autel en Xhorse. Voor geschikte voertuigen verzorgen we ook Keyless Go en specialistisch benchwork.</p>
            <div className="chips"><span>AUTEL</span><span>XHORSE</span><span>DOLPHIN</span><span>BENCHWORK</span></div>
          </div>
        </div>
      </section>

      <section className="section area">
        <div className="container area-grid">
          <div>
            <label>VANUIT TIEL</label>
            <h2>Ook buiten Tiel <em>onderweg.</em></h2>
            <p>Tiel is ons belangrijkste werkgebied. Daarnaast helpen wij klanten in de directe omgeving, waaronder Culemborg, Geldermalsen, Buren, Zaltbommel, Leerdam en Gorinchem.</p>
            <div className="areas"><span>✓ Tiel</span><span>✓ Culemborg</span><span>✓ Geldermalsen</span><span>✓ Buren</span><span>✓ Zaltbommel</span><span>✓ Leerdam</span><span>✓ Gorinchem</span></div>
          </div>
          <div className="map-card" aria-label="Autosleutelservice vanuit Tiel"><div className="map-pin"><i></i><b>TIEL</b></div><span>SERVICE OP LOCATIE</span><small>Rivierenland · Midden-Nederland</small></div>
        </div>
      </section>

      <section className="contact">
        <div className="container contact-box">
          <div>
            <label>CONTACT IN TIEL</label>
            <h2>Autosleutelprobleem? <em>Bel ons.</em></h2>
            <p>Vertel ons kort wat er aan de hand is. Wij helpen u graag.</p>
            <div className="details"><a href={tel}><small>TELEFOON</small><strong>06 48 65 92 79</strong></a><a href="mailto:autosleutel.rivierenland@gmail.com"><small>E-MAIL</small><strong>autosleutel.rivierenland@gmail.com</strong></a></div>
          </div>
          <div className="contact-actions">
            <a className="btn primary large" href={tel}>Bel Autosleutel Rivierenland <b>→</b></a>
            <a className="btn whatsapp large" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp ons <b>↗</b></a>
            <p>Ma–do 09:00–21:00 · vrijdag gesloten · za–zo 09:00–21:00</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <a className="brand" href="/" aria-label="Autosleutel Rivierenland home"><div className="brand-icon" aria-hidden="true">AS<span>R</span></div><div><b>AUTOSLEUTEL</b><small>RIVIERENLAND</small></div></a>
          <div><b>DIENSTEN</b><a href="/#diensten">Autosleutel kwijt</a><a href="/#diensten">Extra autosleutel</a><a href="/#diensten">Schadevrij openen</a><a href="/#diensten">Keyless Go</a></div>
          <div><b>CONTACT</b><a href={tel}>06 48 65 92 79</a><a href="mailto:autosleutel.rivierenland@gmail.com">E-mail</a><span>Tiel · Service op locatie</span></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Autosleutel Rivierenland</span><span>KvK 94298033</span><span>BTW-plichtig</span></div>
      </footer>
      <a className="float-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp Autosleutel Rivierenland">WA</a>
    </main>
  );
}
