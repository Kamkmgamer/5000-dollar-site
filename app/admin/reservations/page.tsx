'use client';

import { AdminSidebar } from '../components/AdminSidebar';
import { 
  Search,
  Filter,
  Calendar,
  Clock,
  Users,
  MapPin,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Plus
} from 'lucide-react';
import Link from 'next/link';

const reservations = [
  { id: 1, name: 'John Smith', email: 'john@example.com', phone: '(555) 123-4567', date: '2026-02-14', time: '7:00 PM', partySize: 4, location: 'Downtown', status: 'confirmed', table: 'T12' },
  { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', phone: '(555) 234-5678', date: '2026-02-14', time: '7:30 PM', partySize: 2, location: 'Westside', status: 'confirmed', table: 'T05' },
  { id: 3, name: 'Michael Brown', email: 'michael@example.com', phone: '(555) 345-6789', date: '2026-02-14', time: '8:00 PM', partySize: 6, location: 'Harbor View', status: 'pending', table: '-' },
  { id: 4, name: 'Emily Davis', email: 'emily@example.com', phone: '(555) 456-7890', date: '2026-02-14', time: '8:30 PM', partySize: 3, location: 'Downtown', status: 'confirmed', table: 'T08' },
  { id: 5, name: 'David Wilson', email: 'david@example.com', phone: '(555) 567-8901', date: '2026-02-14', time: '6:00 PM', partySize: 8, location: 'Westside', status: 'confirmed', table: 'T15' },
  { id: 6, name: 'Lisa Anderson', email: 'lisa@example.com', phone: '(555) 678-9012', date: '2026-02-14', time: '9:00 PM', partySize: 2, location: 'Harbor View', status: 'cancelled', table: '-' },
];

export default function ReservationsPage() {
  return (
    <div className="min-h-screen bg-[var(--muted)]">
      <AdminSidebar />
      
      <main className="lg:ml-64">
        {/* Header - sticky below mobile header on small screens */}
        <header className="sticky top-16 z-30 border-b border-[var(--border)] bg-[var(--card)]/80 px-4 py-4 backdrop-blur sm:px-8 lg:top-0">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold">Reservations</h1>
            <div className="flex items-center gap-3">
              <Link 
                href="/admin/reservations/new"
                className="flex items-center gap-2 rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-800)]"
              >
                <Plus className="h-4 w-4" />
                New Reservation
              </Link>
            </div>
          </div>
        </header>

        <div className="p-4 sm:p-8">
          {/* Filters */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 items-center gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted-foreground)]" />
                <input 
                  type="text" 
                  placeholder="Search reservations..."
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] py-2 pl-10 pr-4 text-sm focus:border-[var(--primary)] focus:outline-none"
                />
              </div>
              <button className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--muted)]">
                <Filter className="h-4 w-4" />
                Filter
              </button>
            </div>
            <div className="flex items-center gap-2">
              <select className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 pr-8 text-sm appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.5em] bg-[right_0.5rem_center] bg-no-repeat">
                <option value="all">All Locations</option>
                <option value="downtown">Downtown</option>
                <option value="westside">Westside</option>
                <option value="harbor-view">Harbor View</option>
              </select>
              <select className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 pr-8 text-sm appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.5em] bg-[right_0.5rem_center] bg-no-repeat">
                <option value="all">All Status</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {/* Reservations Table */}
          <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--muted)]">
                    <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Guest</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Date & Time</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Party</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Location</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Table</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Status</th>
                    <th className="px-6 py-4 text-right text-sm font-medium text-[var(--muted-foreground)]">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {reservations.map((reservation) => (
                    <tr key={reservation.id} className="hover:bg-[var(--muted)]/50">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium">{reservation.name}</p>
                          <p className="text-sm text-[var(--muted-foreground)]">{reservation.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-[var(--muted-foreground)]" />
                          <span className="text-sm">{reservation.date}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="h-4 w-4 text-[var(--muted-foreground)]" />
                          <span className="text-sm">{reservation.time}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-[var(--muted-foreground)]" />
                          <span className="text-sm">{reservation.partySize} guests</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-[var(--muted-foreground)]" />
                          <span className="text-sm">{reservation.location}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-mono">{reservation.table}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            reservation.status === 'confirmed'
                              ? 'bg-green-100 text-green-700'
                              : reservation.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {reservation.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="rounded-lg p-2 text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-[var(--border)] px-6 py-4">
              <p className="text-sm text-[var(--muted-foreground)]">
                Showing 1 to 6 of 24 results
              </p>
              <div className="flex items-center gap-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] disabled:opacity-50">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)]">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
