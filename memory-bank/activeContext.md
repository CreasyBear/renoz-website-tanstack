# Active Context: RENOZ Energy Website

## Current Work Focus

**Status:** Warranty Form Refinement & UX Optimization

We have completed major refinements to the warranty registration system, focusing on user experience, professional layout, and data accuracy for the Australian market.

## Recent Changes

### 📝 Warranty Registration Enhancements

- **Smart Inverter Selection:** Replaced manual text inputs with a comprehensive database of Australian-market LV inverters (Deye, Victron, SMA, Selectronic, etc.).
- **Chained Form Logic:** Implemented dynamic model filtering based on selected brands with "Other" fallback for manual entry.
- **UI Grid Optimization:** Refactored "System Specs" and "Timeline" sections into consistent 3-column and 2-column grids, eliminating excessive white space.
- **Full-Width Layout:** Standardized form controls to fill their available grid space, matching high-end OEM form aesthetics.
- **Unlimited Uploads:** Removed file count restrictions in `FileUpload.tsx` and the warranty form to allow for comprehensive installation documentation.
- **State Management:** Improved concurrent file upload handling using functional state updates.

### Database & Content

- **Storage Secured:** `warranty-uploads` bucket set to private with RLS policies.
- **Products Populated:** `products` table populated with:
  - RENOZ LV-5KWH100AH (Residential) - Full specs from datasheet.
  - Rural & Commercial Series (Placeholders).
- **Dynamic Residential Page:** `src/routes/products/residential.tsx` completely redesigned with "Tesla-style" immersive layout:
  - Full-screen Hero with parallax background.
  - "Specs as Features" Bento grid.
  - Visual durability and scalability sections.
  - Tabbed interface for full specs vs. documentation.

### Legal & Compliance

- **Footer Optimized:** Minimalist 4-column design with reduced vertical spacing, subtle typography, and removed background noise.
- **Legal Pages Created:**
  - `src/routes/privacy.tsx`: Simplified, compliant privacy policy.
  - `src/routes/terms.tsx`: Standard terms of service.
  - `src/routes/cookies.tsx`: Cookie policy with "Reject All" option.

### 🎨 Visual Components

- `ExpandingCards.tsx`: Interactive horizontal accordion slider for the Home Page Product Range section. Polished with spring physics and smoother content transitions.
- `Button.tsx`: Restored `primary` variant and `Link` support (via `to` prop) after Shadcn overwrite.
- `AccordionSteps.tsx`: Numbered, expandable step-by-step guides with side imagery.
- `VerticalTimeline.tsx`: Dot-connected linear process flows.
- `MasonryGallery.tsx`: Scattered image grids with captions for social proof.
- `ComparisonTable.tsx`: Clear product comparison matrices.

## Next Steps

### Immediate

1. **Infrastructure Setup:**
   - Create `warranty-uploads` bucket in Supabase Storage.
   - Apply RLS policies for storage bucket.
   - Configure environment variables (`TURNSTILE_SECRET_KEY`, `RESEND_API_KEY`, etc.).
2. **Testing:**
   - Test full warranty registration flow (with file uploads).
   - Verify email delivery to all recipients.
3. **Deployment:**
   - Deploy to Vercel/Netlify.
   - Connect custom domain.

## Active Decisions

### Warranty Process

- **Hybrid Flow:** One form handles both Installers (primary users) and Homeowners.
- **Verification:** Using Cloudflare Turnstile for spam protection instead of Captcha.
- **Storage:** Files are organized by `warrantyId` in Supabase Storage for easy retrieval.
- **Communication:** Automated emails serve as the primary confirmation method.
