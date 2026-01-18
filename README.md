# Personal Portfolio Website - Terminal Aesthetic

A modern, terminal-themed portfolio website with CRT screen effects, scanlines, and cybersecurity aesthetics built with Next.js, Tailwind CSS, shadcn/ui, and Framer Motion.

## ✨ Features

- 🖥️ **Terminal Aesthetic** - CRT screen effects, scanlines, grid patterns, and vignette overlays
- 🎯 **Interactive Elements** - Name hover transformation (Baman → Batman with glitch effect)
- 🚀 **Built with Next.js 16** and React 19
- 💅 **Styled with Tailwind CSS v4** - Custom terminal-themed animations
- 🎭 **Smooth animations** with Framer Motion - Page transitions, carousels, and scroll effects
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎯 **Single-page application** with smooth scrolling and active section tracking
- 📄 **Resume Integration** - View and download PDF resume functionality
- 🎨 **Monospace Typography** - UI-monospace font stack for authentic terminal feel
- ⚡ **Loading Animations** - Terminal-styled loader with typing effects

## 📑 Sections

1. **Hero Section** - Introduction with Batman name transformation effect and CTA button
2. **About Me** - Personal introduction with "Who I am", "What I do", and integrated Skills subsection
3. **Projects** - Interactive carousel with 3 projects, detailed modals, and GitHub links
4. **Experience** - Dual-journey toggle (Professional vs Organisation/Club) with timeline entries
5. **Testimonials** - Horizontal scrolling testimonials carousel with avatar images
6. **Contact** - Terminal window interface with social media links and icons

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
- `/public/projects/` - Add project images:
  - `aqsentinel.png` - AQ Sentinel project image
  - `sherlock.png` - Sherlock Scramble project image
  - `portfolio.png` - Portfolio website preview

### Update Content

#### Hero Section (`components/HeroSection.tsx`)
- Update your name and tagline
- Customize the Batman hover effect text if desired
- Modify the CTA button text

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
    image: '/projects/your-image.png',
    images: ['/projects/img1.png', '/projects/img2.png'],
    isGroupProject: false,
    githubUrl: 'https://github.com/yourusername/repo'
  }
  ```

#### Experience Section (`components/ExperienceSection.tsx`)
- Update `professionalExperiences` array with your work history
- Update `organizationExperiences` array with your club/organization roles
- Both sections include: role, company, period, description, and achievements

#### Contact Section (`components/ContactSection.tsx`)
- Update email address
- Update social media links (GitHub, LinkedIn, YouTube, Instagram)
- Add or remove contact methods as needed

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

## 📝 License

MIT License - Copyright (c) 2026 Baman Prasad Guragain

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find bugs or have suggestions, please open an issue!

## 📧 Contact

- **Email:** contact@bamanguragain.com.np
- **LinkedIn:** www.linkedin.com/in/mrtrotid/

---

Built with ❤️ by Baman Prasad Guragain
