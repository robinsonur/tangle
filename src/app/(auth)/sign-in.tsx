import { ReactElement } from 'react';
import { useSignIn } from '../../hooks/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View, Image } from 'react-native';
import { images } from '../../constants';
import { Text } from 'react-native-paper';
import { FormField, FormButton } from '../../components/forms';
import { Link } from 'expo-router';

export default function SignIn(): ReactElement {

  const {
    control,
    errors,
    passwordVisible,
    togglePasswordVisibility,
    isLoading,
    handleSubmit,
    signIn
  } = useSignIn();

  return (
    <SafeAreaView className="h-full bg-indigo-950">
      <ScrollView>
        <View className="w-full h-[85vh] justify-center px-5">
          <View className="gap-4">

            <Image
              className="w-[115px] h-[35px]"
              source={ images.logo }
              resizeMode="contain"
            />

            <Text
              className="text-white font-psemibold"
              variant="headlineMedium"
            >
              Iniciar sesión en Tangle
            </Text>

            <FormField
              control={ control }
              name="username"
              error={ errors.username?.message }
              label="Usuario"
              icons={{
                left: { icon: 'account', disabled: true }
              }}
              disabled={ isLoading }
            />

            <FormField
              control={ control }
              name="password"
              error={ errors.password?.message }
              label="Contraseña"
              secureTextEntry={ !passwordVisible }
              icons={{
                left: { icon: 'key', disabled: true },
                right: {
                  icon: passwordVisible ? 'eye' : 'eye-off',
                  forceTextInputFocus: false,
                  onPress: togglePasswordVisibility,
                  disabled: isLoading
                }
              }}
              disabled={ isLoading }
            />

            <FormButton
              onPress={ handleSubmit(signIn) }
              loading={ isLoading }
              disabled={ isLoading }
            >
              Ingresar
            </FormButton>

            <View className={`flex-row justify-center gap-2 ${isLoading && 'hidden'}`}>

              <Text
                className="font-pregular text-gray"
                variant="bodyLarge"
              >
                ¿No tienes un usuario?
              </Text>

              <Link href="/sign-up">
                <Text
                  className="font-psemibold underline text-amber-600"
                  variant="bodyLarge"
                >
                  Registrate
                </Text>
              </Link>

            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )

}
