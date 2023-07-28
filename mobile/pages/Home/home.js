import { ScrollView, Text, View } from "react-native"
import { Image } from "react-native"
import { useEffect, useState } from "react"

import stylesHome from "./homeStyle"

import TopImages from '../../components/TopImages/TopImages'
import OptionsTransactions from '../../components/OptionsTransactions/OptionsTransactions'
import ButtonMovement from '../../components/ButtonMovement/ButtonMovement'
import Board from '../../components/Board/Board'

import fotoUser from '../../assets/fotoUser.png'
import olhoAberto from '../../assets/olhoAberto.png'
import olhoFechado from '../../assets/olhoFechado.png'
import configuracao from '../../assets/configuracao.png'
import imagePix from '../../assets/imgPix.png'
import imageTransfer from '../../assets/imgTransfer.png'
import imageBarras from '../../assets/codigoBarras.png'
import imageRecharge from '../../assets/imgRecharge.png'
import grafico from '../../assets/grafico.png'
import imageLoan from '../../assets/loan.png'

import axios from "axios"

function Home({ navigation }) {
    const [header, setHeader] = useState({})
    const [name, setName] = useState('')
    const [balance, setBalance] = useState('')
    const [haveCard, sethaveCard] = useState(false)
    const [visibility, setVisibility] = useState(false)
    const [image, setImage] = useState(olhoFechado)
    const [showBalance, setShowBalance] = useState('---')

    let dados = localStorage.getItem('token')

    const error = (erro) => {
        if (erro?.response?.data?.message) {
            alert(erro.response.data.message)
        } else {
            navigation.navigate('Welcome')
        }
    }

    useEffect(() => {
        let token = ''
        if (dados != undefined) {
            token = JSON.parse(dados)
        }
        else {
            navigation.navigate('Welcome')
        }
        let tokenAccess = token.access
        const testeToken = {
            headers: {
                Authorization: `JWT ${tokenAccess}`
            },
        }

        setHeader(testeToken)

        axios.get('https://emilly-teste.azurewebsites.net/bank/conta/', testeToken)
            .then((res) => {
                setBalance(res.data[0].fields.saldo)
            })
            .catch((erro) => {

            })

        axios.get('https://emilly-teste.azurewebsites.net/auth/users/me/', // DESCOBRIR QUEM TA LOGADO
            testeToken)
            .then((res) => {
                setName(res.data.username)
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
                            axios.get('https://emilly-teste.azurewebsites.net/auth/users/me/', testeToken)
                                .then((res) => {
                                    setName(res.data.username)
                                })
                                .catch((erro) => {
                                    error(erro)
                                })
                            axios.get('https://emilly-teste.azurewebsites.net/bank/conta/', testeToken)
                                .then((res) => {
                                    setBalance(res.data[0].fields.saldo)
                                })
                                .catch((erro) => {
                                    error(erro)
                                })
                            axios.get('https://emilly-teste.azurewebsites.net/bank/cartao/', testeToken)
                                .then((res) => {
                                    res.data.length == 0 ? sethaveCard(false) : sethaveCard(true)
                                })
                                .catch((err) => {
                                    error(erro)
                                })
                            axios.get('https://emilly-teste.azurewebsites.net/bank/movimentacao/', testeToken)
                                .then((res) => {

                                })
                                .catch((erro) => {
                                    error(erro)
                                })
                        }
                        ).catch((erro) => {
                            error(erro)
                        })
                } else {
                    error(erro)
                }
            })

    }, [])


    return (
        <ScrollView>
            <View style={stylesHome.pagina}>

                <View style={stylesHome.topo}>
                    <View style={stylesHome.conteudoTopo}>
                        <Image source={fotoUser} style={stylesHome.user} />
                        <Text style={stylesHome.hello}>Hello, {name}</Text>
                    </View>
                    <View style={stylesHome.imagensTopo}>
                        <TopImages onPress={() => visibility == false ? setImage(olhoFechado, setVisibility(true), setShowBalance('---')) : setImage(olhoAberto, setVisibility(false), setShowBalance(balance))} img={image} width={37} heigth={30} />
                        <TopImages onPress={() => navigation.navigate('Information')} img={configuracao} width={40} heigth={40} />
                    </View>
                </View>

                <View style={stylesHome.balance}>
                    <Text style={stylesHome.textBalance}>Balance</Text>
                    <Text style={stylesHome.valeuBalance}>$ {showBalance}</Text>
                </View>

                <View style={stylesHome.OptionsTransactions}>
                    <OptionsTransactions img={imagePix} fontSize={25} width={55} height={55} onClick={() => navigation.navigate('Value', { img: imageTransfer, title: 'Value', textImage: 'Transfer ', navigateTo: 'Transfer' })}>Pix</OptionsTransactions>
                    <OptionsTransactions img={imageBarras} fontSize={25} width={60} height={60}>Ticket</OptionsTransactions>
                    <OptionsTransactions img={imageRecharge} fontSize={20} width={60} height={60}>Recharge</OptionsTransactions>
                    <OptionsTransactions img={imageTransfer} fontSize={20} width={60} height={60} onClick={() => navigation.navigate('Value', { img: imageTransfer, title: 'Value', textImage: 'Transfer ', navigateTo: 'Transfer' })}>Transfer</OptionsTransactions>
                </View>

                <View style={stylesHome.movement}>
                    <Text style={stylesHome.textMovement}>Account movement</Text>
                    {haveCard ?
                        <ButtonMovement onPress={() => { navigation.navigate('Card') }}>Your Cards</ButtonMovement>
                        :
                        <ButtonMovement onPress={() => { navigation.navigate('Address') }}>Ask for card</ButtonMovement>
                    }
                    <ButtonMovement onPress={() => { navigation.navigate('Value', { img: imageLoan, title: 'Value', textImage: 'Loan', navigateTo: 'Loan' }) }}>Loan</ButtonMovement>
                    <ButtonMovement onPress={() => navigation.navigate('Extract')}>Extract</ButtonMovement>
                </View>

                <View style={stylesHome.movement}>
                    <Text style={stylesHome.textMovement}>Financial organization</Text>
                    <Board image={grafico} width={350} height={200} />
                </View>
            </View>
        </ScrollView>

    )
}

export default Home
