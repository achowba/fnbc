import { COLORS } from '@/constants/colors.constants';
import { StyleSheet, Text, View } from 'react-native';
import { BaseToast, ErrorToast } from 'react-native-toast-message';

type ToastProps = {
  text1: string;
};

const InfoToast = ({ text1 }: ToastProps) => {
  return (
    <View style={[styles.toastContainer, styles.infoToastContainer]}>
      <Text style={styles.infoToastText}>{text1}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    backgroundColor: COLORS.light.primary,
    borderRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  infoToastContainer: {
    elevation: 5,
    shadowColor: COLORS.light.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  infoToastText: {
    color: '#FFFFFF',
  },
});

export const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'pink' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props: any) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
  customInfo: ({ text1 }: any) => <InfoToast text1={text1} />,
};
