import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function Home({navigation}){
    return(
        <View style={estilo.tela}>
            <Text style={estilo.texto}>Tela Principal</Text>
            <Button 
                title="Ir para sobre"
                color="#118ab2"
                onPress={() => navigation.navigate('TelaSobre')}
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
        color: "#585858",
        textAlign: 'center',
        marginBottom: 24
    }
})