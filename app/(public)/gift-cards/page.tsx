'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Gift, CreditCard, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

const amounts = [25, 50, 100, 200, 500];

const features = [
  'Delivered instantly via email',
  'Never expires',
  'Valid at all locations',
  'Easy to redeem online or in-person',
];

export default function GiftCardsPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [step, setStep] = useState<'amount' | 'details' | 'payment' | 'success'>('amount');
  const [recipientDetails, setRecipientDetails] = useState({
    recipientName: '',
    recipientEmail: '',
    senderName: '',
    message: '',
  });

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const amount = selectedAmount || (customAmount ? parseInt(customAmount) : 0);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[var(--primary-900)] to-[var(--secondary-900)] py-24">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-[var(--accent-500)]/30 bg-[var(--accent-500)]/10 px-4 py-1.5 text-sm font-medium text-[var(--accent-500)]">
            The Perfect Gift
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-bold text-white sm:text-6xl">
            Gift Cards
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--neutral-300)]">
            Give the gift of exceptional dining. Our digital gift cards can be used at any 
            Maison Bistrot location and never expire.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Main Form */}
            <div className="lg:col-span-3">
              {step === 'amount' && (
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">
                    Select Amount
                  </h2>
                  <p className="mt-2 text-[var(--muted-foreground)]">
                    Choose a preset amount or enter your own
                  </p>

                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {amounts.map((amt) => (
                      <button
                        key={amt}
                        onClick={() => handleAmountSelect(amt)}
                        className={`rounded-xl border-2 p-6 text-center transition-all ${
                          selectedAmount === amt
                            ? 'border-[var(--primary)] bg-[var(--primary)]/5'
                            : 'border-[var(--border)] hover:border-[var(--primary)]/50'
                        }`}
                      >
                        <p className="font-[family-name:var(--font-display)] text-2xl font-bold">
                          ${amt}
                        </p>
                      </button>
                    ))}
                  </div>

                  <div className="mt-6">
                    <p className="mb-2 text-sm font-medium">Or enter custom amount</p>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[var(--muted-foreground)]">
                        $
                      </span>
                      <input
                        type="number"
                        placeholder="0"
                        value={customAmount}
                        onChange={(e) => handleCustomAmount(e.target.value)}
                        className="w-full rounded-xl border-2 border-[var(--border)] bg-[var(--background)] py-4 pl-10 pr-4 text-lg transition-colors focus:border-[var(--primary)] focus:outline-none"
                      />
                    </div>
                    <p className="mt-2 text-xs text-[var(--muted-foreground)]">
                      Minimum $10, maximum $1,000
                    </p>
                  </div>

                  <Button
                    className="mt-8 w-full"
                    disabled={amount < 10}
                    onClick={() => setStep('details')}
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}

              {step === 'details' && (
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">
                    Recipient Details
                  </h2>
                  <p className="mt-2 text-[var(--muted-foreground)]">
                    Who is this gift for?
                  </p>

                  <div className="mt-8 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Input
                        label="Recipient Name"
                        placeholder="Jane Doe"
                        value={recipientDetails.recipientName}
                        onChange={(e) =>
                          setRecipientDetails({ ...recipientDetails, recipientName: e.target.value })
                        }
                        required
                      />
                      <Input
                        label="Recipient Email"
                        type="email"
                        placeholder="jane@example.com"
                        value={recipientDetails.recipientEmail}
                        onChange={(e) =>
                          setRecipientDetails({ ...recipientDetails, recipientEmail: e.target.value })
                        }
                        required
                      />
                    </div>
                    <Input
                      label="Your Name"
                      placeholder="John Doe"
                      value={recipientDetails.senderName}
                      onChange={(e) =>
                        setRecipientDetails({ ...recipientDetails, senderName: e.target.value })
                      }
                      required
                    />
                    <div>
                      <label className="mb-2 block text-sm font-medium">Personal Message (optional)</label>
                      <textarea
                        rows={4}
                        placeholder="Write a personal message..."
                        value={recipientDetails.message}
                        onChange={(e) =>
                          setRecipientDetails({ ...recipientDetails, message: e.target.value })
                        }
                        className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm focus:border-[var(--primary)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <Button variant="outline" onClick={() => setStep('amount')}>
                      Back
                    </Button>
                    <Button className="flex-1" onClick={() => setStep('payment')}>
                      Continue to Payment
                    </Button>
                  </div>
                </div>
              )}

              {step === 'payment' && (
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">
                    Payment
                  </h2>
                  <p className="mt-2 text-[var(--muted-foreground)]">
                    Secure payment powered by Stripe
                  </p>

                  <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--muted)] p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--muted-foreground)]">Gift Card Amount</span>
                      <span className="font-[family-name:var(--font-display)] text-2xl font-bold">
                        ${amount}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="text-[var(--muted-foreground)]">Recipient</span>
                      <span>{recipientDetails.recipientName}</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <Input label="Card Number" placeholder="1234 5678 9012 3456" />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input label="Expiry Date" placeholder="MM/YY" />
                      <Input label="CVC" placeholder="123" />
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <Button variant="outline" onClick={() => setStep('details')}>
                      Back
                    </Button>
                    <Button 
                      className="flex-1" 
                      onClick={() => setStep('success')}
                    >
                      Pay ${amount}
                    </Button>
                  </div>
                </div>
              )}

              {step === 'success' && (
                <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-bold text-green-800">
                    Gift Card Purchased!
                  </h2>
                  <p className="mt-2 text-green-700">
                    A ${amount} gift card has been sent to {recipientDetails.recipientEmail}
                  </p>
                  <div className="mt-8 flex justify-center gap-4">
                    <Link href="/">
                      <Button variant="outline">Return Home</Button>
                    </Link>
                    <Button onClick={() => {
                      setStep('amount');
                      setSelectedAmount(null);
                      setCustomAmount('');
                      setRecipientDetails({
                        recipientName: '',
                        recipientEmail: '',
                        senderName: '',
                        message: '',
                      });
                    }}>
                      Buy Another
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-32 space-y-6">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                      <Gift className="h-6 w-6 text-[var(--primary)]" />
                    </div>
                    <div>
                      <p className="font-semibold">Digital Gift Cards</p>
                      <p className="text-sm text-[var(--muted-foreground)]">Delivered instantly</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                    Gift Card Features
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-800)] p-6 text-white">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                    Check Your Balance
                  </h3>
                  <p className="mt-2 text-sm opacity-80">
                    Already have a gift card? Check your remaining balance.
                  </p>
                  <div className="mt-4">
                    <Input
                      placeholder="Enter gift card code"
                      className="border-white/30 bg-white/10 text-white placeholder:text-white/50"
                    />
                    <Button className="mt-3 w-full bg-white text-[var(--primary)] hover:bg-white/90">
                      Check Balance
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
