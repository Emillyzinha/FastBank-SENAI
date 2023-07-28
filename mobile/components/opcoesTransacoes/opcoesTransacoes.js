import { Image, Text, View } from "react-native"
import estilosopcoesTransacoes from "./opcoesTransacoesStyle"

const OpcoesTransacoes = ({ img, fontSize, children, width, height, onClick }) => {
    return (
        <View style={estilosopcoesTransacoes.box} onClick={onClick}>
            <Image source={img} style={{ width: width, height: height }}/>
            <Text style={{ fontSize: fontSize }}>{children}</Text>
        </View>
    )
}

export default OpcoesTransacoes
