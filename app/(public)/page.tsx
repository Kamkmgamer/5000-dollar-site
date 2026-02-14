'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Star, MapPin, Clock, Phone, Crown, Award, Gift, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const featuredDishes = [
  {
    name: 'Pan-Seared Scallops',
    description: 'Cauliflower purée, crispy pancetta, lemon butter',
    price: 34,
    category: 'Seafood',
    popular: true,
    image: '/images/dish_scallops_1771030971105.png',
  },
  {
    name: 'Wagyu Beef Tenderloin',
    description: 'Truffle mashed potatoes, asparagus, red wine reduction',
    price: 58,
    category: 'Mains',
    popular: true,
    image: '/images/dish_wagyu_1771030987953.png',
  },
  {
    name: 'Lobster Risotto',
    description: 'Arborio rice, saffron, parmesan crisp',
    price: 42,
    category: 'Pasta & Risotto',
    popular: false,
    image: '/images/dish_risotto_1771031000433.png',
  },
  {
    name: 'Duck Confit',
    description: 'Cherry gastrique, wild rice, baby greens',
    price: 38,
    category: 'Mains',
    popular: false,
    image: '/images/dish_duck_1771031018820.png',
  },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    text: "The attention to detail in every dish is remarkable. Maison Bistrot has become our go-to for special occasions. Every visit feels like a celebration.",
    rating: 5,
    location: 'Downtown',
  },
  {
    name: 'James Kowalski',
    text: "Incredible wine selection and the sommelier's recommendations were spot on. A truly memorable evening that we'll never forget.",
    rating: 5,
    location: 'Westside',
  },
  {
    name: 'Emily Rodriguez',
    text: "The loyalty program is fantastic! We love earning points while enjoying our favorite dishes. The attention to returning guests is unmatched.",
    rating: 5,
    location: 'Harbor View',
  },
];

