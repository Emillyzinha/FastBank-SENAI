import { StyleSheet } from 'react-native'

const stylesRegister = StyleSheet.create({
    screen: {
        flex: 1,
        display: 'flex',
        paddingTop: 50,
        padding: 20,
        alignItems: "center",
        backgroundColor: '#FFFFFF',
    },
    space: {
        marginBottom: 40,
    },
    date: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputDay: {
        width: '23%',
        height: 58,
        shadowColor: "#000",
        outlineWidth: 0,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 10,
        color: 'rgba(0, 0, 0, 0.55)',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    inputMonth: {
        width: '23%',
        height: 58,
        textAlign: 'center',
        shadowColor: "#000",
        outlineWidth: 0,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 10,
        color: 'rgba(0, 0, 0, 0.55)',
        fontSize: 20,
        marginBottom: 20,
    },
    inputYear: {
        width: '47%',
        height: 58,
        textAlign: 'center',
        shadowColor: "#000",
        outlineWidth: 0,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 10,
        color: 'rgba(0, 0, 0, 0.55)',
        fontSize: 20,
        marginBottom: 20,
    },
    inputSSN: {
        width: '100%',
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
        color: 'rgba(0, 0, 0, 0.55)',
        fontSize: 20,
        marginBottom: 20,
    },
})

export default stylesRegister