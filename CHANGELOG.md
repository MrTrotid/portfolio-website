# Changelog

All notable changes to this portfolio website project.

## [1.2.1] - 2026-02-05 (Latest)

### 🔐 Security & Documentation
- **New Security Documentation**
  - Created `docs/SECURITY.md` with comprehensive security guidelines
  - Documented all security headers (HSTS, CSP, X-Frame-Options, etc.)
  - Added HSTS preload configuration guidance
  - Included vulnerability reporting procedures
  - Provided security compliance checklist (OWASP, NIST, CWE)

- **New Indexing Guide**
  - Created `docs/INDEXING_GUIDE.md` with complete search engine setup
  - Step-by-step Google Search Console verification (DNS and HTML tag methods)
  - Sitemap configuration and customization
  - Robots.txt detailed rules explanation
  - Structured data (schema markup) documentation with examples
  - Meta tags optimization guide
  - Testing and validation tools reference
  - Performance monitoring metrics and targets

- **New Deployment Guide**
  - Created `docs/DEPLOYMENT.md` with platform-specific instructions
  - Vercel deployment (recommended, easiest)
  - Netlify deployment alternative
  - Self-hosted Linux server setup with PM2, Nginx, and Let's Encrypt
  - Pre-deployment security checklist
  - SEO & indexing post-deployment steps
  - Monitoring and maintenance procedures
  - Continuous deployment (GitHub Actions) setup
  - Troubleshooting common deployment issues

- **Updated Documentation**
  - Enhanced `NEXT_STEPS.md` with comprehensive deployment checklist
  - Added deployment platform comparison
  - Included post-deployment monitoring schedule
  - Updated README.md with complete documentation hierarchy
  - Organized documentation by category (Getting Started, Customization, SEO, Security)

### 🎨 UI Text Wrapping Fixes
- **Fixed Text Truncation in Projects Section**
  - Removed `truncate` class from project card titles
  - Added `minWidth: 0` to flex containers for proper shrinking
  - Applied `wordBreak: 'break-word'` + `overflowWrap: 'break-word'` CSS
  - Fixed modal title text wrapping
  - Fixed modal description text wrapping
  - Project titles now wrap properly on mobile without being cut off

- **Fixed Text Truncation in Experience Section (Final Pass)**
  - Added `minWidth: 0` to all flex containers and child elements
  - Applied `wordBreak` CSS to role title, company, and description
  - Fixed achievement list text wrapping
  - Added `minWidth: 0` to achievement items and description paragraph
  - Ensured bullet points don't prevent text wrapping with `flex-shrink-0`
  - Applied comprehensive word-break properties across all experience content
  - Fixed resume section header and description text wrapping

### ✅ Testing & Verification
- All pages compile without TypeScript errors
- Production builds complete successfully (no warnings)
- Text wrapping verified across mobile and desktop breakpoints
- Responsive layout tested on various screen sizes
- Component re-renders stable with new flex constraints

## [1.2.0] - 2026-02-05

### 🔍 SEO Enhancements
- **Structured Data (JSON-LD)**
  - Added Person schema with professional information and social links
  - Added Website schema with search functionality
  - Added ProfilePage schema with metadata
  - Improves rich search results and knowledge panel eligibility

- **Enhanced Meta Tags**
  - Title templates for dynamic page titles
  - Comprehensive Open Graph tags for social media sharing
  - Twitter Card optimization with large image support
  - Format detection controls
  - Google Search Console verification placeholder
  - Proper canonical URLs

