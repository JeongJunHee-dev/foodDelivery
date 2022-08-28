import { Display } from '../utils';
import { WelcomeCard, Separator } from '../components';
import { Colors, Fonts, General } from '../constant';
import { View, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import React, {useState, useRef} from 'react';

const pageStyle = isActive => isActive ? styles.page
    : {...styles.page, backgroundColor: Colors.DEFAULT_GREY}; //페이지 스타일이 활성화 시


const Pagination = (index) => {
    return (
        <View style={styles.pageContainer}>
            {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) => i === index ? (<View style={pageStyle(true)}></View>))}
            
            <View style={pageStyle(true)}></View>
            <View style={pageStyle(false)}></View>
        </View>
    )
} // 페이징 처리시 컨테이너 값 지정

const WelcomeScreen = () => {
    const [welcomeListIndex, setWelcomeListIndex] = useState(0); //useState 처리로 

    const welcomeList = useRef(); //레퍼런스 호출

    const onViewRef = useRef(({changed}) => {
        setWelcomeListIndex(changed[0].index);
    });// 뷰 레퍼런스 함수로 인덱스 정렬을 설정한다

    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50}); //커버 스래셔 설정을 유즈 레퍼런스에 뷰컨피그레퍼런스 정의를 내린다

    const pageScroll = () => {
        welcomeList.current.scrollToIndex({
            index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex, 
        });
    } //페이지 스크롤 함수 정의 (버튼 누르면 다음페이지 이동)

  return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content"
                    backgroundColor={Colors.DEFAULT_WHITE}
                    translucent />

        <Separator height={StatusBar.currentHeight} />
        <Separator height={Display.setHeight(8)} />

        <View style={styles.welcomeListContainer}>
            <FlatList   ref={welcomeList} 
                        data={General.WELCOME_CONTENTS}
                        keyExtractor={item => item.title} 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        overScrollMode="never"
                        viewabilityConfig={viewConfigRef.current}
                        onViewableItemsChanged={onViewRef.current}
                        renderItem={({item}) => <WelcomeCard {...item }/> } />
        </View>
        <Separator height={Display.setHeight(8)} />
        <Pagination />
        <Separator height={Display.setHeight(8)} />
        <View style={styles.buttonContainer}>

            <TouchableOpacity activeOpacity={0.8} style={{marginLeft: 10}} 
                                onPress={() => welcomeList.current.scrollToEnd()} >

                <Text style={styles.buttonText}>Skip</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => pageScroll()}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
} // 웰컴 스크린 함수 적용시에는 아이템 호출, 함수 정의 부분을 잘 생각해야 함. 

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
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Display.setWidth(90),
        alignItems: 'center',
    },
    buttonText:{
        fontSize: 16,
        fontFamily: Fonts.POPPINS_BOLD,
        lineHeight: 16 * 1.4,
    },
    button: {
        backgroundColor: Colors.LIGHT_GREEN,
        paddingVertical: 20,
        paddingHorizontal: 11,
        borderRadius: 32,
    }
});

export default WelcomeScreen;