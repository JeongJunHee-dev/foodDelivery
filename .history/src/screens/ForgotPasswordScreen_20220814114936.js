import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { Colors } from '../constant';
import { Separator } from '../components';

const ForgotPasswordScreen = () => {
  return (
    <View style= {styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.DEFAULT_WHITE} translucent />
        <Separator height={StatusBar.currentHeight} /> 

        <View style={styles.headerContainer}>
            <Ionicons name="arrow-back-outline" size={30} onPress={() => navigation.goBack()}/>
            <Text style={styles.headerTitle}>로그인 및 회원 가입</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
})

export default ForgotPasswordScreen;