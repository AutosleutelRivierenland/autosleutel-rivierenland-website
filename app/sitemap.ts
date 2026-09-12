import type { MetadataRoute } from "next";

const siteUrl = "https://www.autosleutelrivierenland.nl";

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
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/tiel`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${siteUrl}/mercedes-contactslot`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    ...services.map((slug) => ({
      url: `${siteUrl}/diensten/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
