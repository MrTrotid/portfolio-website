# Image Guidelines for Portfolio Projects

## Project Card Images

**Location:** Project card thumbnails in the carousel  
**Dimensions:** `800px × 400px` (2:1 aspect ratio)  
**Format:** PNG, JPG, or WebP  
**File size:** Keep under 200KB for optimal performance  

### Specifications:
- **Container height:** 192px (12rem / h-48)
- **Display mode:** `object-cover` (image fills container, may crop edges)
- **Recommended aspect ratio:** 2:1 (landscape)
- **Path:** `/public/projects/`

### Best Practices:
- Use clear, high-contrast images that represent the project
- Ensure important content is centered (to avoid cropping)
- Optimize images for web (compress without losing quality)
- Use consistent styling across all project thumbnails

### Example:
```typescript
{
  title: 'Project Name',
  image: '/projects/project-name.png', // 800x400px
  images: ['/projects/project-name.png'],
  // ... other fields
}
```

---

## Gallery Images (Modal View)

**Location:** Full-size images in project detail modal  
**Dimensions:** `1200px × 800px` (3:2 aspect ratio) **or** `1920px × 1080px` (16:9 aspect ratio)  
**Format:** PNG, JPG, or WebP  
**File size:** Keep under 500KB per image  

### Specifications:
- **Container height:** 256px (16rem / h-64)
- **Display mode:** `object-cover` (image fills container, may crop edges)
- **Recommended aspect ratios:** 
  - 3:2 (e.g., 1200x800, 1800x1200)
  - 16:9 (e.g., 1920x1080, 1280x720)
- **Path:** `/public/projects/`

### Best Practices:
- Showcase key features or interface elements
- Use consistent dimensions for all gallery images in a project
- Include multiple perspectives (desktop, mobile, dashboards, etc.)
- Ensure text is readable and UI elements are clear
- Add descriptive alt text for accessibility

### Example:
```typescript
{
  title: 'Project Name',
  image: '/projects/project-card.png',     // Card thumbnail: 800x400
  images: [
    '/projects/project-screenshot-1.png',  // Gallery: 1200x800
    '/projects/project-screenshot-2.png',  // Gallery: 1200x800
    '/projects/project-screenshot-3.png',  // Gallery: 1200x800
  ],
  // ... other fields
}
```

---

## Image Optimization Tips

### Using Next.js Image Optimizer:
Next.js automatically optimizes images at build time or on-demand. To take full advantage:

1. **Place images in `/public` directory** (e.g., `/public/projects/`)
2. **Use relative paths** starting with `/` (e.g., `/projects/image.png`)
3. **Let Next.js handle responsive sizes** - it generates multiple sizes automatically

### Manual Optimization:
- Use tools like [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/), or ImageOptim
- Save for web at 75-85% quality for JPG
- Use PNG for images with transparency or sharp text
- Consider WebP format for better compression (browser support is excellent)

### File Naming Convention:
```
project-name.png          // Card thumbnail
project-name-1.png        // Gallery image 1
project-name-2.png        // Gallery image 2
project-name-mobile.png   // Mobile view
```

---

## Adding New Project Images

1. **Prepare your images** according to the dimensions above
2. **Place files** in `/public/projects/` directory
3. **Update project data** in `components/ProjectsSection.tsx`:

```typescript
{
  title: 'Your Project',
  subtitle: 'Project subtitle',
  description: 'Short description...',
  fullDescription: 'Full description...',
  techStack: ['React', 'Node.js'],
  image: '/projects/your-project.png',           // Card: 800x400
  images: [
    '/projects/your-project-1.png',               // Gallery: 1200x800
    '/projects/your-project-2.png',
  ],
  isGroupProject: false,
  priority: 2,
  githubUrl: 'https://github.com/username/repo',
}
```

4. **Test locally** to ensure images display correctly
5. **Commit and deploy**

---

## Troubleshooting

### Image not displaying:
- Verify file path is correct (case-sensitive)
- Check file exists in `/public/projects/`
- Ensure file extension matches (`.png`, `.jpg`, `.jpeg`, `.webp`)
- Clear Next.js cache: `rm -rf .next` and rebuild

### Image looks cropped:
- Verify image dimensions match recommended sizes
- Center important content in the image
- Adjust aspect ratio to 2:1 for cards, 3:2 or 16:9 for gallery

### Large file size / slow loading:
- Compress images before uploading
- Convert to WebP format
- Use appropriate dimensions (don't upload 4K images)
- Run `npm run build` to enable production optimizations
