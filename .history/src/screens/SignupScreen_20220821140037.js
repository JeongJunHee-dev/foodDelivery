import { AuthenicationService } from "../services";
import { Display } from "../utils";
import { Separator } from '../components';
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors, Fonts, Images } from '../constant';
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Image } from 'react-native';
import React, {useState} from 'react';

const SignupScreen = ({navigation}) => {
    const [isPasswordShow, setPasswordShow] = useState(false); // 훅설정 (패스워드 보임 처리)
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState("죄송요 ㅠㅜ 가입 몬함.");

    const register = () => {
        let user = {username, email, password};
        console.log(user);
        AuthenicationService.register(user).then(response => {
            console.log(response);
        });
        //navigation.navigate('RegisterPhone')
    }
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
                            style={styles.inputText}
                            onChangeText={(text) => setUsername(text)} />
            </View>
        </View>

        <Separator height={15}/>

        <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
                <Feather name="mail" size={22} color={Colors.DEFAULT_GREY}
                                     style={{marginRight: 10}}/>
                <TextInput placeholder="Email" placeholderTextColor={Colors.DEFAULT_GREY}
                            selectionColor={Colors.DEFAULT_GREY}
                            style={styles.inputText}
                            onChangeText={(text) => setEmail(text)} />
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
                            onChangeText={(text) => setPassword(text)}
                />

                <Feather name={ isPasswordShow ? "eye" : "eye-off"} 
                         size={22} color={Colors.DEFAULT_GREY}
                         style={{marginRight: 10}}
                         onPress={() => setPasswordShow(!isPasswordShow)}
                                     />
            </View>
        </View>

        <Text style={styles.errorMessage}>{errorMessage}</Text>

        <TouchableOpacity style={styles.signinButton} onPress={() => register()}>
            <Text style={styles.signinButtonText}>회원 가입</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>OR</Text>

        <Separator height={15}/>

        <TouchableOpacity style={styles.googleButton}>
            <View style={styles.socialButtonContainer}>
                <View style={styles.signinButtonLogoContainer}>
                    <Image source={Images.GOOGLE} style={styles.signinButtonLogo}/>
                </View>
                <Text style={styles.SocialSigninButtonText}>Google 계정 연동하기</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebookButton}>
            <View style={styles.socialButtonContainer}>
                <View style={styles.signinButtonLogoContainer}>
                    <Image source={Images.FACEBOOK} style={styles.signinButtonLogo}/>
                </View>
                <Text style={styles.SocialSigninButtonText}>Facebook 계정 연동하기</Text>
            </View>
        </TouchableOpacity>

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
    facebookButton: {
        backgroundColor: Colors.FACEBOOK_BLUE,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 8,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleButton: {
        backgroundColor: Colors.GOOGLE_BLUE,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signinButtonLogo: {
        height: 18,
        width: 18,
    },
    signinButtonLogoContainer: {
        backgroundColor: Colors.DEFAULT_WHITE,
        padding: 2,
        borderRadius: 3,
        position: "absolute",
        left: 25,
    },
    socialButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    SocialSigninButtonText: {
        color: Colors.DEFAULT_WHITE,
        fontSize: 13,
        lineHeight: 13 * 1.4,
        fontFamily: Fonts.POPPINS_MEDIUM,
    },
    toggleContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    orText:{
        fontSize: 15,
        lineHeight: 15 * 1.4,
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginLeft: 5,
        alignSelf: 'center',
        marginTop: 20,
    },
    errorMessage: {

    }
});

export default SignupScreen;