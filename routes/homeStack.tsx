import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import Home from '../screens/Home';
import Results from '../screens/Results';
import Quiz from '../screens/Quiz';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Results" component={Results} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default HomeStack;
