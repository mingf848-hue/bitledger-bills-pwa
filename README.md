# BitLedger Bills PWA

BitLedger Bills PWA is a mobile-first bookkeeping web app built with Next.js, TypeScript, Tailwind CSS, and Supabase-ready services. The current scope focuses on a high-fidelity bills page for a 430px mobile viewport with safe-area support and a Vercel-friendly setup.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase
- Vercel
- GitHub

## Product Scope

- Auth module placeholder: login and register
- Bills module: implemented high-fidelity mobile bills page
- Accounts module: service scaffolded
- Categories module: service scaffolded
- Assets module: service scaffolded
- PWA metadata: manifest, icons, standalone-ready settings

## Project Structure

```text
app/
  (auth)/
  (dashboard)/
  apple-icon.tsx
  globals.css
  icon.tsx
  layout.tsx
  manifest.ts
components/
  bills/
  common/
  layout/
  pwa/
hooks/
lib/
  constants/
  supabase/
  types/
  utils/
services/
styles/
public/
  logos/
  pwa/
```

## Environment Variables

Frontend browser code only reads:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Do not expose service-role keys, JWT secrets, or any `POSTGRES_*` variables to browser code.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000). The root route redirects to `/bills`.

## Build

```bash
npm run build
```

## Vercel Deployment

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Set framework preset to Next.js.
4. Add these environment variables in Vercel project settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy.

## Basic Data Assumptions

### profiles

- `id`
- `user_id`
- `display_name`
- `avatar_url`
- `default_currency`
- `locale`
- `timezone`
- `created_at`
- `updated_at`

### accounts

- `id`
- `user_id`
- `name`
- `type`
- `currency`
- `institution_name`
- `mask`
- `icon`
- `balance`
- `is_visible`
- `sort_order`
- `created_at`
- `updated_at`

### categories

- `id`
- `user_id`
- `name`
- `type`
- `icon`
- `color`
- `parent_id`
- `is_system`
- `sort_order`
- `created_at`
- `updated_at`

### bills

- `id`
- `user_id`
- `account_id`
- `category_id`
- `type`
- `title`
- `note`
- `amount`
- `currency`
- `occurred_at`
- `merchant_name`
- `transfer_target_account_id`
- `created_at`
- `updated_at`

### assets

- `id`
- `user_id`
- `name`
- `type`
- `platform`
- `currency`
- `amount`
- `valuation_amount`
- `valuation_currency`
- `cost_basis`
- `is_visible`
- `created_at`
- `updated_at`

## Notes

- The current bills page uses mock snapshot data through the `services/` layer so the UI can be reviewed before wiring live Supabase tables.
- The browser-side Supabase client is isolated under `lib/supabase/` and intentionally uses only public environment variables.
