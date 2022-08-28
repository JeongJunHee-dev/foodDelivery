import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, WelcomeScreen,
         SigninScreen, SignupScreen, 
         ForgotPasswordScreen, RegisterPhoneScreen,
         VerificationScreen,HomeScreen } from "../screens";
import {useSelector, useDispatch} from 'react-redux';

const Stack = createStackNavigator();

const Navigators = () => {

    const {isAppLoading, token, isFirstTimeUse} = useSelector(state => state?.generalState,);

    const dispatch = useDispatch();

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {!token ? (
                <>
                    <Stack.Screen name="Splash" component={SplashScreen}/>
                    <Stack.Screen name="Welcome" component={WelcomeScreen}/>
                    <Stack.Screen name="Signin" component={SigninScreen}/>
                    <Stack.Screen name="Signup" component={SignupScreen}/>
                    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
                    <Stack.Screen name="RegisterPhone" component={RegisterPhoneScreen}/>
                    <Stack.Screen name="Verification" component={VerificationScreen}/>
                </>
                            ) : (<Stack.Screen name="Home" component={HomeScreen}/>)
                }

            </Stack.Navigator>
        </NavigationContainer>
    );
};

const mapStateToProps = state => {
    return {
        token: state.generalState.token,
    };
};// 매핑후 토큰 값을 보낼때 적은 메모리 사용으로 처리

export default Navigators; //네이게이터 회기 후 초기 화면으로 보낸다.