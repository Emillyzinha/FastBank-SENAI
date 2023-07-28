import { useState } from "react"
import { TextInput, View } from "react-native"
import { StyleSheet } from 'react-native'

const CampoInput = ({ onChange, children, maxLength, value }) => {
    return (
        <TextInput
            style={estilos.input}
            placeholder={children}
            onChange={onChange}
            maxLength={maxLength}
            value={value}
        />
    )
}


const estilos = StyleSheet.create({
    input: {
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
    }
})

export default CampoInput