import { Text, View } from "react-native";
import estilos from "./UnlockStyle";
import TopStart from "../../components/TopStart/TopStart";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";

function Unlock({navigation}) {
    return (
        <View style={estilos.screen}>
            <TopStart/>
            <InputField>Password</InputField>
            <Button navigation={navigation} navigateTo={'Opcao'} >Enter</Button>
        </View>
    )
}

export default Unlock
