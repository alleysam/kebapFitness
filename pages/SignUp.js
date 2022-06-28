import React, { useState } from "react";
import {View, Text, StyleSheet, ScrollView, Button} from "react-native";

import Input from "../components/InputComponent/Input";

const SignUp = ( {navigation} ) => {
    const [name, setName] = useState("");
    const [surName, setSurName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [lenght, setLenght] = useState("");
    const [weight, setWeight] = useState("");

    const onPress = () =>{
        if(!name || !surName || !email || !city || !lenght || !weight){
            alert("Lütfen Tüm Formu Doldurunuz...");

        }
        else{
            navigation.navigate("userInformation",userInformation);

        }
    }
    const userInformation = {
        name,
        surName,
        email,
        city,
        lenght,
        weight,
    };

    return(
        <View style={Style.container}>
            <ScrollView>
                <Input LabelTitle={"İsim"} onChangeText={setName}/>
                <Input LabelTitle={"Soyisim"} onChangeText={setSurName}/>
                <Input LabelTitle={"E-Posta"} onChangeText={setEmail}/>
                <Input LabelTitle={"Şehir"} onChangeText={setCity}/>
                <Input LabelTitle={"Boy (cm)"} onChangeText={setLenght}/>
                <Input LabelTitle={"Kilo (kg)"} onChangeText={setWeight}/>
                <Button onPress={onPress} title="Submit"  color={"gray"}/>
            </ScrollView>
        </View>
    );
};

const Style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        backgroundColor:"black",
        paddingTop:15,
    },
});

export default SignUp;