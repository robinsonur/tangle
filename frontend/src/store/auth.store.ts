import { AuthProperties, Auth, AuthResponse, AlertSeverity } from '../interfaces';
import { create } from 'zustand';
import http from '../api/http';
import { API_SIGN_IN_END_POINT } from '@env';

const initialState: AuthProperties = {
  status: 'unauthenticated',
  token: undefined,
  user: undefined
}

export const useAuthStore = create<Auth>()(set => ({
  ...initialState,
  signIn: async user => {

    let state: AuthProperties = {
      status: 'checking'
    }

    set(state);

    try {

      const { data } = await http.post<AuthResponse>(
        API_SIGN_IN_END_POINT,
        user
      );

      state = {
        status: 'authenticated',
        ...data
      };

    } catch (error) {
console.log(error);
      // Error de petición excede tiempo
      // if(error.code === 'ECONNABORTED') {

      // }

      state = initialState

    }

    set(state)

  },
  signOut: () => {

    set(initialState)

  },
  signUp: async user => {

    let state: AuthProperties = {
      status: 'checking'
    };

    set(state);

    try {

      const { data } = await http.post<AuthResponse>(
        API_SIGN_IN_END_POINT,
        user
      );

      state = {
        status: 'unauthenticated',
        ...data
      };

    } catch (error) {

      // Error de petición excede tiempo
      // if(error.code === 'ECONNABORTED') {

      // }

      state = initialState

    }

    set(state)

  }
})
)