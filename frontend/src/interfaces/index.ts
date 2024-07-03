/* Alert */

export enum AlertSeverity {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error'
}

export interface AlertProperties {
  message: string;
  severity: AlertSeverity;
  visible?: boolean;
}

export interface AlertMethods {
  show: (properties: AlertProperties) => void;
  hide: () => void;
}

export interface Alert extends AlertProperties, AlertMethods {}

/* Auth */

export interface SignIn {
  username: string;
  password: string;
}

export interface User {
  names: string;
  surnames: string;
  phone: string;
  email: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface SignUp extends SignIn, User {}

export interface AuthProperties {
  status: 'unauthenticated' | 'checking' | 'authenticated';
  token?: AuthResponse['token'];
  user?: AuthResponse['user'];
}

export interface AuthMethods {
  signIn: (user: SignIn) => void;
  signOut: () => void;
  signUp: (user: SignUp) => void;
}

export interface Auth extends AuthProperties, AuthMethods {}