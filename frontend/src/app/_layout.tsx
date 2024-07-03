import { expo } from '../../app.json';
import { SplashScreen, Stack } from 'expo-router';
import { useLoadFonts } from '../hooks/global/fonts';
import { PaperProvider, MD3DarkTheme } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import colors from 'tailwindcss/colors';
import { SnackAlert } from '../components/global/alerts';
import { AppRegistry } from 'react-native';

const { name: appName } = expo;

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const { fontsLoaded, fontsError } = useLoadFonts();

  if (!fontsLoaded && !fontsError)
    return false
  ;

  return (
    <PaperProvider theme={ MD3DarkTheme } >

      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>

      <StatusBar backgroundColor={ colors.indigo[950] } style="light" />

      <SnackAlert />

    </PaperProvider>
  )

}

AppRegistry.registerComponent(appName, () => RootLayout)
