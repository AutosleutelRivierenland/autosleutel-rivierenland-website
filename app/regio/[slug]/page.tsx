import type { Metadata } from "next";
import Link from "next/link";

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
  faqs: [string, string][];
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
    ],
    faqs: [
      ["Maken jullie autosleutels bij in Culemborg?", "Voor geschikte voertuigen kunnen wij een extra of vervangende autosleutel maken en waar nodig programmeren of inleren."],
      ["Komen jullie voor autosleutels naar Culemborg?", "Ja. Veel werkzaamheden kunnen mobiel worden uitgevoerd. We beoordelen vooraf of uw voertuig en de werkzaamheden daarvoor geschikt zijn."],
      ["Kunnen jullie helpen als alle autosleutels kwijt zijn?", "Voor geschikte voertuigen kunnen we de mogelijkheden voor een nieuwe sleutel en programmering beoordelen. De oplossing verschilt per merk, model en bouwjaar."],
      ["Wat moet ik doorgeven voor een prijsindicatie?", "Geef bij voorkeur merk, model, bouwjaar en kenteken door. Een foto van de huidige sleutel of het sleutelprobleem kan ook helpen."],
    ],
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
    ],
    faqs: [
      ["Kan ik in Geldermalsen een autosleutel laten bijmaken?", "Ja, voor geschikte voertuigen maken en programmeren wij autosleutels. We beoordelen vooraf welke sleutel voor uw auto nodig is."],
      ["Is mobiele service in Geldermalsen mogelijk?", "Voor veel autosleutelwerkzaamheden wel. Bij contact bekijken we het merk, model, bouwjaar en de locatie."],
      ["Ik heb nog maar één sleutel. Is een reservesleutel verstandig?", "Een werkende reservesleutel voorkomt dat een verlies of defect direct een noodsituatie wordt. We kunnen beoordelen welke reserve voor uw voertuig mogelijk is."],
      ["Kunnen jullie een kapotte sleutelbehuizing vervangen?", "Als de elektronica van de bestaande sleutel nog goed is, kan een nieuwe behuizing voor geschikte sleutelmodellen een praktische oplossing zijn."],
    ],
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
    ],
    faqs: [
      ["Maken jullie autosleutels op locatie in Zaltbommel?", "Voor geschikte voertuigen kunnen veel werkzaamheden op locatie worden uitgevoerd. We beoordelen dit vooraf op basis van voertuig en sleuteltype."],
      ["Kunnen jullie een autosleutel programmeren in Zaltbommel?", "Voor geschikte voertuigen kunnen wij nieuwe of vervangende sleutels programmeren of inleren."],
      ["Wat als ik alle sleutels kwijt ben?", "Neem eerst contact op. We beoordelen per voertuig welke mogelijkheden er zijn en wat op locatie nodig is."],
      ["Kunnen jullie mijn auto openen als de sleutel binnen ligt?", "We kunnen voor geschikte voertuigen een zorgvuldige openingsmethode beoordelen om onnodige schade te voorkomen."],
    ],
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
    ],
    faqs: [
      ["Kunnen jullie naar Druten komen?", "Ja, Druten valt binnen ons werkgebied. Voor veel autosleutelwerkzaamheden is mobiele service mogelijk."],
      ["Kan ik een reservesleutel laten maken in Druten?", "Voor geschikte voertuigen kunnen wij een extra autosleutel maken, programmeren en testen."],
      ["Mijn sleutel start de auto niet meer. Kunnen jullie helpen?", "We kunnen de sleutel en het voertuig beoordelen en, waar passend, programmering en sleutelherkenning onderzoeken."],
      ["Kunnen jullie een auto openen zonder schade?", "We kiezen een passende, zo zorgvuldig mogelijke openingsmethode. Absolute schadevrijheid kan niet voor ieder voertuig worden gegarandeerd."],
    ],
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
    ],
    faqs: [
      ["Maken jullie autosleutels in Buren?", "Voor geschikte voertuigen kunnen wij extra en vervangende autosleutels verzorgen, inclusief programmeren of inleren wanneer dat nodig is."],
      ["Komen jullie bij mij thuis of naar de auto?", "Ja, veel werkzaamheden kunnen mobiel worden uitgevoerd. We bespreken vooraf of dat voor uw voertuig mogelijk is."],
      ["Kan een beschadigde sleutel worden gerepareerd?", "Dat hangt af van de schade. Bij een versleten behuizing kan vervangen vaak een optie zijn; elektronische schade vraagt een andere beoordeling."],
      ["Hoe krijg ik vooraf een prijsindicatie?", "Stuur merk, model, bouwjaar en bij voorkeur kenteken en een foto van de sleutel via WhatsApp. Daarna kunnen we de mogelijkheden bespreken."],
    ],
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
    ],
    faqs: [
      ["Kunnen jullie een autosleutel maken in Leerdam?", "Voor geschikte merken en modellen kunnen wij een extra of vervangende autosleutel verzorgen en programmeren."],
      ["Is mobiele autosleutelservice in Leerdam mogelijk?", "Dat kan voor veel werkzaamheden. We beoordelen vooraf of de klus op locatie kan worden uitgevoerd."],
      ["Wat als mijn afstandsbediening niet meer werkt?", "Een lege batterij, beschadigde behuizing, elektronisch probleem of voertuigprobleem kan verschillende oorzaken hebben. We beoordelen eerst de situatie."],
      ["Kunnen jullie ook helpen als ik ben buitengesloten?", "Ja, voor geschikte voertuigen kunnen we beoordelen welke zorgvuldige openingsmethode mogelijk is."],
    ],
  },
];

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
    title: region.title.replace(".", "") + " | Autosleutelservice",
    description: region.description,
    alternates: { canonical: `${siteUrl}/regio/${region.slug}` },
    openGraph: {
      title: region.title.replace(".", "") + " | Autosleutelservice",
      description: region.description,
      url: `${siteUrl}/regio/${region.slug}`,
      siteName: "Autosleutel Rivierenland",
      locale: "nl_NL",
      type: "website",
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
  const region = regions.find((item) => item.slug === slug) ?? regions[0];

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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: region.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <main className="tiel-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <section className="tiel-hero">
        <div className="container tiel-hero-grid">
          <div className="tiel-hero-copy">
            <div className="tiel-eyebrow">AUTOSLEUTELSERVICE {region.city.toUpperCase()}</div>
            <h1>Autosleutel <span>{region.city}.</span></h1>
            <p>{region.intro}</p>
            <p>{region.context}</p>
            <div className="tiel-facts">
              <span><b>UITVALSBASIS</b><small>Tiel · Rivierenland</small></span>
              <span><b>SERVICE</b><small>Mobiel waar mogelijk</small></span>
              <span><b>CONTACT</b><small>Bel of WhatsApp</small></span>
            </div>
          </div>
          <div className="tiel-hero-visual">
            <div className="visual-grid"></div>
            <div className="visual-key"><span></span><i></i><i></i></div>
            <div className="visual-caption">
              <small>WERKGEBIED</small>
              <strong>{region.city.toUpperCase()}</strong>
              <span>{region.provinceArea}</span>
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
            <h2>Vanuit Tiel naar <em>{region.city} en omgeving.</em></h2>
            <p>Autosleutel Rivierenland richt zich op Tiel en het omliggende Rivierenland. We werken daarnaast in een ruimer gebied wanneer de aanvraag en planning dat toelaten.</p>
            <div className="region-groups">
              <div>
                <strong>Ook dichtbij</strong>
                <div className="region-list">
                  {region.nearby.map((place) => (
                    <Link href={`/regio/${place.slug}`} key={place.slug}>{place.name}</Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="region-note">
              <b>Mobiele service</b>
              <span>Veel werkzaamheden kunnen op locatie worden uitgevoerd.</span>
            </div>
          </div>
          <div className="region-visual">
            <div className="region-lines"></div>
            <div className="tiel-node"><span></span><b>{region.city}</b><small>WERKGEBIED</small></div>
            <div className="place-node node-1"><i></i>Tiel</div>
            <div className="place-node node-2"><i></i>Rivierenland</div>
            <div className="place-node node-3"><i></i>Gelderland</div>
            <div className="place-node node-4"><i></i>West Betuwe</div>
            <div className="place-node node-5"><i></i>Mobiele service</div>
            <div className="region-route"><span></span><span></span><span></span></div>
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
            <p><strong>Niet beschikbaar:</strong> BMW, Renault en Volvo. Bij twijfel kunt u altijd eerst contact opnemen.</p>
          </div>
        </div>
      </section>

      <section className="section tiel-info">
        <div className="container info-box">
          <div>
            <label>VEELGESTELDE VRAGEN</label>
            <h2>Autosleutel <em>{region.city}.</em></h2>
          </div>
          <div>
            {region.faqs.map(([question, answer]) => (
              <details key={question} style={{ marginBottom: "12px" }}>
                <summary style={{ cursor: "pointer", fontWeight: 700, color: "#122333" }}>{question}</summary>
                <p style={{ marginTop: "10px" }}>{answer}</p>
              </details>
            ))}
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
            <small>Ma–do 09:00–21:00 · vrijdag gesloten · za–zo 09:00–21:00</small>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <Link className="logo-frame footer-logo" href="/"><img src="/logo.svg" alt="Autosleutel Rivierenland" width={220} height={89} /></Link>
          <div><b>DIENSTEN</b>{services.map(([_, title, __, href]) => <Link key={href} href={href}>{title}</Link>)}</div>
          <div><b>REGIO</b><Link href="/tiel">Autosleutel Tiel</Link>{region.nearby.map((place) => <Link key={place.slug} href={`/regio/${place.slug}`}>Autosleutel {place.name}</Link>)}</div>
          <div><b>CONTACT</b><a href={tel}>06 48 65 92 79</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><span>Tiel · Rivierenland</span></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Autosleutel Rivierenland</span><span>KvK 94298033</span><span>Service op locatie</span></div>
      </footer>
    </main>
  );
}
