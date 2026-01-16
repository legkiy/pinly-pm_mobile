import BottomSheetGorhom, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import { StyleSheet } from 'react-native';

type Props = {
  children: React.ReactNode;
};
const BottomSheet = ({ children }: Props) => {
  const bottomSheetRef = useRef<BottomSheetGorhom>(null);

  return (
    <BottomSheetGorhom ref={bottomSheetRef} index={1} snapPoints={['20%', '50%', '80%']}>
      <BottomSheetView style={styles.contentContainer}>{children}</BottomSheetView>
    </BottomSheetGorhom>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    zIndex: 1000,
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
    zIndex: 1000,
  },
});

export default BottomSheet;
