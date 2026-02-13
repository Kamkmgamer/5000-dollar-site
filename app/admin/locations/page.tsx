'use client';

import { AdminSidebar } from '../components/AdminSidebar';
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  Star,
  Edit,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const locations = [
  { 
    id: 1, 
    name: 'Downtown', 
    address: '123 Main Street, New York, NY 10001',
    phone: '(212) 555-0100',
    email: 'downtown@maisonbistrot.com',
    hours: { open: '11:00 AM', close: '11:00 PM' },
    capacity: 120,
    tables: 24,
    rating: 4.8,
    reviews: 324,
    isActive: true
  },
  { 
    id: 2, 
    name: 'Westside', 
    address: '456 Oak Avenue, New York, NY 10002',
    phone: '(212) 555-0200',
    email: 'westside@maisonbistrot.com',
    hours: { open: '11:00 AM', close: '10:00 PM' },
    capacity: 80,
    tables: 16,
    rating: 4.9,
    reviews: 256,
    isActive: true
  },
  { 
    id: 3, 
    name: 'Harbor View', 
    address: '789 Waterfront Drive, New York, NY 10003',
    phone: '(212) 555-0300',
    email: 'harbor@maisonbistrot.com',
    hours: { open: '10:00 AM', close: '12:00 AM' },
    capacity: 200,
    tables: 40,
    rating: 4.7,
    reviews: 189,
    isActive: true
  },
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-[var(--muted)]">
      <AdminSidebar />
      
      <main className="lg:ml-64">
        {/* Header - sticky below mobile header on small screens */}
        <header className="sticky top-16 z-30 border-b border-[var(--border)] bg-[var(--card)]/80 px-4 py-4 backdrop-blur sm:px-8 lg:top-0">
          <div className="flex items-center justify-between">
            <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold">Locations</h1>
            <button className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--muted)]">
              <Edit className="h-4 w-4" />
              Edit Hours
            </button>
          </div>
        </header>

        <div className="p-4 sm:p-8">
          <div className="grid gap-6">
            {locations.map((location) => (
              <div 
                key={location.id} 
                className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]"
              >
                <div className="grid lg:grid-cols-3">
                  {/* Location Info */}
                  <div className="p-6 lg:col-span-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                          {location.name}
                        </h2>
                        <div className="mt-2 flex items-center gap-1">
                          <Star className="h-4 w-4 fill-[var(--accent-500)] text-[var(--accent-500)]" />
                          <span className="font-medium">{location.rating}</span>
                          <span className="text-sm text-[var(--muted-foreground)]">({location.reviews} reviews)</span>
                        </div>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                        location.isActive 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {location.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-[var(--muted-foreground)]" />
                        {location.address}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-[var(--muted-foreground)]" />
                        {location.phone}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-[var(--muted-foreground)]" />
                        {location.email}
                      </div>
                    </div>

                    <div className="mt-6 flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-[var(--primary)]" />
                        <span className="text-sm">{location.hours.open} - {location.hours.close}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-[var(--primary)]" />
                        <span className="text-sm">Capacity: {location.capacity}</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="border-t border-[var(--border)] bg-[var(--muted)]/30 p-6 lg:border-l lg:border-t-0">
                    <h3 className="text-sm font-medium text-[var(--muted-foreground)]">Today&apos;s Stats</h3>
                    <div className="mt-4 space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm">Reservations</span>
                        <span className="font-medium">24</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Covers</span>
                        <span className="font-medium">86</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Revenue</span>
                        <span className="font-medium">$4,250</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Tables Active</span>
                        <span className="font-medium">18/{location.tables}</span>
                      </div>
                    </div>

                    <Link 
                      href={`/admin/locations/${location.id}`}
                      className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--muted)]"
                    >
                      Manage Location
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
