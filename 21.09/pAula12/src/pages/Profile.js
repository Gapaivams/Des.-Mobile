
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';


export default function Profile({navigation}){
    return(
        <View style={estilo.tela}>
            <Text style={estilo.texto}>Tela Profile</Text>
            <Button 
                title="Voltar"
                color="#118ab2"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}


const estilo = StyleSheet.create({
    tela:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#fff'
    },
    texto:{
        fontSize: 14,
        color: "#5b5b5b",
        textAlign: 'center',
        marginBottom: 24
    }
})