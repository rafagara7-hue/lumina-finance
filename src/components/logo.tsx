import Link from 'next/link';

import { siteConfig } from '@/constants/app';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/lib/utils';

interface LogoProps {
  href?: string;
  className?: string;
  showWordmark?: boolean;
}

/** Lumina Finance brand mark + wordmark. */
export function Logo({ href = ROUTES.home, className, showWordmark = true }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn('group flex items-center gap-2.5', className)}
      aria-label={siteConfig.name}
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-chart-2 shadow-sm">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-foreground" fill="none" aria-hidden>
          <path
            d="M4 19V5m0 14h16M8 15l3.5-4 3 2.5L20 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {showWordmark ? (
        <span className="text-base font-semibold tracking-tight">
          Lumina<span className="text-brand"> Finance</span>
        </span>
      ) : null}
    </Link>
  );
}
