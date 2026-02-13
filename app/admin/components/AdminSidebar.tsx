'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  MapPin, 
  Gift, 
  Settings,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { UserButton } from '@clerk/nextjs';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
  { icon: Calendar, label: 'Reservations', href: '/admin/reservations' },
  { icon: Users, label: 'Customers', href: '/admin/customers' },
  { icon: MapPin, label: 'Locations', href: '/admin/locations' },
  { icon: Gift, label: 'Gift Cards', href: '/admin/gift-cards' },
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Header Bar with Toggle */}
      <div className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center border-b border-[var(--border)] bg-[var(--card)] px-4 lg:hidden">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg hover:bg-[var(--muted)]"
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <div className="ml-4 flex-1">
          <span className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--primary)]">
            Maison Bistrot
          </span>
          <span className="ml-2 text-xs text-[var(--muted-foreground)]">Admin</span>
        </div>
      </div>

      {/* Overlay for mobile - z-50 to be above everything */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - z-50 when open on mobile */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-64 transform border-r border-[var(--border)] bg-[var(--card)] transition-transform duration-200",
          sidebarOpen ? 'translate-x-0 z-50' : '-translate-x-full',
          "lg:translate-x-0 lg:z-30"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo - hidden on mobile (shown in header bar) */}
          <div className="hidden border-b border-[var(--border)] p-6 lg:block">
            <Link href="/admin" className="flex items-center gap-2">
              <span className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--primary)]">
                Maison Bistrot
              </span>
            </Link>
            <p className="mt-1 text-xs text-[var(--muted-foreground)]">Admin Portal</p>
          </div>

          {/* Close button for mobile */}
          <div className="flex items-center justify-between border-b border-[var(--border)] p-4 lg:hidden">
            <span className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--primary)]">
              Menu
            </span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-[var(--muted)]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {sidebarItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                      pathname === item.href || pathname.startsWith(`${item.href}/`)
                        ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                        : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* User Section */}
          <div className="border-t border-[var(--border)] p-4">
            <div className="flex items-center gap-3 rounded-lg px-4 py-3">
              <UserButton afterSignOutUrl="/" />
              <span className="text-sm font-medium">Admin User</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Spacer for mobile header - pushes content down on small screens */}
      <div className="h-16 lg:hidden" />
    </>
  );
}
