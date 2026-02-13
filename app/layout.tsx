import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maison Bistrot | Multi-Location Fine Dining",
  description: "Experience exceptional dining across our multiple locations. Make reservations, join our loyalty program, and purchase gift cards.",
  keywords: "restaurant, fine dining, reservations, loyalty program, gift cards",
  openGraph: {
    title: "Maison Bistrot | Multi-Location Fine Dining",
    description: "Experience exceptional dining across our multiple locations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body className={`${cormorant.variable} ${inter.variable} min-h-screen antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
