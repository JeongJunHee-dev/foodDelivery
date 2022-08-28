import { Colors } from '../constant';
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default SignupScreen;