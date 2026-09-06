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
        "Kan ik een autosleutel zonder afstandsbediening laten maken?":"Ja. Wij regelen ook eenvoudige autosleutels zonder afstandsbediening.",
        "Kan een nieuwe sleutel op locatie worden ingeleerd?":"Ja. Veel werkzaamheden kunnen gewoon bij u op locatie worden uitgevoerd.",
        "Maken jullie ook smartkeys?":"Ja. Wij regelen ook moderne smartkeys en keyless-sleutels.",
        "Wat moet ik doorgeven voor een prijsindicatie?":"Geef ons het merk, model en bouwjaar door. Een kenteken of voertuiggegevens zijn ook handig voor een gerichte prijsindicatie."
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
