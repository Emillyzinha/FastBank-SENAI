import { ScrollView, View } from "react-native"
import { TextInput } from "react-native"
import { useEffect, useState } from "react"

import stylesRegister from './RegisterStyle.js'

import InputField from "../../components/InputField/InputField.js"
import TopStart from "../../components/TopStart/TopStart.js"
import Button from "../../components/Button/Button.js"
import ReturnPage from "../../components/ReturnPage/ReturnPage.js"

function Register({ navigation }) {
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [ssn, setSSN] = useState('')
    const [birth, setBirth] = useState('')

    useEffect(() => {
        setBirth(`${year}-${month}-${day}`)
    }, [year, month, day])

    const next = () => {
        if (name == '' || nickname == '' || day == '' || month == '' || year == '' || ssn == '') {
            alert('Fill all the fields')
        } else if (day.length != 2 || month.length != 2 || year.length != 4) {
            console.log('oi', day.length);
            console.log(month.length);
            console.log(year.length);
            alert('fill in the date with day:00 month:00 year: 0000')
        } else {
            navigation.navigate('Register2', { name: name, nickname: nickname, birth: birth, ssn: ssn })
        }
    }

    return (
        <ScrollView>
            <View style={stylesRegister.screen}>
                <ReturnPage onPress={() => navigation.navigate('Welcome')} />
                <TopStart >Register</TopStart>
                <View style={stylesRegister.space} />
                <InputField onChange={(e) => setName(e.target.value)}>Name</InputField>
                <InputField onChange={(e) => setNickname(e.target.value)}>Nickname</InputField>
                <View style={stylesRegister.date}>
                    <TextInput
                        placeholder='Day'
                        style={stylesRegister.inputDay}
                        maxLength={2}
                        onChange={(e) => setDay(e.target.value)}
                    />
                    <TextInput
                        placeholder='Month'
                        style={stylesRegister.inputMonth}
                        maxLength={2}
                        onChange={(e) => setMonth(e.target.value)}
                    />
                    <TextInput
                        placeholder='Year'
                        style={stylesRegister.inputYear}
                        maxLength={4}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </View>
                <TextInput
                    placeholder='SSN'
                    style={stylesRegister.inputSSN}
                    maxLength={11}
                    onChange={(e) => setSSN(e.target.value)}
                />
                <Button onPress={() => next()}>Next</Button>
            </View>
        </ScrollView>
    )
}

export default Register
