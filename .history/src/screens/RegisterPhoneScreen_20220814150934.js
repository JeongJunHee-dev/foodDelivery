import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import { Colors, Fonts, Images } from '../constant';
import { Display } from "../utils";
import { Separator } from '../components';
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons";

const ResisterPhoneScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.DEFAULT_WHITE} translucent />
        <Separator height={StatusBar.currentHeight} /> 

        <View style={styles.headerContainer}>
            <Ionicons name="arrow-back-outline" size={30} onPress={() => navigation.goBack()}/>
            <Text style={styles.headerTitle}>휴대폰 인증</Text>
        </View>

        <Text style={styles.title}>Register Phone</Text>
        <Text style={styles.content}>Enter your registered phone number to login.</Text>
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
});

export default ResisterPhoneScreen;