import { Text, TextInput, View } from "react-native";
import Style from "./Input.style";

const Input = ( props ) => {
    return(
        <View style={Style.container}>
            <Text style={Style.LabelText}>{props.LabelTitle}</Text>
            <TextInput style={Style.TextInput} onChangeText={props.onChangeText} value={props.value}/>
        </View>
    );  
};

export default Input;