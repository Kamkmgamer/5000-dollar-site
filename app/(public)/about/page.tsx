import Image from 'next/image';
import { Award, Users, Clock, Leaf } from 'lucide-react';

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
    name: 'Chef Jean-Pierre Dubois',
    role: 'Executive Chef & Founder',
    bio: 'With training at Le Cordon Bleu Paris and experience in three Michelin-starred kitchens, Chef Jean-Pierre brings unparalleled expertise to every dish.',
  },
  {
    name: 'Marie Leclerc',
    role: 'Executive Sous Chef',
    bio: 'A native of Lyon, Marie specializes in classic French pastries and has been instrumental in developing our dessert menu.',
  },
  {
    name: 'Antoine Moreau',
    role: 'Sommelier',
    bio: 'Antoine curates our extensive wine collection, featuring over 300 labels from France and beyond, with a focus on small-batch producers.',
  },
  {
    name: 'Claire Rousseau',
    role: 'General Manager',
    bio: 'Claire ensures that every guest receives impeccable service, overseeing operations across all three locations with meticulous attention to detail.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[var(--primary-900)] to-[var(--secondary-900)] py-24">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-[var(--accent-500)]/30 bg-[var(--accent-500)]/10 px-4 py-1.5 text-sm font-medium text-[var(--accent-500)]">
            Our Story
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-bold text-white sm:text-6xl">
            A Legacy of Fine Dining
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-[var(--neutral-300)]">
            Founded in 2009, Maison Bistrot began with a simple vision: to bring authentic French 
            cuisine to New York while honoring both tradition and innovation. What started as a 
            single restaurant has grown into a beloved culinary destination with three unique locations.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[var(--border)] bg-[var(--muted)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--primary)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold">
                From Paris to New York
              </h2>
              <div className="mt-6 space-y-4 text-[var(--foreground)]">
                <p>
                  Chef Jean-Pierre Dubois arrived in New York in 2008 with little more than his knife 
                  roll and a dream. After years of working in the world's finest kitchens, he was ready 
                  to create something of his own—something that would honor his French heritage while 
                  embracing the energy and diversity of his new home.
                </p>
                <p>
                  In a small space in downtown Manhattan, Maison Bistrot opened its doors. The name 
                  itself reflects Chef Jean-Pierre's vision: "maison" (home) for the warmth and comfort 
                  he wanted guests to feel, and "bistrot" for the casual elegance of traditional 
                  French neighborhood restaurants.
                </p>
                <p>
                  The restaurant quickly gained a following, earning recognition for its authentic 
                  French cuisine and impeccable service. Within five years, Maison Bistrot expanded 
                  to the Westside, bringing its unique charm to a new neighborhood. The Harbor View 
                  location followed in 2018, offering a spectacular waterfront dining experience.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--neutral-200)]">
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10">
                  <span className="text-6xl">👨‍🍳</span>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 rounded-2xl bg-[var(--card)] p-6 shadow-xl">
                <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--primary)]">
                  2009
                </p>
                <p className="text-sm text-[var(--muted-foreground)]">Year Founded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-[var(--border)] bg-[var(--muted)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-[var(--primary)]">
              What We Believe
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold">
              Our Core Values
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 transition-all hover:border-[var(--primary)]/30 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                  <value.icon className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold">
                  {value.title}
                </h3>
                <p className="mt-3 text-[var(--muted-foreground)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-[var(--primary)]">
              The People Behind the Magic
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold">
              Meet Our Team
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-[var(--neutral-200)]">
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10">
                    <span className="text-4xl">👤</span>
                  </div>
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-semibold">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-[var(--primary)]">{member.role}</p>
                <p className="mt-3 text-sm text-[var(--muted-foreground)]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-900)] to-[var(--secondary-900)]" />
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold text-white sm:text-5xl">
            Experience Maison Bistrot
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--neutral-300)]">
            We invite you to join us for an unforgettable dining experience. Whether it's a 
            special celebration or a casual weeknight dinner, we're here to make it memorable.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/reservations"
              className="rounded-full bg-[var(--accent-500)] px-8 py-3 font-medium text-[var(--neutral-900)] transition-colors hover:bg-[var(--accent-400)]"
            >
              Make a Reservation
            </a>
            <a
              href="/locations"
              className="rounded-full border border-white/30 px-8 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              View Locations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
