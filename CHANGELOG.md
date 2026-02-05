# Changelog

All notable changes to this portfolio website project.

## [1.1.0] - 2026-02-05

### 🎨 UI/UX Improvements
- **Projects Section Enhancements**
  - Added project priority system (1=Top, 2=Medium, 3=Low)
  - Implemented 2-project carousel view on larger screens
  - Added circular navigation (wrap-around arrows)
  - Fixed image display with proper aspect ratios
  - Improved project card layout and spacing

- **New Project Added**
  - MeroAushadhi: Medicine information platform for Nepali users
  - Third place hackathon winner project
  - Tech stack: React, Supabase, Flowise, Google Generative AI, Framer Motion

- **Hero Section Updates**
  - Removed Batman hover effect
  - Removed Contact button from hero
  - Removed hero image for cleaner layout
  - Improved responsive grid layout to prevent overlapping

- **Navigation Improvements**
  - Made navigation fully responsive
  - Added whitespace-nowrap to prevent text wrapping
  - Improved button stability on zoom
  - Fixed z-index for back-to-top button

### 🐛 Bug Fixes
- **Layout Stability**
  - Fixed overlapping content when zooming in/out
  - Added overflow protection to all sections
  - Standardized max-widths across components (80rem)
  - Changed grid layouts to flexbox with min/max constraints
  - Fixed project carousel navigation arrows positioning

- **Image Handling**
  - Fixed project card image spacing
  - Switched to object-cover for proper image fills
  - Added proper padding to card components
  - Fixed gallery image display in project modals

- **Experience Section**
  - Made role/date header flex-wrap for small screens
  - Fixed text overlapping issues

### 📚 Documentation
- **New Documentation Added**
  - Created comprehensive IMAGE_GUIDELINES.md
    - Documented recommended image dimensions (800x400px cards, 1200x800px gallery)
    - Added image optimization tips and best practices
    - Included troubleshooting section for common issues
  - Created detailed CUSTOMIZATION.md
    - Complete guide for all sections (Hero, About, Projects, Experience, Contact)
    - Styling and theme customization instructions
    - Logo and asset replacement guidance
  - Created CONTRIBUTING.md
    - Contribution guidelines and code of conduct
    - Development workflow and standards
    - Coding conventions and commit message format
  - Created QUICK_REFERENCE.md ⚡
    - Fast access to common tasks
    - Quick styling reference table
    - Common troubleshooting guide
    - Links to all documentation
  - Updated README.md with comprehensive documentation links
  - Added JSDoc comments throughout lib/profile.ts
  - Added inline comments in ProjectsSection component

- **Logo Updates**
  - Added ICMB logo for Information Technology Officer role
  - Updated all references to use correct logo paths

### 🔧 Technical Changes
- **Global CSS Updates**
  - Added overflow-x: hidden to html and sections
  - Added max-width: 100vw constraints
  - Improved box-sizing for all elements
  - Added responsive image sizing rules

- **Component Refactoring**
  - AboutSection: Changed to flex-wrap layout with constraints
  - ExperienceSection: Made headers responsive
  - ContactSection: Stabilized container width
  - ProjectsSection: Improved carousel sizing logic with ResizeObserver
  - Navigation: Added responsive gaps and flex-shrink protection

### 🎯 Project Priority Sorting
Projects now display in priority order:
1. Priority 1: AQ Sentinel, MeroAushadhi
2. Priority 2: Portfolio
3. Priority 3: Sherlock Scramble Solver

---

## [1.0.0] - 2026-01-18

### 🎉 Initial Release

#### ✨ Features Added
- **Terminal/Hacker Aesthetic Design**
  - CRT screen effects with scanlines and flicker
  - Grid pattern overlay with pulse animation
  - Vignette effect for authentic terminal feel
  - Monospace typography throughout

- **Hero Section**
  - Interactive name transformation (Baman → Batman)
  - Glitch animation effect on hover
  - Call-to-action button with terminal styling

- **About Me Section**
  - Personal introduction with "Who I am" and "What I do"
  - Integrated Skills subsection
  - 3 skill categories: Frontend, Security, Tools & Others
  - Terminal-styled headers and layout

- **Projects Section**
  - Interactive project carousel with 3 featured projects
  - Detailed project modals with descriptions and tech stacks
  - Image gallery support
  - GitHub repository links
  - Arrow navigation and dot indicators

- **Experience Section**
  - Dual-journey toggle system
  - Professional Journey with work experience
  - Organisation/Club Journey with community roles
  - Timeline entries with achievements
  - Resume integration (View & Download buttons)

- **Contact Section**
  - Terminal window interface design
  - Colored control buttons (red, yellow, green)
  - Social media links with icons
  - Interactive hover states
  - Blinking cursor animation

- **Navigation System**
  - Fixed header with active section tracking
  - Smooth scroll to sections
  - Animated underline indicator
  - Responsive mobile menu

- **Loading Experience**
  - Terminal-styled loader component
  - Typing animation effect
  - Full-page loader on initial visit

#### 🛠️ Technical Implementation
- Next.js 16.1.3 with App Router
- React 19.2.3
- TypeScript 5
- Tailwind CSS v4
- Framer Motion 12.26.2 for animations
- shadcn/ui components (Button, Card)
- lucide-react icon library

#### 🎨 Design System
- Color scheme: Neon green (#39ff14) on dark backgrounds (#0a0a0a, #1a1a1a)
- Custom CSS animations for terminal effects
- Responsive design for all screen sizes
- Terminal aesthetic maintained across all components

#### 📦 Project Structure
- Component-based architecture
- Reusable UI components
- Centralized styling in globals.css
- Public assets organized by type

### 🔧 Configuration
- Git repository initialized
- MIT License added
- ESLint and TypeScript configurations
- Tailwind CSS v4 setup
- Next.js optimized build settings

---

## Future Enhancements

### Planned Features
- [ ] Blog section for technical articles
- [ ] Dark/light mode toggle (maintain terminal aesthetic)
- [ ] More project additions
- [ ] Testimonials section
- [ ] Skills proficiency indicators
- [ ] Project filtering by technology
- [ ] Contact form with backend integration
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Performance improvements

### Ideas Under Consideration
- [ ] Easter eggs and hidden terminal commands
- [ ] Matrix rain effect option
- [ ] Sound effects for interactions
- [ ] Animated terminal command demonstrations
- [ ] Certificate/achievement gallery
- [ ] Interactive timeline visualization

---

**Note:** Version numbers follow [Semantic Versioning](https://semver.org/).
