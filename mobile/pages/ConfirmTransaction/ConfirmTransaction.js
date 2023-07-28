import { Image, Text, TouchableOpacity, View } from "react-native"
import styleConfirmTransaction from "./ConfirmTransactionStyle"
import TopTransaction from "../../components/TopTransaction/TopTransaction"
import imagePadlock from '../../assets/padlock.png'
import InputField from "../../components/InputField/InputField"
import ButtonArrow from "../../components/buttonArrow/ButtonArrow"
import { useEffect, useState } from "react"

function ConfirmTransaction({ route, navigation }) {
    const { image, text, transaction } = route.params
    const [teste, setTeste] = useState()
    useEffect(() => {
        setTeste(console.log('ola'))
    })
    

    return (
        <View style={styleConfirmTransaction.screen}>
            <View>
                <TopTransaction image={image} text={text} />

                <View style={styleConfirmTransaction.top}>
                    <Text style={styleConfirmTransaction.title} >Security password</Text>
                    <Image source={imagePadlock} style={styleConfirmTransaction.image} />
                </View>

                <InputField />

                <View style={styleConfirmTransaction.placeButton}>
                    <ButtonArrow onPress={transaction} />
                </View>

            </View>

            <TouchableOpacity style={styleConfirmTransaction.buttonPassword}>
                <Text style={styleConfirmTransaction.textButtonPassword}>Enter with the password of cellphone</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ConfirmTransaction