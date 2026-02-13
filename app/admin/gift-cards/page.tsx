'use client';

import { AdminSidebar } from '../components/AdminSidebar';
import { 
  Search,
  Filter,
  Gift,
  DollarSign,
  Check,
  X,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Plus,
  Copy
} from 'lucide-react';
import Link from 'next/link';

const giftCards = [
  { id: 1, code: 'MB2X-8K9P-L4MN', initialBalance: 100, currentBalance: 75, purchaser: 'John Smith', recipient: 'Jane Doe', purchasedDate: '2026-01-15', expiryDate: '2027-01-15', status: 'active' },
  { id: 2, code: 'MB7Q-3R5T-V8WX', initialBalance: 50, currentBalance: 0, purchaser: 'Sarah Johnson', recipient: 'Mike Johnson', purchasedDate: '2025-12-20', expiryDate: '2026-12-20', status: 'redeemed' },
  { id: 3, code: 'MB9Y-2A4B-C6DE', initialBalance: 200, currentBalance: 200, purchaser: 'Emily Davis', recipient: 'Tom Davis', purchasedDate: '2026-02-01', expiryDate: '2027-02-01', status: 'active' },
  { id: 4, code: 'MB1F-5G7H-J9KL', initialBalance: 25, currentBalance: 5, purchaser: 'David Wilson', recipient: 'Lisa Wilson', purchasedDate: '2025-11-10', expiryDate: '2026-11-10', status: 'active' },
  { id: 5, code: 'MB3M-6N8P-Q1RS', initialBalance: 150, currentBalance: 0, purchaser: 'Michael Brown', recipient: 'Anna Brown', purchasedDate: '2025-10-05', expiryDate: '2026-10-05', status: 'expired' },
  { id: 6, code: 'MB4T-7U9V-W2XY', initialBalance: 500, currentBalance: 350, purchaser: 'Robert Taylor', recipient: 'Mary Taylor', purchasedDate: '2026-01-28', expiryDate: '2027-01-28', status: 'active' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-700';
    case 'redeemed':
      return 'bg-blue-100 text-blue-700';
    case 'expired':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

export default function GiftCardsPage() {
  return (
    <div className="min-h-screen bg-[var(--muted)]">
      <AdminSidebar />
      
      <main className="lg:ml-64">
        {/* Header - sticky below mobile header on small screens */}
        <header className="sticky top-16 z-30 border-b border-[var(--border)] bg-[var(--card)]/80 px-4 py-4 backdrop-blur sm:px-8 lg:top-0">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold">Gift Cards</h1>
            <div className="flex items-center gap-3">
              <Link 
                href="/admin/gift-cards/new"
                className="flex items-center gap-2 rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-800)]"
              >
                <Plus className="h-4 w-4" />
                Issue Gift Card
              </Link>
            </div>
          </div>
        </header>

        <div className="p-4 sm:p-8">
          {/* Stats Overview */}
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/10">
                  <Gift className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--muted-foreground)]">Total Issued</p>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-bold">$12,450</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-[var(--muted-foreground)]">Active Balance</p>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-bold">$8,230</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Check className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-[var(--muted-foreground)]">Redeemed</p>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-bold">$4,220</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 items-center gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted-foreground)]" />
                <input 
                  type="text" 
                  placeholder="Search by code or customer..."
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] py-2 pl-10 pr-4 text-sm focus:border-[var(--primary)] focus:outline-none"
                />
              </div>
              <button className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--muted)]">
                <Filter className="h-4 w-4" />
                Filter
              </button>
            </div>
            <div className="flex items-center gap-2">
              <select className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 pr-8 text-sm appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.5em] bg-[right_0.5rem_center] bg-no-repeat">
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="redeemed">Redeemed</option>
                <option value="expired">Expired</option>
              </select>
            </div>
          </div>

          {/* Gift Cards Table */}
          <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--muted)]">
                    <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Code</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Purchaser</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Recipient</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Initial</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Balance</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Expiry</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Status</th>
                    <th className="px-6 py-4 text-right text-sm font-medium text-[var(--muted-foreground)]">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {giftCards.map((card) => (
                    <tr key={card.id} className="hover:bg-[var(--muted)]/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <code className="rounded bg-[var(--muted)] px-2 py-1 text-sm font-mono">
                            {card.code}
                          </code>
                          <button className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm">{card.purchaser}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm">{card.recipient}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium">${card.initialBalance}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-sm font-medium ${card.currentBalance === 0 ? 'text-[var(--muted-foreground)]' : ''}`}>
                          ${card.currentBalance}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-[var(--muted-foreground)]">{card.expiryDate}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(card.status)}`}>
                          {card.status}
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
                Showing 1 to 6 of 48 gift cards
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
