import { StyleSheet } from "react-native";

const styleConfirmTransaction = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 50,
        padding: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    top: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '100%',
        marginTop: 20,
        marginBottom: 40
    },
    title: {
        fontSize: 45,
        fontWeight: 700,
        color: '#EDAA25',
    },
    image: {
        width: '36%',
        height: '100%',
    },
    placeButton: {
        width: '100%',
        display: "flex",
        alignItems: "flex-end",
    },
    buttonPassword:{
        width: 300,
        height: 78,
        backgroundColor: '#D3D3D3',
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        marginBottom: 50,
    },
    textButtonPassword:{
        fontSize: 20,
        textAlign: "center",
        
    },
})

export default styleConfirmTransaction
