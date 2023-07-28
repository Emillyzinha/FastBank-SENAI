import { Text, View } from "react-native"
import { StyleSheet } from 'react-native'

const CampoImutavel = ({ title, text, width, sizeTitle }) => {
    return (
        <View style={{
            width: width,
        }}>
            <Text style={{
                width: '100%',
                color: '#EDAA25',
                fontSize: sizeTitle,
                fontWeight: 600,
                marginBottom: 10,
            }}>{title}</Text>
            <View style={estilos.input}>
                <Text style={estilos.text}>
                    {text}
                </Text>
            </View>
        </View>
    )
}


const estilos = StyleSheet.create({
    title: {
        width: '100%',
        color: '#EDAA25',
        fontSize: 30,
        fontWeight: 600,
        marginBottom: 10,
    },
    input: {
        width: '100%',
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
        color: 'rgba(0, 0, 0, 0.25)',
        marginBottom: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
    }
})

export default CampoImutavel