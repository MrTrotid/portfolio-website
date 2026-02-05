# Indexing & Search Console Guide

Complete guide to ensuring your portfolio is properly indexed by search engines and optimized for discoverability.

## 📊 Indexing Overview

**Current Status:**
- ✅ Sitemap: `/sitemap.xml` (auto-generated)
- ✅ Robots.txt: `/robots.txt` (auto-generated)
- ✅ Structured Data: JSON-LD schemas (Person, Website, ProfilePage)
- ✅ Meta Tags: Enhanced Open Graph and Twitter Cards
- ✅ Mobile Optimized: Fully responsive design

---

## 🔍 Google Search Console Setup

### Step-by-Step Setup

#### 1. **Verify Your Website**

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click **"Start Now"** or **"Add Property"**
4. Enter your domain: `https://bamanguragain.com.np`
5. Choose verification method

**Recommended: DNS Method (Fastest)**
```
1. Click "DNS" or "Domain Provider" in GSC
2. Create a TXT DNS record with provided value
3. Add to your domain registrar (Namecheap, GoDaddy, etc.)
4. Wait 24-48 hours for DNS propagation
5. Return to GSC and click "Verify"
```

#### 2. **Submit Sitemap**

Once verified:

1. Go to **"Sitemaps"** in the left sidebar
2. Enter sitemap URL:
   ```
   https://bamanguragain.com.np/sitemap.xml
   ```
3. Click **"Submit"**
4. Google will crawl your sitemap within 24-48 hours

#### 3. **Monitor Coverage**

1. Go to **"Coverage"** in the sidebar
2. Track indexed pages:
   - Valid (fully indexed)
   - Excluded (intentionally not indexed)
   - Errors (indexing problems)

**Fix Common Issues:**
| Status | Cause | Solution |
|--------|-------|----------|
| Not Found | Page not accessible | Check HTTPS, robots.txt, auth blocks |
| Crawled - Not Indexed | Low quality detected | Improve content, add schema markup |
| Redirect Error | Invalid redirects | Check redirect chains |
| Access Denied | Blocked by robots.txt | Review robots.txt rules |

---

## 📄 Sitemap Details

### Auto-Generated Sitemap: `app/sitemap.ts`

**Included Pages:**
```
1. https://bamanguragain.com.np/              (homepage)
2. https://bamanguragain.com.np/timeline      (timeline page)
3. https://bamanguragain.com.np/resume-subdomain (resume)
```

**Section Anchors:** (searchable sections)
```
#about       - About Me section
#project     - Projects section  
#experience  - Experience section
#resume      - Resume section
#contact     - Contact section
```

**Configuration:**
```typescript
// High priority pages
- changeFrequency: 'weekly'
- priority: 0.8

// Timeline page
- changeFrequency: 'monthly'
- priority: 0.6

// Anchors
- changeFrequency: 'monthly'
- priority: 0.7
```

### Custom Sitemap Changes

To edit sitemap, modify `app/sitemap.ts`:

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bamanguragain.com.np';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Add more routes here
  ];
}
```

---

## 🤖 Robots.txt Configuration

### Auto-Generated: `app/robots.ts`

**Current Rules:**
```
User-agent: *
Allow: /
Disallow: 

Crawl-delay: 1
```

**Google-Specific Rules:**
```
User-agent: Googlebot
Allow: /
Crawl-delay: 0.5
```

**What This Means:**
- ✅ All search engines can crawl all pages
- ⏱️ Wait 1 second between crawl requests (respects server resources)
- 🚀 Googlebot can crawl faster (every 0.5 seconds)

### Modify Robots Rules

Edit `app/robots.ts`:

```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0.5,
      },
    ],
    sitemap: 'https://bamanguragain.com.np/sitemap.xml',
    host: 'https://bamanguragain.com.np',
  };
}
```

**Block Specific Crawler:**
```typescript
rules: [
  {
    userAgent: 'BadBot', // Block specific bot
    disallow: '/',
  },
]
```

---

## 🏷️ Structured Data (Schema Markup)

### Implemented Schemas

Located in `components/StructuredData.tsx`

#### 1. **Person Schema**
Identifies you as a professional:
```json
{
  "@type": "Person",
  "name": "Baman Prasad Guragain",
  "jobTitle": "Cybersecurity & Full-Stack Developer",
  "url": "https://bamanguragain.com.np",
  "sameAs": [
    "https://linkedin.com/in/...",
    "https://github.com/...",
    "https://twitter.com/..."
  ]
}
```

**Benefits:**
- Knowledge panel in Google Search
- Rich search snippets
- Social profile linking

#### 2. **Website Schema**
Describes your website:
```json
{
  "@type": "WebSite",
  "url": "https://bamanguragain.com.np",
  "name": "Portfolio | Cybersecurity & Developer",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://bamanguragain.com.np/#q={search_term_string}"
    }
  }
}
```

**Benefits:**
- Enables "site search" in Google Search with sitelinks
- Better site understanding
- Site name display in SERP

#### 3. **ProfilePage Schema**
Marks main page as profile:
```json
{
  "@type": "ProfilePage",
  "url": "https://bamanguragain.com.np",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Portfolio"
  }
}
```

**Benefits:**
- Better categorization
- Rich preview snippets
- Improved ranking for personal brand searches

### Update Structured Data

Edit `components/StructuredData.tsx`:

```typescript
export default function StructuredData() {
  const personSchema = {
    "@type": "Person",
    "name": "Your Name",
    "jobTitle": "Your Title",
    "url": "https://yourdomain.com",
    "sameAs": [
      "https://linkedin.com/in/yourprofile",
      "https://github.com/yourprofile",
      "https://twitter.com/yourprofile",
    ],
    // Add more properties
  };

  // ...rest of component
}
```

---

## 🔗 Meta Tags & Open Graph

### Title Optimization

**Current Pattern:** `{page} | Portfolio | Baman Prasad Guragain`

**Best Practices:**
- Length: 50-60 characters
- Include main keyword
- Include brand name
- Avoid keyword stuffing

**Update in `lib/site.ts`:**
```typescript
export const site = {
  siteName: "Portfolio | Baman Prasad Guragain | Cybersecurity & Developer",
  // ...
};
```

### Meta Description Optimization

**Current:** "Cybersecurity enthusiast & full-stack developer. Explore projects in web dev, IoT & security tools."

**Best Practices:**
- Length: 50-160 characters (ideal: 70-155)
- Include primary keyword
- Include call-to-action
- Unique for each page

**Update in `app/layout.tsx`:**
```typescript
description: "Your optimized description here",
```

### Open Graph Tags

**Purpose:** Better social media previews

**Tags Implemented:**
```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://bamanguragain.com.np">
<meta property="og:title" content="Portfolio Title">
<meta property="og:description" content="Portfolio description">
<meta property="og:image" content="https://bamanguragain.com.np/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

