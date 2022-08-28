import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const WelcomeCard = () => {
  return (
    <View style={styles.container}>
      <Text>WelcomeCard</Text>
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

export default WelcomeCard