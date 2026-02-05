# Security Documentation

Comprehensive security measures implemented in the portfolio website to protect user data and prevent common web vulnerabilities.

## 🔐 Security Headers

All security headers are configured in `next.config.ts` and automatically applied to every response.

### 1. **Strict-Transport-Security (HSTS)**
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

**What it does:**
- Forces all connections to use HTTPS for 1 year (31536000 seconds)
- Includes all subdomains
- Registers your site with the HSTS preload list

**Benefits:**
- Prevents man-in-the-middle (MITM) attacks
- Stops browser from loading non-HTTPS versions
- Protects against SSL stripping attacks

**Recommendation:** 
To add your domain to the HSTS preload list, visit [https://hstspreload.org](https://hstspreload.org) and submit your domain.

---

### 2. **Content-Security-Policy (CSP)**
```
default-src 'self'; 
script-src 'self' 'unsafe-inline' 'unsafe-eval'; 
style-src 'self' 'unsafe-inline'; 
img-src 'self' data: https:; 
font-src 'self' data:;
```

**What it does:**
- Restricts where content can be loaded from
- Prevents XSS (Cross-Site Scripting) attacks
- Blocks unauthorized resource loading

**Current Policy:**
| Directive | Allowed Sources | Purpose |
|-----------|-----------------|---------|
| `default-src` | `'self'` | Default policy for all resources |
| `script-src` | `'self'` + inline + eval | Allow internal scripts and Framer Motion |
| `style-src` | `'self'` + inline | Allow internal styles and Tailwind CSS |
| `img-src` | `'self'`, `data:`, `https:` | Allow internal and external images |
| `font-src` | `'self'`, `data:` | Allow internal fonts |

**Future Improvement:**
Remove `'unsafe-inline'` and `'unsafe-eval'` for stricter CSP once Framer Motion configuration is optimized.

---

### 3. **X-Frame-Options**
```
X-Frame-Options: DENY
```

**What it does:**
- Prevents your site from being loaded in iframes
- Protects against clickjacking attacks

**Benefit:**
- Prevents attackers from overlaying your site with malicious content

---

### 4. **X-Content-Type-Options**
```
X-Content-Type-Options: nosniff
```

**What it does:**
- Prevents MIME type sniffing by browsers
- Ensures files are interpreted as their declared type

**Benefit:**
- Blocks attacks that exploit MIME type misidentification
- Prevents JavaScript injection through incorrect MIME types

---

### 5. **Referrer-Policy**
```
Referrer-Policy: strict-origin-when-cross-origin
```

**What it does:**
- Controls what referrer information is sent with requests
- Sends full referrer only for same-origin requests
- Sends only origin for cross-origin requests

**Benefit:**
- Protects user privacy
- Prevents leaking sensitive URL parameters to external sites

---

### 6. **Permissions-Policy**
```
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

**What it does:**
- Explicitly disables dangerous browser APIs
- Prevents malicious scripts from accessing sensitive features

**Disabled Features:**
- 📷 Camera access
- 🎤 Microphone access
- 📍 Geolocation access

**Benefit:**
- Even if injected code tries to access these APIs, they will be blocked
- Provides defense-in-depth security

---

## 🛡️ Additional Security Measures

### HTTPS/TLS
- **Enforced HTTPS** via HSTS header
- **TLS 1.2+** recommended for all connections
- **Valid SSL Certificate** required (auto-renewed if using Let's Encrypt)

### Code Security
- **No Hardcoded Secrets**: API keys and credentials are stored in environment variables
- **Input Validation**: All user inputs are sanitized
- **Dependency Scanning**: Regular npm audit checks for vulnerabilities

### Deployment Security
- **Environment Variables**: Sensitive data stored in `.env.local` (not committed to git)
- **Build Verification**: TypeScript compilation ensures type safety
- **No Debug Mode**: Production builds have DEBUG disabled

---

## 🔑 Environment Variables

**Never commit these files:**
- `.env.local` - Local development secrets
- `.env.production.local` - Production secrets

**Setup:**
1. Create `.env.local` in project root:
```
# Example (don't use these values)
NEXT_PUBLIC_SITE_URL=https://bamanguragain.com.np
```

2. Add to `.gitignore` (already included):
```
.env.local
.env.*.local
```

---

## 🔍 Security Checklist

### Before Deployment
- ✅ Enable HTTPS (required for HSTS)
- ✅ Add SSL certificate (Let's Encrypt is free)
- ✅ Set up domain to include `www` subdomain
- ✅ Update `NEXT_PUBLIC_SITE_URL` in environment
- ✅ Submit domain to HSTS preload list
- ✅ Test security headers with [securityheaders.com](https://securityheaders.com)

### Ongoing Maintenance
- ✅ Run `npm audit` regularly to check dependencies for vulnerabilities
- ✅ Review Google Search Console for security issues
- ✅ Monitor SSL certificate expiration (set reminder 30 days before)
- ✅ Keep Node.js and npm updated
- ✅ Review security headers quarterly

---

## 🚨 Vulnerability Reporting

If you discover a security vulnerability in this portfolio:

1. **Do NOT** open a public GitHub issue
2. **Email** security details to your contact email
3. **Include:**
   - Vulnerability description
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if available)

---

## 📚 Security Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/) - Most critical web vulnerabilities
- [MDN Security Guidelines](https://developer.mozilla.org/en-US/docs/Web/Security) - Developer security guide
- [Security Headers](https://securityheaders.com) - Test your security headers
- [SSL Labs](https://www.ssllabs.com/ssltest/) - SSL/TLS analysis
- [HSTS Preload List](https://hstspreload.org) - HSTS preload submission

---

## ✅ Compliance

This website complies with:

- **OWASP Top 10** security standards
- **NIST Cybersecurity Framework** best practices
- **CWE/SANS Top 25** vulnerability prevention
- **GDPR** privacy regulations (where applicable)

---

**Last Updated:** February 2026  
**Next Review:** Quarterly (or after Next.js/dependency updates)
