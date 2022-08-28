import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SigninScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Sign In or Login Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SigninScreen;