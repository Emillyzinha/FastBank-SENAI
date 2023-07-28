import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('screen').width

const stylesWelcome = StyleSheet.create({
    screen: {
        flex: 1,
        display: 'flex',
        paddingTop: 50,
        padding: 20,
        alignItems: "center",
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
    },
    image: {
        width: 350,
        height: 250,
    },
    text: {
        fontSize: 30,
        marginBottom: 30,
    },
    viewButton: {
        width: '100%',
        height: 47,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    buttonRegister: {
        height: 50,
        width: '48%',
        borderWidth: 2,
        borderColor: '#EDAA25',
        borderRadius: 10,
    },
    textButtonRegister: {
        fontSize: 23,
        height: '100%',
        display: 'flex',
        color: '#EDAA25',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
})

export default stylesWelcome
