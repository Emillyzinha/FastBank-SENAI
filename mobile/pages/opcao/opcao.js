import { Text, View } from "react-native";
import TopoInicio from "../../components/topoInicio/topoInicio";
import estilosOpcao from './opcaoStyle.js'
import Caixinha from "../../components/caixinha/caixinha";
import home_icon from "../../assets/home.png"
import finances_icon from "../../assets/finances.png"
import user_icon from "../../assets/user.png"
import { Link } from "react-router-dom";

export default function Opcao({navigation}) {
    return (
        <View style={estilosOpcao.pagina}>
            <TopoInicio />
            <Text style={estilosOpcao.titulo}>Choose the desire option</Text>
            <View style={estilosOpcao.caixinha}>
                <Caixinha children='Home' imagem={home_icon} width={150} height={150} widthIcon={60} heightIcon={60} navigation={navigation} navegarPara={'Home'} />
                <Caixinha children='User' imagem={user_icon} width={150} height={150} widthIcon={60} heightIcon={60} navigation={navigation} navegarPara={'Home'} />
            </View>
            <Caixinha children='Finances' imagem={finances_icon} width={'80%'} height={277} widthIcon={70} heightIcon={70} navigation={navigation} navegarPara={'Home'} />
        </View>
    )
}