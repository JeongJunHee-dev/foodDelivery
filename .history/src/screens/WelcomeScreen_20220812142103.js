import { Display } from '../utils';
import { WelcomeCard, Separator } from '../components';
import { Colors, General } from '../constant';
import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';
import React from 'react';


const Pagination = () => {
    return (
        <View style={styles.pageContainer}>
            <View style={styles.page}></View>
            <View style={styles.page}></View>
            <View style={styles.page}></View>
        </View>
    )
} // 페이징 처리시 컨테이너 값 지정

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content"
                    backgroundColor={Colors.DEFAULT_WHITE}
                    translucent />

        <Separator />

        <View style={styles.welcomeListContainer}>
            <FlatList data={General.WELCOME_CONTENTS}
                        keyExtractor={item => item.title} 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        overScrollMode='never'
                        renderItem={({item}) => <WelcomeCard {...item }/> } />
        </View>
        <Pagination />
    </View>
  )
} // 웰컴 스크린 함수 적용시에는 아이템 호출 부분을 잘 생각해야 함. 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    welcomeListContainer: {
        height: Display.setHeight(60),
    },
    pageContainer: {
        flexDirection: "row",
    },
    page: {
        height: 8,
        width: 15,
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 32,
        marginHorizontal: 5,
    }
});

export default WelcomeScreen;