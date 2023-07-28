import TopPages from '../../components/TopTransaction/TopTransaction';
import addressImage from '../../assets/address.png'
import stylesAddress from "./AddressStyle.js";
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';

import { Text, View } from "react-native";
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReturnPage from '../../components/ReturnPage/ReturnPage';

function Address({ navigation }) {
    const [CEP, setCEP] = useState(0)
    const [neighborhood, setNeighborhood] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [state, setState] = useState('')
    const [number, setNumber] = useState('')
    const [header, setHeader] = useState({})
    let fk_cliente = 1

    let dados = localStorage.getItem('token')

    useEffect(() => {
        if (CEP.length == 8) {
            axios.get(`https://viacep.com.br/ws/${CEP}/json`)
                .then((res) => {
                    if (res.data.erro) {
                        setNeighborhood('')
                        setCity('')
                        setStreet('')
                        setState('')
                    } else {
                        setNeighborhood(res.data.bairro)
                        setCity(res.data.localidade)
                        setStreet(res.data.logradouro)
                        setState(res.data.uf)
                    }
                })
                .catch((err) => {
                    setNeighborhood('')
                    setCity('')
                    setStreet('')
                    setState('')
                })
        } else {
            setNeighborhood('')
            setCity('')
            setStreet('')
            setState('')
        }

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
        try {
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
                    alert('An unexpected error occurred, contact support')
                })
        } catch {
            alert('An unexpected error occurred, contact support')
        }
    }, [CEP])

    const createAddress = () => {
        if (CEP == null || neighborhood == null || country == null || city == null || street == null || state == null || number == null) {
            alert('Preencha todos os campos')
        } else {
            axios.post('https://emilly-teste.azurewebsites.net/bank/endereco/', {
                cep: CEP,
                pais: country,
                estado: state,
                cidade: city,
                bairro: neighborhood,
                logradouro: street,
                numero: number,
                fk_cliente: fk_cliente
            }, header)
                .then((res) => {
                    if (res.data == "Account already has a card.") {
                        alert('Account already has a card')
                    }
                    else {
                        alert("Account created successfully!")
                        navigation.navigate('Card')
                    }
                })
                .catch((err) => {
                    if (res.data == "Account already has a card.") {
                        alert('"Account already has a card."')
                    }
                    else {
                        alert('An unexpected error occurred, contact support')
                    }
                })
        }
    }

    const navigateTo = () => {
        navigation.navigate('Home')
    }


    return (
        <View style={stylesAddress.screen}>
            <ReturnPage onPress={() => navigateTo()}/>
            <TopPages image={addressImage} text='Address' />
            <View style={stylesAddress.fieldInputS}>
                <InputField maxLength={8} onChange={(e) => setCEP(e.target.value)} >CEP</InputField>
                <InputField onChange={(e) => setCountry(e.target.value)}>Country</InputField>
                <InputField value={state}>State</InputField>
                <InputField value={city}>City</InputField>
                <InputField value={neighborhood}>Neighborhood</InputField>
                <InputField value={street}>Street</InputField>
                <InputField onChange={(e) => setNumber(e.target.value)}>Number</InputField>
            </View>
            <Button onPress={() => createAddress()}>Send</Button>
        </View>
    )
}

export default Address
