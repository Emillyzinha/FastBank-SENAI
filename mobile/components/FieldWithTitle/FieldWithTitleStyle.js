import { StyleSheet } from "react-native";

const styleFieldWithTitle = StyleSheet.create({
    textTitle: {
        width: '100%',
        color: '#EDAA25',
        fontSize: 25,
        fontWeight: 600,
        marginBottom: 10,
    },
    input: {
        width: 330,
        height: 58,
        paddingLeft: 35,
        shadowColor: "#000",
        outlineWidth: 0,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 10,
        color: 'rgba(0, 0, 0, 0.25)',
        fontSize: 20,
        marginBottom: 20,
    }
})

export default styleFieldWithTitle;