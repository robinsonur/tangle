import { FC, ReactElement } from 'react';
import {
  Button,
  ButtonProps as ButtonPropsPaper,
  Text
} from 'react-native-paper';
import colors from 'tailwindcss/colors';

interface ButtonProps extends ButtonPropsPaper {
  textProps?: {}
}

const FormButton: FC<ButtonProps> = ({ children, textProps, ...props }) => (
  <Button
    className="h-16 justify-center"
    mode="contained"
    dark
    buttonColor={ colors.amber[600] }
    contentStyle={{ height: '100%' }}
    { ...props }
  >
    <Text
      className="font-psemibold"
      variant="bodyLarge"
      { ...textProps }
    >
      { children }
    </Text>
  </Button>
);

export default FormButton