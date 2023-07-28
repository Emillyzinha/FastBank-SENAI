import { Text, TextInput, View } from "react-native"
import styleFieldWithTitle from "./FieldWithTitleStyle"

const FieldWithTitle = ({children, onChange}) => {
    return (
        <View>
            <Text style={styleFieldWithTitle.textTitle}>
                {children}
            </Text>
            <TextInput
                onChange={onChange}
                style={styleFieldWithTitle.input}
            />
        </View>
    )
}

export default FieldWithTitle
