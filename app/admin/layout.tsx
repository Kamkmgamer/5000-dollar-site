import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import "../globals.css";

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
  title: "Admin | Maison Bistrot",
  description: "Admin dashboard for Maison Bistrot restaurant management",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${cormorant.variable} ${inter.variable} min-h-screen antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
