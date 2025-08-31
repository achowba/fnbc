import LoginHeader from '@/components/login/LoginHeader';
import { toastConfig } from '@/components/ui/Toast';
import { COLORS } from '@/constants/colors.constants';
import { FONTS } from '@/constants/fonts.constants';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

export const unstable_settings = {
  initialRouteName: '(login)',
};

export default function RootLayout() {
  const [loaded] = useFonts({
    [FONTS.inter.bold]: require('../assets/fonts/Inter/Inter_24pt-Bold.ttf'),
    [FONTS.inter.light]: require('../assets/fonts/Inter/Inter_24pt-Light.ttf'),
    [FONTS.inter.medium]: require('../assets/fonts/Inter/Inter_24pt-Medium.ttf'),
    [FONTS.inter.regular]: require('../assets/fonts/Inter/Inter_24pt-Regular.ttf'),
    [FONTS.inter.semibold]: require('../assets/fonts/Inter/Inter_24pt-SemiBold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.rootContainer}>
      <Stack initialRouteName="(login)">
        <Stack.Screen
          name="(login)"
          options={{
            headerShown: true,
            header: () => <LoginHeader />,
            headerTitle: () => null,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: COLORS.light.primary,
            },
          }}
        />
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen
          name="transfer-money"
          options={{ headerShown: true, headerBackTitle: 'Back' }}
        />
      </Stack>
      <Toast
        config={toastConfig}
        autoHide={true}
        bottomOffset={40}
        position="bottom"
        swipeable={true}
        visibilityTime={2000}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
