import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Region = {
  slug: string;
  city: string;
  provinceArea: string;
  title: string;
  description: string;
  intro: string;
  context: string;
  serviceText: string;
  nearby: { name: string; slug: string }[];
};

const siteUrl = "https://www.autosleutelrivierenland.nl";
const tel = "tel:+31648659279";
const whatsapp =
  "https://wa.me/31648659279?text=Hallo%20Autosleutel%20Rivierenland%2C%20ik%20heb%20hulp%20nodig%20met%20mijn%20autosleutel.";

const regions: Region[] = [
  {
    slug: "culemborg",
    city: "Culemborg",
    provinceArea: "West-Betuwe / Rivierenland",
    title: "Autosleutel Culemborg.",
    description:
      "Autosleutelservice in Culemborg: autosleutel bijmaken, verloren autosleutel, programmeren, sleutelbehuizing en schadevrij openen. Mobiele service vanuit Tiel.",
    intro:
      "Autosleutel kwijt, een extra sleutel nodig of werkt uw afstandsbediening niet meer? Vanuit Tiel helpen wij klanten in Culemborg met autosleutels en sleutelproblemen.",
    context:
      "Culemborg ligt op korte afstand van Tiel en is voor onze mobiele autosleutelservice een logisch onderdeel van het werkgebied. U hoeft niet eerst naar een dealer of sleutelwinkel wanneer de werkzaamheden voor uw voertuig op locatie kunnen worden uitgevoerd.",
    serviceText:
      "Bij een aanvraag kijken we eerst naar merk, model, bouwjaar en het type sleutel. Op basis daarvan bespreken we welke sleutel, programmering of reparatie mogelijk is en of we de werkzaamheden in Culemborg op locatie kunnen uitvoeren.",
    nearby: [
      { name: "Tiel", slug: "tiel" },
      { name: "Geldermalsen", slug: "geldermalsen" },
      { name: "Buren", slug: "buren" },
    ]
  },
  {
    slug: "geldermalsen",
    city: "Geldermalsen",
    provinceArea: "West Betuwe / Rivierenland",
    title: "Autosleutel Geldermalsen.",
    description:
      "Autosleutelservice in Geldermalsen: autosleutel bijmaken, sleutel programmeren, autosleutel kwijt en schadevrij openen. Mobiele service vanuit Tiel.",
    intro:
      "Een autosleutel bijmaken in Geldermalsen of hulp nodig omdat uw autosleutel kwijt of defect is? Autosleutel Rivierenland werkt mobiel vanuit Tiel in Geldermalsen en omgeving.",
    context:
      "Geldermalsen ligt midden in het Rivierenlandse werkgebied. Daardoor kunnen we veel autosleutelwerkzaamheden combineren met onze mobiele service vanuit Tiel. U bespreekt vooraf wat er nodig is; daarna plannen we de werkzaamheden op locatie wanneer dat technisch mogelijk is.",
    serviceText:
      "We behandelen zowel geplande aanvragen voor een reservesleutel als urgente situaties. Denk aan een extra autosleutel, een sleutel met afstandsbediening, een defecte behuizing of een situatie waarin geen werkende sleutel meer beschikbaar is.",
    nearby: [
      { name: "Tiel", slug: "tiel" },
      { name: "Culemborg", slug: "culemborg" },
      { name: "Zaltbommel", slug: "zaltbommel" },
    ]
  },
  {
    slug: "zaltbommel",
    city: "Zaltbommel",
    provinceArea: "Bommelerwaard / Rivierenland",
    title: "Autosleutel Zaltbommel.",
    description:
      "Autosleutelservice in Zaltbommel: autosleutel bijmaken, autosleutel kwijt, programmeren en schadevrij openen. Mobiele service vanuit Tiel.",
    intro:
      "Autosleutel kwijt in Zaltbommel? Of wilt u een extra autosleutel laten maken? Vanuit Tiel biedt Autosleutel Rivierenland mobiele autosleutelservice in Zaltbommel en de omgeving.",
    context:
      "Zaltbommel en de Bommelerwaard vallen binnen ons bredere werkgebied. Voor veel aanvragen kunnen we naar uw locatie komen, zodat u niet met een defecte of ontbrekende autosleutel naar een andere plaats hoeft.",
    serviceText:
      "Vooraf controleren we welke oplossing past bij uw auto. Dat kan een extra sleutel zijn, een vervangende sleutel na verlies, programmeren of inleren, een nieuwe behuizing of het zorgvuldig openen van een afgesloten voertuig.",
    nearby: [
      { name: "Tiel", slug: "tiel" },
      { name: "Geldermalsen", slug: "geldermalsen" },
      { name: "Druten", slug: "druten" },
    ]
  },
  {
    slug: "druten",
    city: "Druten",
    provinceArea: "Land van Maas en Waal / Rivierenland",
    title: "Autosleutel Druten.",
    description:
      "Autosleutelservice in Druten: autosleutel bijmaken, programmeren, autosleutel kwijt en schadevrij openen. Mobiele service vanuit Tiel.",
    intro:
      "Een extra autosleutel nodig in Druten, of bent u uw enige sleutel kwijt? Autosleutel Rivierenland rijdt vanuit Tiel naar Druten en omgeving voor geschikte autosleutelwerkzaamheden.",
    context:
      "Druten ligt ten oosten van Tiel en sluit goed aan op ons werkgebied in Rivierenland. Onze mobiele aanpak is vooral handig wanneer een sleutelprobleem direct bij de auto moet worden opgelost.",
    serviceText:
      "Bij geplande aanvragen kunnen we vooraf beoordelen welke sleutel nodig is. Bij verlies of een defecte sleutel bekijken we eerst de situatie en het voertuig. Zo voorkomen we dat u onnodig een verkeerde sleutel bestelt.",
    nearby: [
      { name: "Tiel", slug: "tiel" },
      { name: "Buren", slug: "buren" },
      { name: "Zaltbommel", slug: "zaltbommel" },
    ]
  },
  {
    slug: "buren",
    city: "Buren",
    provinceArea: "Betuwe / Rivierenland",
    title: "Autosleutel Buren.",
    description:
      "Autosleutelservice in Buren: autosleutel bijmaken, autosleutel kwijt, programmeren en schadevrij openen. Mobiele service vanuit Tiel.",
    intro:
      "Heeft u in Buren een extra autosleutel nodig, is uw sleutel beschadigd of bent u hem kwijt? Vanuit Tiel helpen wij klanten in Buren en omliggende plaatsen.",
    context:
      "Buren ligt direct in het Rivierenlandse gebied rond Tiel. Daardoor kunnen we onze mobiele service efficiënt inzetten voor geplande autosleutelklussen en situaties waarbij u niet met de auto naar een werkplaats wilt of kunt.",
    serviceText:
      "We werken voor particuliere klanten, maar ook voor garages en autobedrijven. Geef bij een aanvraag het merk, model en bouwjaar door. Dan kunnen we vooraf bepalen welke mogelijkheden er zijn.",
    nearby: [
      { name: "Tiel", slug: "tiel" },
      { name: "Geldermalsen", slug: "geldermalsen" },
      { name: "Druten", slug: "druten" },
    ]
  },
  {
    slug: "leerdam",
    city: "Leerdam",
    provinceArea: "Vijfheerenlanden / Rivierenland",
    title: "Autosleutel Leerdam.",
    description:
      "Autosleutelservice in Leerdam: autosleutel bijmaken, autosleutel kwijt, programmeren en schadevrij openen. Mobiele service vanuit Tiel.",
    intro:
      "Autosleutel laten maken in Leerdam? Autosleutel Rivierenland helpt bij het bijmaken, vervangen en programmeren van geschikte autosleutels en biedt mobiele service vanuit Tiel.",
    context:
      "Leerdam ligt aan de westzijde van ons werkgebied. Voor aanvragen in Leerdam beoordelen we vooraf de afstand, het voertuig en de werkzaamheden, waarna we afspreken of mobiele service de beste oplossing is.",
    serviceText:
      "Voor een reservesleutel is het verstandig om niet te wachten tot de laatste sleutel defect raakt. Maar ook bij verlies, een kapotte afstandsbediening of een afgesloten auto kunt u contact opnemen om de mogelijkheden te bespreken.",
    nearby: [
      { name: "Culemborg", slug: "culemborg" },
      { name: "Geldermalsen", slug: "geldermalsen" },
      { name: "Tiel", slug: "tiel" },
    ]
  },
  {
    slug: "ede",
    city: "Ede",
    provinceArea: "Gelderland",
    title: "Autosleutel Ede.",
    description: "Autosleutelservice voor Ede: een autosleutel bijmaken, een verloren sleutel vervangen of sleutelproblemen laten beoordelen. Vooraf bespreken we voertuig, prijs en mogelijkheden.",
    intro: "Een extra autosleutel nodig in Ede, of werkt uw huidige sleutel niet meer? Autosleutel Rivierenland biedt mobiele autosleutelservice voor geschikte voertuigen, op afspraak en na controle van de voertuiggegevens.",
    context: "Voor aanvragen in Ede beoordelen we vooraf de afstand, het type sleutel en de werkzaamheden. Zo kunnen we aangeven of service op locatie mogelijk is en welke planning realistisch is.",
    serviceText: "We kunnen voor geschikte auto's sleutels zonder afstandsbediening, sleutels met afstandsbediening en keyless/smart keys verzorgen. De prijs hangt af van het voertuig en wordt vooraf bevestigd.",
    nearby: [{ name: "Tiel", slug: "tiel" }, { name: "Veenendaal", slug: "veenendaal" }, { name: "Rhenen", slug: "rhenen" }]
  },
  {
    slug: "nijmegen",
    city: "Nijmegen",
    provinceArea: "Gelderland",
    title: "Autosleutel Nijmegen.",
    description: "Autosleutelservice voor Nijmegen: autosleutel bijmaken, sleutel programmeren en hulp bij verlies of defecten voor geschikte voertuigen.",
    intro: "Wilt u een autosleutel laten bijmaken in Nijmegen of bent u uw enige sleutel kwijt? Neem contact op met Autosleutel Rivierenland om de mogelijkheden voor uw auto te bespreken.",
    context: "Nijmegen ligt buiten de directe kern van Rivierenland. Daarom controleren we bij elke aanvraag vooraf de locatie, de werkzaamheden en de planning voordat mobiele service wordt afgesproken.",
    serviceText: "Geef uw merk, model, bouwjaar en type sleutel door. We beoordelen of een transpondersleutel, afstandsbediening of keyless sleutel beschikbaar is en geven vooraf duidelijkheid over de prijs.",
    nearby: [{ name: "Tiel", slug: "tiel" }, { name: "Druten", slug: "druten" }, { name: "Ede", slug: "ede" }]
  },
  {
    slug: "utrecht",
    city: "Utrecht",
    provinceArea: "Utrecht",
    title: "Autosleutel Utrecht.",
    description: "Autosleutelservice voor Utrecht: vraag naar een extra autosleutel, sleutelprogrammering of vervanging bij verlies voor geschikte auto's.",
    intro: "Een extra autosleutel nodig of problemen met uw sleutel in Utrecht? We bekijken per aanvraag of onze mobiele autosleutelservice en planning aansluiten op uw locatie en voertuig.",
    context: "Utrecht is een groter stedelijk werkgebied buiten de directe regio rond Tiel. Beschikbaarheid en eventuele voorrijkosten worden daarom altijd vooraf besproken; er wordt geen aankomsttijd beloofd voordat de planning is gecontroleerd.",
    serviceText: "Voor geschikte voertuigen kunnen we transpondersleutels, sleutels met afstandsbediening en keyless/smart keys verzorgen. Stuur merk, model en bouwjaar voor een gerichte beoordeling.",
    nearby: [{ name: "Nieuwegein", slug: "nieuwegein" }, { name: "Houten", slug: "houten" }, { name: "Culemborg", slug: "culemborg" }]
  },
  {
    slug: "nieuwegein",
    city: "Nieuwegein",
    provinceArea: "Utrecht",
    title: "Autosleutel Nieuwegein.",
    description: "Autosleutelservice voor Nieuwegein: autosleutel bijmaken, sleutel programmeren en vervanging bij verlies voor geschikte voertuigen.",
    intro: "Zoekt u een autosleutelservice in Nieuwegein? Vertel ons welk voertuig u heeft en of u een transpondersleutel, afstandsbediening of keyless sleutel nodig heeft.",
    context: "Nieuwegein ligt aan de rand van het bredere werkgebied. We bevestigen vooraf of mobiele service op uw locatie ingepland kan worden en bespreken eventuele bijkomende kosten voordat de afspraak wordt vastgelegd.",
    serviceText: "We beoordelen iedere aanvraag op merk, model, bouwjaar en sleuteltype. Na controle krijgt u duidelijkheid over de mogelijkheden, prijs en planning.",
    nearby: [{ name: "Utrecht", slug: "utrecht" }, { name: "Houten", slug: "houten" }, { name: "Culemborg", slug: "culemborg" }]
  },
  {
    slug: "den-bosch",
    city: "'s-Hertogenbosch",
    provinceArea: "Noord-Brabant",
    title: "Autosleutel Den Bosch.",
    description: "Autosleutelservice voor Den Bosch: vraag naar autosleutels bijmaken, programmering en hulp bij verlies voor geschikte voertuigen.",
    intro: "Een autosleutel bijmaken of een verloren sleutel vervangen in Den Bosch? Autosleutel Rivierenland beoordeelt de mogelijkheden op basis van uw voertuig en locatie.",
    context: "Den Bosch ligt buiten de directe kern van Rivierenland. We controleren daarom vooraf of de gewenste werkzaamheden mobiel uitgevoerd kunnen worden en welke afspraak haalbaar is.",
    serviceText: "Noem bij uw aanvraag het merk, model, bouwjaar en type sleutel. We bespreken welke sleutel beschikbaar is, of programmering nodig is en wat de totale prijs wordt.",
    nearby: [{ name: "Zaltbommel", slug: "zaltbommel" }, { name: "Tiel", slug: "tiel" }, { name: "Gorinchem", slug: "gorinchem" }]
  },
  {
    slug: "gorinchem",
    city: "Gorinchem",
    provinceArea: "Zuid-Holland / Rivierenland",
    title: "Autosleutel Gorinchem.",
    description: "Autosleutelservice in Gorinchem: autosleutel bijmaken, sleutel programmeren en hulp bij een verloren of defecte sleutel voor geschikte auto's.",
    intro: "Heeft u in Gorinchem een extra autosleutel nodig of werkt uw huidige sleutel niet meer? We bespreken graag welke oplossing voor uw auto mogelijk is.",
    context: "Gorinchem sluit aan op het westelijke deel van ons regionale werkgebied. De mogelijkheid van mobiele service hangt af van de locatie, het voertuig en de benodigde werkzaamheden.",
    serviceText: "We helpen met sleuteltypes zonder afstandsbediening, met afstandsbediening en keyless/smart keys voor geschikte voertuigen. We controleren vooraf de compatibiliteit en geven een duidelijke prijsopgave.",
    nearby: [{ name: "Leerdam", slug: "leerdam" }, { name: "Culemborg", slug: "culemborg" }, { name: "Zaltbommel", slug: "zaltbommel" }]
  },
  {
    slug: "veenendaal",
    city: "Veenendaal",
    provinceArea: "Utrecht / Gelderland",
    title: "Autosleutel Veenendaal.",
    description: "Autosleutelservice voor Veenendaal: extra autosleutels, sleutelprogrammering en hulp bij sleutelverlies voor geschikte voertuigen.",
    intro: "Een autosleutel laten bijmaken in Veenendaal? Neem contact op met voertuigmerk, model en bouwjaar. Dan beoordelen we welke sleutel en service mogelijk zijn.",
    context: "Voor Veenendaal controleren we vooraf de planning en locatie. We spreken pas een afspraak af nadat duidelijk is welke werkzaamheden nodig zijn en of mobiele service praktisch uitvoerbaar is.",
    serviceText: "Voor geschikte auto's verzorgen we transpondersleutels, sleutels met afstandsbediening en keyless/smart keys. De totaalprijs wordt vooraf bevestigd, inclusief een eventuele voertuigspecifieke toeslag.",
    nearby: [{ name: "Ede", slug: "ede" }, { name: "Rhenen", slug: "rhenen" }, { name: "Tiel", slug: "tiel" }]
  },
  {
    slug: "houten",
    city: "Houten",
    provinceArea: "Utrecht",
    title: "Autosleutel Houten.",
    description: "Autosleutelservice voor Houten: extra autosleutels, sleutelprogrammering en vervanging bij verlies voor geschikte voertuigen.",
    intro: "Een autosleutel bijmaken of vervangen in Houten? Stuur ons het merk, model en bouwjaar, zodat we kunnen controleren welke sleutel bij uw auto past.",
    context: "Voor Houten beoordelen we vooraf de locatie en de werkzaamheden. We bevestigen eerst of mobiele service ingepland kan worden en bespreken eventuele bijkomende kosten voordat de afspraak wordt vastgelegd.",
    serviceText: "Voor geschikte auto's kunnen we een transpondersleutel, een sleutel met afstandsbediening of een keyless/smart key verzorgen. We bevestigen vooraf welke opties beschikbaar zijn en wat de totaalprijs wordt.",
    nearby: [{ name: "Utrecht", slug: "utrecht" }, { name: "Nieuwegein", slug: "nieuwegein" }, { name: "Culemborg", slug: "culemborg" }]
  },
  {
    slug: "rhenen",
    city: "Rhenen",
    provinceArea: "Utrecht / Gelderland",
    title: "Autosleutel Rhenen.",
    description: "Autosleutelservice voor Rhenen: autosleutel bijmaken, sleutel programmeren en hulp bij verlies voor geschikte voertuigen.",
    intro: "Heeft u in Rhenen een extra autosleutel nodig of bent u uw sleutel kwijt? We bespreken de mogelijkheden voor uw voertuig en of mobiele service op uw locatie haalbaar is.",
    context: "Rhenen ligt aan de oostzijde van het Utrechtse gebied. Bij elke aanvraag controleren we vooraf de planning en benodigde werkzaamheden, zodat we een realistische afspraak kunnen maken.",
    serviceText: "Geef merk, model, bouwjaar en type sleutel door. We beoordelen of een transpondersleutel, afstandsbediening of keyless sleutel geschikt is en bevestigen de prijs vooraf.",
    nearby: [{ name: "Veenendaal", slug: "veenendaal" }, { name: "Ede", slug: "ede" }, { name: "Tiel", slug: "tiel" }]
  },
]; 

