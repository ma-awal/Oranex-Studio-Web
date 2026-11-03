# Oranex Studio – Website

Next.js 15 + Tailwind CSS 4. **Backend/database nai.** Pura site `src/data/*.json` file theke chole, tai sobcheye fast ar sohoj.

## Chalano
    npm install
    npm run dev                  # http://localhost:3000
    npm run build && npm start   # production

> Fonts (Google Fonts) build-er shomoy download hoy, tai internet lage.

## Kon file e ki edit korbe
| Ki | Kothay |
|---|---|
| Naam, email, phone, **WhatsApp number**, location, Facebook/Instagram/LinkedIn link, SEO title/description | `src/data/site.json` |
| Hero, Services, Why us, Process, Tech, Testimonials, FAQ, Contact er shob lekha | `src/data/content.json` |
| Projects (Work section) | `src/data/projects.json` |
| Logo | `public/logo.svg` replace koro (ba `site.json` e `"logo": "/logo.png"`) |
| Favicon | `src/app/icon.svg` replace koro |
| Share image (Facebook/WhatsApp preview) | `public/og.png` (1200x630) |
| Rong | `src/app/globals.css` (upore `@theme`) |
| Section order | `src/app/page.jsx` |

Social link faka (`""`) thakle footer e icon dekhay na. `testimonials.items` faka (`[]`) korle oi section hide hoy.

## Notun project add kora
1. Thumbnail `public/projects/` e rakho (800x500 ba 16:10 hole bhalo, `.webp`/`.jpg`).
2. `src/data/projects.json` e ekta line add koro:
```json
{ "title": "Client Store Name", "category": "Ecommerce", "image": "/projects/client-store.webp", "live": "https://client-site.com" }
```
`category` hobe `Ecommerce`, `Landing Page` ba `Portfolio`. Commit/push korle site update hoy.
**Ekhon ja ache shob "Sample design" (`"sample": true`)**: real project dile oi line gulo replace/muche dao.

## Domain connect (Vercel)
1. GitHub e push, Vercel e Import, Deploy.
2. Domain kena hole Vercel > Project > Settings > Domains e domain add koro, Vercel je DNS record dey (A / CNAME) domain provider e boshao.
3. Vercel > Settings > Environment Variables e `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` dao, Redeploy. (SEO, share preview, sitemap er jonno.)

## Live korar age checklist
- [ ] `site.json`: email, phone/WhatsApp, Facebook page link
- [ ] Logo: `public/logo.svg` er jaygay original logo (ekhon ekta approximate OX logo ache)
- [ ] `projects.json`: sample project muche real project
- [ ] Testimonials thik ache kina (na thakle `[]`)
- [ ] `NEXT_PUBLIC_SITE_URL` set kora

## Contact form
EmailJS diye email ashe (ager account default). Notun account hole `.env.example` er variable gulo `.env` e dao.

## SEO (auto)
Title/description, Open Graph, canonical, `sitemap.xml`, `robots.txt`, favicon, Google structured data (business + FAQ) JSON theke auto toiri hoy.
