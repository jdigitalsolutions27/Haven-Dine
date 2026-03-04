import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { StickyMobileBar } from "@/components/sticky-mobile-bar";
import { siteConfig } from "@/lib/constants";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Haven Dine | Luxury Fine Dining Restaurant",
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  },
  applicationName: siteConfig.name,
  keywords: [
    "Haven Dine",
    "luxury restaurant",
    "fine dining Tacloban City",
    "private dining",
    "chef tasting menu"
  ],
  openGraph: {
    title: "Haven Dine | Luxury Fine Dining Restaurant",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    locale: "en_PH",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} bg-background font-sans text-foreground antialiased`}
      >
        <div className="relative isolate overflow-x-hidden">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <StickyMobileBar />
        </div>
      </body>
    </html>
  );
}
