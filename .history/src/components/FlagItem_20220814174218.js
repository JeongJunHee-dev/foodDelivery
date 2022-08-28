import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const FlagItem = (code, name, dial_code) => {
  return (
    <TouchableOpacity style={styles.conrtainer}>
        <Image /.
        <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    conrtainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FlagItem;