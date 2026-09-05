import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mercedes contactslot vervangen | Autosleutel Rivierenland",
  description: "Mercedes contactslot vervangen bij geschikte modellen vanuit Tiel. Diagnose, vervanging en programmering voor voertuigen met het FBS3-systeem.",
  alternates: { canonical: "/mercedes-contactslot" },
};

const tel = "tel:+31648659279";
const whatsapp = "https://wa.me/31648659279?text=Hallo%20Autosleutel%20Rivierenland%2C%20ik%20heb%20een%20vraag%20over%20een%20Mercedes%20contactslot.";

const modelGroups = [
  ["A-Klasse", "W169 · 2004–2012", "W176 · 2012–2014"],
  ["B-Klasse", "W245 · 2005–2011", "W246 · 2011–2014"],
  ["C-Klasse", "W203 · 2000–2008", "W204 · 2007–2014"],
  ["CLA", "C117 · 2013–2014", ""],
  ["CLS", "C219 · 2004–2010", "C218 · 2010–2014"],
  ["E-Klasse", "W210 · 1996–2002", "W211 · 2002–2009 · W212 · 2010–2014"],
  ["GLK", "X204/W204 · 2008–2014", ""],
  ["M-Klasse", "W164 · 2005–2011", "W166 · 2011–2014"],
  ["S-Klasse", "W220 · 1998–2005", "W221 · 2005–2013"],
  ["SLK", "R171 · 2004–2011", "R172 · 2011–2014"],
  ["Sprinter", "W906 · 2006–2018", ""],
  ["Vito / Viano", "W639 · 2003–2014", ""],
];

