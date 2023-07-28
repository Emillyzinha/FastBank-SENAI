import { ImageBackground, Text, TouchableOpacity } from "react-native"
import imageArrow from '../../assets/arrow.png'
import stylesButtonArrow from "./ButtonArrowStyle"

function ButtonArrow ({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <ImageBackground source={imageArrow} style={stylesButtonArrow.imageButton}/>
        </TouchableOpacity>
    )
}

export default ButtonArrow