import { FC } from 'react';
import { Snackbar, Icon, Text } from 'react-native-paper';
import { View } from 'react-native';
import { useSnackAlert } from '../../../hooks/global/alerts';

const SnackAlert: FC = () => {

  const {
    backgroundColor,
    visible,
    hide,
    icon,
    message
  } = useSnackAlert();

  return (
    <Snackbar
      style={{ backgroundColor }}
      visible={ visible }
      duration={ 3000 }
      onDismiss={ hide }
      action={{
        label: 'Cerrar',
        textColor: 'white'
      }}
    >
      <View className="flex-row">

      <Icon size={ 24 } source={ icon } />

      <Text className="px-2 font-pregular" variant="bodyLarge">
        { message }
      </Text>

      </View>
    </Snackbar>
  );

}

export default SnackAlert