import LoginHeader from '@/components/login/LoginHeader';
import { COLORS } from '@/constants/colors.constants';
import { FONTS } from '@/constants/fonts.constants';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  const [loaded] = useFonts({
    [FONTS.inter.bold]: require('../assets/fonts/Inter/Inter_24pt-Bold.ttf'),
    [FONTS.inter.light]: require('../assets/fonts/Inter/Inter_24pt-Light.ttf'),
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
            headerTitle: '',
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
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
