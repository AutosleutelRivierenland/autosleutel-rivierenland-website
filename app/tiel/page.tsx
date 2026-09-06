import Image from "next/image";

const tel = "tel:+31648659279";
const whatsapp = "https://wa.me/31648659279?text=Hallo%20Autosleutel%20Rivierenland%2C%20ik%20heb%20hulp%20nodig%20in%20Tiel%20met%20mijn%20autosleutel.";

const services = [
  ["01", "Autosleutel bijmaken", "Een extra sleutel voor uw auto wanneer u een reserve wilt of uw tweede sleutel niet meer betrouwbaar is."],
  ["02", "Autosleutels kwijt", "Geen werkende sleutel meer? We bespreken eerst de mogelijkheden voor uw merk, model en uitvoering."],
  ["03", "Schadevrij openen", "Buitengesloten in Tiel? Wij openen uw auto zorgvuldig en proberen onnodige schade aan het voertuig te voorkomen."],
  ["04", "Mercedes contactslot vervangen", "Voor geschikte Mercedes-modellen met FBS3 kunnen wij het contactslot beoordelen en vervangen."],
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Autosleutel Tiel | Autosleutel Rivierenland",
  url: "https://autosleutelrivierenland.nl/tiel",
  description: "Professionele autosleutelservice vanuit Tiel voor particulieren, garages en autobedrijven.",
  about: {
    "@type": "Locksmith",
    name: "Autosleutel Rivierenland",
    telephone: "+31648659279",
    email: "autosleutel.rivierenland@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tiel",
      addressRegion: "Gelderland",
      addressCountry: "NL",
    },
  },
};

function PhoneIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 2.8 9.4 2l2.1 5.1-2.4 1.8c1.2 2.5 3.1 4.5 5.7 5.7l1.8-2.4 5.1 2.1-.8 2.8c-.4 1.5-1.8 2.5-3.4 2.4C10.2 18.8 5.2 13.8 4.5 7.7c-.2-1.6.7-3.1 2.1-3.7Z" fill="currentColor"/></svg>}
function WhatsAppIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.4 9.4 0 0 0-8.1 14.2L2.7 21.4l4.9-1.2A9.4 9.4 0 1 0 12 2.5Zm0 16.9a7.5 7.5 0 0 1-3.8-1l-.3-.2-2.9.7.8-2.8-.2-.3a7.5 7.5 0 1 1 6.4 3.6Zm4.1-5.6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.7 1-.1.2-.3.2-.5.1-1.5-.8-2.5-1.5-3.5-3.1-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.6 1 2.8c.1.2 1.8 2.9 4.4 4 .6.3 1.1.4 1.5.5.6.2 1.2.1 1.7.1.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2-.1 0-.3-.1-.6-.2Z" fill="currentColor"/></svg>}

