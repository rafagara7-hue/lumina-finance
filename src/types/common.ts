/**
 * Cross-cutting types shared by every module.
 */

export type ISODateString = string;

export type Currency = 'BRL' | 'USD' | 'EUR' | 'GBP';

/** A monetary amount stored in minor units (cents) to avoid float drift. */
export interface Money {
  /** Amount in minor units (e.g. cents). */
  amount: number;
  currency: Currency;
}

export type TrendDirection = 'up' | 'down' | 'flat';

export interface Trend {
  direction: TrendDirection;
  /** Percentage change vs. the comparison period, e.g. 12.4 for +12.4%. */
  value: number;
  label?: string;
}

export type EntityStatus = 'active' | 'inactive' | 'pending' | 'archived';

/** Standard envelope every API call resolves to. */
export interface ApiResponse<TData> {
  data: TData;
  message?: string;
  success: boolean;
}

export interface ApiError {
  status: number;
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface SortParams<TField extends string = string> {
  field: TField;
  direction: 'asc' | 'desc';
}

export interface PaginatedResult<TItem> {
  items: TItem[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

export interface Option<TValue extends string = string> {
  label: string;
  value: TValue;
  disabled?: boolean;
}

/** Generic async UI state, useful when not relying on TanStack Query. */
export type AsyncState<TData> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: TData }
  | { status: 'error'; error: ApiError };
