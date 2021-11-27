import { StyleSheet } from 'react-native';

const estiloInicio = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D1F5D1',
        justifyContent: 'center',
        alignItems: 'center',
    },   
    borda: {
        backgroundColor: '#54695A',
        width: '80%',
        borderRadius: 10,
    },
    texto: {
        fontSize: 50,
        color: '#8C0823',
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
        color: '#F06271',
        fontWeight:'bold',
        padding: 40
    },
});

export default estiloInicio;


