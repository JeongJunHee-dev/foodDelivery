import { Display } from "../utils";
import { Separator } from '../components';
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors,Fonts } from '../constant';
import { View, Text, StyleSheet, StatusBar, TextInput } from 'react-native';
import React, {useState} from 'react';

const SignupScreen = ({navigation}) => {
    const [isPasswordShow, setPasswordShow] = useState(false); // 훅설정 (패스워드 보임 처리)

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.DEFAULT_WHITE} translucent />
        <Separator height={StatusBar.currentHeight} /> 

        <View style={styles.headerContainer}>
            <Ionicons name="arrow-back-outline" size={30} onPress={() => navigation.goBack()}/>
            <Text style={styles.headerTitle}>회원 가입</Text>
        </View>

        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.content}>Enter your email, choose a username and password</Text>

        <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
                <Feather name="user" size={22} color={Colors.DEFAULT_GREY}
                                     style={{marginRight: 10}}/>
                <TextInput placeholder="Username" placeholderTextColor={Colors.DEFAULT_GREY}
                            selectionColor={Colors.DEFAULT_GREY}
                            style={styles.inputText} />
            </View>
        </View>

        <Separator height={15}/>

        <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
                <Feather name="lock" size={22} color={Colors.DEFAULT_GREY}
                                     style={{marginRight: 10}} />

                <TextInput  secureTextEntry={isPasswordShow ? false : true}//보안키 설정
                            placeholder="Password" 
                            placeholderTextColor={Colors.DEFAULT_GREY}
                            selectionColor={Colors.DEFAULT_GREY}
                            style={styles.inputText}
                />

                <Feather name={ isPasswordShow ? "eye" : "eye-off"} 
                         size={22} color={Colors.DEFAULT_GREY}
                         style={{marginRight: 10}}
                         onPress={() => setPasswordShow(!isPasswordShow)}
                                     />
            </View>
        </View>
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
});

export default SignupScreen;