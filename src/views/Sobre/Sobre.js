import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloResumo from './estiloSobre';

function Sobre() {

    return(

        <View style={estiloResumo.container}>
            <View style={estiloResumo.borda}>
                 
            <Text style={estiloResumo.titulo}> GitHub </Text>
            
            <Text style={estiloResumo.texto}> Um pouco sobre GitHub </Text>


                <TouchableOpacity style={estiloResumo.botaoContainer}>
                   <Text style={estiloResumo.botaoTexto}>Voltar</Text> 
                </TouchableOpacity>  
            </View>
        </View>
    )
}
export default Sobre;
