import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const HomeScreen =() => {
  return (
    <View style={styles.container}>
      <Text>배고프니 빨리 고르셈</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default HomeScreen;