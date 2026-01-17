import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';
import T from '../T';
import { useColors } from '@/shared/styles';
type Props = {
  loading: boolean;
};
const AlertLoader = ({ loading }: Props) => {
  const colors = useColors();
  return (
    <Modal animationType="fade" transparent={true} visible={loading} onRequestClose={() => {}}>
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContent, { backgroundColor: colors.bg }]}>
          <ActivityIndicator size="large" color={colors.lineMain} />
          <T mess="common.loading" className="text-fg mt-4" />
        </View>
      </View>
    </Modal>
  );
};
export default AlertLoader;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Затемнение фона, как в Alert
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
