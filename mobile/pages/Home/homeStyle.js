import { StyleSheet } from "react-native";

const stylesHome = StyleSheet.create({
    pagina: {
        flex: 1,
        display: 'flex',
        paddingTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
        alignItems: "center",
        justifyContent: 'space-between',
    },
    topo: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    conteudoTopo: {
        width: '70%',
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    imagensTopo: {
        width: '30%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    user: {
        width: 60,
        height: 60,
    },
    hello: {
        fontSize: 23,
        marginLeft: 10,
    },
    balance: {
        borderBottomWidth: 2,
        borderColor: '#D9D9D9',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 40,
    },
    textBalance: {
        color: '#EDAA25',
        fontSize: 30,
        fontWeight: 500
    },
    valeuBalance: {
        fontSize: 30,
        fontWeight: 500,
    },
    OptionsTransactions: {
        width: '100%',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        borderBottomWidth: 2,
        borderBottomColor: '#D9D9D9',
        paddingBottom: 24,
    },
    movement: {
        width: '100%',
        marginTop: 20,
    },
    textMovement: {
        fontSize: 30,
        fontWeight: 700,
        textAlign:"justify",
    },
    
})

export default stylesHome