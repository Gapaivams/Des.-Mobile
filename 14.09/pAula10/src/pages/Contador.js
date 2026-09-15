import { Button } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function Contador(){
    const [valor, setValor] = useState(0)
    const[visivel, setVisivel] = useState(false)

    function incrementar(){
        console.log(`valor atual: ${valor}`);

        setValor(valor + 1);

        console.log(`valor Novo: ${valor}`);

    }

    function decrementar(){
        if(valor > 0){
            setValor(valor - 1);
        } 

        if (valor == 0){
            toogle
        }else if(valor > 0){
            toogle
        }
    }

    function toogle(){
        setVisivel(!visivel);
    }

    return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Button title="+" color='#08ff52' onPress={incrementar}/>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{valor}</Text>
            {visivel ? (<Button title="-" color='#ff0808' onPress={decrementar}/>) : false}
            

            
        </View>
    )
}