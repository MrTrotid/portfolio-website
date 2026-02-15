import type { MetadataRoute } from "next";
import { canonicalRoutes, siteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Main routes with high priority
  const routes = canonicalRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" as const : "monthly" as const,
    priority: route === "/" ? 1 : route === "/timeline" ? 0.8 : 0.7,
  }));

  // Section anchors for better discoverability and sitelinks
  const sections = [
    { anchor: "#about", priority: 0.9 },
    { anchor: "#project", priority: 0.9 },
    { anchor: "#experience", priority: 0.8 },
    { anchor: "#resume", priority: 0.7 },
    { anchor: "#contact", priority: 0.7 },
  ].map(({ anchor, priority }) => ({
    url: `${siteUrl}/${anchor}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority,
  }));

  // Sub-pages/branches for search engine sitelinks
  const subPages = [
    {
      url: `${siteUrl}/timeline`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/resume-subdomain`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  // Project detail pages (for rich snippets)
  const projectPages = [
    "aqsentinel",
    "portfolio",
  ].map((project) => ({
    url: `${siteUrl}/#project-${project}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Experience detail pages
  const experiencePages = [
    "gadgetbyte",
    "icmb",
    "jci",
    "scout",
    "sos",
    "stxaviers",
  ].map((exp) => ({
    url: `${siteUrl}/#experience-${exp}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...subPages, ...sections, ...projectPages, ...experiencePages];
}
