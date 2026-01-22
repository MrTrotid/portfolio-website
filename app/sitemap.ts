import type { MetadataRoute } from "next";
import { canonicalRoutes, siteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return canonicalRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.6,
  }));
}
