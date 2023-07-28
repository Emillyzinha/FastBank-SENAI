import { StyleSheet } from 'react-native'

const styleFieldLoan = StyleSheet.create({
    input: {
        width: '100%',
        height: 52,

        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.21,
        shadowRadius: 6.65,
        elevation: 9,

        borderRadius: 10,
        color: 'rgba(0, 0, 0, 0.25)',
        marginBottom: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 25,
        fontWeight: 600,
        textAlign: 'center',
    }
})

export default styleFieldLoan
