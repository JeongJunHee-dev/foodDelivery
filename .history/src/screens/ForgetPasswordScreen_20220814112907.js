import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ForgetPasswordScreen = () => {
  return (
    <View style= {styles.container}>
        <Text>ForgetPasswordScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ForgetPasswordScreen;