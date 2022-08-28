import { Colors } from '../constant';
import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';
import React from 'react';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content"
                    backgroundColor={Colors.DEFAULT_WHITE}
                    translucent />
        <View style={styles.welcomeListContainer}>
            <FlatList />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT_WHITE,
    }
});

export default WelcomeScreen;