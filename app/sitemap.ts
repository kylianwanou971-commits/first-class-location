import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://firstclasslocation.fr";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/nos-voitures`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/formation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/lld-professionnel`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
