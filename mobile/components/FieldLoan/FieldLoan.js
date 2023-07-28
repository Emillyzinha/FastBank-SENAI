import { Text, View } from "react-native"
import styleFieldLoan from "./FieldLoanStyle"
import { TouchableOpacity } from "react-native"

const FieldLoan = ({ navigation, text, image, textTitle, onPress }) => {
    // onPress={() => navigation.navigate('ConfirmT', {image: image, text: textTitle})}
    return (
        <TouchableOpacity style={styleFieldLoan.input} onPress={onPress}>
            <Text style={styleFieldLoan.text}> {text} </Text>
        </TouchableOpacity>
    )
}

export default FieldLoan
