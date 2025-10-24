# Pickering Cancer Centre Marketing Proposal 2026

An interactive, stunning Next.js website presenting JJL Media's comprehensive marketing and fundraising proposal to the Pickering Cancer Drop In Centre trustees.

## 🚀 Live Demo

**Local Development:** http://localhost:3003 (or check your terminal for the actual port)
**Production:** Deploy to Vercel (see deployment section below)

## 📋 Overview

This is NOT the actual charity website - this is a digital proposal/pitch deck that showcases our strategy, demonstrates our capabilities, and makes it easy for trustees to understand and approve our plan.

**Key Features:**
- 🎨 Modern, responsive design with smooth animations
- 📊 Interactive ROI calculator and budget breakdown
- 📱 Mobile-first, fully responsive across all devices
- 🖨️ Print-friendly for PDF export (Ctrl+P / Cmd+P)
- ⚡ Lightning-fast performance with Next.js 16
- ♿ WCAG 2.1 AA accessible

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (sans-serif), Playfair Display (serif)

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to the URL shown in your terminal (usually http://localhost:3000)

## 🎨 Colour Scheme

### JJL Media Brand Colours
- **Primary Navy:** `#0f172a` (rgb(15, 23, 42))
- **Orange:** `#f97316` (rgb(249, 115, 22))
- **Teal:** `#06b6d4` (rgb(6, 182, 212))
- **Green:** `#22c55e` (rgb(34, 197, 94))

### Pickering Cancer Centre Colours
- **Orange:** `#f97316` (warm, welcoming)
- **Purple:** `#a855f7` (awareness ribbon)
- **Pink:** `#ec4899` (support, care)

## 📖 Sections

1. **Hero** - Eye-catching introduction with key metrics
2. **Executive Summary** - Problem, solution, and impact projection
3. **Current State Analysis** - Strengths and opportunities
4. **Strategic Approach** - Four interconnected pillars
5. **Campaigns** - 2026 campaign calendar and timeline
6. **Budget & ROI** - Investment breakdown and return scenarios
7. **Next Steps** - Call to action with contact form

## 🎯 Customisation Guide

### 1. Connect the Contact Form (IMPORTANT!)

**You must set up FormSpark to receive form submissions:**

1. Go to https://formspark.io and create a free account
2. Create a new form and copy your Form ID
3. Edit `components/sections/next-steps.tsx` (line 47)
4. Replace `"YOUR_FORMSPARK_FORM_ID"` with your actual Form ID

**Full instructions:** See `FORMSPARK_SETUP.md` for detailed step-by-step guide

### 2. Update Contact Information

Edit `components/layout/footer.tsx`:
```tsx
<a href="mailto:YOUR-EMAIL@jjlmedia.co.uk">
  YOUR-EMAIL@jjlmedia.co.uk
</a>
```

### 3. Modify Metrics

Edit `components/sections/hero.tsx`:
```tsx
<CountUpMetric end={66800} /> // Change the target number
```

### Change Colours

Edit `app/globals.css`:
```css
:root {
  --brand-orange: 249 115 22; /* Update RGB values */
}
```

### Update Campaign Details

Edit `components/sections/campaigns.tsx` - modify the `campaigns` array.

### Adjust Budget Breakdown

Edit `components/sections/budget.tsx` - modify the `budgetBreakdown` array.

## 📤 PDF Export

Users can export the proposal as PDF:
1. Click "Download PDF" button in the hero or next steps section
2. Or press `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac)
3. Select "Save as PDF" in the print dialog

**Note:** The header, footer, and navigation are automatically hidden in print view using CSS.

## 🚀 Deployment to Vercel

1. **Install Vercel CLI (optional):**
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Vercel Dashboard:**
   - Push your code to GitHub/GitLab/Bitbucket
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

3. **Deploy via CLI:**
   ```bash
   vercel
   ```

4. **Environment Variables:**
   No environment variables required for this static proposal site.

## 📱 Responsive Breakpoints

- **xs:** 320px (mobile)
- **sm:** 640px (large mobile)
- **md:** 768px (tablet)
- **lg:** 1024px (desktop)
- **xl:** 1280px (large desktop)
- **2xl:** 1536px (ultra-wide)

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML structure
- Keyboard navigation support
- Screen reader optimised
- Sufficient colour contrast ratios
- Focus indicators on interactive elements

## 🔧 Scripts

```bash
# Development
npm run dev        # Start development server

# Production
npm run build      # Build for production
npm run start      # Start production server

# Linting
npm run lint       # Run ESLint
```

## 📂 Project Structure

```
pickeringcancer/
├── app/
│   ├── globals.css           # Global styles & theme
│   ├── layout.tsx            # Root layout with fonts
│   └── page.tsx              # Main page (all sections)
├── components/
│   ├── layout/
│   │   ├── header.tsx        # Sticky navigation
│   │   └── footer.tsx        # Footer with contact info
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── executive-summary.tsx
│   │   ├── current-state.tsx
│   │   ├── strategy.tsx
│   │   ├── campaigns.tsx
│   │   ├── budget.tsx
│   │   └── next-steps.tsx
│   ├── shared/
│   │   └── section-wrapper.tsx
│   └── ui/
│       ├── button.tsx
│       ├── badge.tsx
│       └── card.tsx
├── lib/
│   └── utils.ts              # Utility functions (cn)
└── public/                   # Static assets
```

## 🎨 Animation Details

All animations use Framer Motion with these principles:
- **Fade in from bottom:** Elements enter with slight upward motion
- **Stagger children:** Sequential animations for lists
- **Count up:** Numbers animate from 0 to target value
- **Viewport triggers:** Animations trigger when scrolling into view
- **Once only:** Animations play once (not every scroll)

## 📞 Support

For questions or support:
- **Email:** hello@jjlmedia.co.uk
- **Phone:** +44 (0) 123 456 7890
- **Website:** [jjlmedia.co.uk](https://jjlmedia.co.uk)

## 📝 Notes for Trustees

- This proposal is designed to be viewed in a modern web browser (Chrome, Safari, Firefox, Edge)
- For best experience, view on a desktop or tablet (mobile is also supported)
- Use the navigation menu to jump to specific sections
- Download or print the PDF for offline review
- Contact form connected via FormSpark (free, secure, and GDPR compliant)

## 📊 Updated ROI Projections

Based on realistic expectations for a charity building from minimal brand presence:

- **Conservative:** £45,000 (100% ROI) - 50 monthly donors, limited brand awareness
- **Most Likely:** £66,800 (204% ROI) - 75 monthly donors, steady growth ⭐
- **Optimistic:** £97,500 (343% ROI) - 100 monthly donors, strong engagement

## 🔒 Security & Privacy

- No personal data is collected without explicit form submission
- Form submissions should be connected to a secure email service (e.g., Formspree, EmailJS)
- HTTPS enforced in production (automatic with Vercel)

## 📄 Licence

© 2025 JJL Media. All rights reserved.

---

**Built with ❤️ by JJL Media for Pickering Cancer Drop In Centre**

*Proposal expires: 30 days from delivery*
