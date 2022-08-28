import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons";
import { Separator } from '../components';
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const SigninScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar />
        <Separator />

        <View>
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
            </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SigninScreen;