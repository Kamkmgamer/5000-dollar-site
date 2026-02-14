'use client';

import { motion } from 'framer-motion';
import { Award, Users, Clock, Leaf, Feather, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '50K+', label: 'Happy Guests' },
  { value: '3', label: 'Locations' },
  { value: '25', label: 'Team Members' },
];

const values = [
  {
    icon: Leaf,
    title: 'Sustainable Sourcing',
    description: 'We partner with local farms and sustainable suppliers to bring you the freshest seasonal ingredients while minimizing our environmental impact.',
  },
  {
    icon: Award,
    title: 'Culinary Excellence',
    description: 'Our executive chef brings over 20 years of experience from Michelin-starred kitchens, crafting dishes that honor French tradition with modern innovation.',
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: 'We believe in giving back to the communities that support us. A portion of every bill goes to local food banks and culinary education programs.',
  },
  {
    icon: Clock,
    title: 'Time-Honored Techniques',
    description: 'From our 48-hour beef bourguignon to our house-made charcuterie, we take the time to do things the right way.',
  },
];

const team = [
  {
    name: 'Julian Marc',
    role: 'Executive Chef',
    bio: 'With 20 years of experience in Michelin-starred kitchens across Paris and Lyon.',
    image: '/Images/chef_julian_marc_1771035488580.png'
  },
  {
    name: 'Elena Rossi',
    role: 'Chef de Cuisine',
    bio: 'Specializing in modern Mediterranean techniques and seasonal flavor profiles.',
    image: '/Images/chef_elena_rossi_1771035503633.png'
  },
  {
    name: 'Marcus Thorne',
    role: 'General Manager',
    bio: 'Dedicated to providing an unparalleled service experience for every guest.',
    image: '/Images/manager_marcus_thorne_1771035517608.png'
  },
  {
    name: 'Sophia Chen',
    role: 'Head Sommelier',
    bio: 'Curating an award-winning wine list featuring rare vintages and small producers.',
    image: '/Images/sommelier_sophia_chen_1771035531890.png'
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--neutral-950)]">
      {/* Hero */}
      <section className="relative overflow-hidden py-32 pt-40">
        {/* Layered Background with Image */}
        <div className="absolute inset-0">
          <img
            src="/Images/hero_restaurant_interior_1771032142554.png"
            alt="Maison Bistrot Bar"
            className="h-full w-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-[var(--neutral-950)]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1510]/60 via-[var(--neutral-950)] to-[var(--neutral-950)]" />
        </div>
        <div className="absolute inset-0 noise-bg opacity-30" />
        {/* Gold glow */}
        <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--accent-500)]/[0.05] blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-500)]/20 bg-[var(--accent-500)]/5 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent-400)]">
              <Feather className="h-3.5 w-3.5" />
              Our Story
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-8 font-[family-name:var(--font-display)] text-6xl font-bold text-[var(--neutral-100)] sm:text-7xl"
          >
            A Legacy of
            <br />
            <span className="gradient-text">Fine Dining</span>
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
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[var(--neutral-400)]"
          >
            Founded in 2009, Maison Bistrot began with a simple vision: to bring authentic French
            cuisine to New York while honoring both tradition and innovation.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative border-y border-[var(--neutral-800)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--accent-400)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[var(--neutral-500)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-32">
        <div className="absolute inset-0 noise-bg" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent-500)]">
                Our Journey
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--neutral-100)]">
                From Paris to New York
              </h2>
              <div className="mt-4 gold-line-left w-20" />
              <div className="mt-8 space-y-5 text-[var(--neutral-400)] leading-relaxed">
                <p>
                  Chef Jean-Pierre Dubois arrived in New York in 2008 with little more than his knife
                  roll and a dream. After years of working in the world&apos;s finest kitchens, he was ready
                  to create something of his own—something that would honor his French heritage while
                  embracing the energy and diversity of his new home.
                </p>
                <p>
                  In a small space in downtown Manhattan, Maison Bistrot opened its doors. The name
                  itself reflects Chef Jean-Pierre&apos;s vision: &quot;maison&quot; (home) for the warmth and comfort
                  he wanted guests to feel, and &quot;bistrot&quot; for the casual elegance of traditional
                  French neighborhood restaurants.
                </p>
                <p>
                  The restaurant quickly gained a following, earning recognition for its authentic
                  French cuisine and impeccable service. Within five years, Maison Bistrot expanded
                  to the Westside, bringing its unique charm to a new neighborhood. The Harbor View
                  location followed in 2018, offering a spectacular waterfront dining experience.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--accent-500)]/10 bg-gradient-to-br from-[var(--neutral-800)] to-[var(--neutral-900)]">
                <img
                  src="/Images/hero_luxury_bistro_1771032197619.png"
                  alt="Maison Bistrot Interior"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 rounded-xl border border-[var(--accent-500)]/15 bg-[var(--neutral-900)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--accent-400)]">
                  2009
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[var(--neutral-500)]">Year Founded</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative border-y border-[var(--neutral-800)] py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--neutral-900)]/50 to-[var(--neutral-950)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent-500)]">
              What We Believe
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold text-[var(--neutral-100)]">
              Our Core Values
            </h2>
            <div className="section-divider mx-auto mt-6 max-w-xs">
              <span className="h-1.5 w-1.5 rotate-45 bg-[var(--accent-500)]" />
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                className="group premium-card p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--accent-500)]/15 bg-[var(--accent-500)]/5 transition-all duration-500 group-hover:border-[var(--accent-500)]/30 group-hover:shadow-[0_0_25px_rgba(201,168,76,0.1)]">
                  <value.icon className="h-5 w-5 text-[var(--accent-500)]" />
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--neutral-100)]">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--neutral-500)]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
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
              The People Behind the Magic
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold text-[var(--neutral-100)]">
              Meet Our Team
            </h2>
            <div className="section-divider mx-auto mt-6 max-w-xs">
              <span className="h-1.5 w-1.5 rotate-45 bg-[var(--accent-500)]" />
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                className="group premium-card p-6 text-center"
              >
                {/* Image or Avatar */}
                <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border border-[var(--accent-500)]/15 bg-gradient-to-br from-[var(--neutral-800)] to-[var(--neutral-900)] transition-all duration-500 group-hover:border-[var(--accent-500)]/30 group-hover:shadow-[0_0_30px_rgba(201,168,76,0.1)]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-lg font-bold text-[var(--neutral-100)]">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[var(--accent-500)]">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--neutral-500)]">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1510] via-[#1f1a12] to-[#1a1510]" />
        <div className="absolute inset-0 noise-bg" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-500)]/[0.03] blur-[100px]" />
        <div className="absolute inset-x-8 inset-y-8 rounded-2xl border border-[var(--accent-500)]/10 sm:inset-x-16 sm:inset-y-12" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-5xl font-bold text-[var(--neutral-100)] sm:text-6xl">
              Experience
              <br />
              <span className="gradient-text">Maison Bistrot</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--neutral-400)]">
              We invite you to join us for an unforgettable dining experience. Whether it&apos;s a
              special celebration or a casual weeknight dinner, we&apos;re here to make it memorable.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/reservations">
                <Button variant="gold" size="lg" className="gap-2">
                  Make a Reservation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/locations">
                <Button variant="outline" size="lg">
                  View Locations
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
