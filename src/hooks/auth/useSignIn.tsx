import { SignIn } from '../../interfaces';
import { useAuthStore } from '../../store/auth.store';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema } from '../../schema/auth';
import { useState } from 'react';

const initialForm: SignIn = {
  username: '',
  password: ''
}

const useSignIn = () => {

  const { status } = useAuthStore();
  const { signIn } = useAuthStore();
  const isLoading = status === 'checking';

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: initialForm,
    resolver: yupResolver(signInSchema)
  });

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = (): void =>
    setPasswordVisible(!passwordVisible)
  ;

  return {
    control,
    errors,
    isLoading,
    passwordVisible,
    togglePasswordVisibility,
    handleSubmit,
    signIn
  }

}

export default useSignIn
