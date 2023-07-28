import { StyleSheet } from "react-native";

const estilosOpcao = StyleSheet.create({
    pagina: {
        display: 'flex',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 38,
        color: '#EDAA25',
        textAlign: 'center',
        marginBottom: 23,
        fontWeight: 600,
    },
    caixinha: {
        width: '85%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom: 15,
    }
})

export default estilosOpcao