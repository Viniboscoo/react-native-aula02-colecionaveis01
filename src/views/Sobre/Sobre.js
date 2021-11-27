import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloResumo from './estiloSobre';

function Sobre() {

    return(

        <View style={estiloResumo.container}>
            <View style={estiloResumo.borda}>
                 
            <Text style={estiloResumo.titulo}> GitHub </Text>

            <Text style={estiloResumo.texto}> Um pouco sobre GitHub </Text>
            <Text style={estiloResumo.texto}> O GitHub é considerado é uma ferramenta essencial para engenheiros de software, com uma
             popularidade sem igual. Atualmente, ele acomoda mais de 25 milhões de usuários. Isso significa que há um número considerável 
             de profissionais que estão procurando o GitHub para melhorar o fluxo de trabalho e a colaboração. </Text>

                <TouchableOpacity style={estiloResumo.botaoContainer}>
                   <Text style={estiloResumo.botaoTexto}>Voltar</Text> 
                </TouchableOpacity>  
            </View>
        </View>
    )
}
export default Sobre;
