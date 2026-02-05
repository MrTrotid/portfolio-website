import type { MetadataRoute } from "next";
import { canonicalRoutes, siteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Main routes
  const routes = canonicalRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" as const : "monthly" as const,
    priority: route === "/" ? 1 : route === "/timeline" ? 0.7 : 0.6,
  }));

  // Section anchors for better discoverability
  const sections = [
    "#about",
    "#project",
    "#experience",
    "#resume",
    "#contact",
  ].map((section) => ({
    url: `${siteUrl}${section}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...routes, ...sections];
}
