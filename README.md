## Splitr

**Splitr** is a full‑stack expense‑splitting app that helps friends, roommates, and trip groups track shared costs, see who owes whom, and settle up with minimal friction. It provides rich dashboards, smart settlement calculations, and payment reminders so you never lose track of shared expenses again.

### Features

- **Group expenses**: Create groups for trips, roommates, or events and keep all shared expenses organized.
- **Smart settlements**: Automatically minimize the number of payments when settling up between group members.
- **Multiple split types**: Split equally, by percentage, or by exact amount to cover real‑world scenarios.
- **Dashboard & analytics**: View your total balance, what you owe/are owed, and monthly spending trends.
- **Balance details**: See per‑person balances and breakdowns of who owes whom.
- **Real‑time updates**: New expenses and repayments appear instantly across users.
- **Auth & user management**: Secure authentication and user accounts powered by Clerk.
- **Email notifications & reminders**: Send reminders and insights using Resend + Inngest.

### Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19, modern landing page + dashboard UI.
- **Styling & UI**: Tailwind CSS 4, shadcn‑style UI components, Lucide icons.
- **Backend**: Convex for data storage, queries, and mutations.
- **Auth**: Clerk (`@clerk/nextjs`) for authentication and session management.
- **Background jobs & workflows**: Inngest for payment reminders and spending insights.
- **Forms & validation**: `react-hook-form` + `zod`.
- **Charts & data viz**: `recharts` for analytics in the dashboard.
- **Email**: Resend for transactional emails.

### Prerequisites

- **Node.js**: Recommended Node 20+ (see Next.js 16 requirements).
- **npm** (or pnpm/yarn/bun) for dependency management.
- Accounts/keys for:
  - **Convex**
  - **Clerk**
  - **Resend**
  - **Google Gemini** (for AI‑powered features, via `@google/generative-ai`)

### Environment Variables

Create a `.env.local` file in the project root and populate it with your own credentials. The app expects (at minimum) variables like:

```bash
# Convex
CONVEX_DEPLOYMENT=...
CONVEX_DEPLOY_KEY=...
NEXT_PUBLIC_CONVEX_URL=...

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
CLERK_JWT_ISSUER_DOMAIN=...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Email
RESEND_API_KEY=...

# AI
GEMINI_API_KEY=...
```

Never commit real secret values; keep them in `.env.local` only.

### Getting Started

Install dependencies:

```bash
npm install
```

Run Convex in development (in a separate terminal if you’re using a local deployment):

```bash
npx convex dev
```

Run the Next.js dev server:

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

You can start editing the landing page in `app/page.js` and the main authenticated experience in `app/(main)/dashboard/page.jsx`. The app uses the App Router, so new routes live under `app/`.

### Available Scripts

- **`npm run dev`**: Start the Next.js development server.
- **`npm run build`**: Create an optimized production build.
- **`npm run start`**: Start the production server (after `npm run build`).
- **`npm run lint`**: Run ESLint on the project.

### Project Structure (High Level)

- `app/` – Next.js routes (landing page, auth pages, dashboard, expenses, groups, contacts, settlements).
- `components/` – Shared UI components (buttons, cards, forms, lists, layout).
- `components/ui/` – Reusable base UI primitives.
- `convex/` – Convex schema, queries, and mutations (expenses, groups, contacts, dashboard, users, auth config).
- `hooks/` – Custom hooks like `use-convex-query` and `use-store-user`.
- `lib/` – Utilities, landing page data (`FEATURES`, `STEPS`, `TESTIMONIALS`), and Inngest workflows.

### Deployment

You can deploy Splitr on platforms that support Next.js 16 and environment variables (for example, Vercel). Ensure that:

- All required environment variables are configured in your hosting provider.
- Convex is deployed and `NEXT_PUBLIC_CONVEX_URL` points to the correct deployment.
- Clerk, Resend, and Gemini credentials are set for the production environment.

Refer to the official docs for:

- Next.js deployment
- Convex deployment
- Clerk production configuration
- Inngest production setup

