'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserButton, useUser } from '@clerk/nextjs';
import { 
  Menu, 
  X, 
  MapPin, 
  ChevronDown, 
  User, 
  Calendar 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/locations', label: 'Locations' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/gift-cards', label: 'Gift Cards' },
];

const locations = [
  { name: 'Downtown', slug: 'downtown', address: '123 Main St' },
  { name: 'Westside', slug: 'westside', address: '456 Oak Ave' },
  { name: 'Harbor View', slug: 'harbor-view', address: '789 Waterfront Dr' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const { isSignedIn } = useUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/60">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--primary)]">
            Maison Bistrot
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          {/* Location Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              className="flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--muted)]"
            >
              <MapPin className="h-4 w-4 text-[var(--primary)]" />
              <span>{selectedLocation.name}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            
            <AnimatePresence>
              {showLocationDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 top-full mt-2 w-56 rounded-lg border border-[var(--border)] bg-[var(--card)] p-2 shadow-lg"
                >
                  {locations.map((location) => (
                    <button
                      key={location.slug}
                      onClick={() => {
                        setSelectedLocation(location);
                        setShowLocationDropdown(false);
                      }}
                      className={cn(
                        "flex w-full flex-col items-start rounded-md px-3 py-2 text-left text-sm transition-colors",
                        selectedLocation.slug === location.slug
                          ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                          : "hover:bg-[var(--muted)]"
                      )}
                    >
                      <span className="font-medium">{location.name}</span>
                      <span className="text-xs text-[var(--muted-foreground)]">
                        {location.address}
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Reservation Button */}
          <Link
            href="/reservations"
            className="rounded-full bg-[var(--primary)] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--primary-800)] hover:shadow-lg"
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Reserve
            </span>
          </Link>

          {/* Account */}
          {isSignedIn ? (
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-10 h-10",
                  userButtonTrigger: "focus:shadow-none focus:ring-2 focus:ring-[var(--primary)] rounded-full",
                }
              }}
            />
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-2 rounded-full border border-[var(--border)] p-2.5 transition-colors hover:bg-[var(--muted)]"
            >
              <User className="h-5 w-5" />
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center rounded-lg p-2 lg:hidden"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[var(--border)] lg:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-4 px-4 py-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-4 py-3 text-lg font-medium transition-colors hover:bg-[var(--muted)]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <div className="border-t border-[var(--border)] pt-4">
                <p className="px-4 text-sm font-medium text-[var(--muted-foreground)]">
                  Select Location
                </p>
                <div className="mt-2 space-y-1">
                  {locations.map((location) => (
                    <button
                      key={location.slug}
                      onClick={() => {
                        setSelectedLocation(location);
                        setIsOpen(false);
                      }}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors",
                        selectedLocation.slug === location.slug
                          ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                          : "hover:bg-[var(--muted)]"
                      )}
                    >
                      <MapPin className="h-4 w-4" />
                      <div>
                        <p className="font-medium">{location.name}</p>
                        <p className="text-sm text-[var(--muted-foreground)]">
                          {location.address}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <Link
                  href="/reservations"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 rounded-full bg-[var(--primary)] px-6 py-3 text-center font-medium text-white"
                >
                  Make Reservation
                </Link>
                {isSignedIn ? (
                  <div className="flex items-center justify-center rounded-full border border-[var(--border)] px-4 py-3">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center rounded-full border border-[var(--border)] px-4 py-3"
                  >
                    <User className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
