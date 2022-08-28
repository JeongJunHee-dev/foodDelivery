import { Fonts, Colors, Images } from '../constant';
import { Display } from '../utils';
import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const WelcomeCard = ({title, content, image}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={Images[image]} resizeMode="contain" />
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
};//카드설정시 이미지,타이틀, 대사내용을 잘 추린다.

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Display.setWidth(100),
    },
    image: {
        height: Display.setHeight(30),
        width: Display.setWidth(60),
    },
    titleText: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_BOLD,
    },
    contentText: {
        fontSize: 18,
        fontFamily: Fonts.POPPINS_LIGHT,
        textAlign: 'center',
        marginHorizontal: 20,
    }
});

export default WelcomeCard