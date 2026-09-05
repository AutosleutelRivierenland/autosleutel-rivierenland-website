import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const services = [
    "autosleutel-bijmaken",
    "autosleutel-kwijt",
    "behuizingen-vervangen",
    "schadevrij-openen",
    "diagnose-uitlezen",
  ];

  return [
    { url: "https://autosleutelrivierenland.nl", lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: "https://autosleutelrivierenland.nl/tiel", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://autosleutelrivierenland.nl/mercedes-contactslot", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...services.map((slug) => ({ url: `https://autosleutelrivierenland.nl/diensten/${slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.75 })),
  ];
}
