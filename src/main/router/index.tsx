import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { Stack } from 'main/router/Stack';

import HomeScreen from '../../features/Home/pages/HomeScreen';

import { SCREENS } from './ScreenNames';

const Router: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={SCREENS.home}
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name={SCREENS.home} component={HomeScreen} options={{ headerShown: true }} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default Router;
