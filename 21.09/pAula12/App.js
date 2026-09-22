import Profile from "./src/pages/Profile";
import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {Feather} from '@expo/vector-icons'

const BottomTab = createDrawerNavigator();


export default function App(){
  return(
      <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: '#118ab2',
          tabBarInactiveTintColor: '#5b5b5b',
          tabBarStyle: {height: 70, paddingBottom: 8, },
          tabBarIcon: ({color, size}) => {
            const nomeIcone = route.name === "Home" ? 'home' : route.name === "Profile" ? 'user' : 'settings'
            return <Feather name={nomeIcone} size={size} color={color}/>
          }
          

        })}
      >
        <BottomTab.Screen name='Home' component={Home} options={{title: 'Inicio'}}/>
        <BottomTab.Screen name='Profile' component={Profile} options={{title: 'Usuario'}}/>
        <BottomTab.Screen name='Sobre' component={Sobre} options={{title: 'Sobre'}}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}