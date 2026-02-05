# Quick Reference Guide

Quick links to commonly needed information.

## 🚀 Quick Start

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:3000)
npm run build        # Build for production
npm start            # Run production build
```

## 📝 Update Content

| What to Update | File Location | Documentation |
|----------------|---------------|---------------|
| Personal info, skills, experience | `lib/profile.ts` | [Customization Guide](CUSTOMIZATION.md#personal-information) |
| Projects | `components/ProjectsSection.tsx` | [Customization Guide](CUSTOMIZATION.md#projects-section) |
| Hero section text | `components/HeroSection.tsx` | [Customization Guide](CUSTOMIZATION.md#hero-section) |
| Colors & styling | `app/globals.css` | [Customization Guide](CUSTOMIZATION.md#styling) |
| Contact links | `lib/profile.ts` | [Customization Guide](CUSTOMIZATION.md#update-contact-links) |

## 🖼️ Add Images

| Image Type | Dimensions | Location | Guide |
|------------|-----------|----------|-------|
| Project cards | 800×400px | `/public/projects/` | [Image Guidelines](IMAGE_GUIDELINES.md#project-card-images) |
| Gallery images | 1200×800px or 1920×1080px | `/public/projects/` | [Image Guidelines](IMAGE_GUIDELINES.md#gallery-images-modal-view) |
| Company logos | 100×100px | `/public/logos/` | [Customization Guide](CUSTOMIZATION.md#experience-section) |
| Site logo | 40×40px | `/public/logo.png` | [Customization Guide](CUSTOMIZATION.md#logo) |

## 🎨 Styling Quick Reference

### Main Colors (in `app/globals.css`)

```css
--neon-green: #39ff14;    /* Primary accent */
--card-bg: #0a0a0a;       /* Card backgrounds */
--background: #0a0a0a;    /* Page background */
--border-color: #39ff14;  /* Borders */
```

### Terminal Effects

| Effect | Toggle Location | Line Number |
|--------|----------------|-------------|
| Grid pattern | `app/globals.css` | Line ~128 |
| Scanline | `app/globals.css` | Line ~147 |
| CRT flicker | `app/globals.css` | Line ~163 |

**To disable:** Comment out the corresponding CSS block.

## 📦 Project Structure

```
/app
  layout.tsx          - Root layout & metadata
  page.tsx            - Main page composition
  globals.css         - Global styles & animations

/components
  HeroSection.tsx     - Hero/landing section
  AboutSection.tsx    - About & Skills
  ProjectsSection.tsx - Project carousel
  ExperienceSection.tsx - Work & organization history
  ContactSection.tsx  - Contact information
  Navigation.tsx      - Header navigation
  /ui                 - shadcn/ui components

/lib
  profile.ts          - Personal data
  site.ts             - Site configuration
  utils.ts            - Utility functions

/public
  /logos              - Company/org logos
  /projects           - Project images
  logo.png            - Site logo
  resume.pdf          - Your resume

/docs
  CUSTOMIZATION.md    - Customization guide
  IMAGE_GUIDELINES.md - Image specifications
  QUICK_REFERENCE.md  - This file
```

## 🔧 Common Tasks

### Add a New Project

1. **Add image** to `/public/projects/` (800×400px)
2. **Edit** `components/ProjectsSection.tsx`
3. **Insert** project object in `projects` array:
   ```typescript
   {
     title: 'Project Name',
     subtitle: 'Brief description',
     description: 'Card description (1-2 sentences)',
     fullDescription: 'Modal description (2-3 sentences)',
     techStack: ['Tech1', 'Tech2'],
     image: '/projects/project-name.png',
     images: ['/projects/project-name-1.png'],
     isGroupProject: false,
     priority: 2,
     githubUrl: 'https://github.com/username/repo',
   }
   ```

### Add Work Experience

1. **Add logo** to `/public/logos/` (optional, 100×100px)
2. **Edit** `lib/profile.ts`
3. **Add to** `experiences.professional` array:
   ```typescript
   {
     role: 'Job Title',
     company: 'Company Name',
     period: 'Jan 2024 – Present',
     description: 'Role description...',
     achievements: [
       'Achievement 1',
       'Achievement 2',
     ],
     logo: '/logos/company.png',
   }
   ```

### Add Organization/Club Experience

Same as work experience, but add to `experiences.organization` array.

### Update Skills

**Edit** `lib/profile.ts` → `skills` array:

```typescript
skills: [
  { category: 'Category Name', skills: ['Skill 1', 'Skill 2'] },
  // Add more categories
],
```

### Change Accent Color

**Edit** `app/globals.css`:

```css
:root {
  --neon-green: #yourcolor;  /* Change this */
  --border-color: #yourcolor; /* And this */
}
```

### Update Contact Links

**Edit** `lib/profile.ts` → `links` object:

```typescript
links: {
  email: 'your@email.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  // Add/remove as needed
},
```

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Image not showing | Check file path, case-sensitivity, file exists |
| Layout breaking on zoom | Check max-width constraints, overflow settings |
| Build errors | Run `npm install`, check for TypeScript errors |
| Styling not applied | Clear `.next` folder, rebuild project |
| Changes not visible | Hard refresh (Ctrl+Shift+R), check file saved |

### Clear Next.js Cache

```bash
rm -rf .next
npm run dev
```

## 📱 Testing Checklist

Before deploying, test:

- [ ] Desktop view (Chrome, Firefox, Safari)
- [ ] Mobile view (iOS Safari, Android Chrome)
- [ ] Tablet view
- [ ] All links work
- [ ] Images load correctly
- [ ] Smooth scrolling works
- [ ] Navigation highlights active section
- [ ] Project modals open/close properly
- [ ] Contact links work
- [ ] Resume downloads

## 🚀 Deployment Commands

### Vercel
```bash
vercel       # Deploy to preview
vercel --prod # Deploy to production
```

### Netlify
```bash
netlify deploy              # Deploy to preview
netlify deploy --prod       # Deploy to production
```

### Build Locally
```bash
npm run build
npm start
```

## 📚 Documentation Index

- **[README.md](../README.md)** - Project overview & setup
- **[CUSTOMIZATION.md](CUSTOMIZATION.md)** - Detailed customization guide
- **[IMAGE_GUIDELINES.md](IMAGE_GUIDELINES.md)** - Image specifications
- **[CONTRIBUTING.md](../CONTRIBUTING.md)** - Contributing guidelines
- **[CHANGELOG.md](../CHANGELOG.md)** - Version history

## 🆘 Need Help?

1. Check documentation above
2. Search [existing issues](https://github.com/yourusername/portfolio-website/issues)
3. Open a [new issue](https://github.com/yourusername/portfolio-website/issues/new)
4. Read [Next.js docs](https://nextjs.org/docs)

---

**Last Updated:** February 5, 2026
