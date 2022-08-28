import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const ToggleButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.toggle}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    toggle: {

    },
});
export default ToggleButton