# Hailey Portfolio Website

A personal portfolio and contact website for Hailey, built with Next.js App Router, TypeScript, and Firebase.

The site includes:

- a home page with hero content and featured campaigns
- an about page with profile and background details
- a work listing page and dynamic work detail pages
- a contact page with a form that posts to a server API route
- Firebase-backed submission storage and optional email queueing

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Firebase (Firestore)
- Font Awesome + React Icons

## Project Routes

- `/` home page
- `/about` about page
- `/work` all work items
- `/work/[id]` work detail page by project id
- `/contact` contact form page
- `/api/contact` form submission API endpoint (POST)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Create `.env.local` in the project root and add:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
FIREBASE_CONTACT_TO_EMAIL=you@example.com
```

`FIREBASE_CONTACT_TO_EMAIL` can be a single email or a comma-separated list.

### 3. Run the development server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Contact Form + Firebase

The API route at `app/api/contact/route.ts` validates input and then saves submissions to Firestore.

Expected behavior:

- saves to `contact_submissions`
- optionally queues an email document in `mail` when `FIREBASE_CONTACT_TO_EMAIL` is set

To send queued emails automatically, install Firebase Extension `firestore-send-email` and configure SMTP in your Firebase project.

## NPM Scripts

- `npm run dev` start development server
- `npm run build` create production build
- `npm run start` run production server
- `npm run lint` run ESLint

## Deployment

This app can be deployed to any Next.js-compatible host (for example Vercel).

For production, make sure all Firebase environment variables are configured on your hosting provider.
