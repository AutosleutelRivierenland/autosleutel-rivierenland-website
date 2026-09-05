import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: "https://autosleutelrivierenland.nl", lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: "https://autosleutelrivierenland.nl/tiel", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://autosleutelrivierenland.nl/mercedes-contactslot", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
