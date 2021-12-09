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

                
                    <Text style={estiloDetalhe.titulo}>DETALHES</Text>
                    <Text style={estiloDetalhe.texto}> A seleção de pessoas para clubes De inicio terá que se cadastrar,
                     Após se cadastrar é só selecionar algum clube da região e enviar seus dados de jogador para o clube. 
                     Como por exemplo, nome completo , sobrenome , data de nascimento , email , telefone , e a posição que você joga.
                     Pois se caso a pessoa ser selecionada, 
                    com os dados pessoais será mais facil entrar em contato.</Text>

                    
                    <TouchableOpacity style={estiloDetalhe.botaoContainer} onPress={voltar}>
                        <Text style={estiloDetalhe.botaoTexto}>Voltar</Text>
                    </TouchableOpacity>

                </View>
            </View>
    )
}

export default Detalhes;