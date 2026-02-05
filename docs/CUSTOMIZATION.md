# Customization Guide

This guide will help you customize the portfolio website to make it your own.

## Table of Contents

- [Quick Start](#quick-start)
- [Personal Information](#personal-information)
- [Sections](#sections)
- [Styling](#styling)
- [Assets](#assets)
- [Advanced Customization](#advanced-customization)

---

## Quick Start

The main content is stored in two files:

1. **`lib/profile.ts`** - All your personal data (skills, experiences, links)
2. **`components/ProjectsSection.tsx`** - Project portfolio data

Start by updating these files with your information.

---

## Personal Information

### Update Contact Links

Edit `lib/profile.ts`:

```typescript
export const profile = {
  links: {
    email: 'your.email@example.com',
    github: 'https://github.com/yourusername',
    linkedin: 'https://www.linkedin.com/in/yourusername/',
    youtube: 'https://www.youtube.com/@yourusername',
    instagram: 'https://www.instagram.com/yourusername/',
  },
  // ...
}
```

These links appear in:
- Navigation bar (Contact dropdown)
- Contact Section terminal window
- Footer

### Update About Section

```typescript
about: {
  whoIAm: "Your introduction here...",
  whatIDo: [
    'Activity 1',
    'Activity 2',
    'Activity 3',
  ],
},
```

### Update Skills

```typescript
skills: [
  { category: 'Category 1', skills: ['Skill A', 'Skill B', 'Skill C'] },
  { category: 'Category 2', skills: ['Skill D', 'Skill E'] },
  { category: 'Category 3', skills: ['Skill F', 'Skill G', 'Skill H'] },
],
```

---

## Sections

### Hero Section

**File:** `components/HeroSection.tsx`

Update your name and tagline:

```typescript
<h1 className="text-5xl md:text-6xl font-bold font-mono leading-tight">
  YourName is a{' '}
  <span className="text-[var(--neon-green)]">your-role</span> and
  <br />
  <span className="whitespace-nowrap">
    <span className="text-[var(--neon-green)]">your-specialty</span>{' '}
    <span className="text-white">enthusiast</span>
  </span>
</h1>

<p className="text-lg md:text-xl text-gray-400 font-mono">
  Your tagline here
</p>
```

**Optional:** Hide or show the mini tic-tac-toe game:

```typescript
const [showGame, setShowGame] = useState(false); // Set to false to hide initially
```

### Projects Section

**File:** `components/ProjectsSection.tsx`

Add/edit projects in the `projects` array:

```typescript
const projects = [
  {
    title: 'Project Name',
    subtitle: 'Short descriptor',
    description: 'Brief description (1-2 sentences)',
    fullDescription: 'Detailed description for modal (2-3 sentences)',
    techStack: ['Tech1', 'Tech2', 'Tech3'],
    image: '/projects/project-card.png',      // 800x400px
    images: ['/projects/project-gallery.png'], // 1200x800px or 1920x1080px
    isGroupProject: false,                     // true for team projects
    priority: 1,                               // 1=Top, 2=Medium, 3=Low
    githubUrl: 'https://github.com/username/repo',
  },
  // ... more projects
].sort((a, b) => a.priority - b.priority);
```

**Image Requirements:**
- See [docs/IMAGE_GUIDELINES.md](IMAGE_GUIDELINES.md) for detailed specifications
- Card images: 800×400px (2:1 ratio)
- Gallery images: 1200×800px (3:2) or 1920×1080px (16:9)

### Experience Section

**File:** `lib/profile.ts`

#### Professional Experience

```typescript
experiences: {
  professional: [
    {
      role: 'Your Job Title',
      company: 'Company Name',
      period: 'Start Date – End Date',
      description: 'Brief description of your role and responsibilities.',
      achievements: [
        'Achievement 1',
        'Achievement 2',
        'Achievement 3',
      ],
      logo: '/logos/company-logo.png', // optional
    },
    // ... more experiences
  ],
```

#### Organization/Club Experience

```typescript
  organization: [
    {
      role: 'Your Position',
      company: 'Organization Name',
      period: 'Start Date – End Date',
      description: 'Description of your involvement.',
      achievements: [
        'Contribution 1',
        'Contribution 2',
      ],
      logo: '/logos/org-logo.png', // optional
    },
    // ... more experiences
  ],
}
```

**Logo Requirements:**
- Place logos in `/public/logos/`
- Recommended size: 100×100px (square)
- Format: PNG with transparent background
- Optimize for web (under 50KB)

### Contact Section

All contact information is pulled from `lib/profile.ts` links.

To add/remove contact methods, edit `components/ContactSection.tsx`:

```typescript
const contacts = [
  { 
    name: 'Service Name', 
    value: 'username or link text',
    link: 'https://service.com/username',
    icon: IconComponent // from lucide-react
  },
  // ... more contacts
];
```

---

## Styling

### Color Scheme

**File:** `app/globals.css`

Main colors are defined in CSS variables:

```css
:root {
  --neon-green: #39ff14;    /* Primary accent */
  --card-bg: #0a0a0a;       /* Card backgrounds */
  --border-color: #39ff14;  /* Borders */
  --background: #0a0a0a;    /* Page background */
  --foreground: #ededed;    /* Text color */
}
```

To change the accent color, update `--neon-green` and `--border-color`.

### Terminal Effects

Customize terminal effects in `app/globals.css`:

```css
/* Grid pattern intensity */
.terminal-bg::before {
  opacity: 0.04; /* Lower = more subtle */
}

/* Scanline speed */
.terminal-bg::after {
  animation: scanline 8s linear infinite; /* Change 8s */
}

/* CRT flicker */
.crt-overlay {
  opacity: 0.4; /* Higher = more pronounced */
  animation: flicker 0.15s infinite; /* Change 0.15s */
}
```

**To disable effects entirely**, comment out or remove:

```css
/* .terminal-bg::before { ... }  - Grid pattern
/* .terminal-bg::after { ... }   - Scanline
/* .crt-overlay { ... }           - CRT flicker
```

### Typography

Font is defined in `app/globals.css` and `tailwind.config.ts`:

```css
body {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}
```

To change fonts, update both files or use Tailwind's font utilities.

---

## Assets

### Logo

**File:** `/public/logo.png`
- Displayed in navigation bar
- Recommended size: 40×40px (square)
- Format: PNG with transparent background

### Resume PDF

**File:** `/public/resume.pdf`
- Replace with your actual resume
- Linked from Experience section
- Keep file size under 2MB

### Favicon

**Files:** `/public/site.webmanifest`, `/public/favicon.ico`

Update site.webmanifest:

```json
{
  "name": "Your Name - Portfolio",
  "short_name": "Your Name",
  "description": "Your portfolio description"
}
```

Generate favicons using [favicon.io](https://favicon.io/) or similar.

---

## Advanced Customization

### Add New Sections

1. **Create component** in `/components/NewSection.tsx`
2. **Import in** `app/page.tsx`
3. **Add to navigation** in `components/Navigation.tsx`
4. **Add section ID** for smooth scrolling

Example structure:

```typescript
export default function NewSection() {
  return (
    <section id="new-section" className="flex items-center justify-center py-32 overflow-hidden">
      <div className="w-full px-6" style={{ maxWidth: '80rem', margin: '0 auto' }}>
        {/* Your content */}
      </div>
    </section>
  );
}
```

### Modify Animations

**File:** `app/globals.css`

Animations are defined using `@keyframes`. Example:

```css
@keyframes yourAnimation {
  0% { /* start state */ }
  100% { /* end state */ }
}

.your-element {
  animation: yourAnimation 2s ease-in-out infinite;
}
```

Framer Motion animations are in component files:

```typescript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* content */}
</motion.div>
```

### Environment Variables

Create `.env.local` for sensitive data:

```env
NEXT_PUBLIC_ANALYTICS_ID=your-id
NEXT_PUBLIC_API_URL=your-api-url
```

Access in code:

```typescript
const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;
```

### SEO & Metadata

**File:** `app/layout.tsx`

Update metadata:

```typescript
export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your portfolio description',
  keywords: ['your', 'keywords', 'here'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name - Portfolio',
    description: 'Your portfolio description',
    url: 'https://yoursite.com',
    siteName: 'Your Name Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}
```

---

## Tips & Best Practices

### Content

- **Keep descriptions concise** - Users scan, they don't read
- **Use active voice** - "Built X" instead of "X was built"
- **Quantify achievements** - "Improved performance by 40%" instead of "Improved performance"
- **Update regularly** - Keep projects and experience current

### Images

- **Optimize all images** before uploading (use tools like TinyPNG)
- **Use consistent dimensions** for a professional look
- **Add alt text** for accessibility
- **Test on multiple devices** to ensure images display correctly

### Performance

- **Run lighthouse audits** regularly: `npm run build && npm start`
- **Minimize animations** on mobile for better performance
- **Lazy load images** (Next.js Image component does this automatically)
- **Keep bundle size small** - avoid unnecessary dependencies

### Deployment

- **Test locally** before deploying: `npm run build && npm start`
- **Update .env variables** on deployment platform
- **Enable caching** for static assets
- **Monitor performance** after deployment

---

## Need Help?

- Check [README.md](../README.md) for setup instructions
- See [IMAGE_GUIDELINES.md](IMAGE_GUIDELINES.md) for image specifications
- Review [CHANGELOG.md](../CHANGELOG.md) for recent updates
- Open an issue on GitHub for bugs or questions

Happy customizing! 🚀
