import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.calyxra.com";
  const pages = ["", "/cases", "/contact", "/privacy", "/terms", "/security"];

  return pages.map((path, index) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-08-17"),
    changeFrequency: index < 2 ? "monthly" : "yearly",
    priority: index === 0 ? 1 : index === 1 ? 0.8 : 0.4,
  }));
}
