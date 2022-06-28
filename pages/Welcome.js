import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Button from "../components/LoginButton/compButton";

const Welcome = ( {navigation} ) => {
    function click(){
        console.log("click");

        console.log("click");
    }
    return(
    <View style={Style.container}>
        <Image style={Style.logo} source={require('C:/Users/User/Desktop/kebapFitnes/img/weightlifter.png')} />
        <Text style={Style.text}>Welcome to Kebap Fitness</Text>
        <Button onPress={() => navigation.navigate("SignUp") } title={"Sign Up"}/>
    </View>
    );
};

const Style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",
        alignItems:"center",
        justifyContent:"center",
    },
    logo:{
        height:100,
        width:100,
        marginBottom:15,
    },
    text:{
        fontWeight:"bold",
        color:"white",
        fontSize:30,
        marginBottom:50,
    }
});

export default Welcome;