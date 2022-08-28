import React from 'react';
import {View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import { Separator } from '../components';
import { Colors, Fonts } from "../constant";
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

        <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
                <Feather name="mail" size={22} color={Colors.DEFAULT_GREY}
                                     style={{marginRight: 10}}/>
                <TextInput placeholder="Email" placeholderTextColor={Colors.DEFAULT_GREY}
                            selectionColor={Colors.DEFAULT_GREY}
                            style={styles.inputText} />
            </View>
        </View>

        <TouchableOpacity style={styles.signinButton}>
            <Text style={styles.signinButtonText}>Reset Password</Text>
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
  title: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  content: {
      fontSize:20,
      fontFamily: Fonts.POPPINS_MEDIUM,
      marginTop: 10,
      marginBottom: 20,
      marginHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    borderRadius: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    justifyContent: 'center',
  },
  inputSubContainer: {
      flexDirection: "row",
      alignItems: "center",
  },
  inputText: {
      fontSize: 18,
      textAlignVertical: "center",
      padding: 0,
      height: Display.setHeight(6),
      color: Colors.DEFAULT_BLACK,
      flex: 1,
  },
  forgotPasswordContainer: {
      marginHorizontal: 20,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
  },
  rememberMeText: {
      marginLeft: 10,
      fontSize: 12,
      lineHeight: 12 * 1.4,
      color: Colors.DEFAULT_GREY,
      fontFamily: Fonts.POPPINS_MEDIUM,
  },
  forgotPasswordText: {
      fontSize: 12,
      lineHeight: 12 * 1.4,
      color: Colors.DEFAULT_GREEN,
      fontFamily: Fonts.POPPINS_BOLD,
  },
  signinButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 8,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signinButtonText: {
      fontSize: 18,
      lineHeight: 18 * 1.4,
      color: Colors.DEFAULT_WHITE,
      fontFamily: Fonts.POPPINS_MEDIUM,
  },
})

export default ForgotPasswordScreen;