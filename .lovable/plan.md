# Premium Redesign — Coming Soon Popup

The current dialog is too plain. We'll rebuild it into a polished, on-brand moment that feels intentional — matching the site's Oswald/Inter type system and green/red/gold Bangladesh palette.

## New layout

Two-column dialog (stacks on mobile), ~560px wide:

**Left accent panel** (~40%):
- Deep `brand-green` background with a soft radial glow (white + red) matching the InquiryCTA aesthetic.
- Large stylized "Coming Soon" wordmark set vertically in Oswald, plus a small waving-flag icon.
- Subtle diagonal stripe / grain texture for depth.

**Right content panel** (white):
- Pulsing red "Launching Soon" pill badge at top.
- Bold Oswald headline: product name (or "Our Flag Collection") — uppercase, tight tracking.
- Short supporting line in muted foreground.
- A thin brand-gold divider.
- Three tiny reassurance points with icons (Truck / Shield / Sparkles): "Made in Bangladesh · Bulk-ready · Custom sizes".
- Two side-by-side CTAs:
  - **WhatsApp** — filled `#25D366`, MessageCircle icon, subtle lift-on-hover shadow.
  - **Email** — outlined brand-red with red hover fill, Mail icon.
- Muted footer line: "We usually reply within a few hours."

## Motion & polish

- Dialog fade+scale entry (existing shadcn animation kept).
- Pulsing dot on the badge.
- Buttons: shadow-lift + slight translate on hover.
- Rounded-2xl corners, thicker border, elevated shadow.

## Files touched

- **Edit** `src/components/site/ComingSoonDialog.tsx` — full redesign per above.
- No changes to `CategoryGrid.tsx` or `routes/index.tsx` — triggers stay the same.

## Out of scope

- No changes to product cards, other sections, or auto-popup timing.
- No new dependencies (uses existing shadcn Dialog + lucide icons).

Confirm and I'll build it.