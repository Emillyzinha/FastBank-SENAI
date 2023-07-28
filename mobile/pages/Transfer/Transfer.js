import { View, Text, Image, TouchableOpacity } from "react-native"
import styleTransfer from "./TransferStyle"
import TopPages from "../../components/TopTransaction/TopTransaction"
import ButtonArrow from "../../components/buttonArrow/ButtonArrow"
import InputField from "../../components/InputField/InputField"
import imageTransfer from '../../assets/imgTransfer.png'
import FieldWithTitle from "../../components/FieldWithTitle/FieldWithTitle"
import { useEffect, useState } from "react"
import imagePadlock from '../../assets/padlock.png'
import axios from "axios"
import ReturnPage from "../../components/ReturnPage/ReturnPage"

function Transfer({ navigation, route }) {
    const { value } = route.params
    const value_int = parseInt(value)
    const [name, setName] = useState('Ana Julia')
    const [SSN, setSSN] = useState(12345678911)
    const [header, setHeader] = useState(0)
    const [security, setSecurity] = useState(false)

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

        axios.get('https://emilly-teste.azurewebsites.net/auth/users/me/', // DESCOBRIR QUEM TA LOGADO
            testeToken)
            .then((res) => {
                console.log(res)

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
                            console.log('oi')
                            axios.get('https://emilly-teste.azurewebsites.net/auth/users/me/', testeToken)
                                .then((res) => {
                                    console.log('oi', res)
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


    const verification = () => {
        if (name == '' || SSN == '') {
            alert('Fill the fields')
        } else {
            axios.post('https://emilly-teste.azurewebsites.net/bank/transferencia/',
                {
                    valor: value_int,
                    destinatarioCPF: SSN,
                    nomeCompleto: name,
                    fk_conta: 1
                }
                , header)
                .then((res) => {
                    if (res.data == 'Customer does not exist.') {
                        alert(res.data)
                    } else {
                        console.log(res)
                    }
                })
                .catch((err) => {
                    alert(err.data)
                })
        }
    }

    return (
        <>
            {!security ?
                <View style={styleTransfer.screen}>
                    <ReturnPage onPress={() => navigation.navigate('Value', { img: imageTransfer, title: 'Value', textImage: 'Transfer', navigateTo: 'Transfer' })} />
                    <TopPages image={imageTransfer} text='Transfer' />
                    <View style={styleTransfer.space} />
                    <FieldWithTitle onChange={(e) => setName(e.target.value)}>Full name</FieldWithTitle>
                    <FieldWithTitle onChange={(e) => setSSN(e.target.value)}>SSN</FieldWithTitle>
                    <Text style={styleTransfer.h3}>Information about the recipient</Text>
                    <View style={styleTransfer.spaceButton}>
                        <ButtonArrow onPress={() => setSecurity(true)} />
                    </View>
                </View>

                :
                <View style={styleTransfer.screen}>
                    <View>
                        <TopPages image={imageTransfer} text='Loan' />

                        <View style={styleTransfer.top}>
                            <Text style={styleTransfer.title} >Security password</Text>
                            <Image source={imagePadlock} style={styleTransfer.image} />
                        </View>

                        <InputField onChange={((e) => setPasswordUser(e))} />

                        <View style={styleTransfer.placeButton}>
                            <ButtonArrow onPress={() => verification()} />
                        </View>

                    </View>

                    <TouchableOpacity style={styleTransfer.buttonPassword}>
                        <Text style={styleTransfer.textButtonPassword}>Enter with the password of cellphone</Text>
                    </TouchableOpacity>
                </View>
            }
        </>
    )
}

export default Transfer
