import stylesCard from "./CardStyle.js";
import TopPages from '../../components/TopTransaction/TopTransaction';

import { Image, ScrollView } from "react-native";
import { View } from "react-native";

import cardTitle from '../../assets/cardTitle.png'
import card from '../../assets/card.png'
import { useEffect, useState } from "react";
import axios from "axios";
import UnchangingField from "../../components/UnchangingField/UnchangingField.js";
import ReturnPage from "../../components/ReturnPage/ReturnPage.js";

function Card({ navigation }) {
    const [renderiza, setRenderiza] = useState(false)
    const [header, setHeader] = useState({})
    const [testee, setTeste] = useState({})
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [CVV, setCVV] = useState('')
    const [validity, setValidity] = useState('')
    const [flag, setFlag] = useState('')

    let dados = localStorage.getItem('token')

    useEffect(() => {
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

        axios.get('https://emilly-teste.azurewebsites.net/auth/users/me/', // DESCOBRIR QUEM TA LOGADO
            testeToken)
            .then((res) => {
                axios.get('https://emilly-teste.azurewebsites.net/bank/cartao/', testeToken)
                    .then((res) => {
                        setCVV(res.data[0].fields.CVV)
                        setFlag(res.data[0].fields.bandeira)
                        setValidity(res.data[0].fields.data_validade)
                        setName(res.data[0].fields.nome_titular)
                        setNumber(res.data[0].fields.numero)
                        console.log(res.data[0].fields.CVV)
                    })
                    .catch((err) => {
                        console.log('deu ruim2', err);
                        console.log(header)
                    })


                axios.get('https://emilly-teste.azurewebsites.net/bank/cartao/', header)
                    .then((res) => {
                        console.log(res)
                        console.log(res.data)
                        console.log('oi', res.data[0].fields)
                        setTeste(res.data)
                    })
                    .catch((err) => {
                        console.log('entrou');
                        console.log(err)
                    })

            })
            .catch((erro) => {
                if (erro.response.status === 401) {
                    setRenderiza(true)
                    axios.post('https://emilly-teste.azurewebsites.net/auth/jwt/refresh/', { refresh: token.refresh }) // DAR O REFRESH
                        .then((res) => {
                            tokenAccess = res.data.access
                            const testeToken = {
                                headers: {
                                    Authorization: `JWT ${tokenAccess}`
                                },
                            }

                            setHeader(testeToken)
                            console.log('oi')
                            axios.get('https://emilly-teste.azurewebsites.net/bank/cartao/', testeToken)
                                .then((res) => {
                                    setCVV(res.data[0].fields.CVV)
                                    setFlag(res.data[0].fields.bandeira)
                                    setValidity(res.data[0].fields.data_validade)
                                    setName(res.data[0].fields.nome_titular)
                                    setNumber(res.data[0].fields.numero)
                                    console.log(res.data[0].fields.CVV)
                                })
                                .catch((err) => {
                                    console.log('deu ruim2', err);
                                    console.log(header)
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

    const voltar = () => {
        navigation.navigate('Home')
    }

    return (
        <ScrollView>
            <View style={stylesCard.screen}>
                <ReturnPage onPress={voltar} />
                <TopPages image={cardTitle} text='Your cards' />
                <View style={stylesCard.fields}>
                    <UnchangingField title='Name' text={name} width={'100%'} sizeTitle={30} />
                    <UnchangingField title='Number Card' text={number} width={'100%'} sizeTitle={30} />
                    <UnchangingField title='Flag' text={flag} width={'100%'} sizeTitle={30} />
                    <View style={stylesCard.numbers}>
                        <UnchangingField title='CVV' text={CVV} width={'48%'} sizeTitle={30} />
                        <UnchangingField title='Validity' text={validity} width={'48%'} sizeTitle={30} />
                    </View>
                </View>
                <View style={stylesCard.cardView}>
                    <Image source={card} style={stylesCard.image} />
                </View>
            </View>
        </ScrollView>
    )
}

export default Card

