import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useEffect, useState } from "react"

import styleInformationAboutYou from "./informationAboutYouStyle"
import user from '../../assets/fotoUser.png'
import UnchangingField from "../../components/UnchangingField/UnchangingField"
import ReturnPage from "../../components/ReturnPage/ReturnPage"

import axios from "axios"


function InformationAboutYou({ navigation }) {

    const [header, setHeader] = useState({})
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')
    const [birth, setBirth] = useState('')
    const [SSN, setSSN] = useState('')
    const [cellPhone, setCellPhone] = useState('')
    const [email, setEmail] = useState('')
    const [id, setId] = useState(0)

    let dados = localStorage.getItem('token')

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

        axios.get('https://emilly-teste.azurewebsites.net/auth/users/me/',
            testeToken)
            .then((res) => {
                setName(res.data.nomeCompleto)
                setNickname(res.data.username)
                setBirth(res.data.data_nascimento)
                setSSN(res.data.cpf)
                setCellPhone(res.data.celular)
                setEmail(res.data.email)
                setId(res.data.id)
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
                                    setName(res.data.nomeCompleto)
                                    setNickname(res.data.username)
                                    setBirth(res.data.data_nascimento)
                                    setSSN(res.data.cpf)
                                    setCellPhone(res.data.numero_telefone)
                                    setEmail(res.data.email)
                                    setId(res.data.id)
                                })
                                .catch((erro) => {
                                    if (erro?.response?.data?.message) {
                                        alert(erro.response.data.message)
                                    } else {
                                        alert('An unexpected error occurred while logging in! Please contact support!')
                                    }
                                })
                        }
                        ).catch((erro) => {
                            if (erro?.response?.data?.message) {
                                alert(erro.response.data.message)
                            } else {
                                alert('An unexpected error occurred while logging in! Please contact support!')
                            }
                        })
                } else {
                    if (erro?.response?.data?.message) {
                        alert(erro.response.data.message)
                    } else {
                        alert('An unexpected error occurred while logging in! Please contact support!')
                    }
                }
            })

    }, [])

    const deleteUser = () => {
        axios.delete(`https://emilly-teste.azurewebsites.net/bank/cliente/${id}/`, header)
            .then((res) => {
                navigate('Welcome')
                alert('Your account has been successfully deleted!')
                localStorage.removeItem('token')
            })
            .catch((erro) => {
                alert('Unable to delete your account, contact support')
            })
    }

    const exit = () => {
        localStorage.removeItem('token')
        navigation.navigate('Welcome')
    }

    return (
        <ScrollView>
            <View style={styleInformationAboutYou.screen}>
                <ReturnPage onPress={() => navigation.navigate('Home')} />
                <View style={styleInformationAboutYou.top}>
                    <Image source={user} style={styleInformationAboutYou.image} />
                    <Text style={styleInformationAboutYou.textTop}>Information About You</Text>
                </View>

                <UnchangingField title={"Name"} sizeTitle={26} text={name} width={"100%"} />
                <UnchangingField title={"Nickname"} sizeTitle={26} text={nickname} width={"100%"} />
                <View style={styleInformationAboutYou.place}>
                    <UnchangingField title={"Date of birth"} sizeTitle={26} text={birth} width={"49%"} />
                    <UnchangingField title={"SSN"} sizeTitle={25} text={SSN} width={"49%"} />
                </View>
                <UnchangingField title={"Cell phone"} sizeTitle={26} text={cellPhone} width={"100%"} />
                <UnchangingField title={"Email"} sizeTitle={26} text={email} width={"100%"} />
                <UnchangingField title={"Password"} sizeTitle={26} text={"*"} width={"100%"} />

                <View style={styleInformationAboutYou.placeButton}>
                    <TouchableOpacity style={styleInformationAboutYou.button} onPress={() => navigation.navigate('Editing', { nameR: name, nicknameR: nickname, cellPhoneR: cellPhone, emailR: email })}>
                        <Text style={styleInformationAboutYou.textButon}>Change</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styleInformationAboutYou.buttonHelp}>
                    <Text style={styleInformationAboutYou.textHelp}>Help for you</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => exit()} style={styleInformationAboutYou.buttonDelete}>
                    <Text style={styleInformationAboutYou.textHelp}>Exit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteUser()} style={styleInformationAboutYou.buttonDelete}>
                    <Text style={styleInformationAboutYou.textHelp}>Delete account</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

export default InformationAboutYou
