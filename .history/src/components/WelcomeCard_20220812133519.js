import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const WelcomeCard = ({title, content, image}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} />
      <Text style={styles.titleText}></Text>
      <Text></Text>
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

    },
    titleText: {

    },
    contentText: {

    }
});

export default WelcomeCard