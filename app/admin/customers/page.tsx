'use client';

import { AdminSidebar } from '../components/AdminSidebar';
import { 
  Search,
  Filter,
  Mail,
  Phone,
  Crown,
  Star,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Plus,
  Gift
} from 'lucide-react';
import Link from 'next/link';

const customers = [
  { id: 1, name: 'John Smith', email: 'john@example.com', phone: '(555) 123-4567', tier: 'Gold', points: 2450, visits: 24, lastVisit: '2026-02-10' },
  { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', phone: '(555) 234-5678', tier: 'Silver', points: 875, visits: 12, lastVisit: '2026-02-08' },
  { id: 3, name: 'Michael Brown', email: 'michael@example.com', phone: '(555) 345-6789', tier: 'Platinum', points: 5200, visits: 45, lastVisit: '2026-02-12' },
  { id: 4, name: 'Emily Davis', email: 'emily@example.com', phone: '(555) 456-7890', tier: 'Bronze', points: 150, visits: 3, lastVisit: '2026-02-01' },
  { id: 5, name: 'David Wilson', email: 'david@example.com', phone: '(555) 567-8901', tier: 'Gold', points: 3100, visits: 31, lastVisit: '2026-02-11' },
  { id: 6, name: 'Lisa Anderson', email: 'lisa@example.com', phone: '(555) 678-9012', tier: 'Silver', points: 620, visits: 8, lastVisit: '2026-01-28' },
];

const getTierColor = (tier: string) => {
  switch (tier) {
    case 'Platinum':
      return 'bg-purple-100 text-purple-700';
    case 'Gold':
      return 'bg-yellow-100 text-yellow-700';
    case 'Silver':
      return 'bg-gray-100 text-gray-700';
    default:
      return 'bg-orange-100 text-orange-700';
  }
};

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-[var(--muted)]">
      <AdminSidebar />
      
      <main className="lg:ml-64">
        {/* Header - sticky below mobile header on small screens */}
        <header className="sticky top-16 z-30 border-b border-[var(--border)] bg-[var(--card)]/80 px-4 py-4 backdrop-blur sm:px-8 lg:top-0">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold">Customers</h1>
            <div className="flex items-center gap-3">
              <Link 
                href="/admin/customers/new"
                className="flex items-center gap-2 rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-800)]"
              >
                <Plus className="h-4 w-4" />
                Add Customer
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
                  placeholder="Search customers..."
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
                <option value="all">All Tiers</option>
                <option value="platinum">Platinum</option>
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
                <option value="bronze">Bronze</option>
              </select>
            </div>
          </div>

          {/* Customers Table */}
          <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--muted)]">
                    <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Customer</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Contact</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Tier</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Points</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Visits</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Last Visit</th>
                    <th className="px-6 py-4 text-right text-sm font-medium text-[var(--muted-foreground)]">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {customers.map((customer) => (
                    <tr key={customer.id} className="hover:bg-[var(--muted)]/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)]/10 font-medium text-[var(--primary)]">
                            {customer.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <p className="font-medium">{customer.name}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="h-4 w-4 text-[var(--muted-foreground)]" />
                            {customer.email}
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="h-4 w-4 text-[var(--muted-foreground)]" />
                            {customer.phone}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${getTierColor(customer.tier)}`}>
                          <Crown className="h-3 w-3" />
                          {customer.tier}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-[var(--accent-500)]" />
                          <span className="text-sm font-medium">{customer.points.toLocaleString()}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm">{customer.visits}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-[var(--muted-foreground)]">{customer.lastVisit}</span>
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
                Showing 1 to 6 of 156 customers
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
