import { TouchableOpacity, Text, View } from "react-native";
import Style from "./compButton.style";

const LoginButton = ( props ) => {
    return(
        <TouchableOpacity style={Style.buttonContainer} onPress={props.onPress}>
            <Text style={Style.buttonTitle}>{props.title}</Text>
        </TouchableOpacity>
    );
};
export default LoginButton;