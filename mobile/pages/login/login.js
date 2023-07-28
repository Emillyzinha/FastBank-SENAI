import { ScrollView, View } from "react-native";
import { useState } from "react";

import styleLogin from "./LoginStyle";

import TopStart from "../../components/TopStart/TopStart";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";

import axios from "axios";
import ReturnPage from "../../components/ReturnPage/ReturnPage";

function Login({ navigation }) {
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')
    const [numeroTentativas, setNumeroTentativas] = useState(3)
    const [logar, setLogar] = useState(true)
    const dateNow = new Date();
    const hours = dateNow.getHours()

    const enter = async () => {
        { numeroTentativas == 0 ? setLogar(false) : setLogar(true) }
        if (numeroTentativas == 0 || !logar) {
            var timeBack = (hours * 4) % 24
            if (timeBack != hours && numeroTentativas == 0) {
                alert('Your access was blocked for 4 hours by login error 3 times')
            } else if (timeBack == hours && numeroTentativas == 0) {
                alert('Your access was blocked for 4 hours by login error 3 times')
            }
            else if (timeBack != hours) {
                alert('Your access was blocked for 4 hours by login error 3 times')
            } else {
                setNumeroTentativas(3)
            }
        }
        else if (numeroTentativas == 3 || numeroTentativas == 2 || numeroTentativas == 1 && logar) {
            axios.post('https://emilly-teste.azurewebsites.net/auth/jwt/create', {
                cpf: cpf,
                password: password,
            }).then((resposta) => {
                localStorage.setItem('token', JSON.stringify(resposta.data))
                navigation.navigate('Home')

            }).catch((erro) => {
                console.log(erro)
                if (cpf == '' || password == '') {
                    alert('Fill the fields')
                }
                else if (erro?.response?.data?.message) {
                    alert(erro.response.data.message)
                } else if (erro?.response?.data?.detail == 'No active account found with the given credentials') {
                    alert('Check your password and SSN')
                    var tentativas = numeroTentativas
                    setNumeroTentativas(tentativas -= 1)
                } else {
                    alert('An unexpected error occurred while logging in! Please contact support!')
                }
            })
        }
    }

    return (
        <ScrollView>
            <View style={styleLogin.screen}>
                <ReturnPage onPress={() => navigation.navigate('Welcome')} />
                <TopStart>Login</TopStart>
                <View style={styleLogin.space} />
                <InputField onChange={(event) => setCpf(event.target.value)} >SSN</InputField>
                <InputField onChange={(event) => setPassword(event.target.value)}>Password</InputField>
                <Button onPress={() => enter()}>Enter</Button>
            </View>
        </ScrollView>
    )
}

export default Login
