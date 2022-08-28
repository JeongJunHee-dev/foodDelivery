import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Colors, Fonts, Images } from '../constant';
import { Display } from "../utils";
import { Separator } from '../components';
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons";

const ResisterPhoneScreen = () => {
  return (
    <View style={styles.container}>
        <Text>Register Phone</Text>
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