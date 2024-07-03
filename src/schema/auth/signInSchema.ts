import * as yup from 'yup';

const signInSchema = yup.object({
  username: yup.string().trim().required('¡Tienes que ingresar un usuario!'),
  password: yup.string().required('¡Tienes que ingresar una contraseña!')
});

export default signInSchema