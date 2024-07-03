import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { SplashScreen } from 'expo-router';
import fonts from '../../../constants/global/fonts';

const useLoadFonts = () => {

  const [fontsLoaded, fontsError] = useFonts(fonts.poppins);

  useEffect(() => {

    if (fontsError)
      throw fontsError
    ;

    if (fontsLoaded)
      SplashScreen.hideAsync()

  }, [fontsLoaded, fontsError]);

  return { fontsLoaded, fontsError }

}

export default useLoadFonts