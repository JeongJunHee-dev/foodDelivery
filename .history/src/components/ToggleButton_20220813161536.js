import { Colors } from '../constant';
import { View, Text,StyleSheet } from 'react-native';
import React from 'react';

const containerStyle = (size) => ( {
    backgroundColor: Colors.DEFAULT_GREEN,
    height: 32 * size,
    width: 64 * size,
    borderRadius: 32,
    padding: 4 * size,
});

const toggleStyle = (size) => ({
    height: 24 * size,
    width: 24 * size,
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 32,
});

const ToggleButton = ({size}) => {
  return (
    <View style={containerStyle(size)}>
      <View style={styles.toggle}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.DEFAULT_GREEN,
        height: 32,
        width: 64,
        borderRadius: 32,
        padding: 4,
    },
    toggle: {
        height: 24,
        width: 24,
        backgroundColor: Colors.DEFAULT_WHITE,
        borderRadius: 32,
    },
});
export default ToggleButton