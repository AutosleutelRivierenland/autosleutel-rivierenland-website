import Image from "next/image";

const tel = "tel:+31648659279";
const whatsapp = "https://wa.me/31648659279?text=Hallo%20Autosleutel%20Rivierenland%2C%20ik%20heb%20hulp%20nodig%20met%20mijn%20autosleutel.";
const googleReviews = "https://www.google.com/search?q=autosleutel+rivierenland";

const services = [
  ["01", "Autosleutel bijmaken", "Een extra sleutel, met of zonder afstandsbediening."],
  ["02", "Autosleutel kwijt", "Ook wanneer u geen werkende sleutel meer heeft."],
  ["03", "Autosleutel programmeren", "Nieuwe en extra sleutels professioneel programmeren."],
  ["04", "Schadevrij openen", "Vakkundig openen wanneer u bent buitengesloten."],
  ["05", "Keyless Go", "Keyless- en smartkeys maken en programmeren."],
  ["06", "Diagnose & uitlezen", "Gericht zoeken naar elektronische sleutel- en startproblemen."],
];

const coreAreas = ["Tiel", "Culemborg", "Geldermalsen", "Buren", "Zaltbommel", "Leerdam", "Gorinchem"];
const expansionAreas = ["Nijmegen", "Arnhem", "Den Bosch", "Utrecht"];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Locksmith",
  name: "Autosleutel Rivierenland",
  url: "https://autosleutelrivierenland.nl",
  telephone: "+31648659279",
  email: "autosleutel.rivierenland@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Tiel", addressRegion: "Gelderland", addressCountry: "NL" },
  areaServed: [...coreAreas, ...expansionAreas].map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"], opens: "09:00", closes: "21:00" }],
};

