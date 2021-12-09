import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloInicial from './estiloInicio';
import Detalhes from'../Detalhes/Detalhes.js';
import Sobre from '../Sobre/Sobre.js';
import ibagem from '../../imagem/logo.png'

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

                <Text style={estiloInicial.texto}>Inicial</Text>
                <img src={ibagem}height="100px" />
            <View style={estiloInicial.borda}>
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