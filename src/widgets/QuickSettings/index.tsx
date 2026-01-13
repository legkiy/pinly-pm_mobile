import { ThemeToggle } from '@/features';
import { STYLE_VARS, useColors } from '@/shared/styles';
import { NavigateLink } from '@/shared/ui';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, View } from 'react-native';

const QuickSettings = () => {
  const colors = useColors();

  return (
    <View style={styles.header}>
      <View style={styles.rightBox}>
        <ThemeToggle />
        <NavigateLink href={'/settings'}>
          <MaterialIcons name="settings" size={26} color={colors.fg} />
        </NavigateLink>
      </View>
    </View>
  );
};
export default QuickSettings;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingInline: STYLE_VARS.spacing.default * 2,
    paddingBottom: STYLE_VARS.spacing.default,
  },
  rightBox: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    gap: STYLE_VARS.spacing.default,
  },
});
