# RENOZ Energy - Deployment Guide

## 🚀 Quick Deploy to Vercel

### Prerequisites

- GitHub account
- Vercel account (free tier works)
- Environment variables ready (see below)

### Step-by-Step Deployment

#### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/renoz-website.git
git push -u origin main
```

#### 2. Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `.output`
   - **Install Command**: `npm install`

#### 3. Add Environment Variables

In Vercel Dashboard → Settings → Environment Variables, add:

**Required:**

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_TURNSTILE_SITE_KEY=your_turnstile_site_key
TURNSTILE_SECRET_KEY=your_turnstile_secret_key
RESEND_API_KEY=re_your_resend_api_key
```

**Optional (have defaults):**

```env
CONTACT_FORM_TO_EMAIL=sales@renoz.energy
WARRANTY_TO_EMAIL=support@renoz.energy
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
```

#### 4. Deploy

Click "Deploy" and wait 2-3 minutes!

---

## 📋 Pre-Deployment Checklist

### Code Quality

- [ ] Run `npm run lint` (no errors)
- [ ] Run `npm run format` (all files formatted)
- [ ] Run `npm run build` (builds successfully)
- [ ] Test all forms locally

### Environment Setup

- [ ] Supabase project created
- [ ] Database schema deployed (`supabase-schema.sql`)
- [ ] Storage bucket created (`setup-storage.sql`)
- [ ] Cloudflare Turnstile configured
- [ ] Resend account created & domain verified
- [ ] All environment variables in `.env` file

### Content Review

- [ ] All images optimized (WebP format)
- [ ] Case studies have proper images
- [ ] Contact information up to date
- [ ] Product descriptions accurate
- [ ] Legal pages reviewed (Privacy, Terms, Cookies)

### SEO & Performance

- [ ] All pages have unique meta titles
- [ ] All pages have meta descriptions
- [ ] OG images properly configured
- [ ] Sitemap.xml up to date
- [ ] Robots.txt configured
- [ ] All images have alt text

---

## 🔧 Post-Deployment Tasks

### Immediate (Day 1)

- [ ] Test contact form submission (production)
- [ ] Test warranty form submission (production)
- [ ] Verify email notifications arrive
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Verify images load correctly
- [ ] Check SSL certificate (should be automatic)

### Week 1

- [ ] Set up Vercel Analytics
- [ ] Set up Plausible Analytics (add domain in Plausible dashboard)
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Check Core Web Vitals in PageSpeed Insights
- [ ] Monitor error logs in Vercel Dashboard

### Month 1

- [ ] Review analytics data
- [ ] Check form submission data in Supabase
- [ ] Monitor Web Vitals trends
- [ ] Review and respond to contact form inquiries
- [ ] Check for any console errors in production
- [ ] Review and update content as needed

---

## 🔍 SEO Setup

### Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `renoz.energy`
3. Verify ownership (DNS or HTML file method)
4. Submit sitemap: `https://renoz.energy/sitemap.xml`

### Bing Webmaster Tools

1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site: `renoz.energy`
3. Verify ownership
4. Submit sitemap: `https://renoz.energy/sitemap.xml`

### Google Business Profile

1. Claim business listing
2. Add photos (products, team, warehouse)
3. Update hours, contact info
4. Link to website

---

## 📊 Analytics Setup

### Plausible Analytics (Recommended - Privacy-focused)

1. Sign up at [plausible.io](https://plausible.io)
2. Add domain: `renoz.energy`
3. No code changes needed - already integrated!
4. Share dashboard link with team

**Why Plausible?**

- ✅ No cookies = no cookie banner needed
- ✅ GDPR compliant out of the box
- ✅ Lightweight (< 1KB script)
- ✅ Privacy-focused
- ✅ Simple, beautiful dashboard

### Vercel Analytics (Optional - Additional insights)

1. In Vercel Dashboard → Analytics tab
2. Click "Enable Analytics"
3. Free tier includes: Real User Monitoring, Web Vitals

---

## 🔐 Security Checklist

### SSL/HTTPS

- [ ] SSL certificate active (Vercel handles automatically)
- [ ] Force HTTPS redirect enabled
- [ ] HSTS header configured (already in vercel.json)

### Headers

- [ ] Content Security Policy active
- [ ] X-Frame-Options set
- [ ] X-Content-Type-Options set
- [ ] Referrer-Policy configured
- [ ] All security headers from vercel.json deployed

### API Keys & Secrets

- [ ] No secrets in client-side code
- [ ] All API keys in environment variables
- [ ] Server-side validation for forms
- [ ] Turnstile spam protection active

---

## 🐛 Troubleshooting

### Build Fails

**Error**: Missing environment variables

- **Fix**: Add all required env vars in Vercel dashboard
- Remember: `VITE_` prefixed vars are client-side

**Error**: Type errors during build

- **Fix**: Run `npm run build` locally first
- Check TypeScript errors with `npx tsc --noEmit`

### Forms Not Working

**Contact form submissions don't send**

- Check Resend API key is correct
- Verify domain is verified in Resend
- Check Vercel function logs for errors

**Turnstile not loading**

- Check `VITE_TURNSTILE_SITE_KEY` is set
- Verify site key matches domain
- Check CSP allows `challenges.cloudflare.com`

### Images Not Loading

- Check image paths (should start with `/images/`)
- Verify files exist in `public/images/`
- Check browser console for 404 errors
- Ensure WebP format is used

### Supabase Connection Issues

- Verify `VITE_SUPABASE_URL` is correct
- Check `VITE_SUPABASE_ANON_KEY` is correct
- Ensure RLS policies allow public read/insert
- Check browser console for CORS errors

---

## 📈 Performance Optimization

### Already Implemented

- ✅ WebP images (60%+ size reduction)
- ✅ Lazy loading with Framer Motion
- ✅ Cache headers for static assets
- ✅ Code splitting with TanStack Router
- ✅ Optimized fonts (Inter via @fontsource)
- ✅ Service worker for offline support

### Monitor These Metrics

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **TTFB** (Time to First Byte): < 600ms

### Tools

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

---

## 🔄 Continuous Deployment

### Automatic Deployments (Already Configured)

- Push to `main` → Production deploy
- Push to `develop` → Preview deploy
- Pull Requests → Preview deploy

### GitHub Actions (Already Configured)

- Lint check on every push/PR
- Build test on every push/PR
- Type check on every push/PR

### Manual Deploy

```bash
# From Vercel CLI
vercel --prod
```

---

## 📞 Support Contacts

### Services

- **Vercel Support**: vercel.com/support
- **Supabase Support**: supabase.com/support
- **Cloudflare Support**: cloudflare.com/support
- **Resend Support**: resend.com/support

### Documentation

- **TanStack Router**: tanstack.com/router
- **Vercel Docs**: vercel.com/docs
- **Supabase Docs**: supabase.com/docs

---

## ✅ Go-Live Checklist

**Final checks before making site public:**

- [ ] All environment variables configured
- [ ] All forms tested and working
- [ ] Contact email addresses correct
- [ ] Phone numbers up to date
- [ ] All links working (no 404s)
- [ ] Mobile responsive on real devices
- [ ] Fast loading (< 3s on 3G)
- [ ] No console errors
- [ ] Analytics tracking working
- [ ] Sitemap submitted to search engines
- [ ] SSL certificate active
- [ ] Social media links correct
- [ ] Legal pages reviewed by legal team
- [ ] Backup plan for rollback if issues arise

---

**Ready to deploy? Run through this checklist and you're good to go! 🚀**
