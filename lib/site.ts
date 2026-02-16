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
export const siteName = "Portfolio | Baman Prasad Guragain | Cybersecurity & Developer";
export const siteDescription = "Baman Prasad Guragain - Cybersecurity enthusiast & full-stack developer from Nepal. Explore my portfolio featuring web applications, IoT projects, security tools, and innovative tech solutions.";
export const siteKeywords = [
  "Baman Prasad Guragain",
  "MrTrotid",
  "cybersecurity",
  "full stack developer",
  "portfolio",
  "web developer",
  "IoT developer",
  "next.js developer",
  "react developer",
  "typescript developer",
  "tailwind css",
  "security enthusiast",
  "Nepal developer",
  "software engineer",
  "frontend developer",
  "backend developer",
  "student portfolio",
  "tech blog",
  "coding projects",
  "GitHub developer",
];

export const author = {
  name: "Baman Prasad Guragain",
  email: "contact@bamanguragain.com.np",
  github: "https://github.com/MrTrotid",
  linkedin: "https://www.linkedin.com/in/mrtrotid/",
  youtube: "https://www.youtube.com/@MrTrotid",
  instagram: "https://www.instagram.com/mrtrotid/",
};

export const metadataBase = new URL(`${siteUrl}/`);
export const canonicalRoutes = ["/", "/timeline", "/resume-subdomain"];
