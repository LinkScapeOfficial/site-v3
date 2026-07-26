import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "LinkScape",
    template: "%s | LinkScape",
  },
  description: site.positioning,
  icons: { shortcut: "/favicon.png" },
  openGraph: {
    title: "LinkScape",
    description: site.positioning,
    url: site.url,
    siteName: "LinkScape",
    type: "website",
    images: [
      {
        url: "https://cdn.linkscape.app/linkscape-logo.png",
        width: 2608,
        height: 769,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkScape",
    description: site.positioning,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Entrance animations start at opacity 0 and are resolved by
            framer-motion. Without JS that leaves headings invisible, so the
            no-script path reveals them immediately. */}
        <noscript>
          {/* eslint-disable-next-line react/no-danger */}
          <style
            dangerouslySetInnerHTML={{
              __html:
                '[style*="opacity:0"]{opacity:1!important;filter:none!important;transform:none!important}',
            }}
          />
        </noscript>
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:border focus:border-border focus:bg-background focus:px-4 focus:py-2 focus:text-sm"
          >
            Skip to content
          </a>
          <Header />
          <main id="content" className="flex min-h-screen flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
