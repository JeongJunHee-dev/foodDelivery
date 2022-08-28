import { Colors, Images, Fonts } from '../constant';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.DEFAULT_GREEN}/>
        <Image source={Images.PLATE}
               resizeMode="contain" style={styles.image}
        />
      <Text style={styles.titleText}>배달의 민족 짝퉁</Text>
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
    },
    titleText: {
      color: Colors.DEFAULT_WHITE,
      fontSize: 30,
      fontFamily: Fonts.POPPINS_SEMI_BOLD,
    }
});

export default SplashScreen;