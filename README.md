# Emmanuel Kurinaah — Portfolio

A 3D-immersive personal portfolio SPA. Dark-first with a light/dark toggle, an
interactive React Three Fiber hero, scroll-reveal animations, project case-study
modals, and a working contact form.

**Stack:** React 19 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion ·
React Three Fiber / Three.js · lucide-react

## Getting started

```bash
npm install
npm run dev        # local dev server (http://localhost:5173)
npm run build      # type-check + production build → dist/
npm run preview    # serve the production build locally
npm run lint       # eslint
```

## Where things live

| What | File |
| --- | --- |
| **All site content** (bio, experience, projects, skills, links) | `src/data/resume.ts` |
| Content types | `src/types/index.ts` |
| **Theme tokens** (colors, fonts, light/dark) | `src/index.css` (`:root` / `.dark` + `@theme inline`) |
| 3D hero scene | `src/three/HeroScene.tsx` |
| Sections | `src/components/*.tsx` |
| Reusable UI | `src/components/ui/*.tsx` |
| Resume PDF (download button) | `public/Emmanuel_Kurinaah_Resume.pdf` |
| Favicon / social card | `public/favicon.svg` · `public/og-image.svg` |

The site is fully data-driven: edit `src/data/resume.ts` and everything updates.

## Contact form (one step to go live)

The form works out of the box by falling back to the visitor's email client.
To deliver messages straight to your inbox instead:

1. Get a free access key at [web3forms.com](https://web3forms.com) (no account
   needed) targeting `emkurinaah@gmail.com`.
2. Paste it into `WEB3FORMS_ACCESS_KEY` near the top of `src/components/Contact.tsx`.

Each submission is emailed to that address with **Reply-To set to the sender**,
so replying in Gmail goes straight back to them. The access key is public by
design; it only permits sending mail to your configured address.

## Adding a photo (optional)

The About/profile card currently uses an `EK` monogram. To use a real photo,
drop an image in `src/assets/` and swap the monogram block in
`src/components/About.tsx` for an `<img>`.

## Theming

Colors and fonts are defined once as CSS variables in `src/index.css`:

- Light values live in `:root`, dark overrides in `.dark`.
- `@theme inline` maps them to Tailwind utilities (`bg-canvas`, `text-ink`,
  `text-accent`, …) that track the theme automatically.

Change the accent by editing `--accent` (and `--accent-strong`, `--glow`) in
both blocks.

## Security headers

`vercel.json` sends a strict Content-Security-Policy. The inline theme script
in `index.html` is allow-listed by **hash** — if you ever edit that script,
recompute the hash and update the CSP, or the theme preference will silently
stop applying (the site falls back to dark):

```bash
python3 -c "
import re, hashlib, base64
s = re.findall(r'<script>(.*?)</script>', open('dist/index.html').read(), re.S)[0]
print('sha256-' + base64.b64encode(hashlib.sha256(s.encode()).digest()).decode())
"
```

## Deployment

It's a static SPA — `npm run build` outputs `dist/`. Host options:

- **Vercel / Netlify / Cloudflare Pages** — connect the repo; build command
  `npm run build`, output directory `dist`.
- **AWS S3 + CloudFront** — `aws s3 sync ./dist s3://<bucket>` then invalidate
  the CloudFront distribution (mirrors the GitHub Actions pattern from the seed
  project).
