import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/src/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linkscape",
  description: "We are a group of student hackers",
  openGraph: {
    title: "Linkscape",
    description: "We are Linkscape.",
    url: "https://linkscape.app",
    siteName: "Linkscape",
    images: [
      {
        url: "https://cdn.linkscape.app/linkscape-logo.png",
        width: 2608,
        height: 769,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
