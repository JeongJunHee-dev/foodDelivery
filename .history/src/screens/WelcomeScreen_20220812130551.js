import { View, Text, StyleSheet, StatusBar } from 'react-native';
import React from 'react';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar />
      <Text>Welcome 환영합니다.</Text>
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