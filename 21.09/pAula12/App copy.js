import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerStyle: {backgroundColor: '#21295c'},headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'}, headerShown: false}}
      >
        <Stack.Screen name="TelaHome" component={Home} options={{title: "PAgina Principal"}}/>
        <Stack.Screen name="TelaSobre" component={Sobre} options={{title: "PAgina Sobre", headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

