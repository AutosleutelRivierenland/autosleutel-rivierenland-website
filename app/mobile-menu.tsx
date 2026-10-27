"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        className={`mobile-menu-toggle${open ? " is-open" : ""}`}
        aria-label={open ? "Menu sluiten" : "Menu openen"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span /><span />
      </button>
      {open && <button className="mobile-menu-backdrop" aria-label="Menu sluiten" onClick={close} />}
      <nav className={`mobile-menu-panel${open ? " is-open" : ""}`} aria-label="Mobiele navigatie">
        <a href="/diensten/autosleutel-bijmaken" onClick={close}>Autosleutel bijmaken</a>
        <a href="/mercedes-contactslot" onClick={close}>Mercedes contactslot vervangen</a>
        <a href="/#prijzen" onClick={close}>Prijzen</a>
        <a href="/#contact" onClick={close}>Contact</a>
        <a className="mobile-menu-phone" href="tel:+31648659279" onClick={close}>Bel direct · 06 48 65 92 79</a>
      </nav>
    </>
  );
}
