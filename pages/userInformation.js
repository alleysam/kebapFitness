import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const userInformation = ( {route} ) => {
    const data = route.params
    console.log(data);

    return(
        <View style={Style.container}>
            <Text style={Style.header}>Kebap Fitness Üye Kartı</Text>
            <View style={Style.infoContainer}>
                <Text style={Style.text}>İsim : {data.name}</Text>
                <Text style={Style.text}>Soyisim : {data.surName}</Text>
                <Text style={Style.text}>E-mail : {data.email}</Text>
                <Text style={Style.text}>Şehir : {data.city}</Text>
                <Text style={Style.text}>Boy : {data.lenght} cm</Text>
                <Text style={Style.text}>Kilo : {data.weight} kg</Text>
                <Text style={Style.text}>VKE : {Math.round(data.weight/Math.pow(data.lenght/100,2))} kg/(m)'2</Text>
            </View>
        </View>);
};

const Style = StyleSheet.create({
    container:{
        flex:1,
        padding:50,
        backgroundColor:"black",
        alignItems:"center",
    },
    infoContainer:{
        height:Dimensions.get("window").height/2.1,
        width:Dimensions.get("window").width/1.1,
        alignItems:"flex-start",
        marginTop:50,
        padding:20,
        borderWidth:2,
        borderColor:"white",
        borderRadius:5,
        backgroundColor:"white",
    },
    text:{
        color:"black",
        fontSize:22,
        fontWeight:"bold",
        marginTop:5,
    },
    header:{
        color:"white",
        fontSize:25,
        fontWeight:"bold",
    },

    

});

export default userInformation;