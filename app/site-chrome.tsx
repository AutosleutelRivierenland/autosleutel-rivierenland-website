import Image from "next/image";

const tel = "tel:+31648659279";
const phoneLabel = "06 48 65 92 79";
const email = "autosleutel.rivierenland@gmail.com";
const address = "Latensteinse Rondweg 2-109, Tiel";
const whatsapp = "https://wa.me/31648659279?text=Hallo%20Autosleutel%20Rivierenland%2C%20ik%20heb%20een%20vraag.";

function PhoneIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 2.8 9.4 2l2.1 5.1-2.4 1.8c1.2 2.5 3.1 4.5 5.7 5.7l1.8-2.4 5.1 2.1-.8 2.8c-.4 1.5-1.8 2.5-3.4 2.4C10.2 18.8 5.2 13.8 4.5 7.7c-.2-1.6.7-3.1 2.1-3.7Z" fill="currentColor"/></svg>;
}
function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.4 9.4 0 0 0-8.1 14.2L2.7 21.4l4.9-1.2A9.4 9.4 0 1 0 12 2.5Zm0 16.9a7.5 7.5 0 0 1-3.8-1l-.3-.2-2.9.7.8-2.8-.2-.3a7.5 7.5 0 1 1 6.4 3.6Zm4.1-5.6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4 0-.5.1-.2.2-.6.8-.7 1-.1.2-.3.2-.5.1-1.5-.8-2.5-1.5-3.5-3.1-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.6 1 2.8c.1.2 1.8 2.9 4.4 4 .6.3 1.1.4 1.5.5.6.2 1.2.1 1.7.1.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2-.1 0-.3-.1-.6-.2Z" fill="currentColor"/></svg>;
}

const serviceLinks = [
  ["/diensten/autosleutel-bijmaken", "Autosleutel bijmaken"],
  ["/diensten/autosleutel-kwijt", "Autosleutel kwijt"],
  ["/diensten/behuizingen-vervangen", "Sleutelbehuizing vervangen"],
  ["/diensten/schadevrij-openen", "Auto schadevrij openen"],
  ["/diensten/diagnose-uitlezen", "Diagnose en foutcodes uitlezen"],
  ["/diensten/keyless-smartkey", "Keyless & smart keys"],
  ["/diensten/vag-coderen", "VAG-codering"],
  ["/diensten/overige-slotenservice", "Overige slotenservice"],
];

export function SiteHeader() {
  return (
    <header className="header site-header">
      <div className="container nav-inner">
        <a className="logo-frame site-logo" href="/" aria-label="Autosleutel Rivierenland home">
          <Image src="/logo-exact.svg" alt="Autosleutel Rivierenland" width={245} height={90} priority unoptimized />
        </a>
        <nav className="site-main-nav" aria-label="Hoofdnavigatie">
          <a href="/diensten/autosleutel-bijmaken">Autosleutel bijmaken</a>
          <a href="/mercedes-contactslot">Mercedes contactslot reparatie</a>
          <a href="/#prijzen">Prijzen</a>
          <a href="/#contact">Contact</a>
        </nav>
        <div className="site-header-actions">
          <a className="site-contact-action site-call-action" href={tel} aria-label={`Bel direct: ${phoneLabel}`}>
            <span className="site-action-icon"><PhoneIcon /></span><span className="site-action-copy"><strong>Bel direct</strong><small>{phoneLabel}</small></span>
          </a>
          <a className="site-contact-action site-whatsapp-action" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Contact via WhatsApp">
            <span className="site-action-icon"><WhatsAppIcon /></span><span className="site-action-copy"><strong>WhatsApp</strong><small>Stuur een bericht</small></span>
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="site-footer-brand">
          <a className="logo-frame footer-logo" href="/" aria-label="Autosleutel Rivierenland home">
            <Image src="/logo-exact.svg" alt="Autosleutel Rivierenland" width={245} height={90} unoptimized />
          </a>
          <p>Autosleutelservice vanuit Tiel: autosleutels bijmaken, programmeren, sleutelproblemen oplossen en Mercedes-contactslotreparatie.</p>
          <p className="site-appointment-note">Uitsluitend op afspraak. Bel of WhatsApp vooraf; langskomen zonder afspraak is niet mogelijk.</p>
        </div>
        <div className="site-footer-column">
          <b>Snel naar</b>
          {serviceLinks.slice(0,4).map(([href,label]) => <a href={href} key={href}>{label}</a>)}
          <a href="/mercedes-contactslot">Mercedes contactslot reparatie</a><a href="/#prijzen">Prijzen</a><a href="/#contact">Contact</a>
        </div>
        <div className="site-footer-column">
          <b>Onze diensten</b>
          {serviceLinks.slice(4).map(([href,label]) => <a href={href} key={href}>{label}</a>)}
          <a href="/tiel">Autosleutelservice Tiel</a>
          <span>Mobiele service in Rivierenland</span>
        </div>
        <div className="site-footer-column site-footer-contact">
          <b>Contact & afspraak</b>
          <a href={tel}><span className="footer-contact-symbol"><PhoneIcon /></span>{phoneLabel}</a>
          <a href={whatsapp} target="_blank" rel="noreferrer"><span className="footer-contact-symbol whatsapp-symbol"><WhatsAppIcon /></span>WhatsApp ons</a>
          <a href={`mailto:${email}`}><span className="footer-contact-symbol">✉</span>{email}</a>
          <span className="site-footer-address">{address}</span>
          <span>Uitsluitend op afspraak</span>
          <span>KvK 94298033</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Autosleutel Rivierenland. Alle rechten voorbehouden.</span>
        <span>Tiel · Rivierenland en omgeving</span>
      </div>
    </footer>
  );
}
