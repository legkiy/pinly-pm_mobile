import * as Crypto from 'expo-crypto';

export const createUuid = () => {
  return Crypto.randomUUID();
};
