import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.calyxra.com";
  const pages = ["", "/contact", "/privacy", "/terms", "/security"];

  return pages.map((path, index) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-08-14"),
    changeFrequency: index === 0 ? "monthly" : "yearly",
    priority: index === 0 ? 1 : 0.4,
  }));
}
