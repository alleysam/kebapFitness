import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        margin:10,
    },
    LabelText:{
        color:"white",
        fontWeight:"bold",
        fontSize:17,
        marginBottom:2,
    },
    TextInput:{
        borderColor:"white",
        borderWidth:2,
        borderRadius:10,
        backgroundColor:"white",
        width: Dimensions.get("window").width/1.2,
        fontSize:15,
        fontWeight:"bold",
        padding:10,
    },
});