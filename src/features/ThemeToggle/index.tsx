import { Appearance, Pressable, StyleSheet, useColorScheme, View } from 'react-native';
import { Icons } from '@/shared/ui';

const ThemeToggle = () => {
  const colorScheme = useColorScheme();

  const handleOnChange = () => {
    if (colorScheme === 'light') {
      Appearance.setColorScheme('dark');
    } else {
      Appearance.setColorScheme('light');
    }
  };

  return (
    <View style={styles.box}>
      <Pressable onPress={handleOnChange} style={{ backgroundColor: 'transparent' }}>
        {colorScheme === 'light' ? (
          <Icons packName="fontawesome6" name="moon" iconStyle="solid" />
        ) : (
          <Icons packName="material-icons" name="sunny" />
        )}
      </Pressable>
    </View>
  );
};
export default ThemeToggle;

const styles = StyleSheet.create({
  box: {},
  icon: {
    height: 24,
    width: 24,
  },
});
