# Color Scheme Quick Reference

## 🎨 The 5 Core Colors

| Color Name | HEX | Variable | Usage |
|------------|-----|----------|-------|
| **Rich Black** | `#0B0B0B` | `var(--rich-black)` | Structure: nav, footer, headers |
| **Metallic Gold** | `#C9A24D` | `var(--metallic-gold)` | Accents: CTAs, highlights (≤15%) |
| **Graphite Gray** | `#2E2E2E` | `var(--graphite-gray)` | Cards, sections, depth |
| **Beige** | `#EFE3CF` | `var(--beige)` | Section backgrounds |
| **Off-White** | `#FAF9F7` | `var(--off-white)` | Base background |

## ✍️ Text Colors

| Context | HEX | Variable |
|---------|-----|----------|
| Body text (light bg) | `#1A1A1A` | `var(--text-primary)` |
| Text on dark bg | `#FFFFFF` | `var(--text-on-dark)` |
| Secondary/muted | `#6F6A63` | `var(--text-muted)` |

## 🔘 Common Patterns

### Buttons
```tsx
// Primary CTA
<button className="btn-primary">Get Started</button>

// Secondary CTA
<button className="btn-secondary">Learn More</button>
```

### Sections
```tsx
// Beige background section
<section className="section section-beige">
  <div className="container">...</div>
</section>

// Dark section
<section className="section section-rich-black">
  <div className="container">...</div>
</section>
```

### Cards
```tsx
// Standard card (uses .card class with Graphite Gray bg)
<div className="card p-8">
  <h3 className="text-xl font-bold text-white">Card Title</h3>
  <p className="text-white/80">Card content...</p>
</div>
```

## 🎯 Color Usage Rule

**Gold Rule:** Keep Metallic Gold usage ≤ 15% of the design
- ✅ Buttons, icons, small accents
- ❌ Large backgrounds, entire sections

## 🚀 Tailwind Utilities

```tsx
// Backgrounds
bg-richBlack bg-graphiteGray bg-metallicGold bg-beige bg-offWhite

// Text
text-richBlack text-metallicGold text-[#FFFFFF] text-[#1A1A1A]

// Borders
border-metallicGold border-[rgba(201,162,77,0.3)]
```

## 📐 Section Pattern Examples

### Homepage Flow
```
Hero        → bg-offWhite (light start)
Services    → bg-beige (warm)
About       → bg-offWhite
Testimonial → bg-beige
CTA         → bg-richBlack (dark, bold)
Footer      → bg-richBlack
```

### Service Page Flow
```
Hero        → bg-graphiteGray (dramatic)
Features    → bg-offWhite
Benefits    → bg-beige
Pricing     → bg-offWhite
CTA         → bg-richBlack
Footer      → bg-richBlack
```

---

**Quick Tip:** When in doubt, use Off-White for backgrounds and Rich Black for structure!
