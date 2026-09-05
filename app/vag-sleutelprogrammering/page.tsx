import Image from "next/image";

const tel = "tel:+31648659279";
const whatsapp = "https://wa.me/31648659279?text=Hallo%20Autosleutel%20Rivierenland%2C%20ik%20heb%20een%20vraag%20over%20VAG%20sleutelprogrammering.";

const models = [
  ["Volkswagen", "Golf, Polo, Passat, Tiguan, Touran en andere geschikte modellen."],
  ["Audi", "A3, S3, Q2 en andere geschikte VAG-modellen, afhankelijk van systeem en uitvoering."],
  ["SEAT", "Leon, Ibiza, Ateca en andere geschikte modellen."],
  ["Škoda", "Octavia, Superb, Kodiaq en andere geschikte modellen."],
];

export const metadata = {
  title: "VAG sleutelprogrammering | Volkswagen Audi SEAT Škoda",
  description: "Gespecialiseerde VAG sleutelprogrammering vanuit Tiel. Autosleutels programmeren voor geschikte Volkswagen, Audi, SEAT en Škoda modellen.",
};

export default function VagPage() {
  return (
    <main>
      <header className="header"><div className="container nav-inner"><a className="logo-frame" href="/"><Image src="/logo.svg" alt="Autosleutel Rivierenland" width={220} height={89} priority /></a><nav aria-label="Hoofdnavigatie"><a href="/">Home</a><a href="/#diensten">Diensten</a><a href="/tiel">Tiel</a><a href="/mercedes-contactslot">Mercedes</a><a href="/#contact">Contact</a></nav><a className="nav-phone" href={tel}>Bel direct <span>06 48 65 92 79</span></a></div></header>

      <section className="special-hero vag-hero"><div className="container special-hero-grid"><div><div className="eyebrow"><i /> Gespecialiseerd in VAG</div><h1>VAG <span>sleutelprogrammering.</span></h1><p>Wij hebben veel ervaring met het programmeren van autosleutels voor Volkswagen, Audi, SEAT en Škoda. Vooral bij moderne VAG-systemen is een juiste sleutel, voorbereiding en programmering belangrijk.</p><div className="actions"><a className="btn primary" href={tel}>Bel voor overleg <b>→</b></a><a className="btn ghost" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <b>↗</b></a></div></div><div className="hero-image-wrap"><Image className="hero-image" src="/ai-workbench.svg" alt="Professionele apparatuur voor autosleutelprogrammering" width={640} height={427} priority /><div className="image-badge"><strong>VAG sleutelwerk</strong><span>Programmeren · voorbereiden · testen</span></div></div></div></section>

      <section className="section"><div className="container"><div className="detail-intro"><label>VAG SPECIALISME</label><h2>Gericht werken aan <em>VAG-sleutels.</em></h2><p>Van een extra sleutel tot het programmeren van een nieuwe sleutel: we beoordelen eerst het exacte voertuig en het aanwezige systeem.</p></div><div className="vag-model-grid">{models.map(([name,text]) => <article key={name}><span>VAG</span><h3>{name}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="section vag-process"><div className="container"><label>WERKWIJZE</label><h2>Niet gokken. Eerst <em>het systeem bepalen.</em></h2><div className="process-cards"><div><b>01</b><h3>Voertuiggegevens</h3><p>We bekijken merk, model, bouwjaar en de uitvoering van het voertuig.</p></div><div><b>02</b><h3>Sleutel controleren</h3><p>De sleutel en het gebruikte immobilisersysteem bepalen welke route geschikt is.</p></div><div><b>03</b><h3>Programmeren</h3><p>Met professionele apparatuur wordt de sleutel voorbereid en waar mogelijk aan het voertuig geleerd.</p></div><div><b>04</b><h3>Controleren</h3><p>Starten, vergrendelen en afstandsbediening worden gecontroleerd voordat het voertuig wordt vrijgegeven.</p></div></div></div></section>

      <section className="notice"><div className="container notice-box"><div><label>LET OP</label><h2>Geschiktheid verschilt per voertuig.</h2><p>VAG kent veel verschillende sleutel- en immobilisersystemen. Stuur daarom bij een aanvraag het merk, model, bouwjaar en bij voorkeur het kenteken. Dan kunnen wij gericht beoordelen wat mogelijk is.</p></div><a className="btn primary" href={whatsapp} target="_blank" rel="noreferrer">Bespreek uw auto <b>→</b></a></div></section>

      <footer><div className="container footer-grid"><a className="logo-frame footer-logo" href="/"><Image src="/logo.svg" alt="Autosleutel Rivierenland" width={220} height={89} /></a><div><b>SPECIALIST</b><a href="/vag-sleutelprogrammering">VAG sleutelprogrammering</a><a href="/mercedes-contactslot">Mercedes contactslot</a><a href="/tiel">Autosleutel Tiel</a></div><div><b>CONTACT</b><a href={tel}>06 48 65 92 79</a><span>Ma–do 09:00–21:00</span><span>Vrijdag gesloten</span><span>Za–zo 09:00–21:00</span></div></div><div className="container footer-bottom"><span>© 2026 Autosleutel Rivierenland</span><span>KvK 94298033</span></div></footer>
      <a className="float-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp Autosleutel Rivierenland">WA</a>
    </main>
  );
}
