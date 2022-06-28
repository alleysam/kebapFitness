import React from "react";
import {} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenStackHeaderCenterView } from "react-native-screens";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import userInformation from "./pages/userInformation";

const Stack = createNativeStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="userInformation" component={userInformation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;