import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bitledger-bills-pwa.vercel.app"),
  title: {
    default: "BitLedger Bills PWA",
    template: "%s | BitLedger Bills PWA",
  },
  description:
    "A mobile-first PWA bills experience built with Next.js, TypeScript, Tailwind CSS, and Supabase.",
  applicationName: "BitLedger Bills PWA",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "BitLedger",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f5f8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="bg-[#f4f5f8] font-sans text-[var(--text-primary)]">
        {children}
      </body>
    </html>
  );
}
