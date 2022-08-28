import { Display } from "../utils";
import { Separator } from '../components';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors,Fonts } from '../constant';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import React from 'react';

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.DEFAULT_WHITE} translucent />
        <Separator height={StatusBar.currentHeight} /> 

        <View style={styles.headerContainer}>
            <Ionicons name="arrow-back-outline" size={30} onPress={() => navigation.goBack()}/>
            <Text style={styles.headerTitle}>회원 가입</Text>
        </View>

        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.content}>이름과 암호를 입력하세요. and enjoy ordering food.</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    headerTitle:{
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        lineHeight: 20 * 1.4,
        width: Display.setWidth(80),
        textAlign: 'center',
    },
});

export default SignupScreen;