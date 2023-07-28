import { Image, Text, View } from "react-native"
import styleValue from "./ValueStyle"
import TopPages from "../TopTransaction/TopTransaction"

import InputField from "../InputField/InputField"
import ButtonArrow from "../buttonArrow/ButtonArrow"
import { useEffect, useState } from "react"
import axios from "axios"
import ReturnPage from "../ReturnPage/ReturnPage"

const Value = ({ navigation, route }) => {
    const [header, setHeader] = useState({})

    useEffect(() => {
        let dados = localStorage.getItem('token')
        let token = ''
        if (dados != undefined) {
            token = JSON.parse(dados)
        }
        let tokenAccess = token.access
        const testeToken = {
            headers: {
                Authorization: `JWT ${tokenAccess}`
            },
        }

        setHeader(testeToken)

        axios.get('http://127.0.0.1:8000/bank/conta/', testeToken)
            .then((res) => {
                console.log(res)
                setBalance(res.data[0].fields.saldo)
            })
            .catch((erro) => {
                if (erro.response.status === 401) {
                    axios.post('http://127.0.0.1:8000/auth/jwt/refresh/', { refresh: token.refresh }) // DAR O REFRESH
                        .then((res) => {
                            tokenAccess = res.data.access
                            const testeToken = {
                                headers: {
                                    Authorization: `JWT ${tokenAccess}`
                                },
                            }

                            setHeader(testeToken)
                            axios.get('http://127.0.0.1:8000/bank/conta/', testeToken)
                                .then((res) => {
                                    console.log(res)
                                    setBalance(res.data[0].fields.saldo)
                                })
                                .catch((err) => {
                                    console.log(err)
                                })
                        }
                        ).catch((erro) => {
                            console.log('entrou4');
                            console.log('errooioioioio', erro)
                        })
                } else {
                    console, log('oi', erro)
                }
            })
    }, [])

    const { img, textImage, title, navigateTo } = route.params
    const [value, setValue] = useState(0)
    const [balance, setBalance] = useState(0)

    const verification = () => {
        const value_int = parseInt(value)
        console.log('b', value_int)
        if (value_int == '') {
            alert('Enter the amount you want to send')
        }
        else {
            if (value_int > balance && title=='Transfer'){
                alert('Enter an available amount')
            }else{
                navigation.navigate(navigateTo, { value: value })
            }
        }
    }

    return (
        <View style={styleValue.screen}>
            <ReturnPage onPress={() => navigation.navigate('Home')} />

            <TopPages image={img} text={textImage} />
            <Text style={styleValue.title}>{title}</Text>
            <InputField onChange={(e) => setValue(e.target.value)} />
            <View style={styleValue.spaceButton}>
                <ButtonArrow onPress={() => verification()} />
            </View>
        </View>
    )
}

export default Value
