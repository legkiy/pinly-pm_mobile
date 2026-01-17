import * as Crypto from 'expo-crypto';

export const generateUuid = () => {
  return Crypto.randomUUID();
};
