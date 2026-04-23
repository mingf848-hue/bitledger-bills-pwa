import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BitLedger Bills PWA",
    short_name: "BitLedger",
    description:
      "A mobile-first bookkeeping PWA with bills, accounts, categories, assets, and Supabase-ready data access.",
    start_url: "/bills",
    display: "standalone",
    background_color: "#F5F7FB",
    theme_color: "#F5F7FB",
    orientation: "portrait",
    icons: [
      {
        src: "/pwa/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/pwa/maskable-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
