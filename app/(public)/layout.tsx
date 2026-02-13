import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { LocationProvider } from "@/components/providers/LocationProvider";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LocationProvider>
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </LocationProvider>
  );
}
