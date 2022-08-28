import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const FlagItem = (code, name, dial_code) => {
  return (
    <TouchableOpacity style={styles.container}>
        <Image style={}/>
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
});

export default FlagItem;