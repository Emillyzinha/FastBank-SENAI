import { Image, Text, View } from "react-native";
import logo from '../../assets/logo-full.png'
import stylesTopStart from "./TopStartStyle";

function TopStart({ children }) {
    return (
        <View>
            <Image source={logo} style={stylesTopStart.image} />
            <Text style={stylesTopStart.title}>{children}</Text>
        </View>
    )
}

export default TopStart
