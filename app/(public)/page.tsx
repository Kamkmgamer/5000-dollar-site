'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const featuredDishes = [
  {
    name: 'Pan-Seared Scallops',
    description: 'Cauliflower purée, crispy pancetta, lemon butter',
    price: 34,
    category: 'Seafood',
    popular: true,
  },
  {
    name: 'Wagyu Beef Tenderloin',
    description: 'Truffle mashed potatoes, asparagus, red wine reduction',
    price: 58,
    category: 'Mains',
    popular: true,
  },
  {
    name: 'Lobster Risotto',
    description: 'Arborio rice, saffron, parmesan crisp',
    price: 42,
    category: 'Pasta & Risotto',
    popular: false,
  },
  {
    name: 'Duck Confit',
    description: 'Cherry gastrique, wild rice, baby greens',
    price: 38,
    category: 'Mains',
    popular: false,
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    text: "The attention to detail in every dish is remarkable. Maison Bistrot has become our go-to for special occasions.",
    rating: 5,
    location: 'Downtown',
  },
  {
    name: 'James K.',
    text: "Incredible wine selection and the sommelier's recommendations were spot on. A truly memorable evening.",
    rating: 5,
    location: 'Westside',
  },
  {
    name: 'Emily R.',
    text: "The loyalty program is fantastic! We love earning points while enjoying our favorite dishes.",
    rating: 5,
    location: 'Harbor View',
  },
];

const locations = [
  {
    name: 'Downtown',
    address: '123 Main Street, New York',
    phone: '(212) 555-0100',
    hours: '11am - 11pm',
    image: '/images/locations/downtown.jpg',
  },
  {
    name: 'Westside',
    address: '456 Oak Avenue, New York',
    phone: '(212) 555-0200',
    hours: '11am - 10pm',
    image: '/images/locations/westside.jpg',
  },
  {
    name: 'Harbor View',
    address: '789 Waterfront Drive, New York',
    phone: '(212) 555-0300',
    hours: '10am - 12am',
    image: '/images/locations/harbor.jpg',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-900)] via-[var(--secondary-900)] to-[var(--neutral-900)]">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block rounded-full border border-[var(--accent-500)]/30 bg-[var(--accent-500)]/10 px-4 py-1.5 text-sm font-medium text-[var(--accent-500)]">
              Welcome to Maison Bistrot
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-[family-name:var(--font-display)] text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Exceptional Dining
            <br />
            <span className="text-[var(--accent-500)]">Across Three Locations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--neutral-300)]"
          >
            Experience the art of French cuisine with a modern twist. Join our loyalty program 
            and earn rewards with every visit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/reservations">
              <Button size="lg" className="gap-2">
                Make a Reservation
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/menu">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                View Menu
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4"
          >
            {[
              { value: '3', label: 'Locations' },
              { value: '15+', label: 'Years Experience' },
              { value: '50K+', label: 'Happy Guests' },
              { value: '4.9', label: 'Average Rating' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--accent-500)]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[var(--neutral-400)]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-[var(--primary)]">
              Our Menu
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold">
              Featured Dishes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--muted-foreground)]">
              Discover our chef's selection of signature dishes, crafted with the finest seasonal ingredients
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all hover:border-[var(--primary)]/30 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted-foreground)]">
                    {dish.category}
                  </span>
                  {dish.popular && (
                    <span className="rounded-full bg-[var(--accent-500)]/10 px-2 py-1 text-xs font-medium text-[var(--accent-700)]">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                  {dish.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                  {dish.description}
                </p>
                <p className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--primary)]">
                  ${dish.price}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/menu">
              <Button variant="outline" className="gap-2">
                View Full Menu
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="border-y border-[var(--border)] bg-[var(--muted)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-[var(--primary)]">
              Visit Us
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold">
              Our Locations
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--muted-foreground)]">
              Three unique dining experiences across the city. Each location offers its own distinct atmosphere.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl bg-[var(--card)] shadow-sm transition-all hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden bg-[var(--neutral-200)]">
                  <div className="absolute inset-0 flex items-center justify-center bg-[var(--primary)]/10">
                    <MapPin className="h-12 w-12 text-[var(--primary)]/40" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
                    {location.name}
                  </h3>
                  <div className="mt-4 space-y-2 text-sm">
                    <p className="flex items-center gap-2 text-[var(--muted-foreground)]">
                      <MapPin className="h-4 w-4" />
                      {location.address}
                    </p>
                    <p className="flex items-center gap-2 text-[var(--muted-foreground)]">
                      <Phone className="h-4 w-4" />
                      {location.phone}
                    </p>
                    <p className="flex items-center gap-2 text-[var(--muted-foreground)]">
                      <Clock className="h-4 w-4" />
                      {location.hours}
                    </p>
                  </div>
                  <Link
                    href={`/locations/${location.name.toLowerCase().replace(' ', '-')}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] transition-colors hover:gap-3"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-[var(--primary)]">
              Reviews
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold">
              What Our Guests Say
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8"
              >
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[var(--accent-500)] text-[var(--accent-500)]"
                    />
                  ))}
                </div>
                <p className="mt-4 text-[var(--foreground)]">{testimonial.text}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {testimonial.location} Location
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-900)] to-[var(--secondary-900)]" />
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold text-white sm:text-5xl">
            Join Our Loyalty Program
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--neutral-300)]">
            Earn points with every visit, enjoy exclusive benefits, and unlock special rewards. 
            It's our way of saying thank you for being part of the Maison Bistrot family.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/register">
              <Button size="lg" className="bg-[var(--accent-500)] text-[var(--neutral-900)] hover:bg-[var(--accent-400)]">
                Join Now - It's Free
              </Button>
            </Link>
            <Link href="/gift-cards">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Buy Gift Cards
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
