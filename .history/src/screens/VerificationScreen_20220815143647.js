import { Colors, Fonts } from '../constant';
import { Display } from "../utils";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Separator } from '../components';
import { View, Text, StyleSheet, StatusBar, TextInput } from 'react-native';
import React, {useRef} from 'react';

const VerificationScreen = ({route: {params: {phoneNumber},},}) => {
    const firstInput =useRef() // 상태 변경-> 컴포넌트 재 랜더링 (리팩토링하고는 다름)
    const secondInput =useRef() //숫자 값 절대 지정으로 다음키 변환
    const thirdInput =useRef() 
    const fourthInput =useRef() 

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.DEFAULT_WHITE} translucent />
        <Separator height={StatusBar.currentHeight} /> 

        <View style={styles.headerContainer}>
            <Ionicons name="arrow-back-outline" size={30} onPress={() => navigation.goBack()}/>
            <Text style={styles.headerTitle}>OTP 인증</Text>
        </View>

        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.content}>문자 받은 OTP 번호를 인증받으세요. {' '}
            <Text style={styles.phoneNumberText}>{phoneNumber}</Text>
        </Text>

        <View style={styles.otpContainer}>
            <View style={styles.otpBox}>
                <TextInput style={styles.otpText} keyboardType="phone-pad" 
                            maxLength={1} ref={firstInput} />
            </View>
            <View style={styles.otpBox}>
                <TextInput style={styles.otpText} keyboardType="phone-pad" 
                            maxLength={1} ref={secondInput}/>
            </View>
            <View style={styles.otpBox}>
                <TextInput style={styles.otpText} keyboardType="phone-pad" maxLength={1}/>
            </View>
            <View style={styles.otpBox}>
                <TextInput style={styles.otpText} keyboardType="phone-pad" maxLength={1}/>
            </View>
        </View>

    </View>
  );
};

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
      headerTitle: {
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
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20,
      },
      phoneNumberText: {
        fontSize: 18,
        fontFamily: Fonts.POPPINS_REGULAR,
        lineHeight: 18 * 1.4,
        color: Colors.DEFAULT_YELLOW,
      },
      otpContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
      },
      otpBox: {
        borderRadius: 5,
        borderColor: Colors.DEFAULT_GREEN,
        borderWidth: 0.5,
      },
      otpText: {
        fontSize: 25,
        color: Colors.DEFAULT_BLACK,
        padding: 0,
        textAlign: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,
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
});

export default VerificationScreen;