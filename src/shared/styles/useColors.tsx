import { COLORS } from '@/config/colors';
import { useMemo } from 'react';
import { useColorScheme } from 'react-native';

export const useColors = () => {
  const scheme = useColorScheme();
  const colors = useMemo(() => COLORS[scheme ?? 'light'], [scheme]);
  return colors;
};
