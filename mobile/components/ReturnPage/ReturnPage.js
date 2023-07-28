import { ImageBackground, TouchableOpacity } from "react-native"
import styleReturnPage from "./ReturnPageStyle"
import x from '../../assets/x.png'

const ReturnPage = ({navigation, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styleReturnPage.return}>
            <ImageBackground source={x} style={styleReturnPage.seta} />
        </TouchableOpacity>
    )
}

export default ReturnPage
