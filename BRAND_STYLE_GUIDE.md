# Premium Book Brand - Style Guide
**Stellar Book Promoters Brand Identity**

## 🎨 Color Palette

### Primary Colors

#### 1. Rich Black `#0B0B0B`
- **Usage:** 35% of design
- **Purpose:** Primary structure (header, footer, navigation)
- **CSS Variable:** `var(--rich-black)`
- **Tailwind Class:** `bg-richBlack`, `text-richBlack`
- **When to use:**
  - Main navigation background
  - Footer background
  - Primary structural elements
  - Heading text on light backgrounds
  - Button hover states

#### 2. Soft Metallic Gold `#C9A24D`
- **Usage:** 15% of design (controlled accent)
- **Purpose:** CTAs, highlights, premium accents
- **CSS Variable:** `var(--metallic-gold)`
- **Tailwind Class:** `bg-metallicGold`, `text-metallicGold`
- **When to use:**
  - Primary CTA buttons
  - Logo accents
  - Key highlights and badges
  - Icons and decorative elements
  - Hover borders on cards
- **Important:** Keep usage under 15% to maintain sophistication

#### 3. Graphite Gray `#2E2E2E`
- **Usage:** 15% of design
- **Purpose:** Cards, sections, depth
- **CSS Variable:** `var(--graphite-gray)`
- **Tailwind Class:** `bg-graphiteGray`, `text-graphiteGray`
- **When to use:**
  - Service cards background
  - Testimonial cards
  - Secondary sections
  - Content containers
  - Softer alternative to pure black

#### 4. Light Beige / Parchment `#EFE3CF`
- **Usage:** 20% of design
- **Purpose:** Section backgrounds, warmth
- **CSS Variable:** `var(--beige)`
- **Tailwind Class:** `bg-beige`, `text-beige`
- **When to use:**
  - Alternating section backgrounds
  - Testimonials section
  - Quote sections
  - Warm, inviting areas
  - Behind content blocks

#### 5. Warm Off-White `#FAF9F7`
- **Usage:** 15% of design
- **Purpose:** Base background, content areas
- **CSS Variable:** `var(--off-white)`
- **Tailwind Class:** `bg-offWhite`
- **When to use:**
  - Main page background
  - Content card backgrounds
  - Input fields
  - Modal backgrounds
  - Primary reading areas

---

## ✍️ Text Colors

### Primary Text `#1A1A1A`
- **CSS Variable:** `var(--text-primary)`
- **Use for:** Body text, paragraphs, most content on light backgrounds

### Text on Dark `#FFFFFF`
- **CSS Variable:** `var(--text-on-dark)`
- **Use for:** Text on Rich Black, Graphite Gray, or dark images

### Muted Text `#6F6A63`
- **CSS Variable:** `var(--text-muted)`
- **Use for:** Secondary information, captions, metadata, placeholder text

---

## 🔘 Button Styles

### Primary CTA Button
```css
Background: #C9A24D (Metallic Gold)
Text: #0B0B0B (Rich Black)
Padding: 24px 48px
Border Radius: 8px

HOVER:
Background: #0B0B0B (Rich Black)
Text: #C9A24D (Metallic Gold)
Box Shadow: 0 8px 24px rgba(11, 11, 11, 0.3)
```

**HTML Class:** `btn-primary`

**When to use:**
- Main conversion actions
- "Get Started", "Book a Call"
- Form submissions
- Primary navigation CTAs

### Secondary CTA Button
```css
Background: transparent
Border: 2px solid #C9A24D
Text: #C9A24D
Padding: 22px 46px (account for border)
Border Radius: 8px

HOVER:
Background: #C9A24D
Text: #0B0B0B
Border: 2px solid #C9A24D
```

**HTML Class:** `btn-secondary`

**When to use:**
- Secondary actions
- "Learn More", "View Services"
- Non-critical CTAs
- Ghost buttons in hero sections

---

## 📐 Layout Guidelines

### Section Backgrounds

#### Pattern 1: Alternating Sections
```
Hero → Off-White (#FAF9F7)
Services → Beige (#EFE3CF)
Testimonials → Off-White (#FAF9F7)
CTA → Rich Black (#0B0B0B) with gold accents
Footer → Rich Black (#0B0B0B)
```

#### Pattern 2: Dark Hero
```
Hero → Graphite Gray (#2E2E2E)
About → Off-White (#FAF9F7)
Features → Beige (#EFE3CF)
CTA → Rich Black (#0B0B0B)
```

