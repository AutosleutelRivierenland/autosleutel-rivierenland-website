import Image from "next/image";

const tel = "tel:+31648659279";
const whatsapp = "https://wa.me/31648659279?text=Hallo%20Autosleutel%20Rivierenland%2C%20ik%20heb%20hulp%20nodig%20met%20mijn%20autosleutel.";
const googleReviews = "https://www.google.com/search?q=autosleutel+rivierenland";

const services = [
  ["01", "Autosleutel bijmaken", "Een extra autosleutel laten maken met of zonder afstandsbediening. We snijden de sleutel en programmeren de elektronica waar nodig."],
  ["02", "Autosleutel kwijt", "Geen werkende sleutel meer? Wij kunnen bij geschikte voertuigen een nieuwe sleutel maken en programmeren. Neem vooraf contact op met het kenteken of voertuiggegevens."],
  ["03", "Autosleutel programmeren", "Nieuwe en extra sleutels programmeren voor veel verschillende voertuigen. Wij werken met professionele apparatuur en beoordelen per model wat mogelijk is."],
  ["04", "Schadevrij openen", "Buitengesloten van uw auto? Wij openen het voertuig vakkundig en met zo min mogelijk risico op schade."],
  ["05", "Keyless Go", "Keyless- en smartkeys maken en programmeren voor geschikte voertuigen. Ook wanneer een extra keyless sleutel gewenst is."],
  ["06", "Diagnose & uitlezen", "Elektronische sleutel- en startproblemen gericht onderzoeken. We lezen systemen uit en bepalen eerst waar het probleem zit."],
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
        <a className="logo-frame" href="#top" aria-label="Autosleutel Rivierenland home">
          <Image src="/logo.svg" alt="Autosleutel Rivierenland" width={220} height={89} priority />
        </a>
        <nav aria-label="Hoofdnavigatie">
          <a href="#diensten">Diensten</a>
          <a href="#werkgebied">Werkgebied</a>
          <a href="/vag-sleutelprogrammering">VAG</a>
          <a href="/mercedes-contactslot">Mercedes</a>
          <a href="#zakelijk">Zakelijk</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-phone" href={tel}>Bel direct <span>06 48 65 92 79</span></a>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <main id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="announcement">
        <div className="container announce-inner">
          <span>Autosleutelservice vanuit Tiel</span>
          <span>Ma–do 09:00–21:00 · vrijdag gesloten · za–zo 09:00–21:00</span>
        </div>
      </div>
      <Header />

      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><i /> Autosleutelspecialist uit Tiel</div>
            <h1>Autosleutel <span>nodig?</span></h1>
            <p className="hero-text">Een extra sleutel, programmeren, een verloren sleutel of een probleem met starten? Wij helpen u met professionele autosleutelservice vanuit Tiel.</p>
            <div className="actions">
              <a className="btn primary" href={tel}>Bel direct <b>→</b></a>
              <a className="btn hero-secondary" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <b>↗</b></a>
            </div>
            <div className="hero-trust"><span>✓ Service op locatie</span><span>✓ 1 jaar garantie</span><span>✓ Geen voorrijkosten binnen Tiel</span></div>
          </div>
          <div className="hero-image-wrap">
            <Image className="hero-image" src="/ai-workbench.svg" alt="Autosleutel en professionele apparatuur op een werkbank" width={640} height={427} priority />
            <div className="image-badge"><strong>Professioneel sleutelwerk</strong><span>Programmeren · snijden · diagnose</span></div>
          </div>
        </div>
      </section>

      <section id="diensten" className="section services">
        <div className="container">
          <div className="section-head"><div><label>ONZE DIENSTEN</label><h2>Alles voor uw <em>autosleutel.</em></h2></div><p>Van een extra sleutel tot programmeren en diagnose. We beoordelen per voertuig wat technisch mogelijk is.</p></div>
          <div className="service-grid">{services.map(([n, title, text]) => <a href={`#dienst-${n}`} className="service" key={n}><span className="service-no">{n}</span><span className="service-mark">+</span><h3>{title}</h3><p>{text}</p><b className="service-arrow">↓</b></a>)}</div>
        </div>
      </section>

      <section className="section service-detail-section">
        <div className="container">
          <div className="detail-intro"><label>WAT WIJ DOEN</label><h2>Van sleutelprobleem naar <em>oplossing.</em></h2><p>Geen standaardpakket: eerst bekijken we het voertuig, de sleutel en het probleem. Daarna bespreken we wat er nodig is.</p></div>
          <div className="detail-grid">
            <article id="dienst-01"><span>01</span><h3>Autosleutel bijmaken</h3><p>Heeft u nog één werkende sleutel en wilt u een reserve? Wij kunnen voor geschikte voertuigen een extra sleutel leveren, snijden en programmeren. Dat is verstandig voordat de laatste sleutel verloren raakt.</p></article>
            <article id="dienst-02"><span>02</span><h3>Autosleutel kwijt</h3><p>Ook wanneer u geen werkende sleutel meer heeft, kunnen we voor veel voertuigen een oplossing bieden. Neem contact op met uw voertuiggegevens zodat we vooraf kunnen beoordelen wat mogelijk is.</p></article>
            <article id="dienst-03"><span>03</span><h3>Programmeren</h3><p>De sleutel moet niet alleen passen: de elektronica en startbeveiliging moeten ook correct worden aangemeld. We gebruiken professionele programmeerapparatuur en werken modelgericht.</p></article>
            <article id="dienst-04"><span>04</span><h3>Schadevrij openen</h3><p>Buitengesloten? We proberen het voertuig zo zorgvuldig mogelijk te openen zonder onnodige schade aan deur, slot of rubbers.</p></article>
            <article id="dienst-05"><span>05</span><h3>Keyless Go</h3><p>Voor geschikte voertuigen kunnen wij keyless- en smartkeys maken en programmeren. We controleren vooraf welke sleutel en procedure bij het voertuig horen.</p></article>
            <article id="dienst-06"><span>06</span><h3>Diagnose & uitlezen</h3><p>Wanneer een auto niet start of een sleutel niet wordt herkend, is blind een onderdeel vervangen geen goede aanpak. We lezen uit, zoeken gericht en bepalen de volgende stap.</p></article>
          </div>
        </div>
      </section>

      <section className="feature-image-section">
        <div className="container feature-image-grid">
          <div className="feature-image-copy"><label>PROFESSIONELE APPARATUUR</label><h2>Moderne apparatuur. <em>Vakkundig uitgevoerd.</em></h2><p>Wij werken onder andere met professionele Autel- en Xhorse-apparatuur en beschikken over mogelijkheden voor sleutelprogrammering, benchwork en het snijden van autosleutels.</p><a className="text-link" href="/vag-sleutelprogrammering">Bekijk onze VAG sleutelprogrammering →</a></div>
          <div className="feature-image-frame"><Image src="/ai-workbench.svg" alt="Professionele autosleutelapparatuur en autosleutels" width={640} height={427} /></div>
        </div>
      </section>

      <section className="special-banner">
        <div className="container special-banner-inner"><div><label>SPECIALE SERVICE</label><h2>Mercedes contactslot vervangen</h2><p>Voor geschikte Mercedes-modellen kunnen wij een defect contactslot beoordelen, vervangen en programmeren. We werken hierbij uitsluitend aan systemen die binnen onze FBS3-service vallen.</p></div><a className="btn primary" href="/mercedes-contactslot">Bekijk service <b>→</b></a></div>
      </section>

      <section className="vag-banner">
        <div className="container vag-banner-inner"><div><label>GESPECIALISEERD IN VAG</label><h2>VAG sleutelprogrammering.</h2><p>Volkswagen, Audi, SEAT en Škoda. Vooral voor VAG-sleutels en MQB-systemen hebben wij veel ervaring met programmeren en het voorbereiden van sleutels.</p></div><a className="btn primary" href="/vag-sleutelprogrammering">Naar VAG service <b>→</b></a></div>
      </section>

      <section id="werkgebied" className="section area">
        <div className="container area-grid">
          <div><label>WERKGEBIED</label><h2>Tiel als <em>basis.</em></h2><p>Vanuit Tiel werken wij mobiel voor particulieren en bedrijven in de regio. Voor werkzaamheden in Tiel kunt u ook op afspraak langskomen.</p>
            <div className="area-columns"><div><small>KERNGEBIED</small><div className="areas">{coreAreas.map((a) => <span key={a}>✓ {a}</span>)}</div></div><div><small>UITBREIDING</small><div className="areas">{expansionAreas.map((a) => <span key={a}>✓ {a}</span>)}</div></div></div>
            <p><a className="text-link" href="/tiel">Bekijk autosleutelservice in Tiel →</a></p>
          </div>
          <div className="area-card"><div className="area-card-label">SERVICE OP LOCATIE</div><strong>TIEL</strong><span>Rivierenland</span></div>
        </div>
      </section>

      <section className="section capability">
        <div className="container capability-grid"><div><label>MERKEN & MOGELIJKHEDEN</label><h2>Voor vrijwel alle <em>gangbare automerken.</em></h2></div><div><p>Wij werken met moderne professionele apparatuur voor een groot aantal voertuigen. Beschikbaarheid verschilt per merk, model en uitvoering.</p><p className="excluded"><strong>Niet beschikbaar:</strong> BMW, Renault en Volvo.</p><p>Twijfelt u of uw auto geschikt is? Stuur ons het merk, model, bouwjaar en eventueel het kenteken. Dan kunnen wij vooraf beoordelen wat mogelijk is.</p></div></div>
      </section>

      <section id="zakelijk" className="business"><div className="container business-box"><div><label>VOOR BEDRIJVEN</label><h2>Een praktische partner voor <em>uw werkplaats.</em></h2><p>Ook garages en autobedrijven kunnen bij ons terecht voor sleutelwerk, programmeren en technische ondersteuning. Zakelijke werkzaamheden kunnen op factuur worden afgehandeld.</p></div><a className="btn primary" href={whatsapp} target="_blank" rel="noreferrer">Bespreek uw aanvraag <b>→</b></a></div></section>

      <section id="contact" className="contact"><div className="container contact-box"><div><label>CONTACT</label><h2>Autosleutelprobleem? <em>Bel ons.</em></h2><p>Vertel ons kort wat er aan de hand is. Wij helpen u graag en kunnen vooraf beoordelen wat er nodig is.</p><div className="details"><a href={tel}><small>TELEFOON</small><strong>06 48 65 92 79</strong></a><a href="mailto:autosleutel.rivierenland@gmail.com"><small>E-MAIL</small><strong>autosleutel.rivierenland@gmail.com</strong></a></div><a className="review-link" href={googleReviews} target="_blank" rel="noreferrer">Bekijk onze beoordelingen op Google ↗</a></div><div className="contact-actions"><a className="btn primary large" href={tel}>Bel Autosleutel Rivierenland <b>→</b></a><a className="btn whatsapp large" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp ons <b>↗</b></a><p>Ma–do 09:00–21:00 · vrijdag gesloten · za–zo 09:00–21:00</p></div></div></section>

      <footer><div className="container footer-grid"><a className="logo-frame footer-logo" href="#top"><Image src="/logo.svg" alt="Autosleutel Rivierenland" width={220} height={89} /></a><div><b>DIENSTEN</b><a href="#diensten">Autosleutel bijmaken</a><a href="#diensten">Autosleutel kwijt</a><a href="#diensten">Programmeren</a><a href="#diensten">Schadevrij openen</a></div><div><b>SPECIALIST</b><a href="/vag-sleutelprogrammering">VAG sleutelprogrammering</a><a href="/mercedes-contactslot">Mercedes contactslot</a><a href="/tiel">Autosleutel Tiel</a></div><div><b>CONTACT</b><a href={tel}>06 48 65 92 79</a><a href="mailto:autosleutel.rivierenland@gmail.com">E-mail</a><span>Tiel · Service op locatie</span></div></div><div className="container footer-bottom"><span>© 2026 Autosleutel Rivierenland</span><span>KvK 94298033</span><span>BTW-plichtig</span></div></footer>
      <a className="float-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp Autosleutel Rivierenland">WA</a>
    </main>
  );
}
