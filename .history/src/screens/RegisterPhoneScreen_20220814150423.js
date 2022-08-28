import React from 'react';
import { View, Text, StyleSheet, StatusBar} from 'react-native';
import { Colors, Fonts, Images } from '../constant';
import { Display } from "../utils";
import { Separator } from '../components';
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons";

const ResisterPhoneScreen = () => {
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
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ResisterPhoneScreen;