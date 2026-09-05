const tel = "tel:+31648659279";
const whatsapp = "https://wa.me/31648659279?text=Hallo%20Autosleutel%20Rivierenland%2C%20ik%20heb%20hulp%20nodig%20met%20mijn%20autosleutel.";

const services = [
  ["01", "Alle sleutels kwijt", "Geen enkele sleutel meer? Wij helpen u met een nieuwe autosleutel en programmering."],
  ["02", "Extra autosleutel", "Een reserve sleutel met of zonder afstandsbediening, inclusief programmering."],
  ["03", "Schadevrij openen", "Vakkundig en schadevrij openen wanneer u bent buitengesloten."],
  ["04", "Keyless Go", "Keyless en smart keys maken en programmeren voor veel voorkomende voertuigen."],
  ["05", "Diagnose & uitlezen", "Elektronische diagnose, foutcodes uitlezen en gericht zoeken naar storingen."],
  ["06", "Behuizing vervangen", "Een versleten of beschadigde sleutelbehuizing professioneel vervangen."],
];

const coreAreas = ["Tiel", "Culemborg", "Geldermalsen", "Buren", "Zaltbommel", "Leerdam", "Gorinchem"];
const expansionAreas = ["Nijmegen", "Arnhem", "Den Bosch", "Utrecht"];
const allAreas = [...coreAreas, ...expansionAreas];

function Brand() {
  return <a className="brand" href="#top" aria-label="Autosleutel Rivierenland home">
    <div className="brand-icon" aria-hidden="true">AS<span>R</span></div>
    <div><b>AUTOSLEUTEL</b><small>RIVIERENLAND</small></div>
  </a>;
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Locksmith",
  name: "Autosleutel Rivierenland",
  url: "https://autosleutelrivierenland.nl",
  telephone: "+31648659279",
  email: "autosleutel.rivierenland@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tiel",
    addressRegion: "Gelderland",
    addressCountry: "NL"
  },
  areaServed: allAreas.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"], opens: "09:00", closes: "21:00" }
  ],
  priceRange: "$$"
};

