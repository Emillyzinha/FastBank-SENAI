import { StyleSheet } from "react-native";

const styleTransfer = StyleSheet.create({
    screen: {
        flex: 1,
        display: 'flex',
        paddingTop: 50,
        padding: 20,
        alignItems: "center",
        backgroundColor:'#FFFFFF',
    },
    h3: {
        margin: 20,
        fontSize: 18,
        fontWeight: 600,
        // color: '#EDAA25',
        // width: '100%'
    },
    spaceButton: {
        width: '100%',
        display: "flex",
        alignItems: "flex-end",
        marginTop: -15,
    },
    space:{
        marginTop: 15,
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
        width: '30%',
        height: '100%',
    },
    placeButton: {
        width: '100%',
        display: "flex",
        alignItems: "flex-end",
    },
    buttonPassword: {
        width: 300,
        height: 78,
        backgroundColor: '#D3D3D3',
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        marginBottom: 50,
    },
    textButtonPassword: {
        fontSize: 20,
        textAlign: "center",

    },
})

export default styleTransfer
