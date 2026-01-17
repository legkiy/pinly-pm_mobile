// import * as Crypto from 'expo-crypto';

import { generateUuid } from './createUuid';

/**
 * @param count counts of mock objects
 * @param callback for generate mock object
 */
export function createMockArray<T>(count: number, callback: (step: number, id: string) => T): T[] {
  return Array.from({ length: count }, (_, i) => {
    const id = generateUuid();
    return callback(i, id);
  });
}
