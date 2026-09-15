import { Button } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

const dadosForm = {
    nome: '',
    idade: '',
    senha: '',
    maisInfos: ''
}

export default function Home(){
    const [nomeComEstado, setNomeComEstado] = useState('')
    const [idadeComEstado, setIdadeComEstado] = useState('')
    const [senhaComEstado, setSenhaComEstado] = useState('')
    const [infoComEstado, setInfoComEstado] = useState('')

    function aoDigitar(textoDigitado){
        console.log('Texto Digitado: ' + textoDigitado)
        setNomeComEstado(textoDigitado)
        dadosForm.nome = textoDigitado;
    }

    function aoEnviar(){
        const {nome,idade,senha,maisInfos} = dadosForm;
        setNomeComEstado(nome);
        console.log({nome, idade, senha: '*'.repeat(senha.length), maisInfos}) 
    }

    return(
        <View style={estilo.container}>
            <Text>{nomeComEstado}</Text>
            <View style={estilo.containerInput}>
                <Text style={estilo.label}>Nome:</Text>
                <TextInput 
                    placeholder= "Digite aqui o seu texto"
                    style={estilo.input}
                    value={nomeComEstado}
                    onChangeText={aoDigitar}
                    />
            </View>

            <View style={estilo.containerInput}>
                <Text style={estilo.label}>Idade:</Text>
                <TextInput 
                    placeholder= "Digite aqui o seu texto"
                    style={estilo.input}
                    onChangeText={(texto) => (dadosForm.idade = texto)}
                    keyboardType='numeric'
                    value={idadeComEstado}

                    />
            </View>

            <View style={estilo.containerInput}>
                <Text style={estilo.label}>Senha:</Text>
                <TextInput 
                    placeholder= "Digite aqui o seu texto"
                    style={estilo.input}
                    onChangeText={(texto) => (dadosForm.senha = texto)}
                    secureTextEntry
                    value={senhaComEstado}

                    />
            </View>
            
            <View style={estilo.containerInput}>
                <Text style={estilo.label}>Fale mais sobre voce:</Text>
                <TextInput 
                    placeholder= "Digite aqui o seu texto"
                    style={estilo.input}
                    onChangeText={(texto) => (dadosForm.maisInfos = texto)}
                    multiline
                    maxLength={60}
                    value={infoComEstado}
                    />
            </View>
            <Button title="enviar" color='#118ab2' onPress={aoEnviar}/>
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dadada',
        flexDirection: 'column',
    },
    input:{
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8,
        fontSize: 16,
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: '#fff'
    },
    label:{
        fontSize: 14,
        fontWeight: 'bold',
   
    },
    containerInput:{
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        marginBotton: 12,
        marginStart: 8,
    }
})