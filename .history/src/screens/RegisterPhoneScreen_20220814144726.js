import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const ResisterPhone = () => {
  return (
    <View style={styles.container}>
        <Text>Register Phone</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ResisterPhone;