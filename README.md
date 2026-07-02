# vaibhavkumawat.com — Astro rebuild

Built per the audit spec (vaibhavkumawat-site-spec.md). Verified: `npm run build` produces 9 static pages.

## Deploy (Cloudflare Pages — recommended, closes the local-vs-prod gap)
1. Push this folder to a GitHub repo.
2. Cloudflare Pages → Create project → connect repo.
   Build command: `npm run build` · Output dir: `dist`
3. Add custom domain vaibhavkumawat.com.

## Before going live — 4 TODOs (search "TODO(Vaibhav)")
1. `public/vaibhav-kumawat-resume.pdf` — drop your resume PDF in.
2. `src/pages/index.astro` — replace Formspree `YOUR_FORM_ID` (free at formspree.io) and the Cal.com link.
3. `src/layouts/Base.astro` — create a free Plausible account for the domain (script is already wired).
4. Verify the LinkedIn URL in Base.astro + profile.md matches your actual handle.

## Updating /now (2-minute monthly ritual)
Edit `src/pages/now.astro` — change the `updated` date and the bullets. Commit from the GitHub mobile app; Pages redeploys automatically.

## Adding a case study or blog post
Drop a `.md` file into `src/content/work/` or `src/content/writing/` following the existing frontmatter. `/writing` stays out of nav until you add ≥2 posts (then link it in Base.astro nav).

## Structure
- Tokens: `src/styles/global.css` (matches spec Output B)
- Layout/SEO/JSON-LD/motion: `src/layouts/Base.astro`
- Agent layer: `public/profile.md`, `public/llms.txt`, `public/robots.txt`
