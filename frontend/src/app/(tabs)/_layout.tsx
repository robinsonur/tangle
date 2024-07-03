import { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import colors from 'tailwindcss/colors';
import homeRoute from './home';
import profileRoute from './profile';

export default function TabsLayout() {

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'home', title: 'Inicio', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'profile', title: 'Perfil', focusedIcon: 'account', unfocusedIcon: 'account-outline' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: homeRoute,
    profile: profileRoute
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={ setIndex }
      renderScene={ renderScene }
    />
  )

}
