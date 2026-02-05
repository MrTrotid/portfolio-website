# Personal Portfolio Website - Terminal Aesthetic

A modern, terminal-themed portfolio website with CRT screen effects, scanlines, and cybersecurity aesthetics built with Next.js, Tailwind CSS, shadcn/ui, and Framer Motion.

## ✨ Features

- 🖥️ **Terminal Aesthetic** - CRT screen effects, scanlines, grid patterns, and vignette overlays
- 🎯 **Interactive Elements** - Name hover transformation (Baman → Batman with glitch effect)
- 🕹️ **Peel-to-reveal easter egg** - Hidden mini game under a peel overlay in hero
- 🧭 **Floating nav plateaus** - Left/right floating CTA stacks with subtle lift animations and green under-glow
- 🚀 **Built with Next.js 16** and React 19
- 💅 **Styled with Tailwind CSS v4** - Custom terminal-themed animations
- 🎭 **Smooth animations** with Framer Motion - Page transitions, carousels, and scroll effects
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎯 **Single-page application** with smooth scrolling, active section tracking, and square caret “to top” control
- 📄 **Resume Integration** - View and download PDF resume functionality (hero floating button → `#resume`)
- 🎨 **Monospace Typography** - UI-monospace font stack for authentic terminal feel
- ⚡ **Loading Animations** - Terminal-styled loader with typing effects
- 🔍 **SEO Optimized** - Structured data, comprehensive meta tags, optimized sitemap
- 📲 **Mobile-First Design** - Touch-friendly interactions, swipe gestures, optimized layouts

## 📑 Sections

1. **Hero Section** - Introduction with Batman name transformation effect and CTA button
2. **About Me** - Personal introduction with "Who I am", "What I do", and integrated Skills subsection
3. **Projects** - Interactive carousel with 3 projects, detailed modals, and GitHub links
4. **Experience** - Dual-journey toggle (Professional vs Organisation/Club) with timeline entries
5. **Resume** - Inside Experience section (`#resume`) with view/download actions
6. **Testimonials** - Horizontal scrolling testimonials carousel with avatar images
7. **Contact** - Terminal window interface with social media links and icons (also in top nav)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd portfolio-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Update Assets

Replace these files in the `/public` directory:

- `/public/logo.svg` - Your logo (displayed in navigation)
- `/public/hero.svg` - Hero section image (500x500px recommended)
- `/public/resume.pdf` - Your actual resume PDF
- `/public/projects/` - Add project images (see [Image Guidelines](docs/IMAGE_GUIDELINES.md) for detailed specifications):
  - **Card thumbnails:** 800x400px (2:1 aspect ratio)
  - **Gallery images:** 1200x800px (3:2 aspect ratio) or 1920x1080px (16:9 aspect ratio)
  - Optimize for web (under 200KB for cards, under 500KB for gallery)

**📸 For detailed image specifications and best practices, see [docs/IMAGE_GUIDELINES.md](docs/IMAGE_GUIDELINES.md)**

### Update Content

#### Hero Section (`components/HeroSection.tsx`)
- Update your name and tagline
- Customize the Batman hover effect text if desired
- Modify the CTA button text
- Floating buttons: About, Projects, Experience, **Resume** (`#resume` anchor)
- Peel-to-reveal tic-tac-toe mini game copy/colors

#### About Section (`components/AboutSection.tsx`)
- Edit "Who I am" personal introduction
- Update "What I do" bullet points
- Modify skills in Frontend, Security, and Tools categories

#### Projects Section (`components/ProjectsSection.tsx`)
- Update the `projects` array with your actual projects:
  ```typescript
  {
    title: 'Your Project',
    subtitle: 'Project Type',
    description: 'Short description',
    fullDescription: 'Detailed description',
    techStack: ['Tech1', 'Tech2'],
    image: '/projects/your-image.png',        // Card: 800x400px
    images: ['/projects/img1.png'],           // Gallery: 1200x800px or 1920x1080px
    isGroupProject: false,
    priority: 1,                              // 1=Top, 2=Medium, 3=Low
    githubUrl: 'https://github.com/yourusername/repo'
  }
  ```
- See [Image Guidelines](docs/IMAGE_GUIDELINES.md) for recommended dimensions and optimization tips

#### Experience Section (`components/ExperienceSection.tsx`)
- Update `professionalExperiences` array with your work history
- Update `organizationExperiences` array with your club/organization roles
- Resume block lives here (`id="resume"`) with scroll margin to avoid overlapping the testimonial carousel
- Both sections include: role, company, period, description, and achievements

#### Contact Section (`components/ContactSection.tsx`)
- Update email address
- Update social media links (GitHub, LinkedIn, YouTube, Instagram)
- Add or remove contact methods as needed
- Linked from top navigation (`Contact`) and hero CTA handler

