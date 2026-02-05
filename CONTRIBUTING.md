# Contributing to Portfolio Website

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Submitting Changes](#submitting-changes)
- [Coding Standards](#coding-standards)
- [Documentation](#documentation)

---

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in your interactions.

### Expected Behavior

- Use welcoming and inclusive language
- Be respectful of differing viewpoints
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other contributors

---

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git for version control
- Basic knowledge of React, Next.js, and TypeScript

### Fork and Clone

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/portfolio-website.git
   cd portfolio-website
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/ORIGINAL-OWNER/portfolio-website.git
   ```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your changes.

---

## Development Process

### Branch Naming

Use descriptive branch names:

- `feature/add-blog-section` - New features
- `fix/carousel-navigation` - Bug fixes
- `docs/update-readme` - Documentation updates
- `refactor/optimize-images` - Code refactoring
- `style/improve-mobile-layout` - Styling changes

### Create a Branch

```bash
git checkout -b feature/your-feature-name
```

### Make Changes

1. **Write clean code** following the project's style
2. **Test thoroughly** on multiple screen sizes
3. **Commit frequently** with clear messages
4. **Keep commits atomic** - one logical change per commit

### Commit Messages

Use conventional commit format:

```
type(scope): brief description

Detailed explanation if needed.

Closes #issue-number
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style/formatting
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**

```bash
git commit -m "feat(projects): add project filtering by technology"
git commit -m "fix(navigation): resolve mobile menu overflow issue"
git commit -m "docs(readme): add deployment instructions"
```

### Sync with Upstream

Keep your fork up to date:

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

---

## Submitting Changes

### Before Submitting

- [ ] Code follows project style guidelines
- [ ] All tests pass: `npm run build`
- [ ] No console errors or warnings
- [ ] Tested on Chrome, Firefox, and Safari
- [ ] Tested on mobile and desktop
- [ ] Documentation updated if needed
- [ ] Commits are clean and well-described

### Create Pull Request

1. **Push your branch** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open Pull Request** on GitHub

3. **Fill out PR template** with:
   - Clear description of changes
   - Screenshots/videos if UI changes
   - Related issue numbers
   - Testing instructions

4. **Request review** from maintainers

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Related Issue
Closes #issue-number

## Screenshots
(if applicable)

## Testing
How to test these changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Tests pass locally
- [ ] Documentation updated
- [ ] No breaking changes
```

---

## Coding Standards

### TypeScript

- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid `any` - use specific types
- Export types that are reused

**Good:**
```typescript
interface Project {
  title: string;
  description: string;
  techStack: string[];
}

const project: Project = {
  title: "My Project",
  description: "Description here",
  techStack: ["React", "Next.js"]
};
```

**Avoid:**
```typescript
const project: any = { /* ... */ }; // Don't use 'any'
```

### React Components

- Use functional components
- Use TypeScript interfaces for props
- Keep components focused and small
- Extract reusable logic to hooks

**Component Structure:**
```typescript
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface MyComponentProps {
  title: string;
  items: string[];
}

export default function MyComponent({ title, items }: MyComponentProps) {
  const [active, setActive] = useState(false);

  return (
    <section className="...">
      {/* Component content */}
    </section>
  );
}
```

### Styling

- Use Tailwind CSS classes
- Keep custom CSS in `globals.css`
- Use CSS variables for colors
- Follow mobile-first approach

**Good:**
```typescript
<div className="flex flex-col md:flex-row gap-4 p-6">
  <span className="text-[var(--neon-green)]">Text</span>
</div>
```

**Avoid:**
```typescript
<div style={{ display: "flex", padding: "1.5rem" }}> {/* Prefer Tailwind */}
```

### File Organization

```
/components
  /ui                 # shadcn/ui components
  ComponentName.tsx   # Feature components

/lib
  profile.ts          # User data
  site.ts            # Site configuration
  utils.ts           # Utility functions

/app
  page.tsx           # Main page
  layout.tsx         # Root layout
  globals.css        # Global styles

/public
  /logos             # Logo assets
  /projects          # Project images

/docs
  *.md               # Documentation files
```

### Naming Conventions

- **Components:** PascalCase (`ProjectCard.tsx`)
- **Functions:** camelCase (`handleClick`)
- **Constants:** UPPER_SNAKE_CASE (`MAX_ITEMS`)
- **CSS Classes:** kebab-case or Tailwind classes
- **Files:** Match component name (`ProjectCard.tsx`)

---

## Documentation

### Update Documentation

When making changes, update relevant documentation:

- **README.md** - Setup, features, usage
- **CHANGELOG.md** - Document your changes
- **Code comments** - Explain complex logic
- **Type definitions** - Document interfaces/types

### Code Comments

Use JSDoc for functions and components:

```typescript
/**
 * Formats a date string to display format
 * @param date - ISO date string
 * @param format - Desired format (default: 'MMM YYYY')
 * @returns Formatted date string
 */
function formatDate(date: string, format = 'MMM YYYY'): string {
  // Implementation
}
```

### Component Documentation

Add brief description at top of component files:

```typescript
/**
 * ProjectCard Component
 * 
 * Displays a project with image, title, description, and tech stack.
 * Supports both solo and group project badges.
 * 
 * @param project - Project data object
 * @param onClick - Handler for card click
 */
export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  // Component code
}
```

---

## Areas for Contribution

### Looking for Contribution

We welcome contributions in these areas:

#### Features
- **Blog section** - Add technical writing capability
- **Project filtering** - Filter projects by technology
- **Contact form** - Backend integration for contact form
- **Analytics** - Add privacy-friendly analytics
- **RSS feed** - For blog posts
- **Search functionality** - Site-wide search

#### Improvements
- **Performance optimization** - Lighthouse score improvements
- **Accessibility** - WCAG compliance improvements
- **Mobile experience** - Enhanced mobile interactions
- **SEO** - Better search engine optimization
- **Testing** - Unit and integration tests

#### Documentation
- **Code examples** - More usage examples
- **Tutorials** - Step-by-step guides
- **API documentation** - Document component APIs
- **Video guides** - Screen recordings for features

#### Design
- **Animations** - New terminal-style animations
- **Components** - New reusable components
- **Themes** - Alternative color schemes
- **Icons** - Custom terminal-style icons

---

## Getting Help

### Questions

- Open a GitHub Discussion for general questions
- Check existing issues and PRs first
- Join our community (if available)

### Issues

- **Bug reports:** Use bug report template
- **Feature requests:** Use feature request template
- **Security issues:** Email privately (don't open public issue)

### Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

## Recognition

Contributors will be recognized in:
- CHANGELOG.md for each release
- README.md contributors section
- GitHub contributors graph

Thank you for contributing! 🎉
