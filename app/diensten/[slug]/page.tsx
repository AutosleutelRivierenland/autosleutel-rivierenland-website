import type { Metadata } from "next";
import Link from "next/link";

const tel = "tel:+31648659279";
const whatsapp = "https://wa.me/31648659279?text=Hallo%20Autosleutel%20Rivierenland%2C%20ik%20heb%20hulp%20nodig%20met%20mijn%20autosleutel.";

type Service = {
  slug: string;
  title: string;
  intro: string;
  label: string;
  points: string[];
  text: string[];
};

const services: Service[] = [
  {
    slug: "autosleutel-bijmaken",
    label: "EXTRA AUTOSLEUTEL",
    title: "Autosleutel bijmaken",
    intro: "Een extra autosleutel laten maken voordat u zonder sleutel komt te staan.",
    points: ["Sleutel met of zonder afstandsbediening", "Sleutel snijden en elektronica programmeren waar nodig", "Geschiktheid vooraf beoordelen op merk, model en uitvoering"],
    text: ["Heeft u nog een werkende autosleutel? Dan is dit het ideale moment om een reservesleutel te laten maken. Daarmee voorkomt u dat u bij verlies of defect direct met een lastigere situatie zit.", "Wij leveren en programmeren voor geschikte voertuigen een extra sleutel. Neem het merk, model, bouwjaar en eventueel kenteken mee; dan kunnen wij vooraf beoordelen wat nodig is."]
  },
  {
    slug: "autosleutel-kwijt",
    label: "GEEN WERKENDE SLEUTEL MEER",
    title: "Autosleutel kwijt",
    intro: "Geen werkende autosleutel meer? Voor veel voertuigen kunnen wij een nieuwe sleutel maken en programmeren.",
    points: ["Nieuwe sleutel bij verlies", "Programmeren voor geschikte voertuigen", "Eerst voertuiggegevens controleren"],
    text: ["Een verloren autosleutel betekent niet automatisch dat u bij de dealer moet zijn. Voor veel voertuigen kunnen wij een nieuwe sleutel voorbereiden en programmeren.", "De mogelijkheden verschillen sterk per merk, model, bouwjaar en beveiligingssysteem. Daarom beoordelen wij de auto vooraf. Stuur ons de voertuiggegevens en vertel kort wat u nog heeft, bijvoorbeeld een reservesleutel, sleutelblad of helemaal niets."]
  },
  {
    slug: "autosleutel-programmeren",
    label: "ELEKTRONISCHE SLEUTEL",
    title: "Autosleutel programmeren",
    intro: "Een autosleutel moet niet alleen passen: de elektronica moet ook correct met het voertuig communiceren.",
    points: ["Programmeren van geschikte nieuwe en extra sleutels", "Professionele Autel- en Xhorse-apparatuur", "Modelgerichte controle van de beschikbare procedure"],
    text: ["Bij moderne auto's is sleutelprogrammering een elektronisch proces. Een sleutel kan mechanisch correct zijn, maar zonder juiste programmering kan de auto hem niet accepteren.", "Wij werken met professionele apparatuur en kiezen de werkwijze op basis van het voertuig. Vooral binnen VAG hebben wij veel ervaring met sleutelprogrammering. Bij twijfel controleren wij vooraf wat technisch mogelijk is."]
  },
  {
    slug: "schadevrij-openen",
    label: "BUITENGESLOTEN",
    title: "Auto schadevrij openen",
    intro: "Buitengesloten van uw auto? Wij openen het voertuig vakkundig en zo zorgvuldig mogelijk.",
    points: ["Opening zonder onnodige schade", "Geschikt voor situaties met een afgesloten voertuig", "Snelle beoordeling op locatie"],
    text: ["Een deur forceren is meestal geen goede oplossing. Wij proberen een voertuig gecontroleerd te openen met zo min mogelijk risico voor slot, deur, rubbers en carrosserie.", "De exacte werkwijze hangt af van het voertuig en de situatie. Neem contact op met het merk, model en uw locatie zodat wij kunnen aangeven wat mogelijk is."]
  },
  {
    slug: "keyless-go",
    label: "SMARTKEY & KEYLESS",
    title: "Keyless Go sleutel",
    intro: "Een extra smartkey of keyless sleutel nodig? Wij beoordelen per voertuig welke sleutel en programmeerprocedure nodig zijn.",
    points: ["Keyless- en smartkeys voor geschikte voertuigen", "Extra sleutel programmeren", "Controle van sleutel en voertuig na programmering"],
    text: ["Keyless systemen werken anders dan een traditionele afstandsbediening. De juiste sleutel, frequentie en voertuigprocedure moeten op elkaar aansluiten.", "Wij leveren en programmeren voor geschikte voertuigen keyless- en smartkeys. Stuur vooraf de voertuiggegevens zodat wij kunnen controleren welke oplossing bij uw auto past."]
  },
  {
    slug: "diagnose-uitlezen",
    label: "STORING & DIAGNOSE",
    title: "Diagnose & uitlezen",
    intro: "Een auto die niet start of een sleutel niet herkent, vraagt om diagnose voordat er onderdelen worden vervangen.",
    points: ["Elektronische systemen uitlezen", "Sleutel- en startproblemen gericht onderzoeken", "Vervolgstap bepalen op basis van diagnose"],
    text: ["Een niet-herkende sleutel kan meerdere oorzaken hebben. Zonder diagnose is onderdelen vervangen vaak gokken. Wij lezen systemen uit en onderzoeken waar het probleem waarschijnlijk zit.", "Op basis van de diagnose bespreken wij de mogelijkheden. Soms ligt het probleem bij de sleutel, soms bij programmering of een voertuigmodule. Niet ieder probleem kan op locatie worden opgelost; daar zijn we vooraf duidelijk over."]
  }
];

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return { title: service ? `${service.title} | Autosleutel Rivierenland` : "Autosleutelservice | Autosleutel Rivierenland", description: service?.intro ?? "Professionele autosleutelservice vanuit Tiel." };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug) ?? services[0];

  return (
    <main>
      <header className="header"><div className="container nav-inner"><Link className="logo-frame" href="/"><img src="/logo.svg" alt="Autosleutel Rivierenland" width={220} height={89} /></Link><nav aria-label="Hoofdnavigatie"><Link href="/#diensten">Diensten</Link><Link href="/#werkgebied">Werkgebied</Link><Link href="/vag-sleutelprogrammering">VAG</Link><Link href="/mercedes-contactslot">Mercedes</Link><Link href="/#zakelijk">Zakelijk</Link><Link href="/#contact">Contact</Link></nav><a className="nav-phone" href={tel}>Bel direct <span>06 48 65 92 79</span></a></div></header>
      <section className="premium-hero"><div className="container hero-inner"><div className="hero-copy"><div className="eyebrow"><i /> Autosleutel Rivierenland · Tiel</div><h1>{service.title}</h1><p className="hero-text">{service.intro}</p><div className="actions"><a className="btn primary" href={tel}>Bel direct <b>→</b></a><a className="btn hero-secondary" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <b>↗</b></a></div><div className="hero-trust"><span>✓ Service op locatie</span><span>✓ 1 jaar garantie</span><span>✓ Professionele apparatuur</span></div></div><div className="hero-image-wrap"><img className="hero-image" src="/ai-workbench.svg" alt="Professionele autosleutelapparatuur" /></div></div></section>
      <section className="section service-detail-section"><div className="container"><div className="detail-intro"><label>{service.label}</label><h2>Zo pakken wij het <em>aan.</em></h2><p>{service.text[0]}</p></div><div className="detail-grid"><article><span>01</span><h3>Wat u kunt verwachten</h3><p>{service.text[1]}</p></article><article><span>02</span><h3>Onze werkwijze</h3><p>{service.points.join(" · ")}</p></article><article><span>03</span><h3>Vooraf controleren</h3><p>De mogelijkheden verschillen per voertuig. Stuur daarom merk, model, bouwjaar en eventueel kenteken mee. Wij beoordelen vooraf wat technisch mogelijk is.</p></article></div></div></section>
      <section className="section capability"><div className="container capability-grid"><div><label>VANUIT TIEL</label><h2>Professionele service, <em>op locatie.</em></h2></div><div><p>Wij helpen particulieren, garages en autobedrijven vanuit Tiel en in de omliggende regio. Voor werkzaamheden in Tiel kunt u ook op afspraak langskomen.</p><a className="text-link" href="/tiel">Autosleutelservice in Tiel →</a></div></div></section>
      <section className="contact"><div className="container contact-box"><div><label>CONTACT</label><h2>Hulp nodig met uw <em>autosleutel?</em></h2><p>Stuur uw voertuiggegevens of bel ons direct. Wij helpen u graag.</p></div><div className="contact-actions"><a className="btn primary large" href={tel}>Bel 06 48 65 92 79 <b>→</b></a><a className="btn whatsapp large" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp ons <b>↗</b></a></div></div></section>
      <footer><div className="container footer-grid"><Link className="logo-frame footer-logo" href="/"><img src="/logo.svg" alt="Autosleutel Rivierenland" width={220} height={89} /></Link><div><b>DIENSTEN</b>{services.map((item) => <Link key={item.slug} href={`/diensten/${item.slug}`}>{item.title}</Link>)}</div><div><b>SPECIALIST</b><Link href="/vag-sleutelprogrammering">VAG sleutelprogrammering</Link><Link href="/mercedes-contactslot">Mercedes contactslot</Link><Link href="/tiel">Autosleutel Tiel</Link></div></div></footer>
    </main>
  );
}
