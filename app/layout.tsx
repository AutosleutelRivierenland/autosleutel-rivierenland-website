import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://autosleutelrivierenland.nl"),
  title: "Autosleutel Rivierenland | Autosleutel Specialist Tiel & Regio",
  description: "Professionele autosleutelservice vanuit Tiel. Autosleutels maken en programmeren, schadevrij openen, Keyless Go, diagnose en uitlezen. Service op locatie voor particulieren en bedrijven.",
  keywords: ["autosleutel Tiel", "autosleutel Rivierenland", "autosleutel kwijt", "autosleutel bijmaken", "autosleutel programmeren", "auto schadevrij openen", "Keyless Go"],
  openGraph: {
    title: "Autosleutel Rivierenland | Uw autosleutelspecialist",
    description: "Professionele autosleutelservice op locatie vanuit Tiel. Voor particulieren, garages en autobedrijven.",
    url: "https://autosleutelrivierenland.nl",
    siteName: "Autosleutel Rivierenland",
    locale: "nl_NL",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="nl"><body>{children}</body></html>;
}
