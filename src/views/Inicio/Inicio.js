import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloInicial from './estiloInicio';
import Detalhes from'../Detalhes/Detalhes.js';
import Sobre from '../Sobre/Sobre.js';

function Inicio() { 

    return (
        <View style={estiloInicial.container}>
            <View style={estiloInicial.borda}>

                <Text style={estiloInicial.texto}>Inicial</Text>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={Sobre}> 
                    <Text style={estiloInicial.botaoTexto}>Sobre</Text> 
                </TouchableOpacity>

               <TouchableOpacity style={estiloInicial.botaoContainer} onPress={Detalhes}>
                    <Text style={estiloInicial.botaoTexto}>Detalhes</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Inicio;