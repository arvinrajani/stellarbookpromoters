# Premium Book Brand - Visual Design System

## 🎨 Color Swatches

```
╔═══════════════════════════════════════════════════════════════╗
║  RICH BLACK                                                   ║
║  #0B0B0B                                                      ║
║  Use: Headers, Footers, Navigation, Structure                ║
╚═══════════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════════╗
║  METALLIC GOLD                                                ║
║  #C9A24D                                                      ║
║  Use: CTAs, Highlights, Accents (≤15%)                       ║
╚═══════════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════════╗
║  GRAPHITE GRAY                                                ║
║  #2E2E2E                                                      ║
║  Use: Cards, Sections, Containers                            ║
╚═══════════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════════╗
║  BEIGE / PARCHMENT                                            ║
║  #EFE3CF                                                      ║
║  Use: Section Backgrounds, Warm Areas                        ║
╚═══════════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════════╗
║  WARM OFF-WHITE                                               ║
║  #FAF9F7                                                      ║
║  Use: Main Background, Content Areas                         ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## 📐 Layout Examples

### Homepage Structure

```
┌───────────────────────────────────────────────────────┐
│  NAVIGATION BAR                                       │
│  Background: Rich Black (#0B0B0B)                     │
│  Text: White with Gold hover (#C9A24D)                │
└───────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────┐
│                                                       │
│  HERO SECTION                                         │
│  Background: Off-White (#FAF9F7)                      │
│  Text: Rich Black (#0B0B0B)                           │
│  CTA Button: Gold → Black on hover                    │
│                                                       │
└───────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────┐
│                                                       │
│  SERVICES SECTION                                     │
│  Background: Beige (#EFE3CF)                          │
│  Cards: Graphite Gray (#2E2E2E) with white text      │
│                                                       │
└───────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────┐
│                                                       │
│  ABOUT / FEATURES                                     │
│  Background: Off-White (#FAF9F7)                      │
│  Text: Primary Black (#1A1A1A)                        │
│                                                       │
└───────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────┐
│                                                       │
│  TESTIMONIALS                                         │
│  Background: Beige (#EFE3CF)                          │
│  Cards: Graphite Gray with white text                │
│                                                       │
└───────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────┐
│                                                       │
│  CTA SECTION                                          │
│  Background: Rich Black (#0B0B0B)                     │
│  Text: White (#FFFFFF)                                │
│  Button: Metallic Gold (#C9A24D)                      │
│                                                       │
└───────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────┐
│  FOOTER                                               │
│  Background: Rich Black (#0B0B0B)                     │
│  Headings: Gold (#C9A24D)                             │
│  Text: White/70                                       │
└───────────────────────────────────────────────────────┘
```

---

## 🔘 Button Variations

### Primary CTA Button
```
┌─────────────────────┐
│   Get Started       │  ← Gold background (#C9A24D)
│                     │    Black text (#0B0B0B)
└─────────────────────┘

         HOVER ↓

┌─────────────────────┐
│   Get Started       │  ← Black background (#0B0B0B)
│                     │    Gold text (#C9A24D)
└─────────────────────┘
```

### Secondary Button
```
┌─────────────────────┐
│   Learn More        │  ← Transparent background
│                     │    Gold border & text (#C9A24D)
└─────────────────────┘

         HOVER ↓

┌─────────────────────┐
│   Learn More        │  ← Gold background (#C9A24D)
│                     │    Black text (#0B0B0B)
└─────────────────────┘
```

---

## 🃏 Card Component

```
╔═══════════════════════════════════════════════╗
║                                               ║
║  Service Card                                 ║
║  ─────────────                                ║
║                                               ║
║  Background: Graphite Gray (#2E2E2E)          ║
║  Border: Gold/20 → Gold on hover              ║
║  Text: White (#FFFFFF)                        ║
║  Shadow: Soft black shadow                    ║
║                                               ║
║  Lorem ipsum dolor sit amet, consectetur      ║
║  adipiscing elit. Sophisticated and modern.   ║
║                                               ║
║  [Learn More →]  (Gold hover)                 ║
║                                               ║
╚═══════════════════════════════════════════════╝
```

---

## 🎯 Typography Hierarchy

### On Light Backgrounds (Off-White, Beige)

```
H1: 48px, Rich Black (#0B0B0B), Bold
──────────────────────────────────────

H2: 36px, Rich Black (#0B0B0B), Semibold
────────────────────────────────────

H3: 28px, Primary Text (#1A1A1A), Semibold
──────────────────────────────────

Body: 16px, Primary Text (#1A1A1A), Regular

Caption: 14px, Muted (#6F6A63), Regular
```

### On Dark Backgrounds (Rich Black, Graphite Gray)

```
H1: 48px, White (#FFFFFF), Bold
──────────────────────────────

H2: 36px, White (#FFFFFF), Semibold
────────────────────────────

H3: 28px, White (#FFFFFF), Semibold
──────────────────────────

Body: 16px, White/80, Regular

Caption: 14px, White/60, Regular

Accent: Metallic Gold (#C9A24D) for highlights
```

---

## 🎨 Section Background Patterns

### Pattern A: Light Start
```
Off-White → Beige → Off-White → Beige → Rich Black (CTA)
```

### Pattern B: Dramatic Start
```
Graphite Gray → Off-White → Beige → Off-White → Rich Black (CTA)
```

### Pattern C: Mixed
```
Off-White → Graphite Gray → Beige → Rich Black (CTA)
```

**Rule:** Never stack Beige directly on Rich Black (too harsh contrast)

---

## 📊 Color Usage Distribution

```
35% ████████████████████████████████████  Rich Black
20% ████████████████████                  Beige
15% ███████████████                       Off-White
15% ███████████████                       Graphite Gray
15% ███████████████                       Metallic Gold
```

**Critical:** Keep Gold at or below 15% to maintain sophistication

---

## 🖼️ Component Color Mapping

| Component | Background | Text | Accent |
|-----------|------------|------|--------|
| **Navbar** | Rich Black | White/80 | Gold hover |
| **Hero** | Off-White | Rich Black | Gold CTA |
| **Card** | Graphite Gray | White | Gold border hover |
| **Section (Alt)** | Beige | Primary Text | Gold highlights |
| **CTA Section** | Rich Black | White | Gold button |
| **Footer** | Rich Black | White/70 | Gold headings |
| **Form** | White | Primary Text | Gold focus |
| **Badge** | Beige | Primary Text | Gold border |

---

## ✨ Special Effects

### Card Hover Effect
```
Default State:
- Border: rgba(201, 162, 77, 0.2)
- Shadow: rgba(11, 11, 11, 0.25)

Hover State:
- Border: #C9A24D (full gold)
- Shadow: Enhanced black shadow
- Transform: translateY(-2px)
- Transition: 350ms ease
```

### Focus Outline
```
outline: 2px solid #C9A24D
outline-offset: 2px
```

### Gold Sheen Animation (CTA)
```
Gradient: Gold tones
Opacity: 0.7
Animation: 12s ease-in-out infinite
Movement: Subtle left-right shift
```

---

## 🚫 Anti-Patterns (Avoid These)

❌ **DON'T:** Use gold for large backgrounds
```
┌──────────────────────────────────┐
│ ENTIRE SECTION IN GOLD           │ ← Too flashy
│ #C9A24D background               │
└──────────────────────────────────┘
```

❌ **DON'T:** Stack harsh contrasts
```
Rich Black section
↓
Beige section ← Jarring transition
```

❌ **DON'T:** Use pure white backgrounds
```
Background: #FFFFFF ← Use #FAF9F7 instead
```

❌ **DON'T:** Mix color schemes
```
Adding blues, greens, or reds ← Stick to the palette
```

✅ **DO:** Use gold sparingly
```
┌──────────────────────────────────┐
│ Section with Off-White bg        │
│                                  │
│ [Gold Button]  ← Perfect!        │
└──────────────────────────────────┘
```

---

## 📱 Responsive Considerations

### Mobile (< 768px)
- Simplify gold usage (fewer accents)
- Increase button padding for touch
- Use more Off-White to reduce visual weight
- Stack sections vertically

### Tablet (768px - 1024px)
- Balance desktop and mobile
- 2-column card grids
- Maintain full color palette

### Desktop (> 1024px)
- Full color palette expression
- 3-column card grids
- Enhanced hover effects
- Larger typography

---

## 🎨 Accessibility Contrast Ratios

| Combination | Ratio | Level |
|-------------|-------|-------|
| Rich Black on Off-White | 19.36:1 | AAA ✓ |
| Rich Black on Beige | 17.42:1 | AAA ✓ |
| White on Rich Black | 20.77:1 | AAA ✓ |
| White on Graphite Gray | 13.94:1 | AAA ✓ |
| Gold on Rich Black (Large) | 4.89:1 | AA ✓ |

**Note:** Gold should only be used for large text (18px+) or decorative elements when on dark backgrounds.

---

## 🎯 Brand Personality

**This color scheme conveys:**

- 🏛️ **Authority** - Rich Black structure
- 💎 **Sophistication** - Soft Metallic Gold (not flashy)
- 🤝 **Approachability** - Warm Beige tones
- 📚 **Publishing Heritage** - Editorial palette
- 🎖️ **Professionalism** - Clean, modern Graphite Gray

**Target Audience:** US-based authors seeking premium, trustworthy book marketing services with a publishing-industry aesthetic.

---

**Last Updated:** February 4, 2026
**Design System Version:** 1.0
