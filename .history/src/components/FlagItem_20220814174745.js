import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const FlagItem = (code, name, dial_code) => {
  return (
    <TouchableOpacity style={styles.container}>
        <Image style={styles.flagImage}/>
        <Text>{dial_code}</Text>
        <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    flagImage: {
        height: 25,
        width: 25,
        marginRight: 10,
    },
    flagText: {
        fontSize: 14,
        lineHeight: 14 * 1.4,
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginRight: 10,
    },
});

export default FlagItem;