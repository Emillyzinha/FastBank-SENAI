import { Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { Link } from "react-router-dom";

export default function Caixinha({ navigation, navegarPara, width, widthIcon, heightIcon, height, children, imagem }) {
    return (
        <View onClick={() => navigation.navigate(navegarPara)} style={{
            width: width,
            backgroundColor: '#D9D9D9',
            height: height,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}>
            <Image source={imagem} style={{
                width: widthIcon,
                height: heightIcon,
            }} />
            <Text style={{
                fontSize: 22,
                fontWeight: 500,
                paddingTop: 10,
            }}>{children}</Text>
        </View>
    )
}


const estilos = StyleSheet.create({
    caixa: {
        backgroundColor: '#D9D9D9',
        // width: {teste},
        height: 150,
        borderRadius: 10,
    },
})