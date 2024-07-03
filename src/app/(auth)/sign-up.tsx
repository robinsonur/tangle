import { Platform, KeyboardAvoidingView, ScrollView, View, Image } from 'react-native';
import { ReactElement } from 'react';
import useSignUp from '../../hooks/auth/useSignUp';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import { Text } from 'react-native-paper';
import { FormField, FormButton } from '../../components/forms';
import { Link } from 'expo-router';

const isIosPlatform: boolean = Platform.OS === 'ios';

export default function SignUp(): ReactElement {

  const {
    control,
    errors,
    isLoading,
    passwordVisible,
    togglePasswordVisibility,
    handleSubmit,
    signUp
  } = useSignUp();

  return (
    <SafeAreaView className="h-full bg-indigo-950">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={ isIosPlatform ? 'padding' : 'height' }
        keyboardVerticalOffset={ isIosPlatform ? 64 : 0 }
      >
        <ScrollView>
          <View className="w-full h-[90vh] justify-center px-5">

            <View className="gap-4">

              <Image
                className="w-[115px] h-[35px]"
                source={images.logo}
                resizeMode="contain"
              />

              <Text
                className="text-white font-psemibold"
                variant="headlineMedium"
              >
                Registrate en Tangle
              </Text>

              <FormField
                control={ control }
                name="names"
                error={ errors.names?.message }
                label="Nombres"
              />

              <FormField
                control={ control }
                name="surnames"
                error={ errors.surnames?.message }
                label="Apellidos"
              />

              <FormField
                control={ control }
                name="phone"
                error={ errors.phone?.message }
                label="Teléfono"
                inputMode="tel"
                icons={{
                  left: { icon: 'phone', disabled: true }
                }}
              />

              <FormField
                control={ control }
                name="email"
                error={ errors.email?.message }
                label="Correo"
                inputMode="email"
                icons={{
                  left: { icon: 'email', disabled: true }
                }}
              />

              <FormField
                control={ control }
                name="username"
                error={ errors.username?.message }
                label="Usuario"
                icons={{
                  left: { icon: 'account', disabled: true }
                }}
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
                    onPress: togglePasswordVisibility
                  }
                }}
              />

              <FormButton
                onPress={ handleSubmit(signUp) }
                loading={ isLoading }
                disabled={ isLoading }
              >
                Registrar
              </FormButton>

              <View className="flex-row justify-center gap-2">

                <Text
                  className="font-pregular text-gray"
                  variant="bodyLarge"
                >
                  ¿Ya tienes un usuario?
                </Text>

                <Link href="/sign-in">
                  <Text
                    className="font-psemibold underline text-amber-600"
                    variant="bodyLarge"
                  >
                    Ingresa
                  </Text>
                </Link>

              </View>

            </View>


          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )

}
