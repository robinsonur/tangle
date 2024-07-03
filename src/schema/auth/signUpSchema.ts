import * as yup from 'yup';

const signUpSchema = yup.object({
  names: yup
    .string()
    .trim()
    .required('¡Tienes que ingresar un nombre!'),
  surnames: yup
    .string()
    .trim()
    .required('¡Tienes que ingresar un apellido!'),
  phone: yup
    .string()
    .required('¡Tienes que ingresar un teléfono!')
    .matches(/^[0-9]+$/, '¡El teléfono solo puede contener números!')
    .min(10, '¡El teléfono debe tener al menos 10 dígitos!'),
  email: yup
    .string()
    .required('¡Tienes que ingresar un correo!')
    .email('¡Tienes que ingresar un correo válido!'),
  username: yup
    .string()
    .trim()
    .required('¡Tienes que ingresar un usuario!')
    .min(6, '¡El usuario debe tener al menos 6 caracteres!')
    .max(20, '¡El usuario debe tener como máximo 20 caracteres!'),
  password: yup
    .string()
    .required('¡Tienes que ingresar una contraseña!')
    .min(8, '¡La contraseña debe tener al menos 8 caracteres!')
    .max(20, '¡La contraseña debe tener como máximo 20 caracteres!')
});

export default signUpSchema