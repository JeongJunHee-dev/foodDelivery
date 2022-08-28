import { Colors } from "../constant";
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons";
import { Separator } from '../components';
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const SigninScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.DEFAULT_WHITE} translucent />
        <Separator height={StatusBar.currentHeight} /> 

        <View style={styles.headerContainer}>
            <Ionicons />
            <Text>로그인 및 회원 가입</Text>
        </View>

        <Text>Welcome</Text>
        <Text>이름과 암호를 입력하세요. and enjoy ordering food.</Text>

        <View>
            <Feather />
            <TextInput />
        </View>

        <Separator />

        <View>
            <View>
                <Feather />
                <TextInput />
                <Feather />
            </View>
        </View>

        <Text></Text>
        <View>
            <View>
                <Text>로그인 기억하기</Text>
            </View>
            <Text>Forgot Password?</Text>
        </View>

        <TouchableOpacity>
            <Text>Sign In</Text>
        </TouchableOpacity>

        <View>
            <Text>계정이 없능교?</Text>
            <Text>Sign Up</Text>
        </View>

        <Text>OR</Text>

        <TouchableOpacity>
            <View>
                <View>
                    <Image />
                </View>
                <Text>Google 계정 연동하기</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View>
                <View>
                    <Image />
                </View>
                <Text>Facebook 계정 연동하기</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default SigninScreen;