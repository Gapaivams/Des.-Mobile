import {Button, SafeAreaView, StyleSheet, Text, View} from "react-native"

export default function TelaSobre({navigation}){
    return(
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#21295c'}}>Tela Detalhes</Text>
            <Button
                title="Abrir Menu"
                onPress={()=>navigation.navigate('Principal')}
            />
        </View>
    )
}

const estilos = StyleSheet.create({

})