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
import MobileMenu from "./mobile-menu";
import ServicePhotoOverrides from "./service-photo-overrides";

const siteUrl = "https://autosleutelrivierenland.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Autosleutel Rivierenland | Autosleutel Tiel",
    template: "%s | Autosleutel Rivierenland",
  },
  description:
    "Autosleutelservice vanuit Tiel. Autosleutel bijmaken, autosleutel kwijt, sleutelbehuizing vervangen, auto schadevrij openen en diagnose. Mobiele service in Tiel en Rivierenland.",
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body>
        <MobileMenu />
        <ServicePhotoOverrides />
        {children}
      </body>
    </html>
  );
}
