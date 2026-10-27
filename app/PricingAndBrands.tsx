const whatsappCatalog = "https://wa.me/c/31648659279";

const brands = [
  ["Mercedes-Benz","mercedesbenz"],["BMW","bmw"],["Volkswagen","volkswagen"],["Audi","audi"],
  ["SEAT","seat"],["CUPRA","cupra"],["Škoda","skoda"],["Fiat","fiat"],["Ferrari","ferrari"],
  ["Lamborghini","lamborghini"],["Land Rover","landrover"],["Volvo","volvo"],
  ["Peugeot","peugeot"],["Renault","renault"],["Opel","opel"],["Citroën","citroen"],["Ford","ford"],
  ["Chevrolet","chevrolet"],["Dodge","dodge"],["Kia","kia"],["Hyundai","hyundai"],["Suzuki","suzuki"],
  ["Mazda","mazda"],["Honda","honda"],["Toyota","toyota"],["Mitsubishi","mitsubishi"],["Nissan","nissan"],
  ["Porsche","porsche"],["Lexus","lexus"],["Jeep","jeep"],["Rolls-Royce","rollsroyce"],["Bentley","bentley"]
] as const;

function BrandLogo({name,slug}:{name:string;slug:string}) {
  if (slug === "mercedesbenz") return <span className="brand-mark mark-mercedes" aria-label={name}><svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="17"/><path d="M20 3V20L7 29M20 20L33 29"/></svg></span>;
  if (slug === "cupra") return <span className="brand-mark mark-cupra" aria-label={name}><svg viewBox="0 0 80 30"><path d="M7 4H25L39 15L25 26H7L20 15ZM73 4H55L41 15L55 26H73L60 15Z"/></svg></span>;
  if (slug === "alfaromeo") return <span className="brand-mark mark-alfa" aria-label={name}><svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="17"/><path d="M9 12H31M9 28H31M14 8L20 20L26 8M14 32L20 20L26 32"/></svg></span>;
  if (slug === "landrover") return <span className="brand-mark mark-landrover" aria-label={name}><svg viewBox="0 0 80 30"><ellipse cx="40" cy="15" rx="35" ry="12"/><text x="40" y="18.5" textAnchor="middle" fontSize="9" fontWeight="800" stroke="none" fill="#17283d">LAND ROVER</text></svg></span>;
  if (slug === "dodge") return <span className="brand-mark mark-dodge" aria-label={name}><svg viewBox="0 0 80 30"><text x="35" y="20" textAnchor="middle" fontSize="17" fontWeight="900" fontStyle="italic" stroke="none" fill="#17283d">DODGE</text><path d="M62 20H76M65 25H76" strokeWidth="2.4"/></svg></span>;
  if (slug === "lexus") return <span className="brand-mark mark-lexus" aria-label={name}><svg viewBox="0 0 80 30"><ellipse cx="40" cy="15" rx="30" ry="12"/><path d="M31 7H48L34 23H50"/></svg></span>;
  return <img src={`https://cdn.simpleicons.org/${slug}/17283d`} alt={`${name} logo`} loading="lazy" />;
}

const prices = [
  { title: "Transpondersleutel", description: "Zonder afstandsbediening", price: "€ 79,95", note: "Transponderchip en mogelijkheden per voertuig controleren." },
  { title: "Autosleutel met afstandsbediening", description: "Met afstandsbedieningsfuncties", price: "€ 139,95", note: "Type sleutel en programmering vooraf bevestigen." },
  { title: "Keyless / Smart Key", description: "Voor keyless toegang en starten", price: "€ 184,95", note: "All-in: sleutel en programmering inbegrepen. 1 jaar garantie." },
];

export default function PricingAndBrands() {
  return (
    <>
      <section className="pricing-section" id="prijzen">
        <div className="container">
          <div className="pricing-heading">
            <label>HELDERE PRIJZEN</label>
            <h2>Een passende autosleutel. <em>Een duidelijke prijs.</em></h2>
            <p>Bekijk onze standaardprijzen. De uiteindelijke sleutel en werkzaamheden hangen af van merk, model, bouwjaar en uitvoering. We bevestigen de prijs vooraf.</p>
          </div>
          <div className="pricing-grid">
            {prices.map((item) => (
              <article className="pricing-card" key={item.title}>
                <span className="pricing-icon" aria-hidden="true">⌁</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <strong className="pricing-price">{item.price}</strong>
                <span className="pricing-includes">{item.note}</span>
              </article>
            ))}
          </div>
          <div className="pricing-notice">
            <div>
              <strong>Let op: voor sommige merken en bouwjaren geldt een toeslag van € 60,-.</strong>
              <p>Dit geldt voor alle BMW- en Mercedes-Benz-modellen en voor Volkswagen, Audi, SEAT, Škoda en CUPRA van na 2015. De toeslag geldt voor de meeste, maar niet alle voertuigen binnen deze groepen. We controleren dit vooraf en geven u eerst de totaalprijs.</p>
            </div>
            <a className="btn primary" href={whatsappCatalog} target="_blank" rel="noreferrer">Bekijk de WhatsApp-catalogus <b>↗</b></a>
          </div>
        </div>
      </section>
      <section className="brand-section" id="automerken">
        <div className="container">
          <div className="brand-heading">
            <div><label>MERKEN &amp; COMPATIBILITEIT</label><h2>Autosleutelservice voor <em>veel automerken.</em></h2></div>
            <p>De mogelijkheden verschillen per model, bouwjaar en sleuteltype. Stuur ons uw merk, model en bouwjaar; dan controleren we wat voor uw auto mogelijk is.</p>
          </div>
          <div className="brand-grid">
            {brands.map(([name, slug]) => (
              <div className="brand-logo" key={slug} title={name}>
                <BrandLogo name={name} slug={slug} />
                <span>{name}</span>
              </div>
            ))}
          </div>
          <p className="brand-disclaimer">De weergegeven merknamen en logo's dienen uitsluitend om de merken aan te duiden waarvoor u een aanvraag kunt doen. Beschikbaarheid wordt per voertuig gecontroleerd; dit overzicht houdt geen officiële dealerrelatie in.</p>
        </div>
      </section>
    </>
  );
}
