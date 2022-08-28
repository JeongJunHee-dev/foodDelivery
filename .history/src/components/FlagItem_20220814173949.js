import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FlagItem = (code, name, dial_code) => {
  return (
    <View style={styles.conrtainer}>
        <Text>{name}</Text>
    </View>
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