export default function Home() {
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <div className="announcement"><div className="container announce-inner"><span>Autosleutelservice vanuit Tiel</span><span>Ma–do 09:00–21:00&nbsp; · &nbsp;vrijdag gesloten&nbsp; · &nbsp;za–zo 09:00–21:00</span></div></div>
    <header className="header"><div className="container nav-inner"><Brand/><nav aria-label="Hoofdnavigatie"><a href="#diensten">Diensten</a><a href="#werkwijze">Werkwijze</a><a href="#werkgebied">Werkgebied</a><a href="#zakelijk">Zakelijk</a><a href="#contact">Contact</a></nav><a className="nav-phone" href={tel} aria-label="Bel Autosleutel Rivierenland">06 48 65 92 79 <span>→</span></a></div></header>

    <section id="top" className="hero"><div className="hero-grid-bg" aria-hidden="true"></div><div className="container hero-inner">
      <div className="hero-copy"><div className="eyebrow"><i></i> Uw autosleutelspecialist uit Tiel</div><h1>Uw autosleutel.<br/><span>Onze specialiteit.</span></h1><p className="hero-text">Autosleutel kwijt, buitengesloten of een extra sleutel nodig? <strong>Autosleutel Rivierenland</strong> helpt u professioneel weer op weg.</p><div className="actions"><a className="btn primary" href={tel}>Bel direct <b>→</b></a><a className="btn ghost" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <b>↗</b></a></div><div className="hero-trust"><span>✓ 1 jaar garantie</span><span>✓ Service op locatie</span><span>✓ Geen voorrijkosten binnen Tiel</span></div></div>
      <div className="hero-art" aria-hidden="true"><div className="orb"></div><div className="key-graphic"><div className="key-head"><span></span><span></span></div><div className="key-shaft"></div></div><div className="floating-card"><div className="pulse"></div><div><b>Direct hulp nodig?</b><small>Bel of WhatsApp ons</small></div><a href={tel} aria-label="Bel direct">→</a></div></div>
    </div><div className="container scroll">SCROLL <span>↓</span></div></section>

    <section className="statement"><div className="container statement-grid"><div><label>WAAR WIJ VOOR STAAN</label><h2>Professionele autosleutelservice, <em>zonder gedoe.</em></h2></div><div><p>Van een extra autosleutel tot een nieuwe sleutel wanneer u alles kwijt bent. Wij combineren vakkennis met professionele apparatuur en komen naar u toe.</p><p>Particulier, garage of autobedrijf: wij helpen u graag.</p></div></div></section>

    <section id="diensten" className="section services"><div className="container"><div className="section-head"><div><label>ONZE DIENSTEN</label><h2>Alles rondom uw <em>autosleutel.</em></h2></div><p>Van openen en repareren tot programmeren en diagnose.</p></div><div className="service-grid">{services.map(([n,t,d])=><a href="#contact" className="service" key={n}><span className="service-no">{n}</span><div className="service-symbol" aria-hidden="true">⌁</div><h3>{t}</h3><p>{d}</p><b className="service-arrow">→</b></a>)}</div></div></section>

    <section id="werkwijze" className="section process"><div className="container"><label>ZO WERKEN WIJ</label><div className="process-head"><h2>Van probleem naar <em>oplossing.</em></h2><p>U hoeft niet uit te zoeken wat er technisch nodig is. Wij nemen u stap voor stap mee.</p></div><div className="steps"><div><b>01</b><h3>Neem contact op</h3><p>Bel of WhatsApp en vertel ons wat er aan de hand is.</p></div><div><b>02</b><h3>Wij beoordelen</h3><p>We bespreken uw auto, situatie en de mogelijkheden.</p></div><div><b>03</b><h3>Op locatie of afspraak</h3><p>Wij komen naar u toe of ontvangen u op afspraak in Tiel.</p></div><div><b>04</b><h3>Getest & klaar</h3><p>De sleutel wordt geprogrammeerd en gecontroleerd.</p></div></div></div></section>

    <section className="section specialist"><div className="container specialist-grid"><div className="tech-art" aria-hidden="true"><div className="tech-circle"><span>ASR</span><small>PROFESSIONAL</small></div><i></i><i></i><i></i></div><div><label>DE SPECIALIST ACHTER DE SLEUTEL</label><h2>Moderne apparatuur.<br/><em>Vakkundig uitgevoerd.</em></h2><p>Wij werken met professionele programmeer-, diagnose- en sleutelapparatuur van onder andere Autel en Xhorse. Ook voor specialistisch benchwork beschikken wij over passende tools en adapters.</p><div className="chips"><span>AUTEL</span><span>XHORSE</span><span>DOLPHIN</span><span>BENCHWORK</span></div></div></div></section>

    <section id="zakelijk" className="business"><div className="container business-box"><div><label>VOOR BEDRIJVEN</label><h2>Een betrouwbare partner voor <em>uw werkplaats.</em></h2><p>Ook garages, autobedrijven en andere zakelijke klanten kunnen bij Autosleutel Rivierenland terecht. Zakelijke werkzaamheden kunnen op factuur worden afgehandeld.</p></div><a className="btn primary" href={whatsapp} target="_blank" rel="noreferrer">Bespreek uw aanvraag <b>→</b></a></div></section>

    <section id="werkgebied" className="section area"><div className="container area-grid"><div><label>WERKGEBIED</label><h2>Vanuit Tiel naar <em>uw locatie.</em></h2><p><strong>Tiel en de directe omgeving zijn ons kerngebied.</strong> Van daaruit breiden wij onze service uit richting Nijmegen, Arnhem, Den Bosch en Utrecht.</p><div className="area-groups"><div><small>KERNGEBIED</small><div className="areas">{coreAreas.map(a=><span key={a}>✓ {a}</span>)}</div></div><div><small>UITBREIDING</small><div className="areas">{expansionAreas.map(a=><span key={a}>✓ {a}</span>)}</div></div></div><p><a href="/tiel" style={{color:"#48a4ff",fontWeight:800}}>Bekijk onze autosleutelservice in Tiel →</a></p></div><div className="map-card" aria-label="Werkgebied vanuit Tiel"><div className="map-pin"><i></i><b>TIEL</b></div><span>SERVICE OP LOCATIE</span><small>Rivierenland · Midden-Nederland</small></div></div></section>

    <section id="contact" className="contact"><div className="container contact-box"><div><label>CONTACT</label><h2>Klaar om weer <em>op weg te gaan?</em></h2><p>Vertel ons kort wat er met uw autosleutel of auto aan de hand is. Wij helpen u graag.</p><div className="details"><a href={tel}><small>TELEFOON</small><strong>06 48 65 92 79</strong></a><a href="mailto:autosleutel.rivierenland@gmail.com"><small>E-MAIL</small><strong>autosleutel.rivierenland@gmail.com</strong></a></div></div><div className="contact-actions"><a className="btn primary large" href={tel}>Bel Autosleutel Rivierenland <b>→</b></a><a className="btn whatsapp large" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp ons <b>↗</b></a><p>Ma–do 09:00–21:00 · vrijdag gesloten · za–zo 09:00–21:00</p></div></div></section>

    <footer><div className="container footer-grid"><Brand/><div><b>DIENSTEN</b><a href="#diensten">Autosleutel kwijt</a><a href="#diensten">Extra autosleutel</a><a href="#diensten">Schadevrij openen</a><a href="#diensten">Keyless Go</a></div><div><b>CONTACT</b><a href={tel}>06 48 65 92 79</a><a href="mailto:autosleutel.rivierenland@gmail.com">E-mail</a><span>Tiel · Service op locatie</span></div></div><div className="container footer-bottom"><span>© 2026 Autosleutel Rivierenland</span><span>KvK 94298033</span><span>BTW-plichtig</span></div></footer>
    <a className="float-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp Autosleutel Rivierenland">WA</a>
  </main>;
}
