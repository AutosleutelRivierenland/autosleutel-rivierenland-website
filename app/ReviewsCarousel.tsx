"use client";

import { useEffect, useState } from "react";

const reviews = [
  { name: "D R", text: "Hele fijne, professionele communicatie met Ismaël ervaren. Kon snel terecht voor een noodsituatie voor het maken van een nieuwe sleutel zonder reservesleutel. Goede prijs en service kwaliteit. Zeer tevreden, bedankt!" },
  { name: "Henk Westerveld", text: "Het was even gepuzzel met de nieuwe sleutel programmeren maar top gelukt nog bedankt" },
  { name: "Chris Konings", text: "Heb een tweede sleutel op afstand laten maken. Alles werkt perfect en ben zeer tevreden! Zeker een aanrader. Verder een correcte garantieservice zonder extra kosten! Netjes behandeld. Bij een volgende sleutel zeker bij Autosleutel Rivierenland." },
  { name: "Marcel van Hulst", text: "Snelle service, uiterst correct behandeling. Aanrader!!!" },
  { name: "Alejandra Landaburo", text: "Nette service" },
  { name: "A.M. Magosin", text: "Accidentally locked the car with the keys in it. Called once and in ca 15 minutes already had a person sent to my location. He opened the car in less than a minute. Very friendly people, professional service. Love for the Netherlands from Germany!" },
  { name: "Amanda Ouwehand", text: "Advertentie gevonden via Facebook. Contact gelegd via WhatsApp. Hij reageerde snel en de afspraak was ook zo gemaakt. De sleutel werkt perfect! Toen de sleutel niet netjes aan slot, is hij zelfs nog terug gekomen om het in orde te maken!" },
  { name: "Willem Tang", text: "Na contact via whatsapp hebben we snel een afspraak gemaakt. Voor een goede prijs kon ik een sleutel bij laten maken met afstandbediening. Mijn oude sleutel had het nog nooit gedaan qua centrale vergrendeling. Maar door deze service was dit snel verholpen. Nogmaals hartstikke bedankt voor je goede service" },
];

export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % reviews.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const review = reviews[index];

  return (
    <section
      className="reviews-section"
      aria-label="Google reviews"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <div className="reviews-head">
          <div>
            <label>KLANTEN VERTELLEN</label>
            <h2>Wat klanten <em>zeggen.</em></h2>
          </div>
          <a href="https://www.google.com/search?q=autosleutel+rivierenland" target="_blank" rel="noreferrer" className="reviews-link">
            Bekijk alle reviews op Google ↗
          </a>
        </div>

        <div className="review-card">
          <div className="review-stars" aria-label="5 van 5 sterren">★★★★★</div>
          <blockquote>“{review.text}”</blockquote>
          <div className="review-author">
            <span className="review-avatar">{review.name.charAt(0)}</span>
            <div><strong>{review.name}</strong><small>Google review</small></div>
          </div>
        </div>

        <div className="reviews-controls">
          <button type="button" aria-label="Vorige review" onClick={() => setIndex((index - 1 + reviews.length) % reviews.length)}>←</button>
          <div className="review-dots" aria-label="Kies een review">
            {reviews.map((item, dotIndex) => (
              <button key={item.name} type="button" className={dotIndex === index ? "active" : ""} aria-label={`Review ${dotIndex + 1}`} aria-current={dotIndex === index ? "true" : undefined} onClick={() => setIndex(dotIndex)} />
            ))}
          </div>
          <button type="button" aria-label="Volgende review" onClick={() => setIndex((index + 1) % reviews.length)}>→</button>
        </div>
      </div>
    </section>
  );
}
