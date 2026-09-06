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
    };
    apply();
    const timer=window.setTimeout(apply,100);
    return()=>window.clearTimeout(timer);
  },[]);
  return null;
}
