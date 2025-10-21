This is a Next.js project. It includes GSAP ScrollTrigger-based smooth scroll reveal animations.

How to use the built-in animations:
- Add the attribute `data-animate` to any element to animate it on scroll.
- Supported values: `fade-up` (default), `fade-down`, `fade-left`, `fade-right`, `zoom-in`.
- Optional attributes: `data-delay="0.2"`, `data-duration="0.8"`, `data-once="true|false"`.
- Example:

```tsx
<section data-animate="fade-up" data-delay="0.1">
  <h2 data-animate="fade-up">Section title</h2>
  <p data-animate="fade-right">Content...</p>
</section>
```

Smooth scrolling for anchor links is enabled via CSS `html { scroll-behavior: smooth; }`.

Advanced usage:
- For complex timelines and parallax effects, see components/features/Hero.tsx and app/(root)/about/page.tsx which use gsap, ScrollTrigger, and @gsap/react directly.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
