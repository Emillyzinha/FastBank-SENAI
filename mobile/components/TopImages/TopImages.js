import { Image, TouchableOpacity } from "react-native"
import stylesTopImages from "./TopImagesStyle.js"

const TopImages = ({ img, width, heigth, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={stylesTopImages.lugarCinza}>
            <Image source={img} style={{ width: width, height: heigth}} />
        </TouchableOpacity>
    )
}

export default TopImages
