import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Colors, Fonts } from '../constant';
import {StaticImageService} from '../services';

const FlagItem = (code, name, dial_code) => {
  return (
    <TouchableOpacity style={styles.container}>
        <Image style={styles.flagImage} source={{uri: StaticImageService.getFlagIcon(code)}}/>
        <Text style={styles.flagText}>{dial_code}</Text>
        <Text style={styles.flagText}>{name}</Text>
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
});// Api에서 서비스 중지로 인해 작동 불능

export default FlagItem;