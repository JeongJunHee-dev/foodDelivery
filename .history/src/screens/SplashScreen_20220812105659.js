import { Colors, Images } from '../constant';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.DEFAULT_GREEN}/>
        <Image source={Images.PLATE}
               resizeMode="contain" style={styles.image}
        />
      <Text>배달의 민족 짝퉁</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT_GREEN,
    },
    image: {
      height: 150,
      width: 150,
    }
});

export default SplashScreen;