import { StyleSheet } from "react-native";

const styleExtractField = StyleSheet.create({
    box: {
        width: '100%',
        display: 'flex',
        justifyContent: "space-between",
        flexDirection: 'row',
        borderBottomColor: '#EDAA25',
        borderBottomWidth: 2,
        marginTop: 20,
    },
    imageText: {
        alignItems: "center",
        width: '50%',
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 10,
    },
    image: {
        width: 53,
        height: 53,
    },
    name: {
        color: '#EDAA25',
        fontSize: 25,
        // fontWeight: 500,
    },
    infos: {
        fontSize: 18,
        fontWeight: 500,
    },
    date: {
        fontSize: 17,
        fontWeight: 600,
    },
})

export default styleExtractField
