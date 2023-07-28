import stylesBoard from "./BoardStyle"
import { Image, View } from "react-native"

const Board = ({image, width, height }) => {
    return (
        <View style={stylesBoard.box}>
            <Image source={image} style={{ width: width, height: height }} />
        </View>
    )
}

export default Board
