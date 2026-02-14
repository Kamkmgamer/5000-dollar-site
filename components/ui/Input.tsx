import { cn } from '@/lib/utils';
import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--neutral-400)]">
            {label}
          </label>
        )}
        <input
          className={cn(
            'flex h-12 w-full rounded-xl border border-[var(--neutral-700)] bg-[var(--neutral-900)] px-4 text-sm text-[var(--neutral-100)] transition-all duration-300 placeholder:text-[var(--neutral-600)] focus:border-[var(--accent-500)]/40 focus:outline-none focus:ring-1 focus:ring-[var(--accent-500)]/20',
            error && 'border-red-500/50 focus:ring-red-500/20',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-xs text-red-400">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
