# THEOS Career Consultants Website

Vercel-ready Next.js website for IT and non-IT training, career guidance, recruitment and placement assistance in India, Singapore and Malaysia.

## Before launch

Open `lib/site.ts` and replace:

- Phone and WhatsApp number
- Email address
- Office address

Open `app/layout.tsx` and replace `https://example.com` with the final domain.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Sign in to Vercel and select **Add New → Project**.
3. Import the GitHub repository.
4. Keep the detected Next.js settings and deploy.
5. Add the custom domain under **Project Settings → Domains**.

## Included pages

Home, About, Training, Placements, Jobs, Employers, Contact, Privacy and Terms.

The enquiry form opens WhatsApp with the candidate's completed information. Update the WhatsApp number in `lib/site.ts` before deployment.
