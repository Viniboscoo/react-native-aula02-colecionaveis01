
import React from 'react';
import 'react-native-gesture-handler';;
import { StyleSheet , Text , View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Detalhes from './src/views/Detalhes/Detalhes';
import Inicial from './src/views/Inicio/Inicio';
import Sobre from './src/views/Sobre/Sobre';

const  Stack = createStackNavigator();

export default function App( ) {
  return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
        <Stack.Screen name="Sobre" component={Sobre} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

