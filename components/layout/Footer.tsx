'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  dining: [
    { label: 'Menu', href: '/menu' },
    { label: 'Reservations', href: '/reservations' },
    { label: 'Private Dining', href: '/private-dining' },
    { label: 'Gift Cards', href: '/gift-cards' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Locations', href: '/locations' },
    { label: 'Events', href: '/events' },
    { label: 'Careers', href: '/careers' },
  ],
  support: [
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Accessibility', href: '/accessibility' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};

const locations = [
  {
    name: 'Downtown',
    address: '123 Main Street, New York, NY 10001',
    phone: '(212) 555-0100',
    hours: 'Mon-Sun: 11am-11pm',
  },
  {
    name: 'Westside',
    address: '456 Oak Avenue, New York, NY 10002',
    phone: '(212) 555-0200',
    hours: 'Mon-Sun: 11am-10pm',
  },
  {
    name: 'Harbor View',
    address: '789 Waterfront Drive, New York, NY 10003',
    phone: '(212) 555-0300',
    hours: 'Mon-Sun: 10am-12am',
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--neutral-900)] text-[var(--neutral-50)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-[family-name:var(--font-display)] text-3xl font-bold">
                Maison Bistrot
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[var(--neutral-400)]">
              Experience exceptional dining across our multiple locations. 
              Join our loyalty program for exclusive rewards and benefits.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--neutral-700)] transition-colors hover:border-[var(--accent-500)] hover:text-[var(--accent-500)]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--neutral-700)] transition-colors hover:border-[var(--accent-500)] hover:text-[var(--accent-500)]"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--neutral-700)] transition-colors hover:border-[var(--accent-500)] hover:text-[var(--accent-500)]"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-8 lg:col-span-2">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                Dining
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.dining.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--neutral-400)] transition-colors hover:text-[var(--accent-500)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--neutral-400)] transition-colors hover:text-[var(--accent-500)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                Support
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--neutral-400)] transition-colors hover:text-[var(--accent-500)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Locations */}
          <div className="lg:col-span-1">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
              Our Locations
            </h3>
            <div className="mt-4 space-y-6">
              {locations.map((location) => (
                <div key={location.name} className="space-y-2">
                  <p className="font-medium text-[var(--accent-500)]">
                    {location.name}
                  </p>
                  <div className="space-y-1 text-sm text-[var(--neutral-400)]">
                    <p className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                      {location.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      {location.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {location.hours}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--neutral-800)] pt-8 sm:flex-row">
          <p className="text-sm text-[var(--neutral-500)]">
            © {new Date().getFullYear()} Maison Bistrot. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/loyalty"
              className="flex items-center gap-2 text-sm text-[var(--accent-500)] transition-colors hover:text-[var(--accent-400)]"
            >
              <span>Join Loyalty Program</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
