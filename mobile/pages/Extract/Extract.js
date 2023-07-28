import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native"
import TopPages from "../../components/TopTransaction/TopTransaction"
import imageExtract from '../../assets/extract.png'
import { useEffect, useState } from "react"
import axios from "axios"
import styleExtract from "./ExtractStyle"
import ExtractField from "../../components/ExtractField/ExtractField"
import moneyOut from '../../assets/moneyComingOut.png'
import moneyIn from '../../assets/moneyComingIn.png'
import ReturnPage from "../../components/ReturnPage/ReturnPage"

function Extract({ navigation }) {
    const [header, setHeader] = useState(0)
    const [pegarMovimentacao, setPegarMovimentacao] = useState([])
    const [idCliente, setIdCliente] = useState()

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

        axios.get('https://emilly-teste.azurewebsites.net/auth/users/me',
            testeToken)
            .then((res) => {
                setPegarMovimentacao(res.data)

            })
            .catch((err) => {

            })

        axios.get('https://emilly-teste.azurewebsites.net/bank/movimentacao/',
            testeToken)
            .then((res) => {
                setPegarMovimentacao(res.data)

            })
            .catch((erro) => {
                if (erro.response.status === 401) {
                    axios.post('https://emilly-teste.azurewebsites.net/auth/jwt/refresh/', { refresh: token.refresh }) // DAR O REFRESH
                        .then((res) => {
                            tokenAccess = res.data.access
                            const testeToken = {
                                headers: {
                                    Authorization: `JWT ${tokenAccess}`
                                },
                            }

                            setHeader(testeToken)

                            axios.get('https://emilly-teste.azurewebsites.net/auth/users/me/',
                                testeToken)
                                .then((res) => {
                                    setIdCliente(res.data.id)
                                })
                                .catch((err) => {

                                })

                            axios.get('https://emilly-teste.azurewebsites.net/bank/movimentacao/', testeToken)
                                .then((res) => {
                                    setPegarMovimentacao(res.data)
                                })
                                .catch((err) => {
                                    alert('An unexpected error occurred, contact support')
                                })
                        }
                        ).catch((erro) => {
                            alert('An unexpected error occurred, contact support')
                        })
                } else {
                    alert('An unexpected error occurred, contact support')
                }
            })
    }, [])

    const navigateTo = () => {
        navigation.navigate('Home')
    }

    return (
        <ScrollView style={styleExtract.scroll}>
            <View style={styleExtract.screen}>
                <ReturnPage onPress={() => navigateTo()} />
                <TopPages image={imageExtract} text='Extract' />
                {pegarMovimentacao == '' ?
                    <Text style={styleExtract.h3}>No extract movement</Text>
                    :
                    pegarMovimentacao.map((movimentacao, index) => {

                        var data = new Date(movimentacao.fields.data);
                        var dia = String(data.getDate()).padStart(2, '0')
                        var mesFormatado = { month: 'short' }
                        var mes = data.toLocaleString('default', mesFormatado).toUpperCase()
                        return <>
                            <ExtractField key={index} image={movimentacao.fields.fk_conta == idCliente ? moneyOut : moneyIn} name={movimentacao.fields.nomeCompleto} value={'$ ' + movimentacao.fields.valor + ' - ' + movimentacao.fields.transacao} date={dia + ' ' + mes.replace('.', '')} />
                        </>
                    })

                }
            </View>
        </ScrollView>
    )
}

export default Extract
