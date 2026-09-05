import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mercedes contactslot vervangen | Autosleutel Rivierenland",
  description: "Mercedes start niet meer? Autosleutel Rivierenland helpt bij het beoordelen en vervangen van contactsloten bij geschikte Mercedes-modellen, vanuit Tiel en op locatie.",
  alternates: { canonical: "/mercedes-contactslot" },
};

const tel = "tel:+31648659279";
const whatsapp = "https://wa.me/31648659279?text=Hallo%20Autosleutel%20Rivierenland%2C%20mijn%20Mercedes%20start%20niet%20meer%20en%20ik%20wil%20het%20contactslot%20laten%20beoordelen.";

export default function MercedesContactslotPage() {
  return <main className="special-page">
    <div className="announcement"><div className="container announce-inner"><span>Autosleutelservice vanuit Tiel</span><span>Ma–do 09:00–21:00 · vrijdag gesloten · za–zo 09:00–21:00</span></div></div>
    <header className="header"><div className="container nav-inner"><a className="logo-frame" href="/"><Image src="/logo.svg" alt="Autosleutel Rivierenland" width={174} height={70} priority /></a><nav aria-label="Hoofdnavigatie"><a href="/">Home</a><a href="/#diensten">Diensten</a><a href="/#werkgebied">Werkgebied</a><a href="/mercedes-contactslot">Mercedes</a><a href="/#contact">Contact</a></nav><a className="nav-phone" href={tel}>Bel direct <span>06 48 65 92 79</span></a></div></header>

    <section className="special-hero"><div className="container special-hero-grid"><div><div className="eyebrow"><i></i> Mercedes specialistische service</div><h1>Mercedes start niet meer?<br/><span>Laat het contactslot beoordelen.</span></h1><p>Een defect contactslot kan ervoor zorgen dat een Mercedes niet meer start of dat het contact niet goed wordt vrijgegeven. Wij beoordelen de klacht en verzorgen bij geschikte modellen de vervanging en programmering van het contactslot.</p><div className="actions"><a className="btn primary" href={tel}>Bel direct <b>→</b></a><a className="btn ghost" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <b>↗</b></a></div></div><div className="mercedes-card"><div className="start-button">ENGINE<br/><strong>START</strong><br/>STOP</div><div className="key-fob">MERCEDES</div><small>CONTACTSLOT · STARTSYSTEEM</small></div></div></section>

    <section className="section mercedes-content"><div className="container two-col"><div><label>VEELVOORKOMEND PROBLEEM</label><h2>Wanneer uw Mercedes <em>niet wil starten.</em></h2></div><div><p>Bij bepaalde Mercedes-modellen kan een probleem met het elektronische contactslot of startsysteem leiden tot startproblemen. De symptomen kunnen verschillen: het contact reageert niet zoals verwacht, de auto geeft geen vrijgave of starten lukt helemaal niet.</p><p>Een goede diagnose is daarom belangrijk. Eerst beoordelen we de situatie en het voertuig. Daarna bespreken we welke reparatie of vervanging mogelijk is.</p></div></div></section>

    <section className="section symptom-section"><div className="container"><div className="section-head"><div><label>MOGELIJKE SIGNALEN</label><h2>Herkent u één van deze <em>klachten?</em></h2></div></div><div className="symptoms"><div><b>01</b><h3>Mercedes start niet</h3><p>De auto reageert niet zoals u gewend bent bij het starten.</p></div><div><b>02</b><h3>Contact komt niet goed vrij</h3><p>Het contact of startsysteem werkt niet zoals verwacht.</p></div><div><b>03</b><h3>Elektronische storing</h3><p>Er zijn aanwijzingen voor een probleem in het sleutel- of startsysteem.</p></div></div></div></section>

    <section className="section mercedes-process"><div className="container"><label>ONZE WERKWIJZE</label><div className="process-line"><div><b>01</b><h3>Klacht bespreken</h3><p>We nemen de situatie en voertuiggegevens met u door.</p></div><div><b>02</b><h3>Diagnose</h3><p>We beoordelen het startsysteem en de mogelijke oorzaak.</p></div><div><b>03</b><h3>Vervanging</h3><p>Bij geschikte modellen kunnen we het contactslot vervangen.</p></div><div><b>04</b><h3>Programmeren & testen</h3><p>Na werkzaamheden wordt het systeem gecontroleerd.</p></div></div></div></section>

    <section className="notice"><div className="container notice-box"><div><label>BELANGRIJK</label><h2>Niet iedere Mercedes is hetzelfde.</h2><p>Wij behandelen veel automerken, maar niet alle modellen en systemen vallen binnen onze dienstverlening. Nieuwe Mercedes-modellen met FBS4 vallen niet onder onze service. Neem bij twijfel contact op met merk, model en bouwjaar; dan kunnen we vooraf beoordelen of we u kunnen helpen.</p></div><a className="btn primary" href={tel}>Bespreek uw Mercedes <b>→</b></a></div></section>

    <section className="contact"><div className="container contact-box"><div><label>CONTACT</label><h2>Mercedes probleem? <em>Neem contact op.</em></h2><p>Autosleutel Rivierenland werkt vanuit Tiel en komt voor geschikte werkzaamheden op locatie.</p></div><div className="contact-actions"><a className="btn primary large" href={tel}>Bel 06 48 65 92 79 <b>→</b></a><a className="btn whatsapp large" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp ons <b>↗</b></a></div></div></section>

    <footer><div className="container footer-grid"><a className="logo-frame footer-logo" href="/"><Image src="/logo.svg" alt="Autosleutel Rivierenland" width={174} height={70}/></a><div><b>DIENSTEN</b><a href="/">Autosleutelservice</a><a href="/#diensten">Autosleutel kwijt</a><a href="/#diensten">Autosleutel bijmaken</a><a href="/mercedes-contactslot">Mercedes contactslot</a></div><div><b>CONTACT</b><a href={tel}>06 48 65 92 79</a><a href="mailto:autosleutel.rivierenland@gmail.com">E-mail</a><span>Tiel · Service op locatie</span></div></div><div className="container footer-bottom"><span>© 2026 Autosleutel Rivierenland</span><span>KvK 94298033</span><span>BTW-plichtig</span></div></footer>
  </main>;
}
