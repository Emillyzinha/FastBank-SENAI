import { StyleSheet } from "react-native";

const estilosParaImagensTopo = StyleSheet.create({
    lugarCinza: {
        width: 45,
        height: 45,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    imagem: {
        width: 40,
        height: 25,
    },
})

export default estilosParaImagensTopo