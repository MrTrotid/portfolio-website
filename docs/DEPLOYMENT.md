# Deployment Guide

Complete guide to deploying the portfolio website to production with security and performance best practices.

## 🚀 Deployment Platforms

### Recommended: Vercel (Easiest)

Vercel is the official Next.js hosting platform with automatic deployments and optimizations.

#### Setup Steps:

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add any required variables (if needed)
   - Redeploy after adding variables

4. **Custom Domain**
   - Go to Project Settings → Domains
   - Add your domain: `bamanguragain.com.np`
   - Follow DNS setup instructions
   - Add `www` subdomain for redirect

5. **Deploy**
   ```bash
   git push origin main  # Automatic deployment
   ```

**Benefits:**
- ✅ Automatic HTTPS
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ One-click rollbacks
- ✅ Zero downtime deployments
- ✅ Automatic builds

---

### Alternative: Netlify

Good alternative to Vercel with similar features.

#### Setup Steps:

1. **Connect GitHub**
   - Go to [Netlify](https://netlify.com)
   - Click "Add New Site" → "Import an Existing Project"
   - Select GitHub and authorize
   - Choose repository

2. **Configure Build Settings**
   - Build Command: `npm run build`
   - Publish Directory: `.next`
   - (Netlify will auto-detect for Next.js)

3. **Add a custom domain**
   - Site Settings → Domain Management
   - Add domain and update DNS

4. **Deploy**
   - Automatic on every push to main branch

---

### Self-Hosted: Linux Server (Advanced)

For hosting on your own server (AWS EC2, DigitalOcean, etc.)

#### Pre-requisites:
- Node.js 18+ installed
- npm installed
- PM2 for process management
- Nginx as reverse proxy
- SSL certificate (Let's Encrypt)

#### Setup Steps:

1. **Install Dependencies**
   ```bash
   # Login to server
   ssh user@your-server-ip
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PM2
   sudo npm install -g pm2
   ```

2. **Clone and Deploy Repository**
   ```bash
   cd /var/www
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   npm install
   ```

3. **Build Application**
   ```bash
   npm run build
   ```

4. **Start with PM2**
   ```bash
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx Reverse Proxy**
   ```bash
   sudo nano /etc/nginx/sites-available/portfolio
   ```

   Paste this configuration:
   ```nginx
   server {
     listen 80;
     server_name bamanguragain.com.np www.bamanguragain.com.np;

     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

   ```bash
   sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

6. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d bamanguragain.com.np -d www.bamanguragain.com.np
   ```

---

## 🔐 Pre-Deployment Security Checklist

### Environment & Secrets
- [ ] No API keys in code
- [ ] `.env.local` added to `.gitignore`
- [ ] All secrets in `.env.production.local` (not committed)
- [ ] `NEXT_PUBLIC_SITE_URL` set correctly

### HTTPS & SSL
- [ ] HTTPS enabled on domain
- [ ] Valid SSL certificate installed
- [ ] Certificate auto-renewal configured
- [ ] HTTP redirects to HTTPS

### Security Headers (Already Configured)
- [ ] HSTS enabled (31536000 seconds)
- [ ] CSP configured
- [ ] X-Frame-Options: DENY
- [ ] X-Content-Type-Options: nosniff
- [ ] Referrer-Policy configured
- [ ] Permissions-Policy configured

### Domain Configuration
- [ ] DNS pointing to correct server
- [ ] Both `domain.com` and `www.domain.com` set up
- [ ] MX records configured (if email needed)
- [ ] CAA records configured for SSL

### DNS Records Setup Example:
```
Type    | Name      | Value
--------|-----------|------------------
A       | @         | your-server-ip
A       | www       | your-server-ip
CNAME   | resume    | @
MX      | @         | mail-provider.com
TXT     | @         | google-verification-code
```

---

## 📊 SEO & Indexing (Post-Deployment)

### Immediately After Deploy:

1. **Verify Google Search Console**
   ```
   Method: DNS verification
   Go to: https://search.google.com/search-console
   Submit your domain
   ```

2. **Submit Sitemap**
   ```
   URL: https://bamanguragain.com.np/sitemap.xml
   Submit in Google Search Console → Sitemaps
   ```

3. **Add to Bing Webmaster Tools**
   ```
   Go to: https://www.bing.com/webmasters
   Add site and submit sitemap
   ```

4. **Verify Structured Data**
   - Tool: https://validator.schema.org
   - Paste your homepage
   - Verify all schemas are valid

### Within 24-48 Hours:

- [ ] Check Google Search Console for indexing progress
- [ ] Review coverage report for errors
- [ ] Verify robots.txt is accessible
- [ ] Check Core Web Vitals

### Within 1-2 Weeks:

- [ ] Monitor search console for indexed pages
- [ ] Check for crawl errors
- [ ] Review top search queries
- [ ] Verify mobile usability

---

## 📈 Monitoring & Maintenance

### Services to Monitor:

1. **Uptime Monitoring**
   ```
   - Uptime Robot (free): https://uptimerobot.com
   - Monitors site every 5 minutes
   - Alerts via email on downtime
   ```

2. **Performance Monitoring**
   ```
   - Google Search Console → Core Web Vitals
   - PageSpeed Insights: https://pagespeed.web.dev
   - New Relic: https://newrelic.com (optional)
   ```

3. **Error Tracking**
   ```
   - Vercel: Built-in error tracking
   - Sentry: https://sentry.io (optional)
   ```

### Security Monitoring:

```bash
# Regular dependency updates
npm audit
npm update

# Check for new vulnerabilities
npm audit fix

# Keep Node.js updated
node --version  # Check current
```

---

## 📝 Deployment Workflow

### Local Development:
```bash
npm run dev
# Test locally at http://localhost:3000
```

### Stage Changes:
```bash
git add .
git commit -m "Descriptive message"
```

### Deploy to Production:
```bash
git push origin main
# Vercel will automatically deploy
# Or trigger manual deployment via CI/CD
```

### Rollback (if needed):
**On Vercel:**
- Go to Deployments tab
- Click previous deployment
- Click "Promote to Production"

---

## 🆘 Common Deployment Issues

| Issue | Solution |
|-------|----------|
| **Domain not resolving** | Wait 24-48h for DNS propagation, check DNS records in registrar |
| **HTTPS not working** | Verify SSL certificate, wait 24h for provision, force HTTPS in nextConfig |
| **404 on pages** | Check sitemap.ts and robots.ts, verify all routes exist |
| **Slow performance** | Check Core Web Vitals, optimize images, enable caching |
| **Search not indexing** | Submit sitemap, verify domain in GSC, check robots.txt |
| **Structured data not recognized** | Validate with Schema.org validator, rebuild site |

---

## 🔄 Continuous Deployment (Optional)

### GitHub Actions Setup

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - run: npm test (optional)
```

---

## 📊 Post-Launch Checklist

**Day 1:**
- [ ] Site is live and accessible
- [ ] HTTPS working
- [ ] No console errors in browser
- [ ] Mobile view responsive
- [ ] Security headers present

**Week 1:**
- [ ] Domain verified in Google Search Console
- [ ] Sitemap submitted
- [ ] Robots.txt working
- [ ] Initial Google crawl completed

**Month 1:**
- [ ] Pages indexed in Google
- [ ] Search Console shows performance data
- [ ] Core Web Vitals monitored
- [ ] No unresolved errors

---

## 📚 Deployment Resources

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Google Search Console Help](https://support.google.com/webmasters)
- [Let's Encrypt Free SSL](https://letsencrypt.org)

---

**Last Updated:** February 2026  
**Review Schedule:** Before each deployment
