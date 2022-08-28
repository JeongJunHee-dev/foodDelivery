import { Colors } from '../constant';
import { View, Text,StyleSheet } from 'react-native';
import React from 'react';

const containerStyle = (size) => ( {
    backgroundColor: Colors.DEFAULT_GREEN,
    height: 32 * size,
    width: 64 * size,
    borderRadius: 32,
    padding: 4 * size,
});// 사이즈 함수 생성

const toggleStyle = (size) => ({
    height: 24 * size,
    width: 24 * size,
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 32,
}); //토글 값 함수 생성

const ToggleButton = ({size}) => {
  return (
    <View style={containerStyle(size)}>
      <View style={toggleStyle(size)}></View>
    </View>
  )
} // 사이즈 처리시 뷰 단에 뿌릴 준비

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