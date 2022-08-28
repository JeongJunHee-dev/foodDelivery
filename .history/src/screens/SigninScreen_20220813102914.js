import { Separator } from '../components';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import React from 'react';

const SigninScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar />
        <Separator />
        <View>
            
        </View>
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