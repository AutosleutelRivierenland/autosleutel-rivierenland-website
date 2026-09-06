"use client";
import { useEffect } from "react";

export default function ServicePhotoOverrides(){
  useEffect(()=>{
    const path=window.location.pathname;
    if(path!=="/diensten/autosleutel-bijmaken" && path!=="/diensten/autosleutel-kwijt") return;

    const apply=()=>{
      const hero=document.querySelector<HTMLElement>(".service-photo");
      const offer=document.querySelector<HTMLElement>(".offer-photo");
      const photoSet=path==="/diensten/autosleutel-bijmaken"
        ? {hero:"https://images.pexels.com/videos/6182060/choice-of-keys-key-key-service-keys-6182060.jpeg?auto=compress&dpr=1&h=1200&w=1800",offer:"https://images.pexels.com/photos/97079/pexels-photo-97079.jpeg?auto=compress&cs=tinysrgb&w=1800"}
        : {hero:"https://images.pexels.com/photos/11017012/pexels-photo-11017012.jpeg?auto=compress&cs=tinysrgb&w=1800",offer:"https://images.pexels.com/photos/109361/pexels-photo-109361.jpeg?auto=compress&cs=tinysrgb&w=1800"};
      if(hero){hero.style.backgroundImage=`url("${photoSet.hero}")`;hero.style.backgroundPosition="center";hero.style.backgroundSize="cover";}
      if(offer){offer.style.backgroundImage=`url("${photoSet.offer}")`;offer.style.backgroundPosition="center";offer.style.backgroundSize="cover";}
    };

    apply();
    const faqAnswers: Record<string,string> = {
      "Kan ik een autosleutel zonder afstandsbediening laten maken?":"Zeker. Als u alleen een gewone autosleutel nodig heeft, kunnen wij die ook voor u maken.",
      "Kan een nieuwe sleutel op locatie worden ingeleerd?":"Dat kan vaak gewoon bij u op locatie. We nemen de sleutel ter plaatse in behandeling en testen hem daarna.",
      "Maken jullie ook smartkeys?":"Ja, smartkeys en keyless-sleutels kunnen we ook voor u regelen. We zorgen ervoor dat de sleutel bij uw auto past en controleren daarna of alles goed werkt.",
      "Wat moet ik doorgeven voor een prijsindicatie?":"Stuur ons het merk, model en bouwjaar van uw auto. Met het kenteken kunnen we u meestal nog gerichter helpen."
    };
    document.querySelectorAll<HTMLElement>(".faq-list details").forEach(detail=>{
      const question=detail.querySelector("summary")?.childNodes[0]?.textContent?.trim()||"";
      const answer=faqAnswers[question];
      const paragraph=detail.querySelector<HTMLElement>("p");
      if(answer && paragraph) paragraph.textContent=answer;
    });

    let attempts=0;
    const timer=window.setInterval(()=>{apply();attempts+=1;if(attempts>=20)window.clearInterval(timer);},250);
    return()=>window.clearInterval(timer);
  },[]);
  return null;
}
