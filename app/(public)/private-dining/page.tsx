'use client';

import Link from 'next/link';
import { 
  Users, 
  Wine, 
  UtensilsCrossed, 
  Music, 
  Sparkles,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

const spaces = [
  {
    name: 'The Chef\'s Table',
    capacity: '12 guests',
    description: 'An intimate dining experience at our exclusive chef\'s table. Watch as our culinary team prepares a custom tasting menu just for your party.',
    features: ['Private kitchen view', 'Custom menu', 'Wine pairings', 'Personal chef service'],
    locations: ['Downtown'],
  },
  {
    name: 'The Wine Cellar',
    capacity: '20 guests',
    description: 'Dine among our extensive wine collection in this atmospheric underground space. Perfect for wine lovers and intimate celebrations.',
    features: ['Climate controlled', 'Wine pairing dinners', 'Intimate setting', 'Private entrance'],
    locations: ['Westside'],
  },
  {
    name: 'The Garden Room',
    capacity: '40 guests',
    description: 'A bright, airy space with floor-to-ceiling windows overlooking our garden patio. Ideal for daytime events and bridal showers.',
    features: ['Garden views', 'Natural light', 'Private patio access', 'Floral arrangements'],
    locations: ['Westside'],
  },
  {
    name: 'The Harbor Suite',
    capacity: '80 guests',
    description: 'Our largest private space with panoramic waterfront views. Features a private bar and can accommodate both seated dinners and cocktail receptions.',
    features: ['Waterfront views', 'Private bar', 'AV equipment', 'Dance floor'],
    locations: ['Harbor View'],
  },
  {
    name: 'The Rooftop Terrace',
    capacity: '60 guests',
    description: 'Stunning city views from our rooftop terrace. A magical setting for evening events under the stars.',
    features: ['City skyline views', 'Open air dining', 'Weather contingency', 'Twinkling lights'],
    locations: ['Downtown'],
  },
];

const eventTypes = [
  {
    icon: Users,
    title: 'Corporate Events',
    description: 'Impress clients and celebrate team wins with exceptional dining and seamless service.',
  },
  {
    icon: Sparkles,
    title: 'Weddings & Receptions',
    description: 'Make your special day unforgettable with our elegant spaces and customized menus.',
  },
  {
    icon: Wine,
    title: 'Wine Dinners',
    description: 'Host a curated wine dinner with our sommelier and executive chef.',
  },
  {
    icon: Music,
    title: 'Celebrations',
    description: 'Birthdays, anniversaries, graduations - we make every milestone memorable.',
  },
];

export default function PrivateDiningPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[var(--primary-900)] to-[var(--secondary-900)] py-24">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-[var(--accent-500)]/30 bg-[var(--accent-500)]/10 px-4 py-1.5 text-sm font-medium text-[var(--accent-500)]">
            Exclusive Experiences
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-bold text-white sm:text-6xl">
            Private Dining
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--neutral-300)]">
            Host your next event in one of our exclusive private spaces. From intimate dinners 
            to grand celebrations, we create unforgettable experiences.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="lg">Request a Quote</Button>
            </Link>
            <Link href="/locations">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                View Our Locations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-[var(--primary)]">
              Perfect For
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold">
              Any Occasion
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {eventTypes.map((type) => (
              <div
                key={type.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center transition-all hover:border-[var(--primary)]/30 hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary)]/10">
                  <type.icon className="h-8 w-8 text-[var(--primary)]" />
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-semibold">
                  {type.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--muted-foreground)]">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Spaces */}
      <section className="border-y border-[var(--border)] bg-[var(--muted)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-[var(--primary)]">
              Our Spaces
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold">
              Private Dining Rooms
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--muted-foreground)]">
              Each of our locations offers unique private dining options tailored to your event
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {spaces.map((space) => (
              <div
                key={space.name}
                className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 bg-[var(--neutral-200)] md:h-auto">
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10">
                      <UtensilsCrossed className="h-20 w-20 text-[var(--primary)]/30" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
                      {space.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-[var(--primary)]">
                      {space.capacity}
                    </p>
                    <p className="mt-4 text-sm text-[var(--muted-foreground)]">
                      {space.description}
                    </p>
                    <div className="mt-4">
                      <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted-foreground)]">
                        Available at
                      </p>
                      <p className="text-sm">{space.locations.join(', ')}</p>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {space.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-[var(--primary)]">
              How It Works
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold">
              Planning Your Event
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Request a Quote',
                description: 'Fill out our inquiry form with your event details, preferred date, and estimated guest count.',
              },
              {
                step: '02',
                title: 'Menu Planning',
                description: 'Work with our chef to create a custom menu that fits your vision and dietary requirements.',
              },
              {
                step: '03',
                title: 'Celebrate',
                description: 'Relax and enjoy your event while our team handles every detail with precision.',
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <span className="font-[family-name:var(--font-display)] text-6xl font-bold text-[var(--primary)]/10">
                  {item.step}
                </span>
                <h3 className="-mt-6 font-[family-name:var(--font-display)] text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-[var(--muted-foreground)]">
                  {item.description}
                </p>
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
            Ready to Plan Your Event?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--neutral-300)]">
            Contact our events team to start planning your perfect private dining experience. 
            We'll help you choose the right space and create a custom menu.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="lg" className="bg-[var(--accent-500)] text-[var(--neutral-900)] hover:bg-[var(--accent-400)]">
                Get in Touch
              </Button>
            </Link>
            <a
              href="tel:+12125550000"
              className="rounded-full border border-white/30 px-8 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              Call (212) 555-0000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
