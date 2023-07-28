import { Text, TouchableOpacity } from "react-native"
import stylesButton from "./ButtonStyle.js"

const Button = ({ onPress, children }) => {
    return (
        <TouchableOpacity style={ stylesButton.button } onPress={onPress} >
            <Text style={stylesButton.text}>{children}</Text>
        </TouchableOpacity>
    )
}

export default Button