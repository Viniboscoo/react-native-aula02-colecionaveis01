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
        height: '50%',
        borderRadius: 10,
    },
    titulo: {
        fontSize: 25,
        color: '#8C0823',
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10
    },

    texto: {
        fontSize: 20,
        color: '#8FB399',
        fontWeight: 'bold',
        padding: 10,
        width: '90%',
        height: '90%',
        textAlign: "justify",
    },
    botaoContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        height: 40,
        borderWidth: 2,
        borderColor: '#8FB399',
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoTexto: {
        fontSize: 18,
        color: '#8C0823',
        fontWeight:'bold'
    },
});

export default estiloSobre;
