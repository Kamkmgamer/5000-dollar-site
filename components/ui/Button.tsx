import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-[var(--primary)] text-white hover:bg-[var(--primary-800)] hover:shadow-lg':
              variant === 'default',
            'border border-[var(--border)] bg-transparent hover:bg-[var(--muted)]':
              variant === 'outline',
            'hover:bg-[var(--muted)]': variant === 'ghost',
            'text-[var(--primary)] underline-offset-4 hover:underline':
              variant === 'link',
            'h-10 px-6 py-2': size === 'default',
            'h-8 px-4 text-sm': size === 'sm',
            'h-12 px-8 text-lg': size === 'lg',
            'h-10 w-10 p-0': size === 'icon',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
