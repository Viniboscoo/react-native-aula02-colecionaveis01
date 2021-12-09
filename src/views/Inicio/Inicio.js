import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloInicial from './estiloInicio';
import Detalhes from'../Detalhes/Detalhes.js';
import Sobre from '../Sobre/Sobre.js';

function Inicio( {navigation} ) { 

    const abrirDetalhes = () =>
    {
        navigation.navigate(Detalhes);
    }

    const abrirSobre = () =>
    {
        navigation.navigate(Sobre);
    }

    return (
        <View style={estiloInicial.container}>
            <View style={estiloInicial.borda}>

                <Text style={estiloInicial.texto}>Inicial</Text>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirSobre}> 
                    <Text style={estiloInicial.botaoTexto}>Sobre</Text> 
                </TouchableOpacity>

               <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirDetalhes}>
                    <Text style={estiloInicial.botaoTexto}>Detalhes</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Inicio;