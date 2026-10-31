# UXFoundery Social Page

A polished, mobile-first social landing website for UXFoundery, a premium design community. The public destination is designed for `https://social.uxfoundery.com` and includes official social links, Mentor's Club waitlist application flow, legal pages, SEO metadata, and accessible responsive layouts.

## Stack

- Next.js 16 App Router and TypeScript
- Tailwind CSS v4
- shadcn/ui primitives
- React Hook Form and Zod for validation
- Lucide React icons

## Development

```bash
pnpm install
pnpm dev
```

Visit `http://localhost:3000`.

## Production

```bash
pnpm build
pnpm start
```

## Routes

- `/` — Official social destinations and Mentor's Club introduction
- `/mentors-club` — Waitlist application form
- `/submitted-successfully` — Submission confirmation
- `/terms-of-service` — Terms of Service draft
- `/privacy-policy` — Privacy Policy draft

## Project structure

- `app/` — App Router pages, metadata, and global styles
- `components/` — Reusable layout, social, form, and legal components
- `components/ui/` — shadcn/ui primitives
- `lib/constants.ts` — Social destinations, brand configuration, and SEO values
- `lib/schemas.ts` — Zod form schema
- `lib/submission.ts` — Frontend submission service boundary
- `public/` — Static assets

## Social destinations

All live social URLs are centralized in `lib/constants.ts`. Add YouTube or Discord only after UXFoundery has an official URL. The current site intentionally does not display either destination because no official URLs were supplied.

## Mentor's Club submission layer

The application uses React Hook Form with Zod validation, conditional Student/Professional fields, and a consent requirement. `lib/submission.ts` is intentionally a small asynchronous service boundary. It currently demonstrates the local frontend flow and navigates to the confirmation page without claiming that data has been persisted. Replace `submitMentorClubApplication` with a server action or API request before accepting real applications in production. Do not put application data in URLs.

## Logo asset

The official UXFoundery logo PNG is stored at `public/logo.png` and is shared by the header and footer through the `Logo` component. Do not fabricate or replace the official logo with an invented mark.

## Domain deployment

Deploy the project to Vercel, then add `social.uxfoundery.com` in the project Domains settings. At your DNS provider, create the DNS record Vercel requests, usually a CNAME for the `social` subdomain. Confirm the domain is serving HTTPS and that the canonical URL in `lib/constants.ts` and `app/layout.tsx` remains `https://social.uxfoundery.com`.

## Accessibility and design notes

The project uses semantic headings, labeled controls, keyboard-visible focus states, safe external links, responsive touch targets, reduced-motion support, and descriptive link text. Keep the interface constrained: use the existing Button variants and Card/link patterns instead of introducing visually unrelated components.

The dot-pattern treatment is implemented as a restrained CSS utility in `app/globals.css`, based on the requested Magic UI dot-pattern direction. It uses no gradients in the product styling; the pattern is intentionally not applied as a decorative background to preserve the premium editorial feel.

## Official UXFoundery color palette

Only these colors are official UXFoundery colors:

- `#121212` — primary dark interface color
- `#000000` — black
- `#F1F1F1` — lightest neutral surface
- `#E8E8E8` — border and light neutral
- `#380993` — purple accent
- `#9D9DFF` — light purple accent
- `#701526` — burgundy accent
- `#FF5F19` — orange accent
- `#443101` — brown accent
- `#FFCD04` — yellow accent
- `#253504` — dark green accent
- `#85AF25` — green accent

Do not introduce random colors or gradients. The primary UI should continue to rely on `#121212`, `#000000`, `#F1F1F1`, and `#E8E8E8`, with accent colors used sparingly and intentionally.

## Legal content

Terms of Service and Privacy Policy are professional website drafts and should be reviewed by qualified legal counsel before production use. The privacy copy does not claim certifications, regulatory compliance, encryption methods, or third-party processors that have not been confirmed.