const regionHref = (slug: string) => slug === "tiel" ? "/tiel" : `/regio/${slug}`;

const services = [
  ["01", "Autosleutel bijmaken", "Een extra autosleutel laten maken? Voor geschikte voertuigen maken en programmeren wij een passende sleutel.", "/diensten/autosleutel-bijmaken"],
  ["02", "Autosleutels kwijt", "Geen werkende sleutel meer? Wij beoordelen de situatie en bespreken welke oplossing mogelijk is.", "/diensten/autosleutel-kwijt"],
  ["03", "Schadevrij openen", "Buitengesloten? Wij openen uw auto zo zorgvuldig mogelijk en proberen onnodige schade te voorkomen.", "/diensten/schadevrij-openen"],
  ["04", "Sleutelbehuizing vervangen", "Is uw sleutelbehuizing gebroken of versleten? Voor geschikte sleutels kunnen we de behuizing vervangen.", "/diensten/behuizingen-vervangen"],
];

export function generateStaticParams() {
  return regions.map((region) => ({ slug: region.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const region = regions.find((item) => item.slug === slug);
  if (!region) return { title: "Autosleutelservice Rivierenland" };
  return {
    title: "Autosleutel " + region.city,
    description: region.description,
    alternates: { canonical: `${siteUrl}/regio/${region.slug}` },
    openGraph: {
      title: region.title.replace(".", "") + " | Autosleutelservice",
      description: region.description,
      url: `${siteUrl}/regio/${region.slug}`,
      siteName: "Autosleutel Rivierenland",
      locale: "nl_NL",
      type: "website",
      images: [{ url: `${siteUrl}/real-photos/IMG_0865(2).jpeg`, alt: `Autosleutelservice in ${region.city}` }],
    },
  };
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 2.8 9.4 2l2.1 5.1-2.4 1.8c1.2 2.5 3.1 4.5 5.7 5.7l1.8-2.4 5.1 2.1-.8 2.8c-.4 1.5-1.8 2.5-3.4 2.4C10.2 18.8 5.2 13.8 4.5 7.7c-.2-1.6.7-3.1 2.1-3.7Z" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5a9.4 9.4 0 0 0-8.1 14.2L2.7 21.4l4.9-1.2A9.4 9.4 0 1 0 12 2.5Zm0 16.9a7.5 7.5 0 0 1-3.8-1l-.3-.2-2.9.7.8-2.8-.8 2.8 2.9-.7.3.2a7.5 7.5 0 1 0-6.4-3.6Zm4.1-5.6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4 0-.5.1-.2.2-.6.8-.7 1-.1.2-.3.2-.5.1-1.5-.8-2.5-1.5-3.5-3.1-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.6 1 2.8c.1.2 1.8 2.9 4.4 4 .6.3 1.1.4 1.5.5.6.2 1.2.1 1.7.1.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2-.1 0-.3-.1-.6-.2Z" fill="currentColor" />
    </svg>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="container nav-inner">
        <Link className="logo-frame" href="/" aria-label="Autosleutel Rivierenland home">
          <img src="/logo.svg" alt="Autosleutel Rivierenland" width={220} height={89} />
        </Link>
        <nav aria-label="Hoofdnavigatie">
          <Link href="/">Home</Link>
          <Link href="/#diensten">Diensten</Link>
          <Link href="/mercedes-contactslot">Mercedes contactslot vervangen</Link>
          <Link href="/#zakelijk">Zakelijk</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <a className="nav-phone" href={tel}><b>☎</b><span>06 48 65 92 79</span></a>
      </div>
    </header>
  );
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const region = regions.find((item) => item.slug === slug);
  if (!region) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/regio/${region.slug}#webpage`,
        name: region.title.replace(".", ""),
        url: `${siteUrl}/regio/${region.slug}`,
        description: region.description,
        about: { "@id": `${siteUrl}/#business` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Regio", item: `${siteUrl}/regio/${region.slug}` },
          { "@type": "ListItem", position: 3, name: `Autosleutel ${region.city}`, item: `${siteUrl}/regio/${region.slug}` },
        ],
      },
      {
        "@type": "Service",
        name: `Autosleutelservice in ${region.city}`,
        serviceType: "Autosleutelservice",
        provider: { "@id": `${siteUrl}/#business` },
        areaServed: { "@type": "City", name: region.city, addressCountry: "NL" },
        url: `${siteUrl}/regio/${region.slug}`,
      },
    ],
  };

  return (
    <main className="tiel-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />

      <section className="tiel-hero">
        <div className="container tiel-hero-grid">
          <div className="tiel-hero-copy">
            <div className="tiel-eyebrow">AUTOSLEUTELSERVICE {region.city.toUpperCase()}</div>
            <h1>Autosleutel <span>{region.city}.</span></h1>
            <p>{region.intro}</p>
            <p>{region.context}</p>
            <div className="tiel-facts">
              <span><b>GEVESTIGD IN TIEL</b><small>Tiel · Rivierenland</small></span>
              <span><b>SERVICE</b><small>Mobiel waar mogelijk</small></span>
              <span><b>CONTACT</b><small>Bel of WhatsApp</small></span>
            </div>
          </div>
        </div>
      </section>

      <section className="section tiel-services">
        <div className="container">
          <div className="section-head">
            <div>
              <label>AUTOSLEUTEL IN {region.city.toUpperCase()}</label>
              <h2>Waarvoor kunt u bij ons <em>terecht?</em></h2>
            </div>
            <p>{region.serviceText}</p>
          </div>
          <div className="tiel-service-grid">
            {services.map(([n, title, text, href]) => (
              <Link className="tiel-service" href={href} key={n}>
                <span className="service-no">{n}</span>
                <div className="service-line"></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <b>Meer informatie <span>→</span></b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section tiel-info">
        <div className="container info-box">
          <div>
            <label>ZO WERKT HET</label>
            <h2>Van uw aanvraag naar een <em>werkende sleutel.</em></h2>
          </div>
          <div>
            <p><strong>1. Neem contact op.</strong> Bel of stuur via WhatsApp het merk, model, bouwjaar en liefst het kenteken. Een foto van de sleutel is vaak handig.</p>
            <p><strong>2. We beoordelen de mogelijkheden.</strong> De juiste oplossing hangt af van het voertuig, sleuteltype en de beschikbare programmering.</p>
            <p><strong>3. We spreken de uitvoering af.</strong> Als mobiele service technisch mogelijk is, komen we naar uw locatie in {region.city}. Anders bespreken we een afspraak in Tiel.</p>
          </div>
        </div>
      </section>

      <section className="tiel-region section">
        <div className="container region-box">
          <div className="region-copy">
            <label>OOK IN DE REGIO</label>
            <h2>Gevestigd in Tiel. <em>{region.city} en omgeving.</em></h2>
            <p>Autosleutel Rivierenland richt zich op Tiel en het omliggende Rivierenland. We werken daarnaast in een ruimer gebied wanneer de aanvraag en planning dat toelaten.</p>
            <div className="region-groups">
              <div>
                <strong>Ook dichtbij</strong>
                <div className="region-list">
                  {region.nearby.map((place) => (
                    <Link href={regionHref(place.slug)} key={place.slug}>{place.name}</Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="region-note">
              <b>Mobiele service</b>
              <span>Veel werkzaamheden kunnen op locatie worden uitgevoerd.</span>
            </div>
          </div>

        </div>
      </section>

      <section className="section tiel-info">
        <div className="container info-box">
          <div>
            <label>VOORAF CONTROLEREN</label>
            <h2>Geen gokwerk. <em>Eerst de juiste gegevens.</em></h2>
          </div>
          <div>
            <p>Een autosleutel is afhankelijk van merk, model, bouwjaar en uitvoering. Daarom geven we liever een passende prijsindicatie na controle dan een bedrag dat achteraf verandert.</p>
            <p>Stuur via WhatsApp het merk, model, bouwjaar en eventueel kenteken. Een duidelijke foto van de huidige sleutel helpt om het type sleutel sneller te herkennen.</p>
            <p><strong>Niet beschikbaar:</strong> Renault en Volvo. Bij twijfel kunt u altijd eerst contact opnemen.</p>
          </div>
        </div>
      </section>

      <section className="tiel-cta">
        <div className="container tiel-cta-box">
          <div>
            <label>HULP NODIG?</label>
            <h2>Autosleutelprobleem in <em>{region.city}?</em></h2>
            <p>Vertel ons wat er aan de hand is. We bespreken eerst de mogelijkheden voor uw voertuig.</p>
          </div>
          <div className="tiel-cta-actions">
            <a className="btn primary" href={tel}><span className="btn-icon"><PhoneIcon /></span><span>Bel direct</span><b>06 48 65 92 79</b></a>
            <a className="btn hero-secondary" href={whatsapp} target="_blank" rel="noreferrer"><span className="btn-icon whatsapp-icon"><WhatsAppIcon /></span><span>WhatsApp</span><b>Stuur een bericht →</b></a>
            <small>maandag 12:00–20:00 · di–do 10:00–20:00 · vrijdag gesloten · zaterdag 10:00–20:00 · zondag gesloten</small>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <Link className="logo-frame footer-logo" href="/"><img src="/logo.svg" alt="Autosleutel Rivierenland" width={220} height={89} /></Link>
          <div><b>DIENSTEN</b>{services.map(([_, title, __, href]) => <Link key={href} href={href}>{title}</Link>)}</div>
          <div><b>REGIO</b><Link href="/tiel">Autosleutel Tiel</Link>{region.nearby.map((place) => <Link key={place.slug} href={regionHref(place.slug)}>Autosleutel {place.name}</Link>)}</div>
          <div><b>CONTACT</b><a href={tel}>06 48 65 92 79</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><span>Tiel · Rivierenland</span></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Autosleutel Rivierenland</span><span>KvK 94298033</span><span>Service op locatie</span></div>
      </footer>
    </main>
  );
}
