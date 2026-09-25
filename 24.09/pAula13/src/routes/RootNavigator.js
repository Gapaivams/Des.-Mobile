import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator'
import TelaDetalhes from '../pages/TelaDetalhes'

const Stack = createNativeStackNavigator()

export default function RootNavigator(){
    return(
        <Stack.Navigator id='RootStack' screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="Principal"
                component={TabNavigator}
            />
            <Stack.Screen
                name="Detalhes"
                component={TelaDetalhes}
            />
        </Stack.Navigator>
    )
}