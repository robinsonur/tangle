import { useAuthStore } from '../../store/auth.store';
import { Redirect, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import colors from 'tailwindcss/colors';

const stackOptions = { headerShown: false }

const AuthLayout = () => {

  const { status } = useAuthStore();

  // if (status === 'authenticated')
  //   return <Redirect href="/home" />
  // ;

  return (
    <>

      <Stack>

        <Stack.Screen
          name="sign-in"
          options={stackOptions}
        />

        <Stack.Screen
          name="sign-up"
          options={stackOptions}
        />

      </Stack>

      <StatusBar backgroundColor={colors.indigo[950]} style="light" />

    </>
  );
};

export default AuthLayout