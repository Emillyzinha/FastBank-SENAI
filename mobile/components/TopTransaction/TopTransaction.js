import { Image, Text, View } from "react-native"
import stylesTopTransaction from "./TopTransactionStyle"

const TopPages = ({ image, text }) => {
    return (
        <View style={stylesTopTransaction.top}>
            <Image source={image} style={stylesTopTransaction.image} />
            <Text style={stylesTopTransaction.textTop}>{text}</Text>
        </View>
    )
}

export default TopPages
