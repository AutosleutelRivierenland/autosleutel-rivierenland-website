"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Aanvraag website - Autosleutel Rivierenland`;
    const body = [
      `Naam: ${form.get("name")}`,
      `Telefoon: ${form.get("phone")}`,
      `Automerk en model: ${form.get("vehicle") || "Niet opgegeven"}`,
      `Bouwjaar: ${form.get("year") || "Niet opgegeven"}`,
      `Gewenste dienst: ${form.get("service") || "Niet opgegeven"}`,
      "",
      `Bericht: ${form.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:autosleutel.rivierenland@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section className="contact-form-section" id="contact">
      <div className="container contact-form-layout">
        <div>
          <label>VRAAG EEN PRIJS OF AFSPRAAK AAN</label>
          <h2>Vertel ons iets over <em>uw auto.</em></h2>
          <p>Vul uw gegevens in. Uw e-mailprogramma opent met de aanvraag klaar om te versturen. Voor een snelle reactie kunt u ook direct bellen of WhatsAppen.</p>
          <a className="contact-form-whatsapp" href="https://wa.me/c/31648659279" target="_blank" rel="noreferrer">Bekijk eerst de WhatsApp-catalogus ↗</a>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-fields">
            <label>Naam<input name="name" required autoComplete="name" placeholder="Uw naam" /></label>
            <label>Telefoonnummer<input name="phone" required type="tel" autoComplete="tel" placeholder="06 ..." /></label>
            <label>Automerk en model<input name="vehicle" placeholder="Bijv. Volkswagen Golf" /></label>
            <label>Bouwjaar<input name="year" inputMode="numeric" placeholder="Bijv. 2018" /></label>
            <label className="contact-form-wide">Waarmee kunnen we helpen?
              <select name="service" defaultValue="">
                <option value="">Kies een dienst</option>
                <option>Transpondersleutel zonder afstandsbediening</option>
                <option>Autosleutel met afstandsbediening</option>
                <option>Keyless / Smart Key</option>
                <option>Alle autosleutels kwijt</option>
                <option>VAG-opties coderen</option>
                <option>Foutcodes uitlezen en wissen</option>
                <option>Contactslot repareren of vervangen</option>
                <option>Auto schadevrij openen</option>
                <option>Sleutelbehuizing vervangen</option>
                <option>Zakelijke aanvraag</option>
                <option>Anders</option>
              </select>
            </label>
            <label className="contact-form-wide">Toelichting<textarea name="message" rows={4} required placeholder="Beschrijf kort wat er aan de hand is..." /></label>
          </div>
          <button className="btn primary contact-form-submit" type="submit">Aanvraag voorbereiden <span>→</span></button>
          {sent && <p className="contact-form-note" role="status">Uw e-mailprogramma zou nu moeten openen met uw aanvraag. Verstuur de e-mail daar om de aanvraag daadwerkelijk te verzenden.</p>}
          <p className="contact-form-privacy">Verstuur geen betaalgegevens of andere gevoelige informatie via dit formulier.</p>
        </form>
      </div>
    </section>
  );
}
