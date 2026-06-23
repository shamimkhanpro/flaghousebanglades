
## Flag House Bangladesh — V1 Website Plan

A premium, trustworthy marketing site (no e-commerce yet) with a structure ready for a future product catalog + checkout.

### Brand foundation
- **Colors (CSS tokens in `src/styles.css`):**
  - Deep Green (Pantone 3425 C) → `#006A4E` — primary
  - Vivid Red (Pantone 186 C) → `#CE1126` — accent / CTAs
  - Warm Yellow-Orange (Pantone 16-1358) → `#F2A65A` — highlight
  - Off-white background, near-black text
- **Typography (modeled on the reference sites — bold sans for display, clean sans for body):**
  - Display: **Oswald** (condensed, authoritative — used by united-states-flag.com style)
  - Body: **Inter** (clean, modern, trustworthy)
- **Logo:** uploaded `logo.jpeg` saved as a Lovable asset, used in header + footer.

### Site structure (TanStack routes)
```
/                 Landing page (hero, categories preview, why-us, inquiry teaser, contact)
/categories       Product categories grid (V1: informational tiles, no buy)
/inquiry          Corporate Inquiry form (mailto: info@flaghousebangladesh.com)
/contact          Contact details + embedded Dhaka map
```
Future-ready: `/categories/$slug` and `/products/$id` slots reserved in routing convention.

### Landing page sections
1. **Sticky header** — logo, nav (Home, Categories, Inquiry, Contact), red "Get a Quote" button
2. **Hero** — full-width, AI-generated premium imagery of Bangladesh flags waving against sky; tagline *"Bangladesh's Trusted Flag Manufacturer"*, sub-line, primary CTA "Request Corporate Quote", secondary "Browse Categories"
3. **Trust strip** — 4 quick value props (Premium fabric, Custom sizes, Nationwide delivery, Corporate-ready)
4. **Product Categories** — 5 cards with AI-generated images:
   - National Flags, Corporate Flags, Table Flags, Custom Flags, Accessories
   - Hover lift + subtle red underline animation
5. **About / Why Flag House** — split layout, photo + bullet credentials
6. **Corporate Inquiry teaser** — green band with CTA to `/inquiry`
7. **Contact preview** — phone, email, Dhaka address, map thumbnail
8. **Footer** — logo, nav, contact, copyright

### Corporate Inquiry form (`/inquiry`)
Fields: Company Name, Contact Person, Email, Phone, Message.
- Zod validation, shadcn form components.
- Submit composes a `mailto:info@flaghousebangladesh.com` with prefilled subject/body and opens user's mail client. Success toast on submit.

### Contact section (`/contact`)
- Email: info@flaghousebangladesh.com
- WhatsApp: +880 1713-095971 (click-to-chat)
- Dhaka address (placeholder line — user can edit)
- Embedded Google Maps iframe for Dhaka

### Floating WhatsApp button
Fixed bottom-right on all pages → `https://wa.me/8801713095971`, green circle with WhatsApp icon, subtle pulse animation.

### Imagery (AI-generated, saved to `src/assets/`)
- Hero: Bangladesh flag waving against blue sky, cinematic
- 5 category tiles: national flag pole, corporate office flags, desk table flags, custom embroidered flag, flag poles/accessories
- About section: factory / craftsmanship shot

### SEO & polish
- Per-route `head()` with unique title, description, OG tags
- Single H1 per page, semantic sections, alt text on all images
- Smooth scroll, fade-up entrance animations (tailwind + motion), hover transitions on cards/buttons

### Future e-commerce readiness (structural only — no code now)
- Category route segment in place
- Product card component built so it can later take `price`/`addToCart`
- Data shape kept in a typed module so a future Lovable Cloud `products` table maps 1:1

### Technical notes
- Stack: TanStack Start + Tailwind v4 + shadcn (existing template)
- New files: `src/routes/{categories,inquiry,contact}.tsx`, components for `Header`, `Footer`, `WhatsAppFloat`, `Hero`, `CategoryGrid`, `InquiryForm`, `ContactBlock`
- Brand tokens added to `src/styles.css` via `@theme`; Oswald + Inter loaded via `<link>` in `__root.tsx` head
- Logo registered via `lovable-assets` from the uploaded file
