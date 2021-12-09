import { StyleSheet } from 'react-native';

const estiloDetalhes = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkgreen',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    borda: {
        backgroundColor: '#54695A',
        width: '80%',
        borderRadius: 10,
    },

    texto: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        margin: 20,
        marginLeft:20,
        marginRight:20,
        textAlign: "justify",
    },

    titulo: {
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
        textAlign: "center",
        
    },
    botaoContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        borderWidth: 2,
        height: 50,
        borderColor: '#FFFFFF',
        backgroundColor: '#3D4D42',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoTexto: {
        fontSize: 30,
        color: 'white',
        fontWeight:'bold'
    },
});
export default estiloDetalhes;