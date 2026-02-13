import Link from 'next/link';
import { MapPin, Phone, Clock, Car, Wine, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const locations = [
  {
    id: 'downtown',
    name: 'Downtown',
    address: '123 Main Street, New York, NY 10001',
    phone: '(212) 555-0100',
    email: 'downtown@maisonbistrot.com',
    hours: {
      monday: { open: '11:00 AM', close: '11:00 PM' },
      tuesday: { open: '11:00 AM', close: '11:00 PM' },
      wednesday: { open: '11:00 AM', close: '11:00 PM' },
      thursday: { open: '11:00 AM', close: '11:00 PM' },
      friday: { open: '11:00 AM', close: '12:00 AM' },
      saturday: { open: '10:00 AM', close: '12:00 AM' },
      sunday: { open: '10:00 AM', close: '11:00 PM' },
    },
    capacity: 120,
    features: [
      { icon: Car, label: 'Valet Parking' },
      { icon: Wine, label: 'Wine Cellar' },
      { icon: Users, label: 'Private Dining' },
    ],
    description: 'Our flagship location in the heart of Manhattan, featuring an elegant main dining room and an exclusive rooftop terrace with stunning city views.',
  },
  {
    id: 'westside',
    name: 'Westside',
    address: '456 Oak Avenue, New York, NY 10002',
    phone: '(212) 555-0200',
    email: 'westside@maisonbistrot.com',
    hours: {
      monday: { open: '11:00 AM', close: '10:00 PM' },
      tuesday: { open: '11:00 AM', close: '10:00 PM' },
      wednesday: { open: '11:00 AM', close: '10:00 PM' },
      thursday: { open: '11:00 AM', close: '10:00 PM' },
      friday: { open: '11:00 AM', close: '11:00 PM' },
      saturday: { open: '10:00 AM', close: '11:00 PM' },
      sunday: { open: '10:00 AM', close: '10:00 PM' },
    },
    capacity: 80,
    features: [
      { icon: Car, label: 'Garden Patio' },
      { icon: Wine, label: 'Wine Bar' },
      { icon: Users, label: 'Private Events' },
    ],
    description: 'A cozy neighborhood gem with a charming garden patio and an intimate wine bar. Perfect for romantic dinners and small gatherings.',
  },
  {
    id: 'harbor-view',
    name: 'Harbor View',
    address: '789 Waterfront Drive, New York, NY 10003',
    phone: '(212) 555-0300',
    email: 'harbor@maisonbistrot.com',
    hours: {
      monday: { open: '10:00 AM', close: '12:00 AM' },
      tuesday: { open: '10:00 AM', close: '12:00 AM' },
      wednesday: { open: '10:00 AM', close: '12:00 AM' },
      thursday: { open: '10:00 AM', close: '12:00 AM' },
      friday: { open: '10:00 AM', close: '2:00 AM' },
      saturday: { open: '9:00 AM', close: '2:00 AM' },
      sunday: { open: '9:00 AM', close: '12:00 AM' },
    },
    capacity: 200,
    features: [
      { icon: Car, label: 'Dock Dining' },
      { icon: Wine, label: 'Beach Bar' },
      { icon: Users, label: 'Event Space' },
    ],
    description: 'Spectacular waterfront dining with panoramic harbor views. Features dockside seating, weekend brunch, and a lively beach bar.',
  },
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[var(--primary-900)] to-[var(--secondary-900)] py-24">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-[var(--accent-500)]/30 bg-[var(--accent-500)]/10 px-4 py-1.5 text-sm font-medium text-[var(--accent-500)]">
            Three Unique Experiences
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-bold text-white sm:text-6xl">
            Our Locations
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--neutral-300)]">
            Each Maison Bistrot location offers its own distinct atmosphere while maintaining 
            our commitment to exceptional cuisine and service.
          </p>
        </div>
      </section>

      {/* Locations List */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {locations.map((location, index) => (
              <div
                key={location.id}
                className={`grid gap-12 lg:grid-cols-2 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Placeholder */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--neutral-200)]">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5">
                      <MapPin className="h-24 w-24 text-[var(--primary)]/20" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <span className="text-sm font-medium text-white/80">
                        {location.capacity} Seats
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--foreground)]">
                    {location.name}
                  </h2>
                  <p className="mt-4 text-lg text-[var(--muted-foreground)]">
                    {location.description}
                  </p>

                  {/* Features */}
                  <div className="mt-8 flex flex-wrap gap-4">
                    {location.features.map((feature) => (
                      <div
                        key={feature.label}
                        className="flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2"
                      >
                        <feature.icon className="h-4 w-4 text-[var(--primary)]" />
                        <span className="text-sm font-medium">{feature.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 text-[var(--primary)]" />
                      <div>
                        <p className="font-medium">{location.address}</p>
                        <Link
                          href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                          target="_blank"
                          className="text-sm text-[var(--primary)] hover:underline"
                        >
                          Get Directions
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-[var(--primary)]" />
                      <a href={`tel:${location.phone}`} className="font-medium hover:text-[var(--primary)]">
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-1 h-5 w-5 text-[var(--primary)]" />
                      <div className="space-y-1">
                        {Object.entries(location.hours).map(([day, hours]) => (
                          <div key={day} className="flex justify-between gap-8 text-sm">
                            <span className="capitalize text-[var(--muted-foreground)]">{day}</span>
                            <span>{hours.open} - {hours.close}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link href={`/reservations?location=${location.id}`}>
                      <Button>Make a Reservation</Button>
                    </Link>
                    <Link href={`/menu?location=${location.id}`}>
                      <Button variant="outline">View Menu</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border)] bg-[var(--muted)] py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold">
            Can't Decide Which Location?
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)]">
            Each location offers a unique dining experience. Contact us and we'll help you choose 
            the perfect spot for your occasion.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
            <Link href="/private-dining">
              <Button>Private Dining</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
