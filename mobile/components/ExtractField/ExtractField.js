import { Image, Text, View } from "react-native"
import TopPages from "../TopTransaction/TopTransaction"
import styleExtractField from "./ExtractFieldStyle"

const ExtractField = ({image, name, value, date}) => {
    return (
        <View style={styleExtractField.box}>
            <View style={styleExtractField.imageText}>
                <Image source={image} style={styleExtractField.image} />
                <View>
                    <Text style={styleExtractField.name}>{name}</Text>
                    <Text style={styleExtractField.infos}>{value}</Text>
                </View>
            </View>
            <Text style={styleExtractField.date}>{date}</Text>
        </View>
    )
}

export default ExtractField