function Header() {
  return (
    <header className="header">
      <div className="container nav-inner">
        <a className="logo-frame" href="#top" aria-label="Autosleutel Rivierenland home"><Image src="/logo.svg" alt="Autosleutel Rivierenland" width={220} height={89} priority /></a>
        <nav aria-label="Hoofdnavigatie">
          <a className="active" href="#top">Home</a>
          <a href="#diensten">Diensten <i>⌄</i></a>
          <a href="/mercedes-contactslot">Mercedes contactslot vervangen <i>⌄</i></a>
          <a href="#zakelijk">Zakelijk</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-phone" href={tel}><b>⌕</b><span>06 48 65 92 79</span></a>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <main id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />

      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">AUTOSLEUTELSPECIALIST UIT TIEL</div>
            <h1>Probleem met uw<br /><span>autosleutel?</span></h1>
            <p className="hero-text">Autosleutel bijmaken, programmeren, vervangen of uw auto schadevrij openen. Snel, vakkundig en op locatie in Tiel en de regio.</p>
            <div className="actions">
              <a className="btn primary" href={tel}>Bel direct <b>06 48 65 92 79</b></a>
              <a className="btn hero-secondary" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <b>Stuur een bericht →</b></a>
            </div>
            <div className="hero-trust"><span>✓ Service op locatie</span><span>✓ 1 jaar garantie</span><span>✓ Geen voorrijkosten binnen Tiel</span></div>
          </div>
          <div className="hero-image-wrap">
            <Image className="hero-image" src="/ai-workbench.svg" alt="Autosleutelservice en professionele apparatuur" width={640} height={427} priority />
            <div className="image-badge"><div><strong>Professionele autosleutelservice</strong><span>Programmeren · snijden · diagnose</span></div><div className="hero-side-points"><span>ϟ Snel ter plaatse</span><span>♢ Vakkundige service</span><span>⌖ Tiel en omgeving</span><span>☆ Klanten beoordelen ons op Google</span></div></div>
          </div>
        </div>
      </section>

      <section id="diensten" className="section services">
        <div className="container">
          <div className="section-head"><div><label>ONZE DIENSTEN</label><h2>Alles voor uw <em>autosleutel.</em></h2></div><a className="text-link" href="#contact">Bekijk alle diensten&nbsp; →</a></div>
          <div className="service-grid">{services.map(([n, title, text], index) => <a href={`#dienst-${n}`} className={`service service-${index + 1}`} key={n}><span className="service-no">{n}</span><span className="service-mark" aria-hidden="true" /><h3>{title}</h3><p>{text}</p><b className="service-arrow">→</b></a>)}</div>
        </div>
      </section>

      <section className="specialists">
        <div className="container specialists-grid">
          <a className="specialist-card mercedes-card-home" href="/mercedes-contactslot"><div className="specialist-copy"><label>MERCEDES SPECIALIST</label><h2>Mercedes contactslot vervangen</h2><p>Specialist in geschikte Mercedes-modellen en FBS3 contactslot-service.</p><span className="specialist-btn">Meer over Mercedes&nbsp; →</span></div></a>
          <a className="specialist-card" href="/tiel"><div className="specialist-copy"><label>TIEL &amp; REGIO</label><h2>Autosleutelservice vanuit Tiel</h2><p>Mobiele service voor particulieren, garages en autobedrijven in Rivierenland.</p><span className="specialist-btn">Bekijk Tiel&nbsp; →</span></div></a>
        </div>
      </section>

      <section className="section service-detail-section">
        <div className="container">
          <div className="detail-intro"><label>WAT WIJ DOEN</label><h2>Van sleutelprobleem naar <em>oplossing.</em></h2><p>Geen standaardpakket: eerst bekijken we het voertuig, de sleutel en het probleem. Daarna bespreken we wat er nodig is.</p></div>
          <div className="detail-grid">
            <article id="dienst-01"><span>01</span><h3>Autosleutel bijmaken</h3><p>Heeft u nog één werkende sleutel en wilt u een reserve? Wij kunnen voor geschikte voertuigen een extra sleutel leveren, snijden en programmeren.</p></article>
            <article id="dienst-02"><span>02</span><h3>Autosleutel kwijt</h3><p>Ook zonder werkende sleutel kunnen we voor veel voertuigen een oplossing bieden. Neem vooraf contact op met uw voertuiggegevens.</p></article>
            <article id="dienst-03"><span>03</span><h3>Programmeren</h3><p>De sleutel moet niet alleen passen: de elektronica en startbeveiliging moeten correct worden aangemeld. We werken modelgericht.</p></article>
            <article id="dienst-04"><span>04</span><h3>Schadevrij openen</h3><p>Buitengesloten? We openen het voertuig zo zorgvuldig mogelijk zonder onnodige schade aan deur, slot of rubbers.</p></article>
            <article id="dienst-05"><span>05</span><h3>Keyless Go</h3><p>Voor geschikte voertuigen kunnen wij keyless- en smartkeys maken en programmeren. We controleren vooraf wat bij het voertuig hoort.</p></article>
            <article id="dienst-06"><span>06</span><h3>Diagnose &amp; uitlezen</h3><p>Wanneer een auto niet start of een sleutel niet wordt herkend, zoeken we eerst gericht naar de oorzaak voordat onderdelen worden vervangen.</p></article>
          </div>
        </div>
      </section>

      <section className="feature-image-section">
        <div className="container feature-image-grid">
          <div className="feature-image-copy"><label>PROFESSIONELE APPARATUUR</label><h2>Moderne apparatuur. <em>Vakkundig uitgevoerd.</em></h2><p>Wij werken onder andere met professionele Autel- en Xhorse-apparatuur en beschikken over mogelijkheden voor sleutelprogrammering, benchwork en het snijden van autosleutels.</p><a className="text-link" href="#contact">Bespreek uw sleutelprobleem →</a></div>
          <div className="feature-image-frame"><Image src="/ai-workbench.svg" alt="Professionele autosleutelapparatuur" width={640} height={427} /></div>
        </div>
      </section>

      <section id="werkgebied" className="section area">
        <div className="container area-grid"><div><label>WERKGEBIED</label><h2>Tiel als <em>basis.</em></h2><p>Vanuit Tiel werken wij mobiel voor particulieren en bedrijven in de regio. Voor werkzaamheden in Tiel kunt u ook op afspraak langskomen.</p><div className="area-columns"><div><small>KERNGEBIED</small><div className="areas">{coreAreas.map((a) => <span key={a}>✓ {a}</span>)}</div></div><div><small>UITBREIDING</small><div className="areas">{expansionAreas.map((a) => <span key={a}>✓ {a}</span>)}</div></div></div><p><a className="text-link" href="/tiel">Bekijk autosleutelservice in Tiel →</a></p></div><div className="area-card"><div className="area-card-label">SERVICE OP LOCATIE</div><strong>TIEL</strong><span>Rivierenland</span></div></div>
      </section>

      <section className="section capability"><div className="container capability-grid"><div><label>MERKEN &amp; MOGELIJKHEDEN</label><h2>Voor vrijwel alle <em>gangbare automerken.</em></h2></div><div><p>Wij werken met moderne professionele apparatuur voor een groot aantal voertuigen. Beschikbaarheid verschilt per merk, model en uitvoering.</p><p className="excluded"><strong>Niet beschikbaar:</strong> BMW, Renault en Volvo.</p><p>Twijfelt u of uw auto geschikt is? Stuur ons het merk, model, bouwjaar en eventueel het kenteken.</p></div></div></section>

      <section id="zakelijk" className="business"><div className="container business-box"><div><label>VOOR BEDRIJVEN</label><h2>Een praktische partner voor <em>uw werkplaats.</em></h2><p>Ook garages en autobedrijven kunnen bij ons terecht voor sleutelwerk, programmeren en technische ondersteuning. Zakelijke werkzaamheden kunnen op factuur worden afgehandeld.</p></div><a className="btn primary" href={whatsapp} target="_blank" rel="noreferrer">Bespreek uw aanvraag&nbsp; →</a></div></section>

      <section id="contact" className="contact"><div className="container contact-box"><div><label>CONTACT</label><h2>Autosleutelprobleem? <em>Bel ons.</em></h2><p>Vertel ons kort wat er aan de hand is. Wij helpen u graag en kunnen vooraf beoordelen wat er nodig is.</p><div className="details"><a href={tel}><small>TELEFOON</small><strong>06 48 65 92 79</strong></a><a href="mailto:autosleutel.rivierenland@gmail.com"><small>E-MAIL</small><strong>autosleutel.rivierenland@gmail.com</strong></a></div><a className="review-link" href={googleReviews} target="_blank" rel="noreferrer">Bekijk onze beoordelingen op Google ↗</a></div><div className="contact-actions"><a className="btn primary large" href={tel}>Bel Autosleutel Rivierenland <b>→</b></a><a className="btn whatsapp large" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp ons <b>↗</b></a><p>Ma–do 09:00–21:00 · vrijdag gesloten · za–zo 09:00–21:00</p></div></div></section>

      <footer><div className="container footer-grid"><a className="logo-frame footer-logo" href="#top"><Image src="/logo.svg" alt="Autosleutel Rivierenland" width={220} height={89} /></a><div><b>DIENSTEN</b><a href="#diensten">Autosleutel bijmaken</a><a href="#diensten">Autosleutel kwijt</a><a href="#diensten">Programmeren</a><a href="#diensten">Schadevrij openen</a></div><div><b>SPECIALIST</b><a href="/mercedes-contactslot">Mercedes contactslot vervangen</a><a href="/tiel">Autosleutel Tiel</a></div><div><b>CONTACT</b><a href={tel}>06 48 65 92 79</a><a href="mailto:autosleutel.rivierenland@gmail.com">E-mail</a><span>Tiel · Service op locatie</span></div></div><div className="container footer-bottom"><span>© 2026 Autosleutel Rivierenland</span><span>KvK 94298033</span><span>BTW-plichtig</span></div></footer>
      <a className="float-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp Autosleutel Rivierenland">WA</a>
    </main>
  );
}
