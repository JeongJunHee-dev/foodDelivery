import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SplashScreen =() => {
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SplashScreen;