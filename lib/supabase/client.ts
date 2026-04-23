import { createBrowserSupabaseClient } from "@/lib/supabase/browser";

let browserClient: ReturnType<typeof createBrowserSupabaseClient> | null = null;

export function getSupabaseBrowserClient() {
  if (!browserClient) {
    browserClient = createBrowserSupabaseClient();
  }

  return browserClient;
}
