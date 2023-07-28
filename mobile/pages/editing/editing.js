import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useEffect, useState } from "react"

import styleEditing from "./EditingStyle"
import user from '../../assets/fotoUser.png'
import FieldWithTitle from "../../components/FieldWithTitle/FieldWithTitle"

import axios from "axios"
import ReturnPage from "../../components/ReturnPage/ReturnPage"

function Editing({ navigation, route }) {

    const { nameR, nicknameR, cellPhoneR, emailR } = route.params

    const [name, setName] = useState()
    const [nickname, setNickname] = useState()
    const [cellPhone, setCellPhone] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [header, setHeader] = useState({})

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

    const teste = (varTeste, varTesteS, varTeste2) => {
        if (varTeste == '') {
            return varTesteS(varTeste2)
        }
    }

    const editClient = () => {

        teste(name, setName, nameR)
        teste(nickname, setNickname, nicknameR)
        teste(cellPhone, setCellPhone, cellPhoneR)
        teste(email, setEmail, emailR)

        if (password == undefined || confirmPassword == undefined) {
            alert('Set a password')
        } else if (password != confirmPassword) {
            alert('The passwords are different')
        } else {
            axios.patch(`https://emilly-teste.azurewebsites.net/auth/users/me/`,
                {
                    username: nickname,
                    nomeCompleto: name,
                    numero_telefone: cellPhone,
                    email: email,
                    password: password,
                }, header
            ).then((res) => {
                alert('Fields changed successfully!')
                navigation.navigate('Information')
            }).catch((error) => {
                if (password == '') {
                    alert('Set a password')
                }
                console.log('deu errado', error)
            })
        }
    }

    console.log(password)

    return (
        <ScrollView>
            <View style={styleEditing.screen}>
                <ReturnPage onPress={() => navigation.navigate('Information')} />

                <View style={styleEditing.top}>
                    <Image source={user} style={styleEditing.image} />
                    <Text style={styleEditing.textTop}>Editing</Text>
                </View>

                <FieldWithTitle onChange={(e) => setName(e.target.value)} >Name</FieldWithTitle>
                <FieldWithTitle onChange={(e) => setNickname(e.target.value)}>Nickname</FieldWithTitle>
                <FieldWithTitle onChange={(e) => setCellPhone(e.target.value)}>Cell phone</FieldWithTitle>
                <FieldWithTitle onChange={(e) => setEmail(e.target.value)}>E-mail</FieldWithTitle>
                <FieldWithTitle onChange={(e) => setPassword(e.target.value)}>Password</FieldWithTitle>
                <FieldWithTitle onChange={(e) => setConfirmPassword(e.target.value)}>Confirm the password</FieldWithTitle>

                <TouchableOpacity style={styleEditing.button} onPress={() => editClient()}>
                    <Text style={styleEditing.textButton}>Save</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Editing