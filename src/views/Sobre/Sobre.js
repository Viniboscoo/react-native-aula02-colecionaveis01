import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloResumo from './estiloSobre';

function Sobre({navigation}) {

    const voltar = () => {
        navigation.goBack();
        
    }

    return(

        <View style={estiloResumo.container}>
            <View style={estiloResumo.borda}>
                 
            <Text style={estiloResumo.titulo}> SOBRE </Text>

            <Text style={estiloResumo.texto}> é um projeto que vai facilitar a seleção de pessoas que querem entra para algum clube, 
            apenas por um app que te mostre os melhores clubes da região, 
            e com seus dados e informações pessoais, terá a oportunidade de concorrer a uma vaga em algum desse clubes. </Text>
            <Text style={estiloResumo.texto}> </Text>

                <TouchableOpacity style={estiloResumo.botaoContainer} onPress={voltar}>
                   <Text style={estiloResumo.botaoTexto}>Voltar</Text> 
                </TouchableOpacity>  
            </View>
        </View>
    )
}
export default Sobre;
