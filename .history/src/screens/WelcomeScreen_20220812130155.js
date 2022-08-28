import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const WelcomeScreen = () => {
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default WelcomeScreen