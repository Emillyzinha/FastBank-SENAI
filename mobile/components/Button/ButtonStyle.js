import { StyleSheet } from 'react-native'

const stylesButton = StyleSheet.create({
    text: {
        fontSize: 23,
        height: '100%',
        display: 'flex',
        color: '#A6771A',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        height: 50,
        width: '48%',
        backgroundColor: '#EDAA25',
        borderRadius: 10,
        shadowOffset: { height: 2, width: 0 },
        shadowColor: '#000',
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
    }
})

export default stylesButton