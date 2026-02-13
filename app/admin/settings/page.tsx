'use client';

import { AdminSidebar } from '../components/AdminSidebar';
import { 
  Store,
  Clock,
  Mail,
  Bell,
  Shield,
  CreditCard,
  Save,
  Check
} from 'lucide-react';
import { useState } from 'react';

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--muted)]">
      <AdminSidebar />
      
      <main className="lg:ml-64">
        {/* Header - sticky below mobile header on small screens */}
        <header className="sticky top-16 z-30 border-b border-[var(--border)] bg-[var(--card)]/80 px-4 py-4 backdrop-blur sm:px-8 lg:top-0">
          <div className="flex items-center justify-between">
            <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold">Settings</h1>
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-800)]"
            >
              {saved ? (
                <>
                  <Check className="h-4 w-4" />
                  Saved
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </header>

        <div className="p-4 sm:p-8">
          <div className="mx-auto max-w-3xl space-y-8">
            {/* General Settings */}
            <section className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)]/10">
                  <Store className="h-5 w-5 text-[var(--primary)]" />
                </div>
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold">General Settings</h2>
                  <p className="text-sm text-[var(--muted-foreground)]">Manage your restaurant information</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">Restaurant Name</label>
                  <input 
                    type="text" 
                    defaultValue="Maison Bistrot"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm focus:border-[var(--primary)] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Tagline</label>
                  <input 
                    type="text" 
                    defaultValue="Fine French Cuisine"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm focus:border-[var(--primary)] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Description</label>
                  <textarea 
                    rows={3}
                    defaultValue="Experience authentic French cuisine in an elegant atmosphere."
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm focus:border-[var(--primary)] focus:outline-none"
                  />
                </div>
              </div>
            </section>

            {/* Business Hours */}
            <section className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)]/10">
                  <Clock className="h-5 w-5 text-[var(--primary)]" />
                </div>
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold">Business Hours</h2>
                  <p className="text-sm text-[var(--muted-foreground)]">Set default operating hours</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <div key={day} className="flex items-center gap-4">
                    <span className="w-24 text-sm font-medium">{day}</span>
                    <input 
                      type="time" 
                      defaultValue="11:00"
                      className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-sm"
                    />
                    <span className="text-sm text-[var(--muted-foreground)]">to</span>
                    <input 
                      type="time" 
                      defaultValue="23:00"
                      className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-sm"
                    />
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded border-[var(--border)]" />
                      Closed
                    </label>
                  </div>
                ))}
              </div>
            </section>

            {/* Notifications */}
            <section className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)]/10">
                  <Bell className="h-5 w-5 text-[var(--primary)]" />
                </div>
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold">Notifications</h2>
                  <p className="text-sm text-[var(--muted-foreground)]">Manage email and SMS notifications</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <label className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">New Reservation Alerts</p>
                    <p className="text-sm text-[var(--muted-foreground)]">Get notified when a new reservation is made</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-5 w-5 rounded border-[var(--border)]" />
                </label>
                <label className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Cancellation Alerts</p>
                    <p className="text-sm text-[var(--muted-foreground)]">Get notified when a reservation is cancelled</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-5 w-5 rounded border-[var(--border)]" />
                </label>
                <label className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Daily Summary</p>
                    <p className="text-sm text-[var(--muted-foreground)]">Receive daily summary of reservations</p>
                  </div>
                  <input type="checkbox" className="h-5 w-5 rounded border-[var(--border)]" />
                </label>
              </div>
            </section>

            {/* Email Settings */}
            <section className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)]/10">
                  <Mail className="h-5 w-5 text-[var(--primary)]" />
                </div>
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold">Email Settings</h2>
                  <p className="text-sm text-[var(--muted-foreground)]">Configure email templates and sender</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">Sender Name</label>
                  <input 
                    type="text" 
                    defaultValue="Maison Bistrot"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm focus:border-[var(--primary)] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Sender Email</label>
                  <input 
                    type="email" 
                    defaultValue="reservations@maisonbistrot.com"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm focus:border-[var(--primary)] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Confirmation Email Subject</label>
                  <input 
                    type="text" 
                    defaultValue="Your reservation is confirmed - Maison Bistrot"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm focus:border-[var(--primary)] focus:outline-none"
                  />
                </div>
              </div>
            </section>

            {/* Payment Settings */}
            <section className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)]/10">
                  <CreditCard className="h-5 w-5 text-[var(--primary)]" />
                </div>
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold">Payment Settings</h2>
                  <p className="text-sm text-[var(--muted-foreground)]">Configure payment processing</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">Stripe Public Key</label>
                  <input 
                    type="text" 
                    placeholder="pk_test_..."
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm focus:border-[var(--primary)] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Currency</label>
                  <select className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 pr-8 text-sm appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.5em] bg-[right_0.5rem_center] bg-no-repeat">
                    <option value="USD">USD - US Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Security */}
            <section className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)]/10">
                  <Shield className="h-5 w-5 text-[var(--primary)]" />
                </div>
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold">Security</h2>
                  <p className="text-sm text-[var(--muted-foreground)]">Manage access and security settings</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <label className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-[var(--muted-foreground)]">Require 2FA for admin accounts</p>
                  </div>
                  <input type="checkbox" className="h-5 w-5 rounded border-[var(--border)]" />
                </label>
                <label className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Session Timeout</p>
                    <p className="text-sm text-[var(--muted-foreground)]">Automatically log out after 30 minutes</p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-5 w-5 rounded border-[var(--border)]" />
                </label>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
