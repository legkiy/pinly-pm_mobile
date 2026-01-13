import { ThemeToggle } from '@/features';
import { STYLE_VARS } from '@/shared/styles';
import { Icons, NavigateLink } from '@/shared/ui';
import { StyleSheet, View } from 'react-native';

const QuickSettings = () => {
  return (
    <View style={styles.header}>
      <View style={styles.rightBox}>
        <ThemeToggle />
        <NavigateLink href={'/settings'}>
          <Icons packName="material-icons" name="settings" />
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
    zIndex: 1,
  },
  rightBox: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    gap: STYLE_VARS.spacing.default,
  },
});
