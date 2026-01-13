import './theme.css';
import '@/i18n';
import 'react-native-reanimated';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { COLORS } from './colors';

type Props = {
  children: React.ReactNode;
};

const ROUTER_THEME = {
  light: { ...DefaultTheme, colors: { ...DefaultTheme.colors, background: COLORS.light.bg } },
  dark: { ...DarkTheme, colors: { ...DarkTheme.colors, background: COLORS.dark.bg } },
};

const ConfigProvider = ({ children }: Props) => {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? ROUTER_THEME.dark : ROUTER_THEME.light}>{children}</ThemeProvider>
  );
};

export default ConfigProvider;