export default function MercedesContactslotPage() {
  return <main className="special-page">
    <div className="announcement"><div className="container announce-inner"><span>Autosleutelservice vanuit Tiel</span><span>Ma–do 09:00–21:00 · vrijdag gesloten · za–zo 09:00–21:00</span></div></div>
    <header className="header"><div className="container nav-inner"><a className="logo-frame" href="/"><Image src="/logo.svg" alt="Autosleutel Rivierenland" width={220} height={89} priority /></a><nav aria-label="Hoofdnavigatie"><a href="/">Home</a><a href="/#diensten">Diensten</a><a href="/vag-sleutelprogrammering">VAG</a><a href="/mercedes-contactslot">Mercedes</a><a href="/#contact">Contact</a></nav><a className="nav-phone" href={tel}>Bel direct <span>06 48 65 92 79</span></a></div></header>

    <section className="special-hero"><div className="container special-hero-grid"><div><div className="eyebrow"><i></i> Specialistische Mercedes-service</div><h1>Mercedes contactslot <span>vervangen.</span></h1><p>Start uw Mercedes niet meer of werkt het contactslot niet goed? Bij geschikte modellen kunnen wij het probleem onderzoeken en het contactslot vervangen en programmeren.</p><div className="actions"><a className="btn primary" href={tel}>Bel direct <b>→</b></a><a className="btn ghost" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <b>↗</b></a></div></div><div className="mercedes-card"><div className="start-button">ENGINE<br/><strong>START</strong><br/>STOP</div><div className="key-fob">CONTACTSLOT</div><small>MERCEDES · STARTSYSTEEM</small></div></div></section>

    <section className="section mercedes-content"><div className="container two-col"><div><label>WAT KAN ER AAN DE HAND ZIJN?</label><h2>Wanneer uw Mercedes <em>niet wil starten.</em></h2></div><div><p>Een defect elektronisch contactslot kan ervoor zorgen dat het contact niet wordt vrijgegeven of dat de auto niet meer start. Ook een storing die af en toe optreedt verdient aandacht: het probleem kan erger worden en de auto uiteindelijk volledig stilzetten.</p><p>Wij beginnen daarom met een diagnose. Als het contactslot de oorzaak is en het voertuig binnen onze service valt, kunnen wij de vervanging en programmering verzorgen.</p></div></div></section>

    <section className="section symptom-section"><div className="container"><div className="section-head"><div><label>MOGELIJKE KLACHTEN</label><h2>Herkent u één van deze <em>problemen?</em></h2></div></div><div className="symptoms"><div><b>01</b><h3>Auto start niet</h3><p>De Mercedes reageert niet normaal bij het inschakelen van het contact of starten.</p></div><div><b>02</b><h3>Contactslot reageert niet</h3><p>Het contact wordt niet goed vrijgegeven of werkt wisselend.</p></div><div><b>03</b><h3>Probleem komt terug</h3><p>Een storing die eerst af en toe voorkomt kan uiteindelijk leiden tot volledige uitval.</p></div></div></div></section>

    <section className="section model-section"><div className="container"><label>GESCHIKTE MODELLEN</label><h2>Veelvoorkomende Mercedes-<em>modellen.</em></h2><p className="model-intro">Onderstaande bouwjaren zijn richtlijnen voor de systemen waarvoor deze service bedoeld is. Mercedes heeft rond sommige modelwisselingen verschillende systemen gebruikt. Daarom controleren wij het voertuig altijd vooraf.</p><div className="model-table">{modelGroups.map(([model, first, second]) => <div className="model-row" key={model}><strong>{model}</strong><span>{first}</span><span>{second}</span></div>)}</div><div className="model-note"><strong>Sprinter:</strong> W906 van 2006 t/m 2018 valt binnen de hier bedoelde generatie. Bij twijfel controleren wij het exacte voertuig voordat we een afspraak maken.</div></div></section>

    <section className="section mercedes-process"><div className="container"><label>ONZE WERKWIJZE</label><div className="process-line"><div><b>01</b><h3>Klacht bespreken</h3><p>We nemen de situatie, het model en het bouwjaar met u door.</p></div><div><b>02</b><h3>Diagnose</h3><p>We beoordelen het startsysteem en zoeken gericht naar de oorzaak.</p></div><div><b>03</b><h3>Contactslot vervangen</h3><p>Als het voertuig geschikt is, vervangen we het defecte onderdeel.</p></div><div><b>04</b><h3>Programmeren & testen</h3><p>Na de werkzaamheden controleren we het systeem en de startfunctie.</p></div></div></div></section>

    <section className="notice"><div className="container notice-box"><div><label>BELANGRIJK</label><h2>Deze service is voor FBS3-systemen.</h2><p>De bouwjaren hierboven zijn bedoeld als praktische indicatie. Het exacte systeem kan per voertuig verschillen. Nieuwe Mercedes-systemen van de FBS4-generatie vallen buiten deze service. Neem bij twijfel contact op met merk, model en bouwjaar.</p></div><a className="btn primary" href={tel}>Bespreek uw Mercedes <b>→</b></a></div></section>

    <section className="contact"><div className="container contact-box"><div><label>CONTACT</label><h2>Mercedes probleem? <em>Neem contact op.</em></h2><p>Autosleutel Rivierenland werkt vanuit Tiel en komt voor geschikte werkzaamheden op locatie.</p></div><div className="contact-actions"><a className="btn primary large" href={tel}>Bel 06 48 65 92 79 <b>→</b></a><a className="btn whatsapp large" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp ons <b>↗</b></a></div></div></section>

    <footer><div className="container footer-grid"><a className="logo-frame footer-logo" href="/"><Image src="/logo.svg" alt="Autosleutel Rivierenland" width={220} height={89}/></a><div><b>DIENSTEN</b><a href="/">Autosleutelservice</a><a href="/#diensten">Autosleutel kwijt</a><a href="/#diensten">Autosleutel bijmaken</a><a href="/mercedes-contactslot">Mercedes contactslot</a></div><div><b>SPECIALIST</b><a href="/vag-sleutelprogrammering">VAG sleutelprogrammering</a><a href="/tiel">Autosleutel Tiel</a><span>Service op locatie</span></div><div><b>CONTACT</b><a href={tel}>06 48 65 92 79</a><a href="mailto:autosleutel.rivierenland@gmail.com">E-mail</a><span>Tiel · Service op locatie</span></div></div><div className="container footer-bottom"><span>© 2026 Autosleutel Rivierenland</span><span>KvK 94298033</span><span>BTW-plichtig</span></div></footer>
  </main>;
}
