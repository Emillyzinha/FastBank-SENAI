import { Text, View, TouchableOpacity } from "react-native"
import StyleButtonMovement from './ButtonMovementStyle.js'

const ButtonMovement = ({ children, onPress }) => {
    return (
        <TouchableOpacity style={StyleButtonMovement.box} onPress={onPress}>
            <Text style={StyleButtonMovement.textBox}>{children}</Text>
        </TouchableOpacity>

    )
}

export default ButtonMovement
