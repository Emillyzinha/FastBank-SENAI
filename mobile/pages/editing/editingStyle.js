import { StyleSheet } from "react-native"

const styleEditing = StyleSheet.create({
    screen: {
        flex: 1,
        display: 'flex',
        alignItems: "center",
        paddingTop: 50,
        padding: 20,
        backgroundColor: '#fff'
    },
    top: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginBottom: 20,
    },
    image: {
        width: 60,
        height: 60,
    },
    textTop: {
        fontWeight: "bold",
        fontSize: 30,
        marginLeft: 10,
    },
    button: {
        marginTop: 25,
        width: '50%',
        height: 48,
        backgroundColor: '#E7E7E7',
        shadowColor: "#000",
        outlineWidth: 0,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 10,
        color: 'rgba(0, 0, 0, 0.25)',
        marginBottom: 20,
        display: 'flex',
        justifyContent: "center"
    },
    textButton: {
        color: '#8B8B8B',
        fontSize: 23,
        textAlign: "center",
        fontWeight: 600,
    }
})

export default styleEditing