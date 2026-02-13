import { SignUp } from '@clerk/nextjs';
import { Gift, Star, Crown } from 'lucide-react';

const benefits = [
  { icon: Star, text: 'Earn points on every visit' },
  { icon: Gift, text: 'Exclusive birthday rewards' },
  { icon: Crown, text: 'VIP event invitations' },
];

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[var(--muted)] py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Benefits */}
          <div className="hidden flex-col justify-center lg:flex">
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold">
              Join Our Loyalty Program
            </h2>
            <p className="mt-4 text-lg text-[var(--muted-foreground)]">
              Create an account and start earning rewards today. It&apos;s free to join!
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-500)]/10">
                    <benefit.icon className="h-6 w-6 text-[var(--accent-700)]" />
                  </div>
                  <span className="font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-800)] p-6 text-white">
              <p className="text-sm font-medium opacity-80">Welcome Bonus</p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-3xl font-bold">
                100 Points
              </p>
              <p className="mt-2 text-sm opacity-80">
                Just for signing up! Start your journey to rewards.
              </p>
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="flex flex-col items-center">
            <div className="mb-6 text-center lg:text-left lg:w-full">
              <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold">
                Create Account
              </h1>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                Join Maison Bistrot and start earning rewards
              </p>
            </div>
            <SignUp 
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  socialButtonsBlockButton: "rounded-full border border-[var(--border)] bg-[var(--background)] hover:bg-[var(--muted)]",
                  formFieldLabel: "text-sm font-medium text-[var(--foreground)]",
                  formFieldInput: "rounded-lg border border-[var(--border)] bg-[var(--background)] focus:border-[var(--primary)]",
                  formButtonPrimary: "rounded-full bg-[var(--primary)] hover:bg-[var(--primary-800)]",
                  footerActionLink: "text-[var(--primary)] hover:text-[var(--primary-800)]",
                  formFieldErrorText: "text-red-600",
                  alertText: "text-red-600",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
