import { AdminSidebar } from './components/AdminSidebar';
import Link from 'next/link';
import { 
  TrendingUp,
  DollarSign,
  UserPlus,
  Clock,
  Calendar,
  Users,
  Gift,
  MapPin
} from 'lucide-react';

const stats = [
  { label: 'Today\'s Reservations', value: '24', change: '+12%', icon: Calendar },
  { label: 'Total Covers', value: '86', change: '+8%', icon: Users },
  { label: 'Revenue Today', value: '$4,250', change: '+15%', icon: DollarSign },
  { label: 'New Customers', value: '8', change: '+3', icon: UserPlus },
];

const recentReservations = [
  { id: 1, name: 'John Smith', time: '7:00 PM', partySize: 4, location: 'Downtown', status: 'confirmed' },
  { id: 2, name: 'Sarah Johnson', time: '7:30 PM', partySize: 2, location: 'Westside', status: 'confirmed' },
  { id: 3, name: 'Michael Brown', time: '8:00 PM', partySize: 6, location: 'Harbor View', status: 'pending' },
  { id: 4, name: 'Emily Davis', time: '8:30 PM', partySize: 3, location: 'Downtown', status: 'confirmed' },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[var(--muted)]">
      <AdminSidebar />
      
      {/* Main Content */}
      <main className="lg:ml-64">
        {/* Header - sticky below mobile header on small screens */}
        <header className="sticky top-16 z-30 border-b border-[var(--border)] bg-[var(--card)]/80 px-4 py-4 backdrop-blur sm:px-8 lg:top-0">
          <div className="flex items-center justify-between">
            <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="hidden text-sm text-[var(--muted-foreground)] sm:block">Welcome, Admin</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)]/10">
                <span className="text-sm font-medium text-[var(--primary)]">A</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-8">
          {/* Location Selector */}
          <div className="mb-8 flex items-center gap-4">
            <MapPin className="h-5 w-5 text-[var(--primary)]" />
            <select className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 pr-8 text-sm appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.5em] bg-[right_0.5rem_center] bg-no-repeat">
              <option value="all">All Locations</option>
              <option value="downtown">Downtown</option>
              <option value="westside">Westside</option>
              <option value="harbor-view">Harbor View</option>
            </select>
          </div>

          {/* Stats Grid */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[var(--muted-foreground)]">{stat.label}</p>
                    <p className="mt-1 font-[family-name:var(--font-display)] text-3xl font-bold">
                      {stat.value}
                    </p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/10">
                    <stat.icon className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-green-600">{stat.change}</span>
                  <span className="text-[var(--muted-foreground)]">from yesterday</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Recent Reservations */}
            <div className="lg:col-span-2 rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <div className="flex items-center justify-between border-b border-[var(--border)] p-6">
                <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                  Today&apos;s Reservations
                </h2>
                <Link href="/admin/reservations" className="text-sm text-[var(--primary)] hover:underline">
                  View all
                </Link>
              </div>
              <div className="divide-y divide-[var(--border)]">
                {recentReservations.map((reservation) => (
                  <div key={reservation.id} className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)]/10">
                        <Users className="h-5 w-5 text-[var(--primary)]" />
                      </div>
                      <div>
                        <p className="font-medium">{reservation.name}</p>
                        <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                          <Clock className="h-3 w-3" />
                          {reservation.time}
                          <span>•</span>
                          {reservation.partySize} guests
                          <span>•</span>
                          {reservation.location}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        reservation.status === 'confirmed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {reservation.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
                <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                  Quick Actions
                </h2>
                <div className="mt-4 space-y-3">
                  <Link href="/admin/reservations/new">
                    <button className="flex w-full items-center gap-3 rounded-lg border border-[var(--border)] p-4 text-left transition-colors hover:bg-[var(--muted)]">
                      <Calendar className="h-5 w-5 text-[var(--primary)]" />
                      <div>
                        <p className="font-medium">New Reservation</p>
                        <p className="text-xs text-[var(--muted-foreground)]">Book a table for a guest</p>
                      </div>
                    </button>
                  </Link>
                  <Link href="/admin/customers/new">
                    <button className="flex w-full items-center gap-3 rounded-lg border border-[var(--border)] p-4 text-left transition-colors hover:bg-[var(--muted)]">
                      <Users className="h-5 w-5 text-[var(--primary)]" />
                      <div>
                        <p className="font-medium">Add Customer</p>
                        <p className="text-xs text-[var(--muted-foreground)]">Create a new customer profile</p>
                      </div>
                    </button>
                  </Link>
                  <Link href="/admin/gift-cards/new">
                    <button className="flex w-full items-center gap-3 rounded-lg border border-[var(--border)] p-4 text-left transition-colors hover:bg-[var(--muted)]">
                      <Gift className="h-5 w-5 text-[var(--primary)]" />
                      <div>
                        <p className="font-medium">Issue Gift Card</p>
                        <p className="text-xs text-[var(--muted-foreground)]">Create a new gift card</p>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Waitlist Status */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
                <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                  Waitlist Status
                </h2>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Downtown</span>
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                      No wait
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Westside</span>
                    <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700">
                      3 parties
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Harbor View</span>
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                      No wait
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
