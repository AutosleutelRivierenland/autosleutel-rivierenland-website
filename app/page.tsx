import Image from "next/image";
import ReviewsCarousel from "./ReviewsCarousel";
import PricingAndBrands from "./PricingAndBrands";
import ContactForm from "./ContactForm";

const tel = "tel:+31648659279";
const whatsapp = "https://wa.me/31648659279?text=Hallo%20Autosleutel%20Rivierenland%2C%20ik%20heb%20hulp%20nodig%20met%20mijn%20autosleutel.";
const googleReviews = "https://www.google.com/search?q=autosleutel+rivierenland";

const services = [
  ["01", "Autosleutel bijmaken", "Een extra autosleutel laten maken? Wij zorgen voor een passende sleutel die bij uw voertuig past.", "/diensten/autosleutel-bijmaken", "/real-photos/IMG_0701(1).jpeg", "Drie autosleutels van een Volkswagen bij het voertuig"],
  ["02", "Autosleutels kwijt", "Geen werkende sleutel meer? Wij beoordelen de mogelijkheden voor uw voertuig en helpen u weer op weg.", "/diensten/autosleutel-kwijt", "/real-photos/0c2c7b9b-2069-4b34-b03c-c597a20e3bf6.jpeg", "Autosleutel bij een Volkswagen Transporter tijdens mobiele service"],
  ["03", "Schadevrij openen", "Buitengesloten? Wij openen uw auto zo zorgvuldig mogelijk en proberen onnodige schade te voorkomen.", "/diensten/schadevrij-openen", "https://images.pexels.com/photos/17124737/pexels-photo-17124737.jpeg?auto=compress&cs=tinysrgb&w=1200", "Lishi lockpick in een autoslot tijdens zorgvuldig openen"],
  ["04", "Sleutelbehuizing vervangen", "Is uw sleutelbehuizing versleten of beschadigd? Voor geschikte sleutels kunnen wij de behuizing vervangen.", "/diensten/behuizingen-vervangen", "/real-photos/IMG_0713(1).jpeg", "Oude en nieuwe Volkswagen autosleutel naast elkaar"],
  ["05", "Foutcodes uitlezen en wissen", "Foutmelding of startprobleem? Voor geschikte voertuigen lezen we foutcodes uit en wissen we codes waar dat passend en veilig is.", "/diensten/diagnose-uitlezen", "/real-photos/IMG_0864(2).jpeg", "Audi-interieur met Autel diagnoseapparaat"],
  ["06", "Mercedes contactsloten vervangen", "Problemen met het contactslot van uw Mercedes? Wij onderzoeken de klacht en vervangen geschikte contactsloten.", "/mercedes-contactslot", "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz_Sprinter_cockpit.jpg?width=1280", "Mercedes-interieur met zichtbaar contactslot"],
  ["07", "Keyless & smart keys", "Smart keys en keyless sleutels voor geschikte auto's, inclusief programmering waar mogelijk.", "/diensten/keyless-smartkey", "/real-photos/IMG_0701(1).jpeg", "Autosleutels voor verschillende voertuigen"],
  ["08", "VAG opties coderen", "Opties vrijschakelen en coderen voor geschikte Volkswagen-, Audi-, SEAT-, CUPRA- en Škoda-modellen.", "/diensten/vag-coderen", "/real-photos/IMG_0864(2).jpeg", "Diagnoseapparaat in auto-interieur"],
  ["09", "Contactslot vervangen", "Contactslotservice voor geschikte voertuigen, met vooraf besproken mogelijkheden.", "/diensten/contactslot-vervangen", "https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercedes_E_240_Avantgarde_W211_%282002-2009%3B_hier_2003%29_Cockpit_MJ.JPG", "Interieur met contactslot"],
];
const structuredData = {"@context":"https://schema.org","@type":"WebPage","@id":"https://www.autosleutelrivierenland.nl/#webpage","url":"https://www.autosleutelrivierenland.nl","name":"Autosleutel Rivierenland | Autosleutel bijmaken in Tiel","description":"Autosleutelservice vanuit Tiel voor autosleutels bijmaken, verloren autosleutels, programmeren, sleutelbehuizingen en schadevrij openen.","primaryImageOfPage":"https://www.autosleutelrivierenland.nl/real-photos/IMG_0865(2).jpeg","about":{"@id":"https://www.autosleutelrivierenland.nl/#business"}}
function PhoneIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 2.8 9.4 2l2.1 5.1-2.4 1.8c1.2 2.5 3.1 4.5 5.7 5.7l1.8-2.4 5.1 2.1-.8 2.8c-.4 1.5-1.8 2.5-3.4 2.4C10.2 18.8 5.2 13.8 4.5 7.7c-.2-1.6.7-3.1 2.1-3.7Z" fill="currentColor"/></svg>}
function WhatsAppIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.4 9.4 0 0 0-8.1 14.2L2.7 21.4l4.9-1.2A9.4 9.4 0 1 0 12 2.5Zm0 16.9a7.5 7.5 0 0 1-3.8-1l-.3-.2-2.9.7.8-2.8-.2-.3a7.5 7.5 0 1 1 6.4 3.6Zm4.1-5.6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4 0-.5.1-.2.2-.6.8-.7 1-.1.2-.3.2-.5.1-1.5-.8-2.5-1.5-3.5-3.1-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.6 1 2.8c.1.2 1.8 2.9 4.4 4 .6.3 1.1.4 1.5.5.6.2 1.2.1 1.7.1.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2-.1 0-.3-.1-.6-.2Z" fill="currentColor"/></svg>}
function Header(){return <header className="header"><div className="container nav-inner"><a className="logo-frame" href="#top" aria-label="Autosleutel Rivierenland"><Image src="/logo-header.svg" alt="Autosleutel Rivierenland" width={245} height={90} priority unoptimized/></a><nav aria-label="Hoofdnavigatie"><a className="active" href="/diensten/autosleutel-bijmaken">Autosleutel bijmaken</a><a href="/mercedes-contactslot">Mercedes contactslot vervangen</a><a href="#prijzen">Prijzen</a><a href="#contact">Contact</a></nav><a className="nav-phone" href={tel}><b>☎</b><span>06 48 65 92 79</span></a></div></header>}
export default function Home(){return <main id="top"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/><Header/>
<section className="hero"><div className="container hero-inner"><div className="hero-copy"><div className="eyebrow">MOBIELE AUTOSLEUTELSERVICE UIT TIEL</div><h1>Autosleutel nodig?<br/><span>Wij helpen u verder.</span></h1><p className="hero-text">Autosleutel bijmaken, een verloren sleutel vervangen, programmeren of inleren, een sleutelbehuizing vervangen of uw auto zorgvuldig openen. Vanuit Tiel helpen wij klanten in Rivierenland en de omliggende regio. <strong>*De bewerkingstijd hangt af van voertuig en werkzaamheden.</strong></p><div className="actions"><a className="btn primary" href={tel}><span className="btn-icon"><PhoneIcon/></span><span>Bel direct</span><b>06 48 65 92 79</b></a><a className="btn hero-secondary" href={whatsapp} target="_blank" rel="noreferrer"><span className="btn-icon whatsapp-icon"><WhatsAppIcon/></span><span>WhatsApp</span><b>Stuur een bericht →</b></a></div><div className="hero-trust"><span>✓ Veel sleutels binnen 30–45 minuten klaar*</span><span>✓ Op locatie ingeleerd waar mogelijk</span><span>✓ 1 jaar garantie op autosleutels</span><span>✓ Dealerkwaliteit</span><span>✓ Bel of WhatsApp voor mogelijkheden</span></div></div><div className="hero-image-wrap" aria-label="Echte autosleutelservice van Autosleutel Rivierenland"><Image className="hero-image" src="/real-photos/IMG_0865(2).jpeg" alt="Autosleutel van Volkswagen in het interieur van een auto" fill sizes="(max-width: 760px) 100vw, 55vw" priority /></div></div></section>
<section className="section home-usps"><div className="container"><div className="section-head"><div><label>WAAROM AUTOSLEUTEL RIVIERENLAND</label><h2>Autosleutel bijmaken. <em>Snel, zorgvuldig en duidelijk.</em></h2></div></div><div className="usp-grid"><article><span>◷</span><h3>Vaak snel geregeld</h3><p>Veel sleutels zijn binnen 30–45 minuten klaar, afhankelijk van voertuig en werkzaamheden.</p></article><article><span>⌖</span><h3>Mobiele service</h3><p>Op locatie helpen waar dat technisch mogelijk en praktisch haalbaar is.</p></article><article><span>✓</span><h3>Prijs vooraf duidelijk</h3><p>We controleren merk, model, bouwjaar en sleuteltype voordat we de totaalprijs bevestigen.</p></article><article><span>♧</span><h3>1 jaar garantie</h3><p>Garantie op autosleutels volgens de voorwaarden en passend bij de uitgevoerde werkzaamheden.</p></article></div><div className="key-type-grid"><article><span className="key-type-icon">▰</span><h3>Transpondersleutel</h3><p>Een sleutel zonder afstandsbediening.</p><b>Vanaf € 79,95</b></article><article><span className="key-type-icon">⌁</span><h3>Klapsleutel</h3><p>Een compacte autosleutel met afstandsbediening, afhankelijk van uw voertuig.</p><b>Vanaf € 139,95</b></article><article><span className="key-type-icon">⌑</span><h3>Smart key</h3><p>Keyless toegang en starten voor geschikte auto's.</p><b>Vanaf € 184,95</b></article></div><a className="home-main-link" href="/diensten/autosleutel-bijmaken">Bekijk autosleutel bijmaken <span>→</span></a></div></section>
<PricingAndBrands />
<section className="region-home-section region-home-clean">
  <div className="container">
    <div className="region-clean-head">
      <div>
        <label>ONZE REGIO</label>
        <h2>Gevestigd in Tiel. <em>Mobiele service in Rivierenland.</em></h2>
      </div>
      <p>Wij werken vanuit Tiel en komen voor geschikte autosleutelwerkzaamheden naar klanten in de regio. Bekijk hieronder onze belangrijkste plaatsen.</p>
    </div>
    <div className="region-clean-bottom">
      <div><strong>Tiel · Culemborg · Geldermalsen · Buren · Zaltbommel · Leerdam · Gorinchem · Druten</strong><span>Ook actief in de omliggende regio. Bel of WhatsApp met uw merk, model en bouwjaar.</span></div>
      <a className="btn primary region-button" href="/tiel">Autosleutel Tiel →</a>
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
    <div className="local-more-links" aria-label="Meer servicegebieden">
      <span>Ook in:</span>
      <a href="/regio/ede">Ede</a><a href="/regio/veenendaal">Veenendaal</a><a href="/regio/rhenen">Rhenen</a>
      <a href="/regio/nijmegen">Nijmegen</a><a href="/regio/utrecht">Utrecht</a><a href="/regio/nieuwegein">Nieuwegein</a>
      <a href="/regio/houten">Houten</a><a href="/regio/den-bosch">Den Bosch</a><a href="/regio/gorinchem">Gorinchem</a>
    </div>
  </div>
</section>
<section className="section capability"><div className="container capability-grid"><div><label>MERKEN &amp; MOGELIJKHEDEN</label><h2>Voor veel <em>gangbare automerken.</em></h2></div><div><p>De mogelijkheden verschillen per merk, model, bouwjaar en uitvoering. Daarom beoordelen wij vooraf wat er voor uw auto mogelijk is.</p><p className="excluded"><strong>Compatibiliteit:</strong> we beoordelen de mogelijkheden per merk, model, bouwjaar en sleuteltype.</p><p>Twijfelt u? Stuur ons het merk, model, bouwjaar en eventueel het kenteken.</p></div></div></section>

<ReviewsCarousel />
<section id="contact" className="contact"><div className="container contact-box"><div><label>CONTACT</label><h2>Autosleutelprobleem? <em>Bel ons.</em></h2><p>Vertel ons kort wat er aan de hand is. Wij helpen u graag en kunnen vooraf beoordelen wat er nodig is.</p><div className="details"><a href={tel}><small><span aria-hidden="true">☎</span> BELLEN</small><strong>06 48 65 92 79</strong></a><a href={whatsapp} target="_blank" rel="noreferrer"><small><span aria-hidden="true">◉</span> WHATSAPP</small><strong>Stuur een bericht</strong></a><a href="mailto:autosleutel.rivierenland@gmail.com"><small><span aria-hidden="true">✉</span> E-MAIL</small><strong>Stuur een e-mail</strong></a></div><a className="review-link" href={googleReviews} target="_blank" rel="noreferrer">Bekijk onze beoordelingen op Google ↗</a></div><div className="contact-actions"><a className="btn primary large" href={tel}>Bel Autosleutel Rivierenland <b>→</b></a><a className="btn whatsapp large" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp ons <b>↗</b></a><div className="opening-hours"><div className="opening-hours-title"><span aria-hidden="true">◷</span><strong>Openingstijden</strong></div><dl><div><dt>Maandag</dt><dd>12:00–20:00</dd></div><div><dt>Dinsdag</dt><dd>10:00–20:00</dd></div><div><dt>Woensdag</dt><dd>10:00–20:00</dd></div><div><dt>Donderdag</dt><dd>10:00–20:00</dd></div><div><dt>Vrijdag</dt><dd>Gesloten</dd></div><div><dt>Zaterdag</dt><dd>10:00–20:00</dd></div><div><dt>Zondag</dt><dd>Gesloten</dd></div></dl><p>Bel of WhatsApp voor een afspraak.</p></div></div></div></section>
<ContactForm />
<footer><div className="container footer-grid"><a className="logo-frame footer-logo" href="#top"><Image src="/logo-header.svg" alt="Autosleutel Rivierenland" width={245} height={90} unoptimized/></a><div><b>DIENSTEN</b><a href="/diensten/autosleutel-bijmaken">Autosleutel bijmaken</a><a href="/diensten/autosleutel-kwijt">Autosleutels kwijt</a><a href="/diensten/schadevrij-openen">Schadevrij openen</a><a href="/mercedes-contactslot">Mercedes contactsloten vervangen</a></div><div><b>CONTACT</b><a href="/tiel">Autosleutel Tiel</a><a href={tel}>06 48 65 92 79</a></div><div><b>BEDRIJF</b><span>Tiel · Service op locatie</span><a href="mailto:autosleutel.rivierenland@gmail.com">E-mail</a></div></div><div className="container footer-bottom"><span>© 2026 Autosleutel Rivierenland</span><span>KvK 94298033</span><span>BTW-plichtig</span></div></footer><a className="float-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp Autosleutel Rivierenland">WA</a></main>}
