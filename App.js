import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './pages/login';
import HomePage from './pages/home';

const Stack = createStackNavigator();


export default function App () {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomePage} options={{
          title: 'Suza Student App'
        }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{
          title: 'Suza Student App'
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

