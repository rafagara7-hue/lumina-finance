import { siteConfig } from '@/constants/app';
import type { Currency, Money } from '@/types';

const DEFAULT_LOCALE = siteConfig.locale;

/** Format a `Money` value (minor units) as a localized currency string. */
export function formatMoney(money: Money, locale: string = DEFAULT_LOCALE): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: money.currency,
  }).format(money.amount / 100);
}

/** Format a raw number as currency. */
export function formatCurrency(
  value: number,
  currency: Currency = siteConfig.defaultCurrency,
  locale: string = DEFAULT_LOCALE,
): string {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
}

/** Compact currency, e.g. R$ 1,2 mi — ideal for KPI cards. */
export function formatCompactCurrency(
  value: number,
  currency: Currency = siteConfig.defaultCurrency,
  locale: string = DEFAULT_LOCALE,
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value);
}

export function formatNumber(value: number, locale: string = DEFAULT_LOCALE): string {
  return new Intl.NumberFormat(locale).format(value);
}

export function formatCompactNumber(value: number, locale: string = DEFAULT_LOCALE): string {
  return new Intl.NumberFormat(locale, { notation: 'compact', maximumFractionDigits: 1 }).format(
    value,
  );
}

/** Format a 0–100 (or signed) value as a percentage string. */
export function formatPercent(
  value: number,
  options: { signed?: boolean; fractionDigits?: number } = {},
  locale: string = DEFAULT_LOCALE,
): string {
  const { signed = false, fractionDigits = 1 } = options;
  const formatted = new Intl.NumberFormat(locale, {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value);
  const sign = signed && value > 0 ? '+' : '';
  return `${sign}${formatted}%`;
}

export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' },
  locale: string = DEFAULT_LOCALE,
): string {
  return new Intl.DateTimeFormat(locale, options).format(new Date(date));
}

export function formatDateTime(
  date: Date | string | number,
  locale: string = DEFAULT_LOCALE,
): string {
  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date));
}

/** Two-letter initials for avatars. */
export function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}
