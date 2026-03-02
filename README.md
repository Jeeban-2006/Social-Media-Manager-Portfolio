# Satyadarshi Pradhan — Social Media Manager Portfolio

A professional portfolio website for **Satyadarshi Pradhan**, a Social Media Manager based in Bhubaneswar, Odisha, India. Built to showcase Instagram growth work, client results, service packages, and a direct WhatsApp contact form.

## 🌐 Live Site
[satyadarshipradhan.in](https://satyadarshipradhan.in)

## 📸 Instagram
[@satyadarshi_official](https://www.instagram.com/satyadarshi_official)

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| UI Components | shadcn/ui (Radix UI) |
| Form Validation | Zod |
| Icons | Lucide React |
| Fonts | Space Grotesk + DM Sans (Google Fonts) |
| Contact | WhatsApp API (`wa.me`) |

---

## 📁 Project Structure

```
showcase-studio/
├── public/
│   ├── favicon.png         # Brand favicon
│   ├── robots.txt          # SEO crawler rules
│   └── sitemap.xml         # XML sitemap for Google
├── src/
│   ├── assets/work/        # Client & creative photos
│   │   ├── client2–4.png   # Instagram profile screenshots
│   │   └── creative1–27.jpg # Portfolio creative work
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── TickerStrip.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WorkSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── WhyChooseSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── pages/Index.tsx
│   └── index.css           # Global styles + animations
└── index.html              # SEO-optimised entry point
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:8080](http://localhost:8080)

### Production Build
```bash
npm run build
```
Output is in the `dist/` folder — ready to deploy.

---

## 🌍 Deployment

### Recommended: Vercel (Free)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Framework: **Vite** (auto-detected)
4. Click Deploy
5. Add your custom domain `satyadarshipradhan.in`

### Netlify
1. `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://netlify.com/drop)

---

## 🔍 SEO Features

- **Structured Data**: JSON-LD `Person` + `ProfessionalService` schemas for Google rich results
- **Geo Tags**: Bhubaneswar, Odisha, India — targets local search
- **Open Graph + Twitter Card**: Rich previews when sharing on social
- **Canonical URL**: Prevents duplicate content issues
- **Sitemap**: `/sitemap.xml` for Google Search Console
- **Robots.txt**: Allows all crawlers
- **Keywords**: Optimised for "Satyadarshi Pradhan", "Social Media Manager Bhubaneswar"

### Registering with Google
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `satyadarshipradhan.in`
3. Verify via DNS or HTML file
4. Submit sitemap: `https://satyadarshipradhan.in/sitemap.xml`

---

## ✉️ Contact Form
The contact form sends messages via **WhatsApp Web** (`wa.me/919861688952`) with the visitor's name, email, and message pre-filled. No backend required.

---

## 📄 License
© 2026 Satyadarshi Pradhan. All rights reserved.
