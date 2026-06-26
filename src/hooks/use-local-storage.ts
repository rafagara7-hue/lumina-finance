import { useCallback, useEffect, useState } from 'react';

import { storage } from '@/services/storage';

/** Stateful localStorage binding with cross-tab sync. */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    setValue(storage.get<T>(key, initialValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const setStoredValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved = next instanceof Function ? next(prev) : next;
        storage.set(key, resolved);
        return resolved;
      });
    },
    [key],
  );

  return [value, setStoredValue] as const;
}
