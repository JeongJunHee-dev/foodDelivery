import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { Separator } from '../components';
import { Colors, Fonts, Images } from "../constant";
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons";
import { Display } from "../utils";

const ForgotPasswordScreen = () => {
  return (
    <View style= {styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.DEFAULT_WHITE} translucent />
        <Separator height={StatusBar.currentHeight} /> 

        <View style={styles.headerContainer}>
            <Ionicons name="arrow-back-outline" size={30} onPress={() => navigation.goBack()}/>
            <Text style={styles.headerTitle}>비밀번호 재 설정</Text>
        </View>

        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.content}>이름과 암호를 입력하세요. and enjoy ordering food.</Text>
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
})

export default ForgotPasswordScreen;