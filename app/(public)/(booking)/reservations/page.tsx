'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  ChevronLeft,
  ChevronRight,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLocation } from '@/components/providers/LocationProvider';

const locations = [
  { id: 'downtown', name: 'Downtown', available: true },
  { id: 'westside', name: 'Westside', available: true },
  { id: 'harbor-view', name: 'Harbor View', available: true },
];

const partySizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const timeSlots = [
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
];

const occasions = [
  'None',
  'Birthday',
  'Anniversary',
  'Date Night',
  'Business Meal',
  'Special Occasion',
  'Other'
];

function ReservationForm() {
  const searchParams = useSearchParams();
  const initialLocation = searchParams.get('location') || 'downtown';
  const { selectedLocation, setSelectedLocation, locations: contextLocations } = useLocation();
  
  const [step, setStep] = useState(1);
  const [reservation, setReservation] = useState({
    location: initialLocation,
    date: '',
    time: '',
    partySize: 2,
    occasion: 'None',
    specialRequests: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const isStepValid = () => {
    switch (step) {
      case 1:
        return reservation.location;
      case 2:
        return reservation.date && reservation.time && reservation.partySize;
      case 3:
        return reservation.name && reservation.email && reservation.phone;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--muted)]">
      {/* Header */}
      <div className="border-b border-[var(--border)] bg-[var(--background)]">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold">
            Make a Reservation
          </h1>
          <div className="mt-4 flex items-center gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-2 flex-1 rounded-full transition-colors ${
                  s <= step ? 'bg-[var(--primary)]' : 'bg-[var(--border)]'
                }`}
              />
            ))}
          </div>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            Step {step} of 4
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {step === 1 && (
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">
              Select Location
            </h2>
            <p className="mt-2 text-[var(--muted-foreground)]">
              Which location would you like to dine at?
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {contextLocations.map((location) => (
                <button
                  key={location.slug}
                  onClick={() => {
                    setReservation({ ...reservation, location: location.slug });
                    setSelectedLocation(location);
                  }}
                  className={`rounded-xl border-2 p-6 text-left transition-all ${
                    reservation.location === location.slug
                      ? 'border-[var(--primary)] bg-[var(--primary)]/5'
                      : 'border-[var(--border)] hover:border-[var(--primary)]/50'
                  }`}
                >
                  <MapPin className="h-6 w-6 text-[var(--primary)]" />
                  <p className="mt-3 font-semibold">{location.name}</p>
                  <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                    {location.address.street}
                  </p>
                </button>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <Button onClick={handleNext} disabled={!isStepValid()}>
                Continue
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </button>

            <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold">
              Date & Time
            </h2>
            <p className="mt-2 text-[var(--muted-foreground)]">
              When would you like to dine?
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium">Party Size</label>
                <div className="flex flex-wrap gap-2">
                  {partySizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setReservation({ ...reservation, partySize: size })}
                      className={`h-10 w-10 rounded-lg border-2 text-sm font-medium transition-all ${
                        reservation.partySize === size
                          ? 'border-[var(--primary)] bg-[var(--primary)]/5 text-[var(--primary)]'
                          : 'border-[var(--border)] hover:border-[var(--primary)]/50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Date</label>
                <input
                  type="date"
                  value={reservation.date}
                  onChange={(e) => setReservation({ ...reservation, date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 focus:border-[var(--primary)] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Time</label>
                <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setReservation({ ...reservation, time })}
                      className={`rounded-lg border-2 py-2 text-sm transition-all ${
                        reservation.time === time
                          ? 'border-[var(--primary)] bg-[var(--primary)]/5 text-[var(--primary)]'
                          : 'border-[var(--border)] hover:border-[var(--primary)]/50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Button onClick={handleNext} disabled={!isStepValid()}>
                Continue
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </button>

            <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold">
              Contact Information
            </h2>
            <p className="mt-2 text-[var(--muted-foreground)]">
              Who should we contact about this reservation?
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  value={reservation.name}
                  onChange={(e) => setReservation({ ...reservation, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 focus:border-[var(--primary)] focus:outline-none"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    value={reservation.email}
                    onChange={(e) => setReservation({ ...reservation, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 focus:border-[var(--primary)] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Phone</label>
                  <input
                    type="tel"
                    value={reservation.phone}
                    onChange={(e) => setReservation({ ...reservation, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 focus:border-[var(--primary)] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Occasion (optional)</label>
                <select
                  value={reservation.occasion}
                  onChange={(e) => setReservation({ ...reservation, occasion: e.target.value })}
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 focus:border-[var(--primary)] focus:outline-none"
                >
                  {occasions.map((occasion) => (
                    <option key={occasion} value={occasion}>
                      {occasion}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Special Requests (optional)</label>
                <textarea
                  value={reservation.specialRequests}
                  onChange={(e) => setReservation({ ...reservation, specialRequests: e.target.value })}
                  placeholder="Any dietary restrictions or special requests?"
                  rows={3}
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 focus:border-[var(--primary)] focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Button onClick={handleNext} disabled={!isStepValid()}>
                Review Reservation
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </button>

            <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold">
              Review & Confirm
            </h2>
            <p className="mt-2 text-[var(--muted-foreground)]">
              Please review your reservation details
            </p>

            <div className="mt-8 space-y-6 rounded-xl bg-[var(--muted)] p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-[var(--muted-foreground)]">Location</p>
                  <p className="font-semibold capitalize">{reservation.location.replace('-', ' ')}</p>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="text-sm text-[var(--primary)] hover:underline"
                >
                  Change
                </button>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-[var(--muted-foreground)]">Date & Time</p>
                  <p className="font-semibold">{reservation.date} at {reservation.time}</p>
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="text-sm text-[var(--primary)] hover:underline"
                >
                  Change
                </button>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-[var(--muted-foreground)]">Party Size</p>
                  <p className="font-semibold">{reservation.partySize} guests</p>
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="text-sm text-[var(--primary)] hover:underline"
                >
                  Change
                </button>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-[var(--muted-foreground)]">Contact</p>
                  <p className="font-semibold">{reservation.name}</p>
                  <p className="text-sm">{reservation.email}</p>
                  <p className="text-sm">{reservation.phone}</p>
                </div>
                <button
                  onClick={() => setStep(3)}
                  className="text-sm text-[var(--primary)] hover:underline"
                >
                  Change
                </button>
              </div>

              {reservation.occasion !== 'None' && (
                <div>
                  <p className="text-sm text-[var(--muted-foreground)]">Occasion</p>
                  <p className="font-semibold">{reservation.occasion}</p>
                </div>
              )}

              {reservation.specialRequests && (
                <div>
                  <p className="text-sm text-[var(--muted-foreground)]">Special Requests</p>
                  <p className="font-semibold">{reservation.specialRequests}</p>
                </div>
              )}
            </div>

            <div className="mt-8 flex gap-4">
              <Link href="/dashboard" className="flex-1">
                <Button className="w-full gap-2">
                  <Check className="h-4 w-4" />
                  Confirm Reservation
                </Button>
              </Link>
            </div>

            <p className="mt-4 text-center text-xs text-[var(--muted-foreground)]">
              By confirming, you agree to our cancellation policy. We require 24 hours notice for cancellations.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ReservationsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[var(--muted)] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)] mx-auto"></div>
          <p className="mt-4 text-[var(--muted-foreground)]">Loading...</p>
        </div>
      </div>
    }>
      <ReservationForm />
    </Suspense>
  );
}
