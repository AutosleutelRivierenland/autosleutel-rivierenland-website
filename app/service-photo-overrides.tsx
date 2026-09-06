"use client";
import { useEffect } from "react";

export default function ServicePhotoOverrides(){
  useEffect(()=>{
    if(window.location.pathname!=="/diensten/autosleutel-bijmaken") return;

    const apply=()=>{
      const hero=document.querySelector<HTMLElement>(".service-photo");
      const offer=document.querySelector<HTMLElement>(".offer-photo");
      if(hero){hero.style.backgroundImage='url("/autosleutel-bijmaken-autel.svg")';hero.style.backgroundPosition="center";}
      if(offer){offer.style.backgroundImage='url("/autosleutel-bijmaken-vw-key.svg")';offer.style.backgroundPosition="center";offer.style.backgroundSize="cover";}

      const faqAnswers: Record<string,string> = {
        "Kan ik een autosleutel zonder afstandsbediening laten maken?":"Zeker. Als u alleen een gewone autosleutel nodig heeft, kunnen wij die ook voor u maken.",
        "Kan een nieuwe sleutel op locatie worden ingeleerd?":"Dat kan vaak gewoon bij u op locatie. We nemen de sleutel ter plaatse in behandeling en testen hem daarna.",
        "Maken jullie ook smartkeys?":"Zeker. Smartkeys en keyless-sleutels kunnen we ook voor u regelen.",
        "Wat moet ik doorgeven voor een prijsindicatie?":"Stuur ons het merk, model en bouwjaar van uw auto. Met het kenteken kunnen we u meestal nog gerichter helpen."
      };

      document.querySelectorAll<HTMLElement>(".faq-list details").forEach(detail=>{
        const question=detail.querySelector("summary")?.childNodes[0]?.textContent?.trim()||"";
        const answer=faqAnswers[question];
        const paragraph=detail.querySelector<HTMLElement>("p");
        if(answer && paragraph && paragraph.textContent!==answer) paragraph.textContent=answer;
      });
    };

    let attempts=0;
    apply();
    const timer=window.setInterval(()=>{
      apply();
      attempts+=1;
      if(attempts>=20) window.clearInterval(timer);
    },250);
    return()=>window.clearInterval(timer);
  },[]);
  return null;
}
