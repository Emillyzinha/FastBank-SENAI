import { View } from "react-native"
import { useState } from "react"

import stylesRegister from "./RegisterStyle"

import InputField from "../../components/InputField/InputField"
import TopStart from "../../components/TopStart/TopStart"
import Button from "../../components/Button/Button"

import axios from "axios"
import ReturnPage from "../../components/ReturnPage/ReturnPage"

function RegisterSec({ route, navigation }) {
    const { name, nickname, birth, ssn } = route.params
    const [numberCell, setNumberCell] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const cadastrar = () => {
        if (numberCell == '' || email == '' || password == '' || confirmPassword == '') {
            alert('Fill all the fields')
        } else if (ssn.length != 11) {
            alert('The ssn number must be in this format: 12345678911')
        } else if (numberCell.length != 12) {
            alert('The phone number must be in this format: 191234-56789')
        } else if (password != confirmPassword) {
            alert('The different password')
        } else {
            console.log("entrou")
            axios.post('https://emilly-teste.azurewebsites.net/auth/users/', {
                nomeCompleto: name,
                username: nickname,
                data_nascimento: birth,
                cpf: ssn,
                numero_telefone: numberCell,
                email: email,
                password: confirmPassword
            })
                .then((response) => {
                    console.log('cadastrou', response)
                    axios.post('https://emilly-teste.azurewebsites.net/auth/jwt/create', {
                        cpf: ssn,
                        password: password,
                    })
                        .then((resposta) => {
                            console.log('criou token', resposta)
                            console.log(resposta)
                            localStorage.setItem('token', JSON.stringify(resposta.data))
                            navigation.navigate('Home')
                        })
                        .catch((erro) => {
                            console.log('não criou token', erro)
                            if (erro?.response?.data?.message) {
                                alert(erro.response.data.message)
                            } else {
                                alert('Aconteceu um erro inesperado ao afetuar o seu login! Entre em contato com o suporte!')
                            }
                        })
                })
                .catch((erro) => {
                    if (erro.response.data.username == 'Enter a valid username. This value may contain only letters, numbers, and @/./+/-/_ characters') {
                        alert("Your nickname cannot have a space.")
                    } if (erro.response.data.email == 'Enter a valid email address.') {
                        alert('Write the email correctly')
                    } else if (erro?.response?.data) {
                        alert('Fill in all fields')
                    }
                    else {
                        alert('An unexpected error occurred while logging in! Please contact support!')
                    }
                })
        }
    }

    return (
        <ScrollView>
            <View style={stylesRegister.screen}>
                <ReturnPage onPress={() => navigation.navigate('Welcome')} />
                <TopStart>Register</TopStart>
                <View style={stylesRegister.space} />
                <InputField onChange={(e) => setNumberCell(e.target.value)}>Cell phone</InputField>
                <InputField onChange={(e) => setEmail(e.target.value)}>Email</InputField>
                <InputField onChange={(e) => setPassword(e.target.value)}>Password</InputField>
                <InputField onChange={(e) => setConfirmPassword(e.target.value)}>Confirm the password</InputField>
                <Button onPress={() => cadastrar()}> Register </Button>
            </View>
        </ScrollView>
    )
}

export default RegisterSec
