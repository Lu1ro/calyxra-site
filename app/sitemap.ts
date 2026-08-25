import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.calyxra.com";
  const pages = ["", "/cases", "/partners", "/contact", "/privacy", "/terms", "/security"];

  return pages.map((path, index) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-08-26"),
    changeFrequency: index < 3 ? "monthly" : "yearly",
    priority: index === 0 ? 1 : index < 3 ? 0.8 : 0.4,
  }));
}
