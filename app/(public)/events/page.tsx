'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ChevronRight,
  Wine,
  Music,
  UtensilsCrossed
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

const events = [
  {
    id: 1,
    title: 'Valentine\'s Day Special',
    date: 'February 14, 2026',
    time: '5:00 PM - 11:00 PM',
    location: 'All Locations',
    image: '/images/events/valentines.jpg',
    description: 'Celebrate love with our special 5-course tasting menu featuring aphrodisiac ingredients and champagne pairings.',
    price: '$150 per person',
    available: true,
    category: 'Holiday',
    icon: Wine,
  },
  {
    id: 2,
    title: 'Wine Tasting Evening',
    date: 'February 20, 2026',
    time: '7:00 PM - 9:30 PM',
    location: 'Westside',
    image: '/images/events/wine.jpg',
    description: 'Join our sommelier Antoine for an intimate evening exploring wines from Bordeaux. Includes 6 tastings and artisanal cheese pairings.',
    price: '$85 per person',
    available: true,
    category: 'Tasting',
    icon: Wine,
  },
  {
    id: 3,
    title: 'Live Jazz Brunch',
    date: 'Every Sunday',
    time: '10:00 AM - 2:00 PM',
    location: 'Harbor View',
    image: '/images/events/jazz.jpg',
    description: 'Enjoy our signature brunch menu accompanied by live jazz performances from local artists. Perfect for a relaxing Sunday morning.',
    price: '$45 per person',
    available: true,
    category: 'Weekly',
    icon: Music,
  },
  {
    id: 4,
    title: 'Chef\'s Table Experience',
    date: 'March 5, 2026',
    time: '7:00 PM - 10:00 PM',
    location: 'Downtown',
    image: '/images/events/chef.jpg',
    description: 'An exclusive 8-course tasting menu prepared by Chef Jean-Pierre himself. Limited to 12 guests at our private chef\'s table.',
    price: '$250 per person',
    available: true,
    category: 'Special',
    icon: UtensilsCrossed,
  },
  {
    id: 5,
    title: 'Cooking Class: French Pastries',
    date: 'March 15, 2026',
    time: '2:00 PM - 5:00 PM',
    location: 'Downtown',
    image: '/images/events/cooking.jpg',
    description: 'Learn the art of French pastry making from Executive Sous Chef Marie. Take home your creations and a recipe booklet.',
    price: '$120 per person',
    available: true,
    category: 'Class',
    icon: UtensilsCrossed,
  },
  {
    id: 6,
    title: 'Spring Menu Launch Party',
    date: 'March 21, 2026',
    time: '6:00 PM - 9:00 PM',
    location: 'All Locations',
    image: '/images/events/spring.jpg',
    description: 'Be the first to experience our new spring menu. Includes tastings of all new dishes, cocktails, and live entertainment.',
    price: '$95 per person',
    available: true,
    category: 'Launch',
    icon: UtensilsCrossed,
  },
];

const categories = ['All', 'Holiday', 'Tasting', 'Weekly', 'Special', 'Class', 'Launch'];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredEvents = activeCategory === 'All' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[var(--primary-900)] to-[var(--secondary-900)] py-24">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-[var(--accent-500)]/30 bg-[var(--accent-500)]/10 px-4 py-1.5 text-sm font-medium text-[var(--accent-500)]">
            What's Happening
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-bold text-white sm:text-6xl">
            Upcoming Events
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--neutral-300)]">
            Join us for special tastings, cooking classes, live music, and exclusive dining experiences
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-40 border-b border-[var(--border)] bg-[var(--background)]/95 py-4 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--muted)]/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition-all hover:border-[var(--primary)]/30 hover:shadow-xl"
              >
                {/* Image Placeholder */}
                <div className="relative h-48 overflow-hidden bg-[var(--neutral-200)]">
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10">
                    <event.icon className="h-16 w-16 text-[var(--primary)]/30" />
                  </div>
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-[var(--card)] px-3 py-1 text-xs font-medium">
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)] line-clamp-2">
                    {event.description}
                  </p>

                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                      <Users className="h-4 w-4" />
                      Limited availability
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <p className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--primary)]">
                      {event.price}
                    </p>
                    <Button size="sm">Book Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Events CTA */}
      <section className="border-t border-[var(--border)] bg-[var(--muted)] py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold">
            Planning a Private Event?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted-foreground)]">
            Whether it's a corporate dinner, wedding reception, or birthday celebration, 
            our team can create a custom experience tailored to your needs.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/private-dining">
              <Button>Learn About Private Dining</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Contact Our Team</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
