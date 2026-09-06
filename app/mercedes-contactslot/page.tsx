import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mercedes contactslot vervangen | Autosleutel Rivierenland",
  description: "Mercedes contactslot vervangen vanuit Tiel. Diagnose, vervanging en controle voor geschikte Mercedes-modellen met FBS3 contactslot-systemen.",
  alternates: { canonical: "/mercedes-contactslot" },
};

const tel="tel:+31648659279";
const whatsapp="https://wa.me/31648659279?text=Hallo%20Autosleutel%20Rivierenland%2C%20ik%20heb%20een%20vraag%20over%20een%20Mercedes%20contactslot.";
const carPhoto="https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercedes_E_240_Avantgarde_W211_%282002-2009%3B_hier_2003%29_Cockpit_MJ.JPG";

type ModelGroup = [string, [string, string][]];

const modelGroups: ModelGroup[] = [
  ["A-Klasse", [["W169","2004–2012"],["W176","2012–2014"]]],
  ["B-Klasse", [["W245","2005–2011"],["W246","2011–2014"]]],
  ["C-Klasse", [["W203","2000–2008"],["W204","2007–2014"]]],
  ["CLA", [["C117","2013–2014"]]],
  ["CLS", [["C219","2004–2010"],["C218","2010–2014"]]],
  ["E-Klasse", [["W210","1996–2002"],["W211","2002–2009"],["W212","2010–2014"]]],
  ["GLK", [["X204 / W204","2008–2014"]]],
  ["M-Klasse", [["W164","2005–2011"],["W166","2011–2014"]]],
  ["S-Klasse", [["W220","1998–2005"],["W221","2005–2013"]]],
  ["SLK", [["R171","2004–2011"],["R172","2011–2014"]]],
  ["Sprinter", [["W906","2006–2018"]]],
  ["Vito / Viano", [["W639","2003–2014"]]],
];

export default function MercedesContactslotPage(){return <main>
 <header className="header"><div className="container nav-inner"><a className="logo-frame" href="/"><img src="/logo.svg" alt="Autosleutel Rivierenland" width={220} height={89}/></a><nav aria-label="Hoofdnavigatie"><a href="/">Home</a><a href="/#diensten">Diensten</a><a href="/mercedes-contactslot">Mercedes contactslot vervangen</a><a href="/#zakelijk">Zakelijk</a><a href="/#contact">Contact</a></nav><a className="nav-phone" href={tel}><span>06 48 65 92 79</span></a></div></header>

 <section className="special-hero"><div className="container special-hero-grid"><div><div className="eyebrow"><i/> Mercedes contactslot</div><h1>Mercedes contactslot <span>vervangen.</span></h1><p>Werkt het contactslot van uw Mercedes niet goed of start de auto niet meer? Wij onderzoeken de klacht en vervangen geschikte contactsloten wanneer het voertuig binnen onze service valt.</p><div className="actions"><a className="btn primary" href={tel}>Bel direct <b>→</b></a><a className="btn ghost" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <b>↗</b></a></div></div><div className="mercedes-photo"><img src={carPhoto} alt="Mercedes E-Klasse W211 cockpit met zichtbaar contactslot en sleutel"/></div></div></section>

 <section className="section mercedes-content"><div className="container two-col"><div><label>CONTACTSLOT PROBLEEM</label><h2>Wanneer uw Mercedes <em>niet wil starten.</em></h2></div><div><p>Een defect contactslot kan ervoor zorgen dat het contact niet wordt vrijgegeven of dat de auto niet meer start. Ook een storing die af en toe optreedt kan uiteindelijk tot volledige uitval leiden.</p><p>Wij beginnen daarom met een beoordeling van de klacht en het voertuig. Als het contactslot de oorzaak is en de auto binnen onze service valt, kunnen wij het contactslot vervangen en de werkzaamheden afronden met een controle.</p></div></div></section>

 <section className="section symptom-section"><div className="container"><div className="section-head"><div><label>MOGELIJKE KLACHTEN</label><h2>Herkent u één van deze <em>problemen?</em></h2></div></div><div className="symptoms"><div><b>01</b><h3>Auto start niet</h3><p>De Mercedes reageert niet normaal bij het inschakelen van het contact of starten.</p></div><div><b>02</b><h3>Contactslot reageert niet</h3><p>Het contact wordt niet goed vrijgegeven of werkt wisselend.</p></div><div><b>03</b><h3>Storing komt terug</h3><p>Een probleem dat eerst af en toe voorkomt kan uiteindelijk leiden tot volledige uitval.</p></div></div></div></section>

 <section className="section model-section"><div className="container"><label>GESCHIKTE MODELLEN</label><h2>Veelvoorkomende Mercedes-<em>modellen.</em></h2><p className="model-intro">Onderstaande bouwjaren zijn praktische richtlijnen. Mercedes gebruikte rond sommige modelwisselingen verschillende systemen. Daarom controleren wij het voertuig vooraf.</p><div className="model-table">{modelGroups.map(([model,variants])=><div className="model-row" key={model}><strong>{model}</strong><div className="model-variants">{variants.map(([type,years])=><div className="model-variant" key={type}><span>{type}</span><span>{years}</span></div>)}</div></div>)}</div></div></section>

 <section className="notice"><div className="container notice-box"><div><label>BELANGRIJK</label><h2>Deze service is gericht op FBS3-systemen.</h2><p>De bouwjaren hierboven zijn een indicatie. Het exacte systeem kan per voertuig verschillen. Nieuwe Mercedes-systemen van de FBS4-generatie vallen buiten deze service. Neem bij twijfel contact op met merk, model en bouwjaar.</p></div><a className="btn primary" href={tel}>Bespreek uw Mercedes <b>→</b></a></div></section>

 <section className="contact"><div className="container contact-box"><div><label>CONTACT</label><h2>Mercedes probleem? <em>Neem contact op.</em></h2><p>Autosleutel Rivierenland werkt vanuit Tiel en komt voor geschikte werkzaamheden op locatie.</p></div><div className="contact-actions"><a className="btn primary large" href={tel}>Bel 06 48 65 92 79 <b>→</b></a><a className="btn whatsapp large" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp ons <b>↗</b></a></div></div></section>

 <footer><div className="container footer-grid"><a className="logo-frame footer-logo" href="/"><img src="/logo.svg" alt="Autosleutel Rivierenland" width={220} height={89}/></a><div><b>DIENSTEN</b><a href="/">Autosleutel bijmaken</a><a href="/">Autosleutels kwijt</a><a href="/">Behuizingen vervangen</a><a href="/">Schadevrij openen</a></div><div><b>CONTACT</b><a href="/mercedes-contactslot">Mercedes contactslot vervangen</a><a href="/tiel">Autosleutel Tiel</a></div><div><b>TELEFOON</b><a href={tel}>06 48 65 92 79</a><a href="mailto:autosleutel.rivierenland@gmail.com">E-mail</a></div></div></footer>
 </main>}
