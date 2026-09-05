import type { Metadata } from "next";
import "./globals.css";
import "./premium.css";
import "./logo-fix.css";
import "./header-tone.css";
import "./phone-hover.css";
import "./phone-button.css";
import "./hero-polish.css";
import "./service-images.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://autosleutelrivierenland.nl"),
  title: {
    default: "Autosleutel Rivierenland | Autosleutel Tiel",
    template: "%s | Autosleutel Rivierenland",
  },
  description: "Autosleutelservice vanuit Tiel: autosleutel bijmaken, autosleutels kwijt, behuizingen vervangen, schadevrij openen, Mercedes contactsloten vervangen en diagnose & uitlezen.",
  keywords: ["autosleutel Tiel","autosleutel Rivierenland","autosleutel kwijt","autosleutel bijmaken","autosleutel behuizing vervangen","auto schadevrij openen","Mercedes contactslot vervangen","auto diagnose uitlezen"],
  alternates: { canonical: "https://autosleutelrivierenland.nl" },
  openGraph: {
    title: "Autosleutel Rivierenland | Autosleutelservice Tiel",
    description: "Autosleutelservice op locatie vanuit Tiel voor particulieren, garages en autobedrijven.",
    url: "https://autosleutelrivierenland.nl",
    siteName: "Autosleutel Rivierenland",
    locale: "nl_NL",
    type: "website",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="nl"><body>{children}</body></html>;
}
