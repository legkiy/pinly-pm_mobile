import './theme.css';
import '@/i18n';
import 'react-native-reanimated';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { COLORS } from './colors';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useColors } from '@/shared/styles';

type Props = {
  children: React.ReactNode;
};

const ROUTER_THEME = {
  light: { ...DefaultTheme, colors: { ...DefaultTheme.colors, background: COLORS.light.bg } },
  dark: { ...DarkTheme, colors: { ...DarkTheme.colors, background: COLORS.dark.bg } },
};

const ConfigProvider = ({ children }: Props) => {
  const colorScheme = useColorScheme();
  const colors = useColors();

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider
        style={{
          backgroundColor: colors.bg,
        }}>
        <ThemeProvider value={colorScheme === 'dark' ? ROUTER_THEME.dark : ROUTER_THEME.light}>
          <SafeAreaView edges={['top', 'left', 'right']} style={{ flex: 1 }}>
            {children}
          </SafeAreaView>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default ConfigProvider;
