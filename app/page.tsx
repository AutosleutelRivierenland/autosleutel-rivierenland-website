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
  ["08", "Auto diagnose en VAG-codering", "Foutcodes uitlezen, storingen onderzoeken en beschikbare voertuigopties coderen.", "/diensten/vag-coderen", "/IMG_3004-diagnose%202.jpeg", "Xhorse Key Tool Max Pro bij het dashboard van een SEAT"],
  ["09", "Keyless & smart key", "Keyless en smart keys voor geschikte auto’s, inclusief programmering en inleren waar mogelijk.", "/diensten/keyless-smartkey", "/Smart%20key%202.jpeg", "Smart key bij een Audi tijdens het testen van de autosleutel"],
];
const structuredData = {"@context":"https://schema.org","@type":"WebPage","@id":"https://www.autosleutelrivierenland.nl/#webpage","url":"https://www.autosleutelrivierenland.nl","name":"Autosleutel Rivierenland | Autosleutel bijmaken in Tiel","description":"Autosleutelservice vanuit Tiel voor autosleutels bijmaken, verloren autosleutels, programmeren, sleutelbehuizingen en schadevrij openen.","primaryImageOfPage":"https://www.autosleutelrivierenland.nl/real-photos/IMG_0865(2).jpeg","about":{"@id":"https://www.autosleutelrivierenland.nl/#business"}}
function PhoneIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 2.8 9.4 2l2.1 5.1-2.4 1.8c1.2 2.5 3.1 4.5 5.7 5.7l1.8-2.4 5.1 2.1-.8 2.8c-.4 1.5-1.8 2.5-3.4 2.4C10.2 18.8 5.2 13.8 4.5 7.7c-.2-1.6.7-3.1 2.1-3.7Z" fill="currentColor"/></svg>}
function WhatsAppIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.4 9.4 0 0 0-8.1 14.2L2.7 21.4l4.9-1.2A9.4 9.4 0 1 0 12 2.5Zm0 16.9a7.5 7.5 0 0 1-3.8-1l-.3-.2-2.9.7.8-2.8-.2-.3a7.5 7.5 0 1 1 6.4 3.6Zm4.1-5.6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4 0-.5.1-.2.2-.6.8-.7 1-.1.2-.3.2-.5.1-1.5-.8-2.5-1.5-3.5-3.1-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.6 1 2.8c.1.2 1.8 2.9 4.4 4 .6.3 1.1.4 1.5.5.6.2 1.2.1 1.7.1.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2-.1 0-.3-.1-.6-.2Z" fill="currentColor"/></svg>}
function Header(){return null}
export default function Home(){return <main id="top"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/><Header/>
<section className="hero"><div className="container hero-inner"><div className="hero-copy"><div className="eyebrow">MOBIELE AUTOSLEUTELSERVICE UIT TIEL</div><h1>Autosleutel nodig?<br/><span>Wij helpen u verder.</span></h1><p className="hero-text">Autosleutel bijmaken, een verloren sleutel vervangen, programmeren of inleren, een sleutelbehuizing vervangen of uw auto zorgvuldig openen. Vanuit Tiel helpen wij klanten in Rivierenland en de omliggende regio. <strong>*De bewerkingstijd hangt af van voertuig en werkzaamheden.</strong></p><div className="actions"><a className="btn primary" href={tel}><span className="btn-icon"><PhoneIcon/></span><span>Bel direct</span><b>06 48 65 92 79</b></a><a className="btn hero-secondary" href={whatsapp} target="_blank" rel="noreferrer"><span className="btn-icon whatsapp-icon"><WhatsAppIcon/></span><span>WhatsApp</span><b>Stuur een bericht →</b></a></div><div className="hero-trust"><span>✓ Veel sleutels binnen 30–45 minuten klaar*</span><span>✓ Op locatie ingeleerd waar mogelijk</span><span>✓ 1 jaar garantie op autosleutels</span><span>✓ Dealerkwaliteit</span><span>✓ Bel of WhatsApp voor mogelijkheden</span></div></div><div className="hero-image-wrap" aria-label="Echte autosleutelservice van Autosleutel Rivierenland"><Image className="hero-image" src="/real-photos/IMG_0865(2).jpeg" alt="Autosleutel van Volkswagen in het interieur van een auto" fill sizes="(max-width: 760px) 100vw, 55vw" priority /></div></div></section>
<section className="section home-usps home-services">
  <div className="container">
    <div className="section-head"><div><label>ONZE DIENSTEN</label><h2>Waar kunnen we u <em>mee helpen?</em></h2></div></div>
    <div className="home-service-grid">
      <a href="/diensten/autosleutel-bijmaken"><span>Autosleutel bijmaken</span><b aria-hidden="true">↗</b></a>
      <a href="/diensten/autosleutel-kwijt"><span>Autosleutel kwijt</span><b aria-hidden="true">↗</b></a>
      <a href="/diensten/schadevrij-openen"><span>Auto schadevrij openen</span><b aria-hidden="true">↗</b></a>
      <a href="/diensten/behuizingen-vervangen"><span>Behuizing autosleutel vervangen</span><b aria-hidden="true">↗</b></a>
      <a href="/mercedes-contactslot"><span>Mercedes contactslot vervangen</span><b aria-hidden="true">↗</b></a>
      <a href="/diensten/vag-coderen"><span>Auto diagnose en coderen voor VAG-auto's</span><b aria-hidden="true">↗</b></a>
      <a href="/diensten/overige-slotenservice"><span>Overige slotenservice</span><b aria-hidden="true">↗</b></a>
    </div>
  </div>
</section>
<PricingAndBrands />
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


<ReviewsCarousel />
<section id="contact" className="contact"><div className="container contact-box"><div><label>CONTACT</label><h2>Autosleutelprobleem? <em>Bel ons.</em></h2><p>Vertel ons kort wat er aan de hand is. Wij helpen u graag en kunnen vooraf beoordelen wat er nodig is.</p><div className="details"><a href={tel}><small><span aria-hidden="true">☎</span> BELLEN</small><strong>06 48 65 92 79</strong></a><a href={whatsapp} target="_blank" rel="noreferrer"><small><span aria-hidden="true">◉</span> WHATSAPP</small><strong>Stuur een bericht</strong></a><a href="mailto:autosleutel.rivierenland@gmail.com"><small><span aria-hidden="true">✉</span> E-MAIL</small><strong>Stuur een e-mail</strong></a></div><a className="review-link" href={googleReviews} target="_blank" rel="noreferrer">Bekijk onze beoordelingen op Google ↗</a></div><div className="contact-actions"><a className="btn primary large" href={tel}>Bel Autosleutel Rivierenland <b>→</b></a><a className="btn whatsapp large" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp ons <b>↗</b></a><div className="opening-hours"><div className="opening-hours-title"><span aria-hidden="true">◷</span><strong>Openingstijden</strong></div><dl><div><dt>Maandag</dt><dd>12:00–20:00</dd></div><div><dt>Dinsdag</dt><dd>10:00–20:00</dd></div><div><dt>Woensdag</dt><dd>10:00–20:00</dd></div><div><dt>Donderdag</dt><dd>10:00–20:00</dd></div><div><dt>Vrijdag</dt><dd>Gesloten</dd></div><div><dt>Zaterdag</dt><dd>10:00–20:00</dd></div><div><dt>Zondag</dt><dd>Gesloten</dd></div></dl><p>Bel of WhatsApp voor een afspraak.</p><p className="opening-address"><strong>Bezoekadres</strong><br/>Latensteinse Rondweg 2-109, Tiel</p><p className="appointment-only">Uitsluitend op afspraak. Langskomen kan alleen na bevestiging.</p></div></div></div></section>
<ContactForm />
<a className="float-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp Autosleutel Rivierenland">WA</a></main>}
