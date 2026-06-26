/**
 * Minimal structured logger. In production this is the seam where you'd pipe
 * events to Sentry/Datadog; in development it pretty-prints to the console.
 */
type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const isProd = process.env.NODE_ENV === 'production';

function log(level: LogLevel, message: string, context?: Record<string, unknown>): void {
  if (isProd && level === 'debug') return;
  const payload = context ? [message, context] : [message];
  switch (level) {
    case 'debug':
      console.debug('[lumina:debug]', ...payload);
      break;
    case 'info':
      console.info('[lumina:info]', ...payload);
      break;
    case 'warn':
      console.warn('[lumina:warn]', ...payload);
      break;
    case 'error':
      console.error('[lumina:error]', ...payload);
      break;
  }
}

export const logger = {
  debug: (message: string, context?: Record<string, unknown>) => log('debug', message, context),
  info: (message: string, context?: Record<string, unknown>) => log('info', message, context),
  warn: (message: string, context?: Record<string, unknown>) => log('warn', message, context),
  error: (message: string, context?: Record<string, unknown>) => log('error', message, context),
};
