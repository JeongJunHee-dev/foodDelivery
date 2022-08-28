import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Colors } from '../constant';

const ForgotPasswordScreen = () => {
  return (
    <View style= {styles.container}>
        <Text>ForgotPassword</Text>
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