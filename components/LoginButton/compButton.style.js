import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    buttonContainer:{
        borderWidth:2,
        borderRadius:10,
        borderColor:"white",
        alignItems:"center",
        padding:10,
        backgroundColor:"white",
        width:Dimensions.get("window").width/2,       
    },
    buttonTitle:{
        fontWeight:"bold",
    }
});