### Cards
- **Background:** Graphite Gray `#2E2E2E`
- **Border:** 1px solid `rgba(201, 162, 77, 0.2)`
- **Hover Border:** Metallic Gold `#C9A24D`
- **Shadow:** `0 26px 60px rgba(11, 11, 11, 0.25)`
- **Text:** White `#FFFFFF`
- **Border Radius:** 16px
- **Padding:** 32px

### Navigation
- **Background:** Rich Black `rgba(11, 11, 11, 0.95)` with backdrop blur
- **Border Bottom:** 1px solid `rgba(201, 162, 77, 0.15)`
- **Text:** White `#FFFFFF`
- **Active/Hover:** Metallic Gold `#C9A24D`
- **Logo:** Metallic Gold accent
- **Height:** 80px
- **Position:** Fixed top, z-index: 50

---

## 🎯 Usage Percentages (Target)

| Color | Percentage | Purpose |
|-------|------------|---------|
| Rich Black #0B0B0B | 35% | Structure, authority |
| Graphite Gray #2E2E2E | 15% | Cards, depth |
| Metallic Gold #C9A24D | 15% | CTAs, accents |
| Beige #EFE3CF | 20% | Section backgrounds |
| Off-White #FAF9F7 | 15% | Content areas |

---

## 🚫 Don'ts

❌ Don't use gold for large background areas
❌ Don't use pure black `#000000` (use Rich Black instead)
❌ Don't use pure white `#FFFFFF` for backgrounds (use Off-White)
❌ Don't exceed 15% gold usage in the design
❌ Don't use bright, flashy golds (stay with soft metallic)
❌ Don't use gradients heavily (subtle only)
❌ Don't mix with other color schemes

---

## ✅ Do's

✅ Use gold sparingly as accent color
✅ Maintain high contrast for readability
✅ Use Beige for warm, inviting sections
✅ Keep Rich Black for primary structure
✅ Use Graphite Gray for softer black areas
✅ Maintain consistent button styles
✅ Use proper text colors based on background
✅ Test accessibility (WCAG AA minimum)

---

## 📱 Responsive Considerations

### Mobile
- Increase button padding: `py-4 px-8`
- Ensure touch targets are 44px minimum
- Simplify gold usage on smaller screens
- Use more Off-White to reduce visual weight

### Tablet
- Balance between mobile and desktop
- Cards can be 2-column grid
- Maintain button hierarchy

### Desktop
- Full color palette usage
- 3-column card grids
- Enhanced hover effects
- Larger typography with more spacing

---

## 🎨 Accessibility

### Color Contrast Ratios
- **Rich Black on Off-White:** 19.36:1 ✅ AAA
- **Rich Black on Beige:** 17.42:1 ✅ AAA
- **Metallic Gold on Rich Black:** 4.89:1 ✅ AA (Large text)
- **White on Graphite Gray:** 13.94:1 ✅ AAA
- **White on Rich Black:** 20.77:1 ✅ AAA

### Guidelines
- Always test text contrast
- Use White on dark backgrounds
- Use Rich Black or Primary Text on light backgrounds
- Avoid Metallic Gold for body text
- Ensure interactive elements have clear focus states

---

## 💼 Brand Personality

This color scheme conveys:
- **Authority:** Rich Black establishes credibility
- **Sophistication:** Soft Metallic Gold (not flashy)
- **Approachability:** Warm Beige and Off-White
- **Professionalism:** Graphite Gray for modern touch
- **Publishing Heritage:** Editorial, book-friendly palette

**Target Market:** US authors seeking premium, trustworthy book marketing services

---

## 📦 Implementation

### CSS Variables (Already Configured)
```css
--rich-black: #0B0B0B
--graphite-gray: #2E2E2E
--metallic-gold: #C9A24D
--beige: #EFE3CF
--off-white: #FAF9F7
--text-primary: #1A1A1A
--text-on-dark: #FFFFFF
--text-muted: #6F6A63
```

### Tailwind Classes
- `bg-richBlack`, `text-richBlack`
- `bg-graphiteGray`, `text-graphiteGray`
- `bg-metallicGold`, `text-metallicGold`
- `bg-beige`, `text-beige`
- `bg-offWhite`, `text-offWhite`

### Component Classes
- `.btn-primary` - Primary CTA button
- `.btn-secondary` - Secondary CTA button
- `.section-beige` - Beige section background
- `.section-graphite` - Graphite section with white text
- `.section-rich-black` - Rich black section with white text
- `.card` - Standard card component
- `.nav-glass` - Navigation bar style

---

**Last Updated:** February 4, 2026
**Version:** 1.0 - Premium Book Brand
