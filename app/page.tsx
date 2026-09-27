import Image from "next/image";
import ReviewsCarousel from "./ReviewsCarousel";

const tel = "tel:+31648659279";
const whatsapp = "https://wa.me/31648659279?text=Hallo%20Autosleutel%20Rivierenland%2C%20ik%20heb%20hulp%20nodig%20met%20mijn%20autosleutel.";
const googleReviews = "https://www.google.com/search?q=autosleutel+rivierenland";

const services = [
  ["01", "Autosleutel bijmaken", "Een extra autosleutel laten maken? Wij zorgen voor een passende sleutel die bij uw voertuig past.", "/diensten/autosleutel-bijmaken", "/real-photos/IMG_0701(1).jpeg", "Drie autosleutels van een Volkswagen bij het voertuig"],
  ["02", "Autosleutels kwijt", "Geen werkende sleutel meer? Wij beoordelen de mogelijkheden voor uw voertuig en helpen u weer op weg.", "/diensten/autosleutel-kwijt", "/real-photos/0c2c7b9b-2069-4b34-b03c-c597a20e3bf6.jpeg", "Autosleutel bij een Volkswagen Transporter tijdens mobiele service"],
  ["03", "Schadevrij openen", "Buitengesloten? Wij openen uw auto zo zorgvuldig mogelijk en proberen onnodige schade te voorkomen.", "/diensten/schadevrij-openen", "https://images.pexels.com/photos/17124737/pexels-photo-17124737.jpeg?auto=compress&cs=tinysrgb&w=1200", "Lishi lockpick in een autoslot tijdens zorgvuldig openen"],
  ["04", "Sleutelbehuizing vervangen", "Is uw sleutelbehuizing versleten of beschadigd? Voor geschikte sleutels kunnen wij de behuizing vervangen.", "/diensten/behuizingen-vervangen", "/real-photos/IMG_0713(1).jpeg", "Oude en nieuwe Volkswagen autosleutel naast elkaar"],
  ["05", "Auto uitlezen & diagnose", "Foutmelding of startprobleem? Voor geschikte voertuigen kunnen wij uitlezen en de oorzaak helpen bepalen.", "/diensten/diagnose-uitlezen", "/real-photos/IMG_0864(2).jpeg", "Audi-interieur met Autel diagnoseapparaat"],
  ["06", "Mercedes contactsloten vervangen", "Problemen met het contactslot van uw Mercedes? Wij onderzoeken de klacht en vervangen geschikte contactsloten.", "/mercedes-contactslot", "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz_Sprinter_cockpit.jpg?width=1280", "Mercedes-interieur met zichtbaar contactslot"],
];
const coreAreas = ["Tiel", "Culemborg", "Geldermalsen", "Buren", "Zaltbommel", "Leerdam", "Gorinchem", "Druten"];
const expansionAreas = ["Nijmegen", "Arnhem", "Den Bosch", "Utrecht"];
const structuredData = {"@context":"https://schema.org","@type":"Locksmith",name:"Autosleutel Rivierenland",url:"https://www.autosleutelrivierenland.nl",telephone:"+31648659279",email:"autosleutel.rivierenland@gmail.com",address:{"@type":"PostalAddress",addressLocality:"Tiel",addressRegion:"Gelderland",addressCountry:"NL"},areaServed:[...coreAreas,...expansionAreas].map(name=>({"@type":"City",name})),openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday"],opens:"12:00",closes:"20:00"},{"@type":"OpeningHoursSpecification",dayOfWeek:["Tuesday","Wednesday","Thursday","Saturday"],opens:"10:00",closes:"20:00"}]};
function PhoneIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 2.8 9.4 2l2.1 5.1-2.4 1.8c1.2 2.5 3.1 4.5 5.7 5.7l1.8-2.4 5.1 2.1-.8 2.8c-.4 1.5-1.8 2.5-3.4 2.4C10.2 18.8 5.2 13.8 4.5 7.7c-.2-1.6.7-3.1 2.1-3.7Z" fill="currentColor"/></svg>}
function WhatsAppIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.4 9.4 0 0 0-8.1 14.2L2.7 21.4l4.9-1.2A9.4 9.4 0 1 0 12 2.5Zm0 16.9a7.5 7.5 0 0 1-3.8-1l-.3-.2-2.9.7.8-2.8-.2-.3a7.5 7.5 0 1 1 6.4 3.6Zm4.1-5.6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4 0-.5.1-.2.2-.6.8-.7 1-.1.2-.3.2-.5.1-1.5-.8-2.5-1.5-3.5-3.1-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.6 1 2.8c.1.2 1.8 2.9 4.4 4 .6.3 1.1.4 1.5.5.6.2 1.2.1 1.7.1.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2-.1 0-.3-.1-.6-.2Z" fill="currentColor"/></svg>}
function Header(){return <header className="header"><div className="container nav-inner"><a className="logo-frame" href="#top" aria-label="Autosleutel Rivierenland home"><Image src="/logo.svg" alt="Autosleutel Rivierenland" width={220} height={89} priority unoptimized/></a><nav aria-label="Hoofdnavigatie"><a className="active" href="#top">Home</a><a href="#diensten">Diensten</a><a href="/mercedes-contactslot">Mercedes contactslot vervangen</a><a href="#zakelijk">Zakelijk</a><a href="#contact">Contact</a></nav><a className="nav-phone" href={tel}><b>☎</b><span>06 48 65 92 79</span></a></div></header>}
export default function Home(){return <main id="top"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/><Header/>
<section className="hero"><div className="container hero-inner"><div className="hero-copy"><div className="eyebrow">MOBIELE AUTOSLEUTELSERVICE UIT TIEL</div><h1>Autosleutel nodig?<br/><span>Wij helpen u verder.</span></h1><p className="hero-text">Autosleutel bijmaken, een verloren sleutel vervangen, programmeren of inleren, een sleutelbehuizing vervangen of uw auto zorgvuldig openen. Vanuit Tiel helpen wij klanten in Rivierenland en de omliggende regio.</p><div className="actions"><a className="btn primary" href={tel}><span className="btn-icon"><PhoneIcon/></span><span>Bel direct</span><b>06 48 65 92 79</b></a><a className="btn hero-secondary" href={whatsapp} target="_blank" rel="noreferrer"><span className="btn-icon whatsapp-icon"><WhatsAppIcon/></span><span>WhatsApp</span><b>Stuur een bericht →</b></a></div><div className="hero-trust"><span>✓ Mobiele service</span><span>✓ 1 jaar garantie op autosleutels</span><span>✓ Bel of WhatsApp voor mogelijkheden</span></div></div><div className="hero-image-wrap" aria-label="Echte autosleutelservice van Autosleutel Rivierenland"><Image className="hero-image" src="/real-photos/IMG_0865(2).jpeg" alt="Autosleutel van Volkswagen in het interieur van een auto" fill sizes="(max-width: 760px) 100vw, 55vw" priority /></div></div></section>
<section id="diensten" className="section services"><div className="container"><div className="section-head"><div><h2>Onze <em>diensten.</em></h2></div></div><div className="service-grid">{services.map(([n,title,text,href,image,alt],index)=><a href={href} className={`service service-${index+1}`} key={n}><img className="service-card-image" src={image} alt={alt} loading="lazy" width={900} height={360}/><span className="service-no">{n}</span><h3>{title}</h3><p>{text}</p><b className="service-arrow">→</b></a>)}</div></div></section>
<section className="region-home-section region-home-clean">
  <div className="container">
    <div className="region-clean-head">
      <div>
        <label>ONZE REGIO</label>
        <h2>Autosleutelservice in <em>Tiel en Rivierenland.</em></h2>
      </div>
      <p>Wij zijn gevestigd in Tiel en werken mobiel in de regio. Hieronder ziet u in één oogopslag waar wij actief zijn.</p>
    </div>
    <div className="region-clean-grid">
      <article className="region-clean-card region-clean-primary">
        <span className="region-card-no">01</span>
        <label>GEVESTIGD IN TIEL</label>
        <h3>Tiel</h3>
        <p>Wij zijn gevestigd in Tiel en werken mobiel in de regio.</p>
        <a href="/tiel">Autosleutelservice Tiel →</a>
      </article>
      <article className="region-clean-card">
        <span className="region-card-no">02</span>
        <label>RIVIERENLAND</label>
        <h3>Directe regio</h3>
        <p>Tiel, Culemborg, Geldermalsen, Buren, Zaltbommel, Leerdam, Gorinchem en Druten.</p>
        <span className="region-clean-note">Mobiele service op locatie</span>
      </article>
      <article className="region-clean-card">
        <span className="region-card-no">03</span>
        <label>RUIMER WERKGEBIED</label>
        <h3>Omliggende steden</h3>
        <p>Nijmegen, Arnhem, Den Bosch, Utrecht en plaatsen die daar tussenin liggen.</p>
        <span className="region-clean-note">Vooraf controleren wat mogelijk is</span>
      </article>
    </div>
    <div className="region-clean-bottom">
      <div><strong>Mobiele autosleutelservice</strong><span>Bel of WhatsApp ons met uw merk, model en bouwjaar.</span></div>
      <a className="btn primary region-button" href="/tiel">Bekijk onze regio →</a>
    </div>
  </div>
</section>
<section className="section local-areas">
  <div className="container">
    <div className="local-areas-head">
      <div><label>LOKAAL BESCHIKBAAR</label><h2>Autosleutelservice in <em>uw omgeving.</em></h2></div>
      <p>Vanuit Tiel werken wij mobiel in Rivierenland. Bekijk per plaats welke autosleutelservices we aanbieden en hoe u contact opneemt.</p>
    </div>
    <div className="local-area-grid">
      <a href="/tiel"><strong>Tiel</strong><span>Autosleutelservice vanuit Tiel</span><b>Bekijk Tiel →</b></a>
      <a href="/regio/culemborg"><strong>Culemborg</strong><span>Autosleutel bijmaken en mobiele service</span><b>Bekijk Culemborg →</b></a>
      <a href="/regio/geldermalsen"><strong>Geldermalsen</strong><span>Autosleutel bijmaken en programmeren</span><b>Bekijk Geldermalsen →</b></a>
      <a href="/regio/zaltbommel"><strong>Zaltbommel</strong><span>Autosleutel kwijt, bijmaken en openen</span><b>Bekijk Zaltbommel →</b></a>
      <a href="/regio/druten"><strong>Druten</strong><span>Mobiele autosleutelservice</span><b>Bekijk Druten →</b></a>
      <a href="/regio/buren"><strong>Buren</strong><span>Autosleutel bijmaken en sleutelproblemen</span><b>Bekijk Buren →</b></a>
      <a href="/regio/leerdam"><strong>Leerdam</strong><span>Autosleutel bijmaken en programmeren</span><b>Bekijk Leerdam →</b></a>
    </div>
  </div>
</section>
<section className="section capability"><div className="container capability-grid"><div><label>MERKEN &amp; MOGELIJKHEDEN</label><h2>Voor veel <em>gangbare automerken.</em></h2></div><div><p>De mogelijkheden verschillen per merk, model, bouwjaar en uitvoering. Daarom beoordelen wij vooraf wat er voor uw auto mogelijk is.</p><p className="excluded"><strong>Niet beschikbaar:</strong> Renault en Volvo.</p><p>Twijfelt u? Stuur ons het merk, model, bouwjaar en eventueel het kenteken.</p></div></div></section>
<section id="zakelijk" className="business"><div className="container business-box"><div><label>VOOR BEDRIJVEN</label><h2>Een praktische partner voor <em>uw werkplaats.</em></h2><p>Garages en autobedrijven kunnen bij ons terecht voor autosleutels, behuizingen, contactsloten en schadevrij openen. We kunnen ondersteunen wanneer u een sleutelprobleem niet zelf wilt of kunt uitvoeren. Zakelijke werkzaamheden kunnen op factuur worden afgehandeld.</p></div><a className="btn primary" href={whatsapp} target="_blank" rel="noreferrer">Bespreek uw aanvraag →</a></div></section>
<ReviewsCarousel />
<section id="contact" className="contact"><div className="container contact-box"><div><label>CONTACT</label><h2>Autosleutelprobleem? <em>Bel ons.</em></h2><p>Vertel ons kort wat er aan de hand is. Wij helpen u graag en kunnen vooraf beoordelen wat er nodig is.</p><div className="details"><a href={tel}><small>TELEFOON</small><strong>06 48 65 92 79</strong></a><a href="mailto:autosleutel.rivierenland@gmail.com"><small>E-MAIL</small><strong>autosleutel.rivierenland@gmail.com</strong></a></div><a className="review-link" href={googleReviews} target="_blank" rel="noreferrer">Bekijk onze beoordelingen op Google ↗</a></div><div className="contact-actions"><a className="btn primary large" href={tel}>Bel Autosleutel Rivierenland <b>→</b></a><a className="btn whatsapp large" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp ons <b>↗</b></a><p>maandag 12:00–20:00 · di–do 10:00–20:00 · vrijdag gesloten · zaterdag 10:00–20:00 · zondag gesloten</p></div></div></section>
<footer><div className="container footer-grid"><a className="logo-frame footer-logo" href="#top"><Image src="/logo.svg" alt="Autosleutel Rivierenland" width={220} height={89} unoptimized/></a><div><b>DIENSTEN</b><a href="/diensten/autosleutel-bijmaken">Autosleutel bijmaken</a><a href="/diensten/autosleutel-kwijt">Autosleutels kwijt</a><a href="/diensten/schadevrij-openen">Schadevrij openen</a><a href="/mercedes-contactslot">Mercedes contactsloten vervangen</a></div><div><b>CONTACT</b><a href="/tiel">Autosleutel Tiel</a><a href={tel}>06 48 65 92 79</a></div><div><b>BEDRIJF</b><span>Tiel · Service op locatie</span><a href="mailto:autosleutel.rivierenland@gmail.com">E-mail</a></div></div><div className="container footer-bottom"><span>© 2026 Autosleutel Rivierenland</span><span>KvK 94298033</span><span>BTW-plichtig</span></div></footer><a className="float-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp Autosleutel Rivierenland">WA</a></main>}
