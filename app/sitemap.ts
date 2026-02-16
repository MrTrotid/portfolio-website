import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Main pages with resume as high priority for sitelinks
  const mainPages = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/resume-subdomain`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9, // High priority for sitelinks
    },
    {
      url: `${siteUrl}/timeline`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // Section anchors for the homepage (for "Jump to" links in search results)
  const homeSections = [
    { anchor: "#about", priority: 0.8 },
    { anchor: "#project", priority: 0.8 },
    { anchor: "#experience", priority: 0.7 },
    { anchor: "#contact", priority: 0.6 },
  ].map(({ anchor, priority }) => ({
    url: `${siteUrl}/${anchor}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority,
  }));

  return [...mainPages, ...homeSections];
}
