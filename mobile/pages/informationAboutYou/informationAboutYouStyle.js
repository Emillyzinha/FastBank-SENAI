import { StyleSheet } from "react-native";

const styleInformationAboutYou = StyleSheet.create({
    screen: {
        flex: 1,
        display: 'flex',
        alignItems: "center",
        paddingTop: 50,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    top: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginBottom: 20,
    },
    image: {
        width: 60,
        height: 60,
    },
    textTop: {
        fontWeight: "bold",
        fontSize: 25,
        marginLeft: 10,
    },
    place: {
        width: '100%',
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",

    },
    button:{
        width: 110,
        height: 35,
        backgroundColor: '#FCFBFB',

        shadowColor: "#000",
        outlineWidth: 0,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 10,
        color: 'rgba(0, 0, 0, 0.25)',
        marginBottom: 20,

        color: '#8B8B8B',
        display: 'flex',
        justifyContent: "center"
    },
    textButon:{
        textAlign: 'center',
        fontSize: 14,
        color: '#8B8B8B',
        fontWeight: 600,
    },
    placeButton:{
        width: '100%',
        alignItems: "flex-end",
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9'
    },
    buttonHelp:{
        marginTop: 25,
        width: '100%',
        height: 55,
        backgroundColor: '#E7E7E7',
        shadowColor: "#000",
        outlineWidth: 0,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 10,
        color: 'rgba(0, 0, 0, 0.25)',
        marginBottom: 20,
        display: 'flex',
        justifyContent: "center"
    },
    buttonDelete:{
        marginTop: 5,
        width: '100%',
        height: 55,
        backgroundColor: '#E7E7E7',
        shadowColor: "#000",
        outlineWidth: 0,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 10,
        color: 'rgba(0, 0, 0, 0.25)',
        marginBottom: 20,
        display: 'flex',
        justifyContent: "center"
    },
    textHelp:{
        fontSize: 22,
        color: '#8B8B8B',
        textAlign: "center",
        fontWeight: 600,
    },
    return: {
        width: 20,
        height: 20,
    },
    seta:{
        width: 20,
        height: 20,
    },
})

export default styleInformationAboutYou
