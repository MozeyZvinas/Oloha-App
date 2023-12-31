import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TabHomeScreen from '../screens/TabHomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignIn from '../screens/SignIn';
import OnBoardingOne from '../screens/OnBordingOne';
import DestinationScreen from '../screens/DestinationScreen';


const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TabHome' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="OnBoardingOne" component={OnBoardingOne} />
        <Stack.Screen name="TabHome" component={TabHomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Destination" component={DestinationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;