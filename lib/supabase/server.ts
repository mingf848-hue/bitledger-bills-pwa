import "server-only";

import { createClient } from "@supabase/supabase-js";

function deriveSupabaseUrlFromPostgresUrl(value: string | undefined) {
  if (!value) {
    return null;
  }

  try {
    const host = new URL(value).hostname;
    const match = host.match(/^db\.([^.]+)\.supabase\.co$/);
    return match ? `https://${match[1]}.supabase.co` : null;
  } catch {
    return null;
  }
}

export function getSupabaseServerUrl() {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_URL ??
    process.env.SUPABASE_URL ??
    deriveSupabaseUrlFromPostgresUrl(process.env.POSTGRES_URL_NON_POOLING) ??
    deriveSupabaseUrlFromPostgresUrl(process.env.POSTGRES_PRISMA_URL)
  );
}

export function getSupabaseServerKey() {
  return process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY ?? null;
}

export function hasSupabaseServerConfig() {
  return Boolean(getSupabaseServerUrl() && getSupabaseServerKey());
}

export function createServerSupabaseClient() {
  const url = getSupabaseServerUrl();
  const key = getSupabaseServerKey();

  if (!url || !key) {
    throw new Error("Missing Supabase server configuration");
  }

  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
