import * as React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Primeiro from './src/Primeiro';
import Segundo from './src/Segundo';
import Terceiro from './src/Terceiro';
import Quarto from './src/Quarto';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sobre">
        <Stack.Screen name="Primeiro" component={Primeiro}/>
        <Stack.Screen name="Segundo" component={Segundo}/>
        <Stack.Screen name="Terceiro" component={Terceiro}/>
        <Stack.Screen name="Quarto" component={Quarto}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
