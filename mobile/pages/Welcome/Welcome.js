import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import logo from "../../assets/logo-full.png"

import stylesWelcome from "./WelcomeStyle";
import Button from "../../components/Button/Button";

const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>

function Welcome({ navigation }) {
    return (
        <ScrollView>
            <View style={stylesWelcome.screen}>
                <Image source={logo} style={stylesWelcome.image} />
                <View>
                    <Text style={stylesWelcome.text}>Welcome to <B>yourbank!</B></Text>
                    <View style={stylesWelcome.viewButton}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={stylesWelcome.buttonRegister}>
                            <Text style={stylesWelcome.textButtonRegister}>Login</Text>
                        </TouchableOpacity>
                        <Button onPress={() => navigation.navigate('Register')}>Register</Button>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

export default Welcome