**Recommendation:** 
Create an OG image (1200x630px) and save as `/public/og-image.jpg` for better social sharing previews.

### Twitter Card Tags

**Tags Implemented:**
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@yourhandle">
<meta name="twitter:title" content="Portfolio Title">
<meta name="twitter:description" content="Portfolio description">
<meta name="twitter:image" content="og-image.jpg">
```

---

## 📈 Monitoring & Analytics

### Google Search Console Metrics

Check these regularly (monthly):

1. **Performance:**
   - Total clicks
   - Total impressions
   - Average CTR (Click-Through Rate)
   - Average position
   - Top queries pulling traffic

2. **Coverage:**
   - Valid pages indexed
   - Excluded pages
   - Errors detected

3. **Enhancements:**
   - Mobile usability
   - Core Web Vitals
   - Structured data

4. **Links:**
   - Top internal links
   - Top linked pages
   - External links pointing to your site

### Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| Indexed Pages | 5+ | Review in GSC |
| Average CTR | 3-5% | Monitor over time |
| Average Position | 10-20 | Improve through SEO |
| Mobile Usability | 100% | ✅ Verified |

---

## 🚀 SEO Checklist

### Pre-Launch
- ✅ Domain pointing to correct server
- ✅ HTTPS enabled (required for indexing)
- ✅ Robots.txt deployed
- ✅ Sitemap generated
- ✅ Structured data validated
- ✅ Meta tags optimized
- ✅ Mobile responsiveness tested

### Launch Day
- ✅ Verify website in Google Search Console
- ✅ Submit sitemap
- ✅ Check coverage report
- ✅ Review for indexing errors

### Day 1-7
- ✅ Monitor daily indexing progress
- ✅ Check for crawl errors
- ✅ Verify structured data is recognized
- ✅ Monitor Core Web Vitals

### Ongoing (Monthly)
- ✅ Review Search Console performance
- ✅ Check indexed page count
- ✅ Monitor query rankings
- ✅ Update meta descriptions for low-CTR pages
- ✅ Check for broken links

---

## 🧪 Testing & Validation Tools

Use these tools to validate your indexing setup:

| Tool | Purpose | URL |
|------|---------|-----|
| **Google Search Console** | Monitor indexing | https://search.google.com/search-console |
| **Bing Webmaster Tools** | Bing indexing status | https://www.bing.com/webmasters |
| **Schema Validator** | Validate structured data | https://validator.schema.org |
| **Mobile-Friendly Test** | Test mobile responsiveness | https://search.google.com/test/mobile-friendly |
| **Page Speed Insights** | Performance & Core Web Vitals | https://pagespeed.web.dev |
| **Robots.txt Tester** | Test robots.txt rules | https://search.google.com/search-console |

---

## ⚡ Performance Optimization for Indexing

### Core Web Vitals (Critical)

Google uses these metrics for ranking:

1. **LCP (Largest Contentful Paint)**: < 2.5 seconds
2. **FID (First Input Delay)**: < 100 milliseconds
3. **CLS (Cumulative Layout Shift)**: < 0.1

**Check in:** Google Search Console → Enhancements → Core Web Vitals

### Speed Optimization

- ✅ Images optimized (WebP format)
- ✅ CSS minified (Tailwind v4)
- ✅ JavaScript optimized (Next.js build)
- ✅ Static site generation (no server lag)
- ✅ CDN deployment (fast worldwide access)

---

## 🔄 Re-indexing & Updates

### Force indexing of new content:

1. In Google Search Console
2. Go to **Inspections** tool
3. Enter page URL
4. Click **"Request Indexing"**
5. Google will crawl within 24-48 hours

### Removing pages from index:

1. In Google Search Console
2. Go to **Removals** tool
3. Enter URL
4. Choose temporary or permanent removal

---

## 📚 Additional Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Schema.org Documentation](https://schema.org)
- [MDN Web Indexing Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Robots-Tag)

---

**Last Updated:** February 2026  
**Review Schedule:** Quarterly or after major site changes
