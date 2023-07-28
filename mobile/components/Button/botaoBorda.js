import { TouchableOpacity } from "react-native-web"
import stylesButton from "./ButtonStyle"

const ButtonBorder = ({ borderW, colorBorder, color, radius }) => {
    return (
        <TouchableOpacity style={{ borderWidth: borderW, borderColor: colorBorder, backgroundColor: color, borderRadius: radius }}>
            <Text style={stylesButton.text}>Register</Text>
        </TouchableOpacity>
    )
}

export default ButtonBorder
