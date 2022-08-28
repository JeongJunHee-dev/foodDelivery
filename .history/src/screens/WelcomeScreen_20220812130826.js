import { Colors } from '../constant';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import React from 'react';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content"
                    backgroundColor={Colors.DEFAULT_WHITE}
                    translucent />
      <Text>Welcome 환영합니다.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});

export default WelcomeScreen;