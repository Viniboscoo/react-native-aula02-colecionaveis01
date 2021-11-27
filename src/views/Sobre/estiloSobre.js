import { StyleSheet} from 'react-native';

const estiloSobre = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3D4D42',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    borda: {
        backgroundColor: '#54695A',
        width: '80%',
        borderRadius: 10,
    },
    titulo: {
        fontSize: 25,
        color: '#8C0823',
        fontWeight: 'bold',
        textAlign: "center",
    },

    texto: {
        fontSize: 20,
        color: '#8FB399',
        fontWeight: 'bold',
        margin: 20,
        marginLeft:20,
        marginRight:20,
        textAlign: "justify",
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
        fontWeight:'bold'
    },
});

export default estiloSobre;