const locationsList = [
  {
    name: 'Downtown',
    address: '123 Main Street, New York',
    phone: '(212) 555-0100',
    hours: '11am - 11pm',
    tagline: 'The Original',
    seats: 120,
    image: '/images/hero_restaurant_1771030958566.png',
  },
  {
    name: 'Westside',
    address: '456 Oak Avenue, New York',
    phone: '(212) 555-0200',
    hours: '11am - 10pm',
    tagline: 'Garden Retreat',
    seats: 80,
    image: '/images/hero_restaurant_1771031040808.png',
  },
  {
    name: 'Harbor View',
    address: '789 Waterfront Drive, New York',
    phone: '(212) 555-0300',
    hours: '10am - 12am',
    tagline: 'Waterfront Dining',
    seats: 200,
    image: '/images/hero_restaurant_1771031138685.png',
  },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-[var(--neutral-950)] -mt-20">
      {/* ═══════════════════════════════════════════
          HERO SECTION — Cinematic Full-Screen
          ═══════════════════════════════════════════ */}
      <section ref={heroRef} className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Layered Background with Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=3870&auto=format&fit=crop"
            alt="Maison Bistrot Interior"
            className="h-full w-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-[var(--neutral-950)]/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--neutral-950)]/40 via-transparent to-[var(--neutral-950)]" />
          {/* Radial glow */}
          <div className="absolute left-1/2 top-1/3 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-500)]/[0.08] blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-[400px] w-[600px] rounded-full bg-[var(--accent-700)]/[0.03] blur-[100px]" />
          {/* Noise texture */}
          <div className="noise-bg absolute inset-0" />
          {/* Gradient fade at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--neutral-950)] to-transparent" />
        </div>

        {/* Decorative floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            style={{ y: heroY }}
            className="absolute top-20 left-[15%] h-[1px] w-32 bg-gradient-to-r from-transparent via-[var(--accent-500)]/20 to-transparent animate-float-slow"
          />
          <motion.div
            style={{ y: heroY }}
            className="absolute top-40 right-[20%] h-[1px] w-48 bg-gradient-to-r from-transparent via-[var(--accent-500)]/15 to-transparent animate-float"
          />
          <motion.div
            style={{ y: heroY }}
            className="absolute bottom-40 left-[10%] h-24 w-[1px] bg-gradient-to-b from-[var(--accent-500)]/10 to-transparent"
          />
          {/* Gold diamond accent */}
          <div className="absolute top-[30%] right-[12%] h-3 w-3 rotate-45 border border-[var(--accent-500)]/15 animate-float-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-[35%] left-[8%] h-2 w-2 rotate-45 bg-[var(--accent-500)]/10 animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-500)]/20 bg-[var(--accent-500)]/5 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent-400)]">
                <Crown className="h-3.5 w-3.5" />
                Est. 2009 · New York
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={fadeUp} className="overflow-hidden">
              <h1 className="font-[family-name:var(--font-display)] text-6xl font-bold leading-[1.05] tracking-tight text-[var(--neutral-100)] sm:text-7xl lg:text-8xl">
                Exceptional
                <br />
                <span className="gradient-text">Dining</span>
                <br />
                <span className="text-[var(--neutral-400)] font-light italic text-[0.65em]">
                  across three locations
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              className="mx-auto max-w-xl text-lg leading-relaxed text-[var(--neutral-400)]"
            >
              Experience the art of French cuisine with a modern twist. Join our
              loyalty program and earn rewards with every visit.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row"
            >
              <Link href="/reservations">
                <Button variant="gold" size="lg" className="gap-2">
                  Make a Reservation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/menu">
                <Button variant="outline" size="lg" className="gap-2">
                  View Menu
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="pt-10"
            >
              <div className="gold-line mx-auto max-w-sm" />
              <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
                {[
                  { value: '3', label: 'Locations' },
                  { value: '15+', label: 'Years' },
                  { value: '50K+', label: 'Guests Served' },
                  { value: '4.9', label: 'Rating' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--accent-400)] sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-xs uppercase tracking-[0.15em] text-[var(--neutral-500)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--neutral-600)]">Scroll</span>
            <div className="h-8 w-[1px] bg-gradient-to-b from-[var(--accent-500)]/40 to-transparent animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURED DISHES — Editorial Magazine Layout
          ═══════════════════════════════════════════ */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--neutral-950)] via-[var(--neutral-900)]/50 to-[var(--neutral-950)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20 text-center"
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent-500)]">
              The Menu
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold text-[var(--neutral-100)] sm:text-6xl">
              Featured Dishes
            </h2>
            <div className="section-divider mx-auto mt-6 max-w-xs">
              <span className="h-1.5 w-1.5 rotate-45 bg-[var(--accent-500)]" />
            </div>
            <p className="mx-auto mt-6 max-w-xl text-[var(--neutral-400)]">
              Discover our chef&apos;s selection of signature dishes, crafted with the finest seasonal ingredients
            </p>
          </motion.div>

          {/* Dish Grid — Asymmetric Editorial */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`premium-card group cursor-pointer p-8 ${index === 0 ? 'md:col-span-2 md:row-span-2 md:p-12' : ''}`}
              >
                {/* Image placeholder with shimmer */}
                <div className={`relative mb-6 overflow-hidden rounded-lg bg-gradient-to-br from-[var(--neutral-800)] to-[var(--neutral-900)] ${index === 0 ? 'h-56' : 'h-36'}`}>
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-t from-[var(--neutral-950)]/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent-400)]">
                      {dish.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className={`font-[family-name:var(--font-display)] font-bold text-[var(--neutral-100)] ${index === 0 ? 'text-2xl' : 'text-lg'}`}>
                        {dish.name}
                      </h3>
                      {dish.popular && (
                        <span className="rounded-full border border-[var(--accent-500)]/20 bg-[var(--accent-500)]/5 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--accent-400)]">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className={`mt-2 text-[var(--neutral-500)] ${index === 0 ? 'text-base' : 'text-sm'}`}>
                      {dish.description}
                    </p>
                  </div>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--accent-400)]">
                    ${dish.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link href="/menu">
              <Button variant="outline" className="gap-2">
                View Full Menu
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          EXPERIENCE SECTION — What We Offer
          ═══════════════════════════════════════════ */}
      <section className="relative py-32">
        <div className="absolute inset-0 noise-bg" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent-500)]">
              The Experience
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold text-[var(--neutral-100)]">
              More Than Dining
            </h2>
            <div className="section-divider mx-auto mt-6 max-w-xs">
              <span className="h-1.5 w-1.5 rotate-45 bg-[var(--accent-500)]" />
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Award, title: 'Loyalty Rewards', desc: 'Earn points with every visit. Unlock exclusive benefits and special rewards as you climb our tier system.' },
              { icon: Gift, title: 'Gift Cards', desc: 'The perfect gift for food lovers. Digital and physical cards available for any occasion.' },
              { icon: Users, title: 'Private Dining', desc: 'Intimate spaces for special celebrations. From cozy wine rooms to grand event halls.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group premium-card p-10 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[var(--accent-500)]/15 bg-[var(--accent-500)]/5 transition-all duration-500 group-hover:border-[var(--accent-500)]/30 group-hover:bg-[var(--accent-500)]/10 group-hover:shadow-[0_0_30px_rgba(201,168,76,0.1)]">
                  <item.icon className="h-6 w-6 text-[var(--accent-500)]" />
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-bold text-[var(--neutral-100)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--neutral-500)]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LOCATIONS — Immersive Cards
          ═══════════════════════════════════════════ */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--neutral-950)] via-[var(--neutral-900)]/30 to-[var(--neutral-950)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent-500)]">
              Visit Us
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold text-[var(--neutral-100)]">
              Our Locations
            </h2>
            <div className="section-divider mx-auto mt-6 max-w-xs">
              <span className="h-1.5 w-1.5 rotate-45 bg-[var(--accent-500)]" />
            </div>
            <p className="mx-auto mt-6 max-w-xl text-[var(--neutral-400)]">
              Three unique dining experiences across the city. Each location offers its own distinct atmosphere.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {locationsList.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] as const }}
                className="group premium-card overflow-hidden"
              >
                {/* Image area with gradient overlay */}
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-[var(--neutral-800)] to-[var(--neutral-900)]">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--neutral-900)] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent-400)]">
                      {location.tagline}
                    </span>
                    <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--neutral-100)]">
                      {location.name}
                    </h3>
                  </div>
                  <div className="absolute bottom-4 right-6 rounded-full border border-[var(--accent-500)]/20 bg-[var(--neutral-950)]/60 px-3 py-1 backdrop-blur-sm">
                    <span className="text-xs text-[var(--accent-400)]">{location.seats} seats</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-3 text-sm">
                    <p className="flex items-center gap-3 text-[var(--neutral-400)]">
                      <MapPin className="h-4 w-4 text-[var(--accent-500)]/50" />
                      {location.address}
                    </p>
                    <p className="flex items-center gap-3 text-[var(--neutral-400)]">
                      <Phone className="h-4 w-4 text-[var(--accent-500)]/50" />
                      {location.phone}
                    </p>
                    <p className="flex items-center gap-3 text-[var(--neutral-400)]">
                      <Clock className="h-4 w-4 text-[var(--accent-500)]/50" />
                      {location.hours}
                    </p>
                  </div>
                  <Link
                    href={`/locations/${location.name.toLowerCase().replace(' ', '-')}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-400)] transition-all duration-300 hover:gap-3"
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

      {/* ═══════════════════════════════════════════
          TESTIMONIALS — Editorial Quote Design
          ═══════════════════════════════════════════ */}
      <section className="relative py-32">
        <div className="absolute inset-0 noise-bg" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent-500)]">
              Testimonials
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold text-[var(--neutral-100)]">
              Guest Stories
            </h2>
            <div className="section-divider mx-auto mt-6 max-w-xs">
              <span className="h-1.5 w-1.5 rotate-45 bg-[var(--accent-500)]" />
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="premium-card relative p-10"
              >
                {/* Decorative quote mark */}
                <div className="absolute -top-2 left-6 font-[family-name:var(--font-display)] text-7xl leading-none text-[var(--accent-500)]/15">
                  &ldquo;
                </div>

                <div className="relative">
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[var(--accent-500)] text-[var(--accent-500)]"
                      />
                    ))}
                  </div>
                  <p className="mt-5 font-[family-name:var(--font-display)] text-lg font-light italic leading-relaxed text-[var(--neutral-200)]">
                    {testimonial.text}
                  </p>
                  <div className="mt-8 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[var(--neutral-200)]">
                        {testimonial.name}
                      </p>
                      <p className="mt-0.5 text-xs text-[var(--neutral-500)]">
                        {testimonial.location} Location
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA — Loyalty Program
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-32">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1510] via-[#1f1a12] to-[#1a1510]" />
        <div className="absolute inset-0 noise-bg" />
        {/* Gold glow accent */}
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-500)]/[0.04] blur-[100px]" />

        {/* Decorative border */}
        <div className="absolute inset-x-8 inset-y-8 rounded-2xl border border-[var(--accent-500)]/10 sm:inset-x-16 sm:inset-y-12" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent-500)]">
              Rewards & Loyalty
            </span>
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-bold text-[var(--neutral-100)] sm:text-6xl">
              Join Our
              <br />
              <span className="gradient-text">Inner Circle</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--neutral-400)]">
              Earn points with every visit, enjoy exclusive benefits, and unlock special rewards.
              It&apos;s our way of saying thank you for being part of the Maison Bistrot family.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/register">
                <Button variant="gold" size="lg">
                  Join Now — It&apos;s Free
                </Button>
              </Link>
              <Link href="/gift-cards">
                <Button variant="outline" size="lg">
                  Buy Gift Cards
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
