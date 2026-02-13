import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[var(--muted)] py-24">
      <div className="mx-auto max-w-md px-4 sm:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 text-center">
            <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold">
              Welcome Back
            </h1>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              Sign in to your Maison Bistrot account
            </p>
          </div>
          <SignIn 
            appearance={{
              elements: {
                rootBox: "mx-auto w-full",
                card: "rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: "rounded-full border border-[var(--border)] bg-[var(--background)] hover:bg-[var(--muted)]",
                formFieldLabel: "text-sm font-medium text-[var(--foreground)]",
                formFieldInput: "rounded-lg border border-[var(--border)] bg-[var(--background)] focus:border-[var(--primary)]",
                formButtonPrimary: "rounded-full bg-[var(--primary)] hover:bg-[var(--primary-800)]",
                footerActionLink: "text-[var(--primary)] hover:text-[var(--primary-800)]",
                identityPreviewEditButton: "text-[var(--primary)]",
                formFieldErrorText: "text-red-600",
                alertText: "text-red-600",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
