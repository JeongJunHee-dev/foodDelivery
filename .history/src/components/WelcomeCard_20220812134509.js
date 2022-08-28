import { Fonts, Colors } from '../constant';
import { Display } from '../utils';
import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const WelcomeCard = ({title, content, image}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} />
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    }
});

export default WelcomeCard