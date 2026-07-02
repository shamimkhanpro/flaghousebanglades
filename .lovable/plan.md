# Coming Soon Popup for Products

Since physical products aren't ready for ordering yet, we'll clearly signal "Coming Soon" on products and route interest into WhatsApp or Email inquiries via a polished modal.

## What changes

### 1. New `ComingSoonDialog` component
`src/components/site/ComingSoonDialog.tsx` — a branded modal built on the existing shadcn `dialog` primitive.

Contents:
- Heading: "Coming Soon"
- Subheading dynamically shows the product name (e.g. "National Flags — launching soon").
- Short message: "Our products are being finalized for launch. Reach out now to reserve stock or get early pricing."
- Two large action buttons:
  - **WhatsApp** (green `#25D366`, WhatsApp icon) → opens `https://wa.me/8801713095971?text=...` with a pre-filled product-specific message.
  - **Email** (brand red, Mail icon) → opens `mailto:info@flaghousebangladesh.com?subject=...&body=...` pre-filled per product.
- Small "Close" affordance.

Matches existing Oswald/Inter typography and brand tokens — no new colors.

### 2. Product card behavior (`CategoryGrid.tsx`)
- Replace the current "Inquiry on WhatsApp" anchor with an "Inquiry — Coming Soon" button that opens the dialog for that product.
- Add a subtle "Coming Soon" badge in the image top-right corner of each card (same style as the pulsing red badge used in `FanVehicleCollection`).
- Keep card layout, hover effects, and grid identical.

### 3. First-visit popup (optional, included)
- Auto-open the dialog once per visitor (guarded via `sessionStorage` key `fhb_coming_soon_seen`) about 1.5s after landing on the homepage, with a generic message ("Our full product line is launching soon").
- Mounted in `src/routes/index.tsx` so it doesn't interfere with product-card triggers.

## Files touched

- **Add** `src/components/site/ComingSoonDialog.tsx`
- **Edit** `src/components/site/CategoryGrid.tsx` — swap WhatsApp anchor for dialog trigger + add badge
- **Edit** `src/routes/index.tsx` — mount the first-visit auto-popup

## Out of scope

- No changes to Hero, About, Institutional, Quality, Why, Contact, Footer, or Inquiry form sections.
- No backend or data storage — inquiries still route through WhatsApp/email as before.
- Fan & Vehicle section already has its own "Coming Soon" treatment and stays as-is.

Confirm and I'll implement.