'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserButton, useUser } from '@clerk/nextjs';
import {
  Menu,
  X,
  MapPin,
  ChevronDown,
  User,
  Calendar,
  Sparkles
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
  const [scrolled, setScrolled] = useState(false);
  const { isSignedIn } = useUser();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-700',
        scrolled
          ? 'border-b border-[var(--accent-500)]/10 bg-[var(--neutral-950)]/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative">
            <span className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--neutral-100)] transition-colors duration-300 group-hover:text-[var(--accent-400)]">
              Maison
            </span>
            <span className="ml-2 font-[family-name:var(--font-display)] text-2xl font-light tracking-tight text-[var(--accent-500)]">
              Bistrot
            </span>
            <div className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-[var(--accent-500)] to-transparent transition-all duration-500 group-hover:w-full" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-hover-underline relative px-4 py-2 text-sm font-medium text-[var(--neutral-300)] transition-colors duration-300 hover:text-[var(--neutral-100)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          {/* Location Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              className="flex items-center gap-2 rounded-full border border-[var(--neutral-700)] px-4 py-2 text-sm font-medium text-[var(--neutral-300)] transition-all duration-300 hover:border-[var(--accent-500)]/30 hover:text-[var(--neutral-100)]"
            >
              <MapPin className="h-3.5 w-3.5 text-[var(--accent-500)]" />
              <span>{selectedLocation.name}</span>
              <ChevronDown className={cn(
                "h-3.5 w-3.5 transition-transform duration-300",
                showLocationDropdown && "rotate-180"
              )} />
            </button>

            <AnimatePresence>
              {showLocationDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute right-0 top-full mt-3 w-64 overflow-hidden rounded-xl border border-[var(--accent-500)]/10 bg-[var(--neutral-900)]/95 p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
                >
                  {locations.map((location) => (
                    <button
                      key={location.slug}
                      onClick={() => {
                        setSelectedLocation(location);
                        setShowLocationDropdown(false);
                      }}
                      className={cn(
                        "flex w-full flex-col items-start rounded-lg px-4 py-3 text-left text-sm transition-all duration-200",
                        selectedLocation.slug === location.slug
                          ? "bg-[var(--accent-500)]/10 text-[var(--accent-400)]"
                          : "text-[var(--neutral-300)] hover:bg-[var(--neutral-800)] hover:text-[var(--neutral-100)]"
                      )}
                    >
                      <span className="font-medium">{location.name}</span>
                      <span className="mt-0.5 text-xs text-[var(--neutral-500)]">
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
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[var(--accent-500)] px-6 py-2.5 text-sm font-semibold text-[var(--neutral-950)] transition-all duration-500 hover:bg-[var(--accent-400)] hover:shadow-[0_0_30px_rgba(201,168,76,0.25)]"
          >
            <Calendar className="h-4 w-4" />
            <span>Reserve</span>
            <Sparkles className="h-3 w-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>

          {/* Account */}
          {isSignedIn ? (
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-10 h-10 ring-2 ring-[var(--accent-500)]/20",
                  userButtonTrigger: "focus:shadow-none focus:ring-2 focus:ring-[var(--accent-500)] rounded-full",
                }
              }}
            />
          ) : (
            <Link
              href="/login"
              className="flex items-center justify-center rounded-full border border-[var(--neutral-700)] p-2.5 text-[var(--neutral-400)] transition-all duration-300 hover:border-[var(--accent-500)]/30 hover:text-[var(--neutral-100)]"
            >
              <User className="h-5 w-5" />
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center rounded-lg p-2 text-[var(--neutral-300)] lg:hidden"
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
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-[var(--accent-500)]/10 bg-[var(--neutral-950)]/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-1 px-4 py-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-4 py-3.5 font-[family-name:var(--font-display)] text-xl font-medium text-[var(--neutral-200)] transition-colors hover:bg-[var(--neutral-800)] hover:text-[var(--accent-400)]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="my-6 gold-line" />

              <p className="px-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--neutral-500)]">
                Select Location
              </p>
              <div className="mt-3 space-y-1">
                {locations.map((location) => (
                  <button
                    key={location.slug}
                    onClick={() => {
                      setSelectedLocation(location);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-all duration-200",
                      selectedLocation.slug === location.slug
                        ? "bg-[var(--accent-500)]/10 text-[var(--accent-400)]"
                        : "text-[var(--neutral-400)] hover:bg-[var(--neutral-800)] hover:text-[var(--neutral-200)]"
                    )}
                  >
                    <MapPin className="h-4 w-4" />
                    <div>
                      <p className="font-medium">{location.name}</p>
                      <p className="text-xs text-[var(--neutral-500)]">
                        {location.address}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-6">
                <Link
                  href="/reservations"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 rounded-full bg-[var(--accent-500)] px-6 py-3.5 text-center font-semibold text-[var(--neutral-950)] transition-all duration-300 hover:bg-[var(--accent-400)]"
                >
                  Make Reservation
                </Link>
                {isSignedIn ? (
                  <div className="flex items-center justify-center rounded-full border border-[var(--neutral-700)] px-4 py-3">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center rounded-full border border-[var(--neutral-700)] px-4 py-3.5 text-[var(--neutral-400)] transition-colors hover:border-[var(--accent-500)]/30"
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
