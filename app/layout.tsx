import type { Metadata } from "next";
import "./globals.css";
import "./premium.css";
import "./home-services.css";
import "./logo-fix.css";
import "./header-tone.css";
import "./phone-hover.css";
import "./phone-button.css";
import "./hero-polish.css";
import "./service-images.css";
import "./mercedes-page.css";
import "./concept.css";
import "./mercedes-service-photo.css";
import "./tiel/tiel.css";
import "./region-home.css";
import "./region-home-copy.css";
import "./region-map-real.css";
import "./mobile-menu.css";
import "./reviews.css";
import "./scroll-polish.css";
import "./header-fit.css";
import "./local-areas.css";
import MobileMenu from "./mobile-menu";
import ServicePhotoOverrides from "./service-photo-overrides";
import ScrollReveal from "./scroll-reveal";

const siteUrl = "https://www.autosleutelrivierenland.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Autosleutel Rivierenland | Autosleutel bijmaken in Tiel",
    template: "%s | Autosleutel Rivierenland",
  },
  description:
    "Autosleutelservice vanuit Tiel. Autosleutel bijmaken, autosleutel kwijt, programmeren, sleutelbehuizing vervangen en auto schadevrij openen. Mobiele service in Tiel en Rivierenland.",
  applicationName: "Autosleutel Rivierenland",
  authors: [{ name: "Autosleutel Rivierenland" }],
  creator: "Autosleutel Rivierenland",
  publisher: "Autosleutel Rivierenland",
  category: "Automotive",
  alternates: { canonical: siteUrl },
  icons: {
    icon: [{ url: "/favicon-key.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon-key.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Autosleutel Rivierenland | Autosleutelservice Tiel",
    description:
      "Professionele autosleutelservice vanuit Tiel voor particulieren, garages en autobedrijven in Rivierenland.",
    url: siteUrl,
    siteName: "Autosleutel Rivierenland",
    locale: "nl_NL",
    type: "website",
    images: [`${siteUrl}/real-photos/IMG_0865(2).jpeg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": siteUrl + "/#website",
  name: "Autosleutel Rivierenland",
  url: siteUrl,
  publisher: { "@id": siteUrl + "/#business" },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "Locksmith",
  "@id": `${siteUrl}/#business`,
  name: "Autosleutel Rivierenland",
  url: siteUrl,
  telephone: "+31648659279",
  email: "autosleutel.rivierenland@gmail.com",
  image: `${siteUrl}/real-photos/IMG_0865(2).jpeg`,
  logo: `${siteUrl}/logo.svg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tiel",
    addressRegion: "Gelderland",
    addressCountry: "NL",
  },
  areaServed: [
    "Tiel",
    "Rivierenland",
    "Culemborg",
    "Geldermalsen",
    "Buren",
    "Zaltbommel",
    "Leerdam",
    "Gorinchem",
    "Utrecht",
    "Nijmegen",
    "Arnhem",
    "Den Bosch",
  ],
  priceRange: "€€",
  openingHoursSpecification:[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday"],"opens":"12:00","closes":"20:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":["Tuesday","Wednesday","Thursday","Saturday"],"opens":"10:00","closes":"20:00"}],
  sameAs: [
    "https://www.tiktok.com/@autosleutel_rivierenland",
    "https://www.facebook.com/people/Autosleutel-Rivierenland/pfbid02Wde94Zwd7919j3RobbTRN6Squn27JKy83oRBRaug5x6fWo2joP5VPYUQeCriVMhdl/",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <MobileMenu />
        <ServicePhotoOverrides />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
