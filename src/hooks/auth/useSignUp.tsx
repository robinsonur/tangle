import { SignUp } from '../../interfaces';
import { useAuthStore } from '../../store/auth.store';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '../../schema/auth';
import { useState } from 'react';

const initialForm: SignUp = {
  names: '',
  surnames: '',
  phone: '',
  email: '',
  username: '',
  password: ''
}

const useSignUp = () => {

  const { status } = useAuthStore();
  const { signUp } = useAuthStore();
  const isLoading = status === 'checking';

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: initialForm,
    resolver: yupResolver(signUpSchema)
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
    signUp
  }

}

export default useSignUp
