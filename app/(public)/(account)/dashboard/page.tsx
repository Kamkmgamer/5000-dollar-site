'use client';

import Link from 'next/link';
import { 
  Calendar, 
  Gift, 
  Star, 
  Settings, 
  ChevronRight,
  MapPin,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

const upcomingReservations = [
  {
    id: 1,
    location: 'Downtown',
    date: 'Feb 14, 2026',
    time: '7:00 PM',
    partySize: 2,
    confirmationCode: 'MB284756',
  },
];

const recentActivity = [
  { type: 'reservation', text: 'Reservation at Downtown', date: 'Jan 28, 2026', points: 150 },
  { type: 'earn', text: 'Welcome Bonus', date: 'Jan 15, 2026', points: 100 },
];

const tierBenefits = {
  bronze: {
    nextTier: 'Silver',
    pointsNeeded: 400,
    multiplier: 1,
  },
  silver: {
    nextTier: 'Gold',
    pointsNeeded: 1000,
    multiplier: 1.25,
  },
  gold: {
    nextTier: 'Platinum',
    pointsNeeded: 3500,
    multiplier: 1.5,
  },
  platinum: {
    nextTier: null,
    pointsNeeded: 0,
    multiplier: 2,
  },
};

export default function DashboardPage() {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    loyaltyTier: 'bronze' as const,
    loyaltyPoints: 250,
  };

  const tier = tierBenefits[user.loyaltyTier];
  const progress = Math.min((user.loyaltyPoints / (user.loyaltyPoints + tier.pointsNeeded)) * 100, 100);

  return (
    <div className="min-h-screen bg-[var(--muted)] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold">
            Welcome back, {user.name.split(' ')[0]}!
          </h1>
          <p className="mt-1 text-[var(--muted-foreground)]">
            Here's what's happening with your account
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Loyalty Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-800)] p-8 text-white">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium opacity-80">Your Tier</p>
                    <p className="font-[family-name:var(--font-display)] text-4xl font-bold capitalize">
                      {user.loyaltyTier}
                    </p>
                  </div>
                  <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
                    {tier.multiplier}x Points Multiplier
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <p className="text-3xl font-bold">{user.loyaltyPoints}</p>
                    <p className="text-sm opacity-80">points</p>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/20">
                    <div
                      className="h-full rounded-full bg-[var(--accent-500)] transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  {tier.nextTier && (
                    <p className="mt-2 text-sm opacity-80">
                      {tier.pointsNeeded} points until {tier.nextTier}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid gap-4 sm:grid-cols-3">
              <Link href="/reservations">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all hover:border-[var(--primary)]/30 hover:shadow-md">
                  <Calendar className="h-8 w-8 text-[var(--primary)]" />
                  <p className="mt-3 font-semibold">Book a Table</p>
                  <p className="text-sm text-[var(--muted-foreground)]">Make a reservation</p>
                </div>
              </Link>
              <Link href="/gift-cards">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all hover:border-[var(--primary)]/30 hover:shadow-md">
                  <Gift className="h-8 w-8 text-[var(--primary)]" />
                  <p className="mt-3 font-semibold">Gift Cards</p>
                  <p className="text-sm text-[var(--muted-foreground)]">Buy or check balance</p>
                </div>
              </Link>
              <Link href="/dashboard/preferences">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all hover:border-[var(--primary)]/30 hover:shadow-md">
                  <Settings className="h-8 w-8 text-[var(--primary)]" />
                  <p className="mt-3 font-semibold">Preferences</p>
                  <p className="text-sm text-[var(--muted-foreground)]">Update your details</p>
                </div>
              </Link>
            </div>

            {/* Upcoming Reservations */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                  Upcoming Reservations
                </h2>
                <Link href="/dashboard/reservations" className="text-sm text-[var(--primary)] hover:underline">
                  View all
                </Link>
              </div>

              {upcomingReservations.length > 0 ? (
                <div className="mt-6 space-y-4">
                  {upcomingReservations.map((reservation) => (
                    <div
                      key={reservation.id}
                      className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--muted)] p-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/10">
                          <MapPin className="h-6 w-6 text-[var(--primary)]" />
                        </div>
                        <div>
                          <p className="font-semibold">{reservation.location}</p>
                          <div className="flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {reservation.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {reservation.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {reservation.partySize} guests
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-[var(--muted-foreground)]">Confirmation</p>
                        <p className="font-mono font-medium">{reservation.confirmationCode}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-6 rounded-xl border border-dashed border-[var(--border)] p-8 text-center">
                  <Calendar className="mx-auto h-12 w-12 text-[var(--muted-foreground)]" />
                  <p className="mt-4 text-[var(--muted-foreground)]">No upcoming reservations</p>
                  <Link href="/reservations">
                    <Button className="mt-4">Make a Reservation</Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Recent Activity */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                Recent Activity
              </h2>
              <div className="mt-6 space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-500)]/10">
                        <TrendingUp className="h-5 w-5 text-[var(--accent-700)]" />
                      </div>
                      <div>
                        <p className="font-medium">{activity.text}</p>
                        <p className="text-sm text-[var(--muted-foreground)]">{activity.date}</p>
                      </div>
                    </div>
                    <span className="font-semibold text-[var(--primary)]">+{activity.points} pts</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-800)] text-xl font-bold text-white">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">{user.email}</p>
                </div>
              </div>
              <Link href="/dashboard/profile">
                <Button variant="outline" className="mt-4 w-full">
                  Edit Profile
                </Button>
              </Link>
            </div>

            {/* Rewards */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                Available Rewards
              </h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-[var(--muted)] p-3">
                  <div>
                    <p className="font-medium">$10 Off</p>
                    <p className="text-xs text-[var(--muted-foreground)]">500 points</p>
                  </div>
                  <Button size="sm">Redeem</Button>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-[var(--muted)] p-3 opacity-50">
                  <div>
                    <p className="font-medium">Free Appetizer</p>
                    <p className="text-xs text-[var(--muted-foreground)]">750 points</p>
                  </div>
                  <Button size="sm" disabled>
                    {750 - user.loyaltyPoints} more pts
                  </Button>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-[var(--muted)] p-3 opacity-50">
                  <div>
                    <p className="font-medium">Free Entrée</p>
                    <p className="text-xs text-[var(--muted-foreground)]">1500 points</p>
                  </div>
                  <Button size="sm" disabled>
                    {1500 - user.loyaltyPoints} more pts
                  </Button>
                </div>
              </div>
            </div>

            {/* Tier Benefits */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold capitalize">
                {user.loyaltyTier} Benefits
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-[var(--accent-600)]" />
                  {tier.multiplier}x points on every visit
                </li>
                <li className="flex items-center gap-2">
                  <Gift className="h-4 w-4 text-[var(--accent-600)]" />
                  Birthday reward
                </li>
                <li className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[var(--accent-600)]" />
                  Priority reservations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