## 🎨 Terminal Effects & Styling

### Color Scheme

```css
--background: #0a0a0a (darkest background)
--card-bg: #1a1a1a (card backgrounds)
--base-bg: #323232 (base elements)
--neon-green: #39ff14 (primary accent)
--border-color: #2a2a2a (subtle borders)
```

### Custom Animations

The site includes several custom CSS animations in `app/globals.css`:

- `scanline` - Moving horizontal line effect (8s)
- `flicker` - CRT screen flicker (0.15s)
- `gridPulse` - Grid pattern pulsing (4s)
- `blinkCursor` - Terminal cursor blinking (0.5s)
- `typeAndDelete` - Terminal typing animation (4s)
- `glitchShift` - Batman name transformation glitch (0.3s)

## 🛠️ Tech Stack

- **Framework:** Next.js 16.1.3 (App Router)
- **React:** 19.2.3
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui (Card, Button)
- **Animations:** Framer Motion 12.26.2
- **Icons:** lucide-react
- **Fonts:** Monospace stack (ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas)

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css          # Global styles and terminal animations
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page with all sections
├── components/
│   ├── AboutSection.tsx      # About me with skills subsection
│   ├── ContactSection.tsx    # Terminal-style contact interface
│   ├── ExperienceSection.tsx # Dual-journey experience timeline
│   ├── HeroSection.tsx       # Landing with Batman effect
│   ├── Navigation.tsx        # Fixed header navigation
│   ├── ProjectsSection.tsx   # Project carousel with modals
│   ├── TerminalLoader.tsx    # Reusable loading component
│   ├── TestimonialCarousel.tsx # Testimonials with horizontal scroll
│   └── ui/
│       ├── button.tsx        # shadcn/ui button component
│       └── card.tsx          # shadcn/ui card component
├── lib/
│   ├── profile.ts            # Centralized data (about, experience, skills)
│   └── utils.ts              # Utility functions
├── public/
│   ├── documents/            # Document assets
│   ├── logos/                # Logo assets
│   ├── projects/             # Project images
│   └── resume.pdf            # Resume PDF file
├── components.json           # shadcn/ui configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and configure build settings
5. Deploy!

Your site will be live at `https://your-project.vercel.app`

### Deploy on Other Platforms

- **Netlify:** Connect GitHub repo and set build command to `npm run build`
- **GitHub Pages:** Requires static export configuration
- **Self-hosted:** Build with `npm run build` and serve the `.next` folder

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📚 Documentation

Complete guides for every aspect of your portfolio:

### Getting Started
- **[Next Steps](NEXT_STEPS.md)** 🚀 - Pre-deployment checklist and setup guide
- **[Quick Reference](docs/QUICK_REFERENCE.md)** ⚡ - Fast access to common tasks

### Customization & Development
- **[Customization Guide](docs/CUSTOMIZATION.md)** - How to customize content and styling
- **[Image Guidelines](docs/IMAGE_GUIDELINES.md)** - Project image specifications and optimization
- **[Mobile Guide](docs/MOBILE_GUIDE.md)** 📱 - Mobile optimization details and testing

### SEO & Search
- **[SEO Guide](docs/SEO_GUIDE.md)** 🔍 - SEO optimization and Google Search Console setup
- **[Indexing Guide](docs/INDEXING_GUIDE.md)** 📊 - Search engine indexing, sitemap, and schema markup

### Security & Production
- **[Security Documentation](docs/SECURITY.md)** 🔐 - Security headers, HTTPS, and best practices
- **[Deployment Guide](docs/DEPLOYMENT.md)** 🌐 - Deploy to Vercel, Netlify, or self-hosted

### Other
- **[Contributing Guide](CONTRIBUTING.md)** - How to contribute to this project
- **[Changelog](CHANGELOG.md)** - Version history and updates

### Documentation Priority Order
1. Start with [NEXT_STEPS.md](NEXT_STEPS.md) for deployment
2. Use [DEPLOYMENT.md](docs/DEPLOYMENT.md) for platform-specific instructions
3. Follow [INDEXING_GUIDE.md](docs/INDEXING_GUIDE.md) for Google Search setup
4. Reference [SECURITY.md](docs/SECURITY.md) for security implementation details

## 📝 License

MIT License - Copyright (c) 2026 Baman Prasad Guragain

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

Whether you're fixing bugs, improving documentation, or proposing new features, your help is appreciated.

## 📧 Contact

- **Email:** contact@bamanguragain.com.np
- **LinkedIn:** www.linkedin.com/in/mrtrotid/
- **GitHub:** github.com/MrTrotid

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide Icons](https://lucide.dev/) - Icon library

---

⭐ If you find this portfolio template useful, consider giving it a star on GitHub!

---

Built with ❤️ by Baman Prasad Guragain
