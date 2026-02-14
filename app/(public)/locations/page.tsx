'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Car, Wine, Users, ArrowRight, Gem } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const locations = [
  {
    id: 'downtown',
    name: 'Downtown',
    tagline: 'The Original',
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
    image: '/images/hero_restaurant_1771030958566.png',
  },
  {
    id: 'westside',
    name: 'Westside',
    tagline: 'Garden Retreat',
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
    image: '/images/hero_restaurant_1771031040808.png',
  },
  {
    id: 'harbor-view',
    name: 'Harbor View',
    tagline: 'Waterfront Dining',
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
    image: '/images/hero_restaurant_1771031138685.png',
  },
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-[var(--neutral-950)]">
      {/* Hero */}
      <section className="relative overflow-hidden py-32 pt-40">
        {/* Layered Background with Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero_restaurant_1771031157896.png"
            alt="Maison Bistrot Locations"
            className="h-full w-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-[var(--neutral-950)]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1510]/60 via-[var(--neutral-950)] to-[var(--neutral-950)]" />
        </div>
        <div className="absolute inset-0 noise-bg opacity-30" />
        <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--accent-500)]/[0.05] blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-500)]/20 bg-[var(--accent-500)]/5 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent-400)]">
              <Gem className="h-3.5 w-3.5" />
              Three Unique Experiences
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 font-[family-name:var(--font-display)] text-6xl font-bold text-[var(--neutral-100)] sm:text-7xl"
          >
            Our Locations
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="section-divider mx-auto mt-6 max-w-xs"
          >
            <span className="h-1.5 w-1.5 rotate-45 bg-[var(--accent-500)]" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg text-[var(--neutral-400)]"
          >
            Each Maison Bistrot location offers its own distinct atmosphere while maintaining
            our commitment to exceptional cuisine and service.
          </motion.p>
        </div>
      </section>

      {/* Locations List */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
                className={`grid gap-12 lg:grid-cols-2`}
              >
                {/* Image Section */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--accent-500)]/10">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--neutral-950)] via-transparent to-transparent" />

                    {/* Overlay content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent-400)]">
                        {location.tagline}
                      </span>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="rounded-full border border-[var(--accent-500)]/20 bg-[var(--neutral-950)]/60 px-3 py-1 text-xs text-[var(--accent-400)] backdrop-blur-sm">
                          {location.capacity} Seats
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--neutral-100)]">
                    {location.name}
                  </h2>
                  <div className="mt-3 gold-line-left w-16" />
                  <p className="mt-6 text-lg leading-relaxed text-[var(--neutral-400)]">
                    {location.description}
                  </p>

                  {/* Features */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {location.features.map((feature) => (
                      <div
                        key={feature.label}
                        className="flex items-center gap-2 rounded-full border border-[var(--neutral-800)] px-4 py-2 text-sm text-[var(--neutral-300)] transition-all duration-300 hover:border-[var(--accent-500)]/20"
                      >
                        <feature.icon className="h-4 w-4 text-[var(--accent-500)]/60" />
                        <span>{feature.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="mt-8 space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-4 w-4 text-[var(--accent-500)]/50" />
                      <div>
                        <p className="text-sm font-medium text-[var(--neutral-200)]">{location.address}</p>
                        <Link
                          href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                          target="_blank"
                          className="text-xs text-[var(--accent-500)] transition-colors hover:text-[var(--accent-400)]"
                        >
                          Get Directions
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-[var(--accent-500)]/50" />
                      <a href={`tel:${location.phone}`} className="text-sm font-medium text-[var(--neutral-200)] hover:text-[var(--accent-400)]">
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-1 h-4 w-4 text-[var(--accent-500)]/50" />
                      <div className="space-y-1">
                        {Object.entries(location.hours).map(([day, hours]) => (
                          <div key={day} className="flex justify-between gap-6 text-sm">
                            <span className="capitalize text-[var(--neutral-500)]">{day}</span>
                            <span className="text-[var(--neutral-300)]">{hours.open} – {hours.close}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href={`/reservations?location=${location.id}`}>
                      <Button className="gap-2">
                        Make a Reservation
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href={`/menu?location=${location.id}`}>
                      <Button variant="outline">View Menu</Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-[var(--neutral-800)] py-32">
        <div className="absolute inset-0 noise-bg" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--neutral-100)]">
              Can&apos;t Decide Which Location?
            </h2>
            <p className="mt-4 text-[var(--neutral-400)]">
              Each location offers a unique dining experience. Contact us and we&apos;ll help you choose
              the perfect spot for your occasion.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="/contact">
                <Button variant="outline">Contact Us</Button>
              </Link>
              <Link href="/private-dining">
                <Button variant="gold" className="gap-2">
                  Private Dining
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
