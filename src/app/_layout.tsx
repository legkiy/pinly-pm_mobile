import { Stack } from 'expo-router';
import ConfigProvider from '@/config/ConfigProvider';
import { StatusBar } from 'expo-status-bar';
import { QuickSettings } from '@/widgets';
import { useColors } from '@/shared/styles';

const RootLayout = () => {
  const colors = useColors();
  return (
    <ConfigProvider>
      <Stack
        screenOptions={{
          // headerShown: false,
          headerRight: () => <QuickSettings />,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.bg,
          },
        }}
        // screenLayout={({ children }) => <SafeAreaView edges={['right', 'left']}>{children}</SafeAreaView>}
      />
      <StatusBar style="auto" />
    </ConfigProvider>
  );
};
export default RootLayout;
