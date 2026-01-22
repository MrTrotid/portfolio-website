const fallbackUrl = "https://bamanguragain.com.np";

const normalizeUrl = (url: string) => url.replace(/\/+$/, "");

function resolveSiteUrl() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!envUrl) return fallbackUrl;

  try {
    return normalizeUrl(new URL(envUrl).toString());
  } catch {
    return fallbackUrl;
  }
}

export const siteUrl = resolveSiteUrl();
export const siteHost = new URL(siteUrl).host;
export const siteName = "Portfolio - MrTrotid";
export const siteDescription = "Personal portfolio website - Student & Cybersecurity Enthusiast";
export const siteKeywords = [
  "portfolio",
  "cybersecurity",
  "developer",
  "next.js",
  "tailwind css",
  "security enthusiast",
];
export const metadataBase = new URL(`${siteUrl}/`);
export const canonicalRoutes = ["/", "/resume-subdomain"];
