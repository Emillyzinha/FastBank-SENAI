import { StyleSheet } from "react-native";

const StyleButtonMovement = StyleSheet.create({
    box: {
        height: 50,
        backgroundColor: '#EDAA25',
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    textBox: {
        fontSize: 23,
        color: '#ffffff',
        textAlign: "center",
    },

})

export default StyleButtonMovement