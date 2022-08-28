import { Display } from '../utils';
import { Colors, Images, Fonts } from '../constant';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = () => {

  useEffect(() => {

    useEffect(() => {
      setTimeout(() => {})
    })
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.DEFAULT_GREEN}/>
        <Image source={Images.PLATE}
               resizeMode="contain" style={styles.image}
        />
      <Text style={styles.titleText}>배달의 민족 Copy</Text>
    </View>
  );
};// 스크린 설정

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT_GREEN,
    },
    image: {
      height: Display.setHeight(30),
      width: Display.setWidth(60),
    },
    titleText: {
      color: Colors.DEFAULT_WHITE,
      fontSize: 30,
      fontFamily: Fonts.POPPINS_LIGHT,
    }
});//css처리

export default SplashScreen;