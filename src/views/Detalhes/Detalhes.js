import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloDetalhe from './estiloDetalhe';

function Detalhes({navigation}) {
    
        const voltar = () => {
            navigation.goBack();
            
        }
        return (

            <View style={estiloDetalhe.container}>
                <View style={estiloDetalhe.borda}>

                
                    <Text style={estiloDetalhe.titulo}>Sinopse</Text>
                    <Text style={estiloDetalhe.texto}>O GitHub costuma ser o preferido entre os seus utilizadores por oferecer também alguns recursos
                        de redes sociais, já que é possível seguir projetos de outros desenvolvedores e ainda comentar sobre
                        todos eles. O GitHub, além de tudo, possui um recurso bastante interessante, o Git, sendo possível 
                        compartilhar um bloco de código.</Text>

                    
                    <TouchableOpacity style={estiloDetalhe.botaoContainer} onPress={voltar}>
                        <Text style={estiloDetalhe.botaoTexto}>Voltar</Text>
                    </TouchableOpacity>

                </View>
            </View>
    )
}

export default Detalhes;