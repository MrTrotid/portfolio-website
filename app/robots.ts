import type { MetadataRoute } from "next";
import { siteHost, siteUrl } from "../lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "Slurp",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "Baiduspider",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "YandexBot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "Twitterbot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "Anthropic-AI",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "Applebot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "Bytespider",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "Amazonbot",
        allow: "/",
        crawlDelay: 0,
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteHost,
  };
}