- **Sitemap Improvements**
  - Added section anchors (#about, #project, #experience, #resume, #contact)
  - Better priority and change frequency configuration
  - Proper lastModified timestamps

- **Robots.txt Optimization**
  - Specific rules for Googlebot and Googlebot-Image
  - Crawl delay configuration
  - Disallow /api/ directory

- **Keywords & Metadata**
  - Expanded keyword list (20+ relevant keywords)
  - Author information with social links
  - Improved site description for better search snippet

### 📱 Mobile Optimizations
- **Touch-Friendly Interactions**
  - Minimum 44x44px touch targets on all interactive elements
  - Added `touch-manipulation` CSS for better responsiveness
  - Improved tap highlight colors
  - Better button spacing and sizing

- **Navigation Improvements**
  - Compact layout on mobile with abbreviated text ("About" instead of "About me")
  - Active state shows background color on mobile
  - Responsive logo sizing (24px → 40px)
  - Larger back-to-top button (48x48px minimum)

- **Hero Section Mobile**
  - Responsive text sizing (3xl → 6xl)
  - Game widget scales appropriately
  - Better padding and spacing on small screens
  - Touch-optimized reveal button

- **Projects Section Mobile**
  - Swipe gestures for navigation (drag to change projects)
  - Ultra-compact navigation indicators optimized for mobile:
    - Active: Micro bar (8x2px mobile, 32x8px desktop) with neon green glow
    - Inactive: Micro dots (2x2px mobile, 8x8px desktop) in gray
    - Minimal 4px spacing for subtle, clean appearance
  - **Fixed UI breaking on project switch:**
    - Responsive gap spacing (16px mobile, 24px desktop)
    - Improved cardWidth calculation with proper floor() rounding
    - Better animation x-position calculation to prevent layout shifts
    - Proper style handling for motion.div width computation
    - Added explicit flex display property for stable rendering
  - Arrow buttons hidden on mobile (< 640px) - swipe gestures and dots for navigation
  - Unified card design across mobile and desktop for consistency:
    - Smaller images (128px mobile → 160px sm → 192px desktop)
    - Responsive titles (16px → 18px → 24px)
    - Hidden subtitle on mobile screens (visible sm+)
    - Compact padding (12px mobile → 16px sm → 24px desktop)
    - Line-clamp-2 descriptions on mobile (vs line-clamp-3 desktop)
    - Smaller tech badges (10px text mobile → 12px desktop)
    - Vertically stacked buttons on mobile (44px height)
  - Arrow navigation visible on desktop (≥ 640px)
  - Mobile-optimized modal with stacked buttons
  - Responsive gallery images (192px → 256px)

- **Experience Section Mobile**
  - Vertically stacked toggle buttons on mobile (44x44px each)
  - Abbreviated button text ("$ professional" vs "$ my_professional_journey")
  - Responsive card layouts with proper spacing
  - Touch-optimized experience cards

- **Contact Section Mobile**
  - Flexible link layout (stacks on mobile)
  - Truncated text for long URLs
  - Minimum 44px touch targets
  - Responsive terminal header and content
  - Abbreviated footer text on mobile

- **Global Mobile Enhancements**
  - iOS smooth scrolling (`-webkit-overflow-scrolling: touch`)
  - Prevent text size adjustment on orientation change
  - Better tap highlight colors
  - Prevent horizontal scroll bounce
  - Image drag prevention
  - 16px font size on inputs (prevents iOS zoom)

### 📚 New Documentation
- **SEO_GUIDE.md**
  - Complete SEO optimization guide
  - Google Search Console setup instructions
  - Sitemap submission guide
  - Performance monitoring tips
  - Open Graph image creation guide

- **MOBILE_GUIDE.md**
  - Mobile optimization best practices
  - Touch target guidelines
  - Responsive design patterns
  - Testing procedures for mobile devices
  - Platform-specific considerations (iOS/Android)

### 🐛 Bug Fixes
- Fixed middleware deprecation warning (migrated to proxy.ts)
- Improved responsive text sizing across all sections
- Fixed modal overflow issues on small screens
- Corrected touch target sizes throughout the site

### 🔧 Technical Improvements
- Migrated from middleware.ts to proxy.ts (Next.js 16 convention)
- Added viewport meta tag with proper mobile settings
- Improved CSS for iOS and Android compatibility
- Better font rendering and smoothing
- Optimized overflow behavior

---

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
