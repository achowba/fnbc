import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  const [loaded] = useFonts({
    InterBold: require('../assets/fonts/Inter/Inter_24pt-Bold.ttf'),
    InterLight: require('../assets/fonts/Inter/Inter_24pt-Light.ttf'),
    InterRegular: require('../assets/fonts/Inter/Inter_24pt-Regular.ttf'),
    InterSemiBold: require('../assets/fonts/Inter/Inter_24pt-SemiBold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.rootContainer}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
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
