# SEO Optimization Guide

This guide covers all the SEO optimizations implemented in your portfolio website and how to configure Google Search Console.

## 📊 Implemented SEO Features

### 1. **Structured Data (JSON-LD)**
Located in `components/StructuredData.tsx`, this component adds three types of schema markup:

- **Person Schema**: Identifies you as a person with skills, social links, and professional information
- **Website Schema**: Describes your portfolio website with search functionality
- **ProfilePage Schema**: Marks the page as a profile page with metadata

**Benefits:**
- Rich search results with your social links
- Better understanding of your content by search engines
- Potential for knowledge panel in Google Search

### 2. **Enhanced Meta Tags**
Updated in `app/layout.tsx`:

```typescript
- Title template for dynamic page titles
- Comprehensive description with keywords
- Open Graph tags for social media sharing
- Twitter Card tags for Twitter previews
- Format detection controls
- Canonical URLs
- Robots meta tags
```

### 3. **Comprehensive Sitemap**
Enhanced `app/sitemap.ts` with:

- Main routes (/, /timeline, /resume-subdomain)
- Section anchors (#about, #project, #experience, #resume, #contact)
- Proper priority and change frequency settings
- Last modified timestamps

### 4. **Optimized robots.txt**
Enhanced `app/robots.ts` with:

- Allow all search engines
- Special rules for Googlebot
- Crawl delay configuration
- Sitemap reference
- Host specification

### 5. **Keywords & Metadata**
Updated `lib/site.ts` with:

- Comprehensive keyword list
- Author information
- Social media links
- Improved site description

## 🚀 Google Search Console Setup

### Step 1: Verify Your Website

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter your domain (e.g., `bamanguragain.com.np`)
4. Choose verification method:

#### HTML Tag Method (Recommended):
1. Copy the verification meta tag
2. Add it to `app/layout.tsx`:
   ```typescript
   verification: {
     google: "your-verification-code-here", // Replace with actual code
   },
   ```
3. Rebuild and deploy your site
4. Click "Verify" in Google Search Console

### Step 2: Submit Sitemap

1. In Google Search Console, go to "Sitemaps" (left sidebar)
2. Enter your sitemap URL:
   ```
   https://bamanguragain.com.np/sitemap.xml
   ```
3. Click "Submit"

**Note:** It may take a few days for Google to crawl your sitemap.

### Step 3: Monitor Performance

Check these sections regularly:

- **Performance**: See search queries, clicks, and impressions
- **Coverage**: Monitor indexed pages and errors
- **Enhancements**: Check for mobile usability and Core Web Vitals
- **Links**: See internal and external links

## 📱 Mobile Optimization

### Implemented Features:

1. **Responsive Meta Viewport**
   - Proper viewport configuration
   - Maximum scale to prevent zoom issues
   - User-scalable enabled for accessibility

2. **Touch-Friendly Buttons**
   - Minimum 44x44px touch targets
   - Added `touch-manipulation` CSS
   - Improved tap highlight colors

3. **Mobile-Specific Layouts**
   - Responsive navigation with abbreviated text on mobile
   - Swipe gestures on project carousel
   - Stacked buttons on mobile
   - Optimized modal sizes

4. **Performance Optimizations**
   - iOS smooth scrolling
   - Prevent horizontal scroll bounce
   - Optimized font sizes (no zoom on input focus)
   - Better text size adjustment

## 🎯 Best Practices for SEO

### Content:

1. **Keep descriptions updated**: Edit `lib/site.ts` when you add new skills or change focus
2. **Update project descriptions**: Use clear, keyword-rich descriptions
3. **Add alt text to images**: Already implemented in all image components
4. **Regular content updates**: Update projects, experiences, and skills regularly

### Technical:

1. **Monitor Core Web Vitals**: Check Google Search Console regularly
2. **Fix broken links**: Ensure all GitHub links and social media links work
3. **Optimize images**: Keep images under recommended sizes
4. **Test mobile usability**: Use Google's Mobile-Friendly Test

### Social Media:

1. **Add Open Graph image**: Create `public/og-image.png` (1200x630px)
   - Should include your name and title
   - Use your brand colors (neon green on dark)
   - Keep text large and readable

2. **Update social handles**:
   - Twitter: Update `twitter.creator` in `app/layout.tsx`
   - LinkedIn, GitHub, etc.: Already configured in `lib/site.ts`

## 📈 SEO Checklist

### Before Launch:
- [ ] Replace Google verification code in `app/layout.tsx`
- [ ] Create and add `public/og-image.png` (1200x630px)
- [ ] Update all social media links in `lib/site.ts`
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify sitemap generates correctly

### After Launch:
- [ ] Submit sitemap to Google Search Console
- [ ] Request indexing for main pages
- [ ] Monitor "Coverage" for errors
- [ ] Check mobile usability report
- [ ] Share on social media (tests Open Graph tags)
- [ ] Test rich results with [Google's Rich Results Test](https://search.google.com/test/rich-results)

### Monthly Maintenance:
- [ ] Check Google Search Console for errors
- [ ] Review search performance
- [ ] Update content (projects, blog posts, etc.)
- [ ] Check for broken links
- [ ] Monitor Core Web Vitals

## 🔧 Advanced Configuration

### Adding a Blog:

If you add a blog in the future:

1. Update `canonicalRoutes` in `lib/site.ts`
2. Add `BlogPosting` schema in `components/StructuredData.tsx`
3. Update sitemap to include blog posts

### Adding Multiple Languages:

1. Use Next.js i18n configuration
2. Add `hreflang` tags in layout
3. Update sitemap with language alternates

### Analytics Integration:

Add Google Analytics or similar:

1. Add tracking script to `app/layout.tsx`
2. Track custom events (project clicks, contact form submissions)
3. Monitor user behavior and optimize accordingly

## 🌐 International SEO

If targeting international audiences:

1. Use `hreflang` tags for language variants
2. Use country-specific domains or subdirectories
3. Consider CDN for faster global loading
4. Update Open Graph locale tags

## 📊 Monitoring Tools

### Recommended Tools:

1. **Google Search Console**: Monitor search performance and indexing
2. **Google Analytics**: Track user behavior and conversions
3. **PageSpeed Insights**: Monitor Core Web Vitals
4. **Mobile-Friendly Test**: Test mobile usability
5. **Rich Results Test**: Verify structured data
6. **Lighthouse**: Audit performance, accessibility, SEO

### Running Lighthouse:

```bash
# Install globally
npm install -g lighthouse

# Run audit
lighthouse https://bamanguragain.com.np --view
```

## 🎨 Creating Open Graph Image

Create `public/og-image.png` with these specifications:

- **Size**: 1200x630px
- **Format**: PNG or JPG
- **File size**: Under 300KB
- **Content**: 
  - Your name in large text
  - Your title/tagline
  - Optional: Logo or avatar
  - Use your brand colors (#39ff14 on #0a0a0a)

**Design Tool Recommendations:**
- Canva (easy, templates available)
- Figma (professional)
- OG Image Playground (online tool)

## 🚦 Performance Tips

1. **Optimize Images**: Use WebP format when possible
2. **Enable Compression**: Vercel handles this automatically
3. **Use CDN**: Vercel provides global CDN
4. **Minimize JavaScript**: Already optimized with Next.js
5. **Lazy Load Images**: Using Next.js Image component (already implemented)

## 📞 Support Resources

- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Web.dev SEO Guides](https://web.dev/learn/seo/)

---

**Last Updated:** February 5, 2026

For questions or issues, refer to the main documentation or open an issue on GitHub.
