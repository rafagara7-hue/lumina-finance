import { siteConfig } from '@/constants/app';
import type { ApiError } from '@/types';

/**
 * Thin, typed HTTP client built on the Fetch API.
 * When the backend lands, this is the single integration point — modules talk to
 * services, services talk to this client. No `fetch` calls scattered around.
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? `${siteConfig.url}/api`;

export class HttpError extends Error implements ApiError {
  status: number;
  code: string;
  details?: Record<string, unknown>;

  constructor(error: ApiError) {
    super(error.message);
    this.name = 'HttpError';
    this.status = error.status;
    this.code = error.code;
    this.details = error.details;
  }
}

export interface RequestOptions extends Omit<RequestInit, 'body'> {
  /** Query string parameters. */
  params?: Record<string, string | number | boolean | undefined>;
  /** JSON body (will be stringified). */
  body?: unknown;
}

function buildUrl(path: string, params?: RequestOptions['params']): string {
  const url = new URL(path.startsWith('http') ? path : `${BASE_URL}${path}`);
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) url.searchParams.set(key, String(value));
    }
  }
  return url.toString();
}

async function request<TData>(path: string, options: RequestOptions = {}): Promise<TData> {
  const { params, body, headers, ...rest } = options;

  const response = await fetch(buildUrl(path, params), {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    let payload: Partial<ApiError> = {};
    try {
      payload = await response.json();
    } catch {
      // non-JSON error body
    }
    throw new HttpError({
      status: response.status,
      code: payload.code ?? 'http_error',
      message: payload.message ?? response.statusText,
      details: payload.details,
    });
  }

  if (response.status === 204) return undefined as TData;
  return (await response.json()) as TData;
}

export const apiClient = {
  get: <TData>(path: string, options?: RequestOptions) =>
    request<TData>(path, { ...options, method: 'GET' }),
  post: <TData>(path: string, body?: unknown, options?: RequestOptions) =>
    request<TData>(path, { ...options, method: 'POST', body }),
  put: <TData>(path: string, body?: unknown, options?: RequestOptions) =>
    request<TData>(path, { ...options, method: 'PUT', body }),
  patch: <TData>(path: string, body?: unknown, options?: RequestOptions) =>
    request<TData>(path, { ...options, method: 'PATCH', body }),
  delete: <TData>(path: string, options?: RequestOptions) =>
    request<TData>(path, { ...options, method: 'DELETE' }),
};
