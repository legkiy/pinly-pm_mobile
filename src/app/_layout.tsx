import { Stack } from 'expo-router';
import ConfigProvider from '@/config/ConfigProvider';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
  return (
    <ConfigProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="projects/[projectId]/index" options={{ headerShown: false }} />
        <Stack.Screen
          name="editable-project"
          options={{
            headerShown: false,
            // presentation: 'fullScreenModal',
            // sheetAllowedDetents: [0.6],
            // sheetGrabberVisible: true,
          }}
        />
      </Stack>

      <StatusBar style="auto" />
    </ConfigProvider>
  );
};
export default RootLayout;
