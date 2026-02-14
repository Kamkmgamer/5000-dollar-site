'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, ArrowUpRight } from 'lucide-react';

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
    <footer className="relative border-t border-[var(--accent-500)]/10 bg-[var(--neutral-950)]">
      {/* Decorative top line */}
      <div className="gold-line" />

      {/* Newsletter Section */}
      <div className="border-b border-[var(--neutral-800)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-16 sm:px-6 md:flex-row lg:px-8">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--neutral-100)]">
              Stay in the Loop
            </h3>
            <p className="mt-2 text-sm text-[var(--neutral-400)]">
              Seasonal menus, exclusive events, and culinary inspiration.
            </p>
          </div>
          <div className="flex w-full max-w-md gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-full border border-[var(--neutral-700)] bg-[var(--neutral-900)] px-5 py-3 text-sm text-[var(--neutral-200)] placeholder:text-[var(--neutral-600)] transition-all duration-300 focus:border-[var(--accent-500)]/40 focus:outline-none focus:ring-1 focus:ring-[var(--accent-500)]/20"
            />
            <button className="group flex items-center gap-2 rounded-full bg-[var(--accent-500)] px-6 py-3 text-sm font-semibold text-[var(--neutral-950)] transition-all duration-300 hover:bg-[var(--accent-400)] hover:shadow-[0_0_20px_rgba(201,168,76,0.2)]">
              Subscribe
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="group inline-block">
              <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--neutral-100)] transition-colors duration-300 group-hover:text-[var(--accent-400)]">
                Maison
              </span>
              <span className="ml-2 font-[family-name:var(--font-display)] text-3xl font-light text-[var(--accent-500)]">
                Bistrot
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-[var(--neutral-500)]">
              Experience exceptional dining across our multiple locations.
              Join our loyalty program for exclusive rewards and benefits.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--neutral-800)] text-[var(--neutral-500)] transition-all duration-300 hover:border-[var(--accent-500)]/30 hover:text-[var(--accent-500)] hover:shadow-[0_0_15px_rgba(201,168,76,0.1)]"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-8 lg:col-span-2">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-500)]">
                  {category}
                </h4>
                <ul className="mt-5 space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--neutral-500)] transition-colors duration-200 hover:text-[var(--neutral-200)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Locations */}
          <div className="lg:col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-500)]">
              Locations
            </h4>
            <div className="mt-5 space-y-5">
              {locations.map((location) => (
                <div key={location.name} className="space-y-1.5">
                  <p className="text-sm font-medium text-[var(--neutral-200)]">
                    {location.name}
                  </p>
                  <div className="space-y-1 text-xs text-[var(--neutral-500)]">
                    <p className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent-500)]/50" />
                      {location.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-[var(--accent-500)]/50" />
                      {location.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-[var(--accent-500)]/50" />
                      {location.hours}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 gold-line" />
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-[var(--neutral-600)]">
            © {new Date().getFullYear()} Maison Bistrot. All rights reserved.
          </p>
          <Link
            href="/loyalty"
            className="group flex items-center gap-2 text-sm text-[var(--accent-500)] transition-colors duration-300 hover:text-[var(--accent-400)]"
          >
            <span className="text-xs uppercase tracking-[0.15em]">Join Loyalty Program</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
