import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import React from 'react';

const SplashScreen =() => {
  return (
    <View style={styles.container}>
      <Text></Text>
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