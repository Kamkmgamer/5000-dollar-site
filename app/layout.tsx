import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      <html lang="en" className="dark scroll-smooth">
        <body className={`${playfair.variable} ${dmSans.variable} min-h-screen antialiased grain-overlay`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
