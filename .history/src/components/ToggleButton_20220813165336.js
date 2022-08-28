import { Colors } from '../constant';
import { TouchableOpacity, Animated, StyleSheet, Easing } from 'react-native';
import React, {useState} from 'react';

const containerStyle = (size, isActive) => ( {
    backgroundColor: isActive ? Colors.DEFAULT_GREEN : Colors.DEFAULT_GREY,
    height: 32 * size,
    width: 64 * size,
    borderRadius: 32,
    padding: 4 * size,
});// 사이즈 함수 생성

const toggleStyle = (size, animatedValue) => ({
    height: 24 * size,
    width: 24 * size,
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 32,
    transform: [
        {
            translateX: animatedValue
        }
    ]
}); //토글 값 함수 생성

const ToggleButton = ({size}) => {
    const [isActive, setIsActive] = useState(false)// 토글 활성화 (훅)
    const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0))// 활성화 부분에 애니매이션 변화 (훅)

    const toggleHandle = () => {
        Animated.timing(animatedValue, {
            toValue: isActive ? 0 : 32 * size,
            duration: 250, 
            easing: Easing.bounce,
            delay: 0,
            useNativeDriver: true
        }).start();
        setIsActive(!isActive); //활성화 부분에 설정에 회기 시점
    };// 토글 핸들 함수 생성

  return (
    <TouchableOpacity style={containerStyle(size)} onPress={() => toggleHandle()}
                        activeOpacity={0.8}>
      <Animated.View style={toggleStyle(size, animatedValue)} />
    </TouchableOpacity>
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