import { Stack } from 'expo-router';
import ConfigProvider from '@/config/ConfigProvider';
import { useColors } from '@/shared/styles';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
  const colors = useColors();
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
            presentation: 'formSheet',
            sheetAllowedDetents: [0.6],
            sheetGrabberVisible: true,
          }}
        />
      </Stack>

      <StatusBar style="auto" />
    </ConfigProvider>
  );
};
export default RootLayout;
