import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, WelcomeScreen, SigninScreen, SignupScreen } from "../screens";

const Stack = createStackNavigator()

const Navigators = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Splash" component={SplashScreen}/>
                <Stack.Screen name="Welcome" component={WelcomeScreen}/>
                <Stack.Screen name="Signin" component={SigninScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigators; //네이게이터 회기 후 초기 화면으로 보낸다.