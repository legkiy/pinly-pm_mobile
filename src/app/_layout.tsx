import { Stack } from 'expo-router';
import ConfigProvider from '@/config/ConfigProvider';
import { StatusBar } from 'expo-status-bar';
import { QuickSettings } from '@/widgets';

const RootLayout = () => {
  return (
    <ConfigProvider>
      <Stack
        screenOptions={{
          // headerShown: false,
          headerRight: () => <QuickSettings />,
          headerShadowVisible: false,
          headerBackground: () => null,
        }}
        // screenLayout={({ children }) => <SafeAreaView edges={['right', 'left']}>{children}</SafeAreaView>}
      />
      <StatusBar style="auto" />
    </ConfigProvider>
  );
};
export default RootLayout;
