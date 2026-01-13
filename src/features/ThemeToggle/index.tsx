import { Appearance, Pressable, StyleSheet, useColorScheme, View } from 'react-native';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { useColors } from '@/shared/styles';

const ThemeToggle = () => {
  const colorScheme = useColorScheme();
  const colors = useColors();

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
          <FontAwesome6 name="moon" iconStyle="solid" size={24} color={colors.fg} style={styles.icon} />
        ) : (
          <MaterialIcons name="sunny" size={24} color={colors.fg} style={styles.icon} />
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
