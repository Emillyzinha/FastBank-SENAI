import { Image, Text, View } from "react-native"
import stylesOptionsTransactions from "./OptionsTransactionsStyle"

const OptionsTransactions = ({ img, fontSize, children, width, height, onClick }) => {
    return (
        <View style={stylesOptionsTransactions.box} onClick={onClick}>
            <Image source={img} style={{ width: width, height: height }}/>
            <Text style={{ fontSize: fontSize }}>{children}</Text>
        </View>
    )
}

export default OptionsTransactions
