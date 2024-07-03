import { useSnackAlertStore } from '../../../store/snackAlert.store';
import { AlertSeverity } from '../../../interfaces';
import colors from 'tailwindcss/colors';

let
  backgroundColor: string = '',
  icon: string = '',
  colorTone: number = 700
;

const useSnackAlert = () => {

  const { message } = useSnackAlertStore();
  const { severity } = useSnackAlertStore();
  const { visible } = useSnackAlertStore();
  const { hide } = useSnackAlertStore();

  switch (severity) {

    case AlertSeverity.INFO:
      [backgroundColor, icon] = [colors.blue[colorTone], 'chat-alert']
    break;

    case AlertSeverity.WARNING:
      [backgroundColor, icon] = [colors.yellow[colorTone], 'alert-circle']
    break;

    case AlertSeverity.ERROR:
      [backgroundColor, icon] = [colors.red[colorTone], 'hide-circle']
    break;

    default:
      [backgroundColor, icon] = [colors.green[colorTone], 'check-circle']
    break

  }

  return {
    message,
    visible,
    hide,
    backgroundColor,
    icon
  }

}

export default useSnackAlert