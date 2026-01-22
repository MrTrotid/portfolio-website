import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { metadataBase, siteDescription, siteKeywords, siteName, siteUrl } from "../lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase,
  title: siteName,
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: "Baman Prasad Guragain", url: siteUrl }],
  creator: "Baman Prasad Guragain",
  publisher: "Baman Prasad Guragain",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] min-h-screen flex flex-col items-center`}
      >
        <div className="w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
