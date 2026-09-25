import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import TelaHome from './src/pages/TelaHome';
import TelaSobre from './src/pages/TelaSobre';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

const drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#118ab2',
          drawerInactiveTintColor: '#21295c',
        }}
      >
        <drawer.Screen name='Home' component={TelaHome} options={{drawerIcon: ({color, size}) => (<Feather name='home' size={size} color={color}/>)}}/>
        <drawer.Screen name='Sobre' component={TelaSobre} options={{drawerIcon: ({color, size}) => (<Feather name='info' size={size} color={color}/>)}}/>
      </drawer.Navigator>
    </NavigationContainer>
  );
}

