import { Text, View } from "react-native";
import TopStart from "../../components/TopStart/TopStart";
import stylesOptions from './OptionsStyle.js'
import Box from "../../components/Box/Box";
import home_icon from "../../assets/home.png"
import finances_icon from "../../assets/finances.png"
import user_icon from "../../assets/user.png"
import { Link } from "react-router-dom";

export default function Opcao({navigation}) {
    return (
        <View style={stylesOptions.pagina}>
            <TopStart />
            <Text style={stylesOptions.titulo}>Choose the desire option</Text>
            <View style={stylesOptions.caixinha}>
                <Box children='Home' imagem={home_icon} width={150} height={150} widthIcon={60} heightIcon={60} navigation={navigation} navegarPara={'Home'} />
                <Box children='User' imagem={user_icon} width={150} height={150} widthIcon={60} heightIcon={60} navigation={navigation} navegarPara={'Home'} />
            </View>
            <Box children='Finances' imagem={finances_icon} width={'80%'} height={277} widthIcon={70} heightIcon={70} navigation={navigation} navegarPara={'Home'} />
        </View>
    )
}