export default function TielPage() {
  return <main className="tiel-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <header className="header"><div className="container nav-inner"><a className="logo-frame" href="/" aria-label="Autosleutel Rivierenland home"><Image src="/logo.svg" alt="Autosleutel Rivierenland" width={220} height={89} priority unoptimized/></a><nav aria-label="Hoofdnavigatie"><a href="/">Home</a><a href="/#diensten">Diensten</a><a href="/mercedes-contactslot">Mercedes contactslot vervangen</a><a href="/#zakelijk">Zakelijk</a><a href="/#contact">Contact</a></nav><a className="nav-phone" href={tel}><b>☎</b><span>06 48 65 92 79</span></a></div></header>

    <section className="tiel-hero"><div className="container tiel-hero-grid"><div className="tiel-hero-copy"><div className="eyebrow">AUTOSLEUTELSERVICE IN TIEL</div><h1>Autosleutel <span>Tiel.</span></h1><p>Autosleutel Rivierenland is gevestigd in Tiel. Vanuit onze basis helpen wij particulieren, garages en autobedrijven met autosleutels, sleutelproblemen en schadevrij openen.</p><p>U kunt in Tiel op afspraak langskomen. Voor veel werkzaamheden is mobiele service mogelijk, zodat wij bij u op locatie kunnen werken.</p></div><div className="tiel-hero-panel"><div className="tiel-panel-kicker">TIEL · GELDERLAND</div><div className="tiel-panel-title">Lokale service.<br/><strong>Direct vanuit Tiel.</strong></div><div className="tiel-panel-line"></div><div className="tiel-panel-bottom"><span>KERNgebied</span><b>RIVIERENLAND</b></div></div></div></section>

    <section className="section tiel-intro"><div className="container two-col"><div><label>WAAROM TIEL?</label><h2>Een lokale basis voor <em>autosleutelservice.</em></h2></div><div><p>Wanneer er iets misgaat met uw autosleutel wilt u vooral weten waar u terechtkunt. Vanuit Tiel verzorgen wij een mobiele autosleutelservice voor klanten in de stad en de omliggende regio.</p><p>We bespreken vooraf wat er aan de hand is en welke gegevens van de auto nodig zijn. Zo kunnen we beter inschatten welke sleutel, programmering of andere werkzaamheden nodig zijn.</p></div></div></section>

    <section className="section tiel-services"><div className="container"><div className="section-head"><div><label>AUTOSLEUTELS IN TIEL</label><h2>Waarvoor kunt u bij ons <em>terecht?</em></h2></div><p>Voor veel voorkomende situaties bieden wij een praktische oplossing, op locatie of op afspraak.</p></div><div className="service-grid">{services.map(([n,title,text])=><div className={`service service-${n}`} key={n}><span className="service-no">{n}</span><div className="service-mark">⌁</div><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

    <section className="section tiel-local"><div className="container tiel-local-grid"><div className="tiel-local-map"><div className="local-ring ring-1"></div><div className="local-ring ring-2"></div><div className="local-ring ring-3"></div><div className="local-pin"><i></i><strong>TIEL</strong><span>Onze basis</span></div><div className="local-label l1">Culemborg</div><div className="local-label l2">Geldermalsen</div><div className="local-label l3">Buren</div><div className="local-label l4">Zaltbommel</div></div><div><label>VANUIT TIEL</label><h2>Op locatie in Tiel en <em>de regio.</em></h2><p>Onze belangrijkste werkgebied is Tiel. Daarnaast zijn wij actief in onder andere Culemborg, Geldermalsen, Buren, Zaltbommel, Leerdam en Gorinchem.</p><p>Voor werkzaamheden in Tiel geldt geen voorrijkosten. U kunt ook op afspraak langskomen.</p><div className="tiel-area-list"><span>✓ Tiel</span><span>✓ Culemborg</span><span>✓ Geldermalsen</span><span>✓ Buren</span><span>✓ Zaltbommel</span><span>✓ Leerdam</span><span>✓ Gorinchem</span></div></div></div></section>

    <section className="section tiel-process"><div className="container"><label>ZO PAKKEN WIJ HET AAN</label><div className="process-head"><h2>Eerst de situatie. <em>Dan de oplossing.</em></h2><p>U hoeft vooraf niet te weten welke sleutel of programmering uw auto nodig heeft. Wij kijken eerst naar de auto en de bestaande situatie.</p></div><div className="steps"><div><b>01</b><h3>Situatie bespreken</h3><p>Vertel wat er met uw autosleutel of auto aan de hand is.</p></div><div><b>02</b><h3>Auto beoordelen</h3><p>We bespreken merk, model, bouwjaar en de beschikbare sleutels.</p></div><div><b>03</b><h3>Werkzaamheden</h3><p>Op locatie in Tiel of op een afgesproken moment.</p></div><div><b>04</b><h3>Controleren</h3><p>De sleutel en functies worden getest voordat u verdergaat.</p></div></div></div></section>

    <section className="tiel-cta"><div className="container tiel-cta-box"><div><label>HULP NODIG IN TIEL?</label><h2>Vertel ons wat er <em>aan de hand is.</em></h2><p>Bel of WhatsApp ons. Wij bespreken eerst uw situatie en helpen u graag bepalen wat er nodig is.</p></div><div className="tiel-cta-actions"><a className="btn primary" href={tel}><span className="btn-icon"><PhoneIcon/></span><span>Bel direct</span><b>06 48 65 92 79</b></a><a className="btn hero-secondary" href={whatsapp} target="_blank" rel="noreferrer"><span className="btn-icon whatsapp-icon"><WhatsAppIcon/></span><span>WhatsApp</span><b>Stuur een bericht →</b></a><small>Ma–do 09:00–21:00 · vrijdag gesloten · za–zo 09:00–21:00</small></div></div></section>

    <footer><div className="container footer-grid"><a className="logo-frame footer-logo" href="/"><Image src="/logo.svg" alt="Autosleutel Rivierenland" width={220} height={89} unoptimized/></a><div><b>DIENSTEN</b><a href="/diensten/autosleutel-bijmaken">Autosleutel bijmaken</a><a href="/diensten/autosleutel-kwijt">Autosleutels kwijt</a><a href="/diensten/schadevrij-openen">Schadevrij openen</a><a href="/mercedes-contactslot">Mercedes contactsloten vervangen</a></div><div><b>CONTACT</b><a href="/mercedes-contactslot">Mercedes contactslot vervangen</a><a href="/tiel">Autosleutel Tiel</a><a href={tel}>06 48 65 92 79</a></div><div><b>BEDRIJF</b><span>Tiel · Service op locatie</span><a href="mailto:autosleutel.rivierenland@gmail.com">E-mail</a></div></div><div className="container footer-bottom"><span>© 2026 Autosleutel Rivierenland</span><span>KvK 94298033</span><span>BTW-plichtig</span></div></footer>
    <a className="float-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp Autosleutel Rivierenland">WA</a>
  </main>;
}
