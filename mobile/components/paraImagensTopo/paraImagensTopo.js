import { Image, Text, View } from "react-native"
import estilosParaImagensTopo from "./paraImagensTopoStyle.js"

const ParaImagensTopo = ({ img, width, heigth }) => {
    return (
        <View style={estilosParaImagensTopo.lugarCinza}>
            <Image source={img} style={{ width: width, height: heigth}} />
        </View>
    )
}

export default ParaImagensTopo
