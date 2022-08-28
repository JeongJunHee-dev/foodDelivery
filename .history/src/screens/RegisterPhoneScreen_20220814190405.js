import React, {useState} from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, TextInput, FlatList} from 'react-native';
import { Colors, Fonts, Images, CountryCode } from '../constant';
import { Display } from "../utils";
import { FlagItem, Separator } from '../components';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons";
import { StaticImageService } from '../services';

const getDropdownStyle = (y) => ({...styles.countryDropdown, top: y + 60});// 드롭다운 설정을 횡축, 종축 위치 설정

const ResisterPhoneScreen = ({navigation}) => {
  const [selectedCountry, setSelectedCountry] = useState(CountryCode.find(country => country.name === 'Korea, Republic of')); //훅 (국가 호출)
  const [inputsContainerY, setInputsContainerY] = useState(0);  //포지션 설정
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); //드롭다운 표출
  const [dropdownLayout, setDropdownLayout] = useState({}); // 레이아웃처리 

  const closeDropdown = (pageX, pageY) => {
    if(isDropdownOpen) {
      if (
        pageX < dropdownLayout?.x || pageX > dropdownLayout?.x + dropdownLayout?.width ||
        pageY < dropdownLayout?.y || pageY > dropdownLayout?.y + dropdownLayout?.height
      ) 
        { setIsDropdownOpen(false);}
    }
  } //드롭다운 설정시에 레이아웃 설정 (드롭다운을 닫았을 경우 )

  return (
    <View style={styles.container} onStartShouldSetResponder= {({nativeEvent: {pageX, pageY}}) => closeDropdown(pageX, pageY) }>

        <StatusBar barStyle="dark-content" backgroundColor={Colors.DEFAULT_WHITE} translucent />
        <Separator height={StatusBar.currentHeight} /> 

        <View style={styles.headerContainer}>
            <Ionicons name="arrow-back-outline" size={30} onPress={() => navigation.goBack()}/>
            <Text style={styles.headerTitle}>휴대폰 인증</Text>
        </View>

        <Text style={styles.title}>Register Phone</Text>
        <Text style={styles.content}>Enter your registered phone number to login.</Text>

        <View style={styles.inputContianer} onLayout={({nativeEvent: {layout: {y},},}) => setInputsContainerY(y)}>

          <TouchableOpacity style={styles.countryListContainer} onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
            <Image source={{uri: StaticImageService.getFlagIcon(selectedCountry.code)}} style={styles.flatIcon}/>
            <Text style={styles.countryCodeText}>{setSelectedCountry.dial_code}</Text>
            <MaterialIcons name="keyboard-arrow-down" size={18}/>
          </TouchableOpacity>

          <View style={styles.phoneInputContainer}>
            <TextInput placeholder="Phone Number" placeholderTextColor={Colors.DEFAULT_GREY}
                       selectionColor={Colors.DEFAULT_GREY} keyboardType="phone-pad"
                       style={styles.inputText} />
          </View>

        </View>
        {isDropdownOpen && (
          <View style={getDropdownStyle(inputsContainerY)} 
                onLayout={({nativeEvent: {layout: {x, y, height, width},},}) => setDropdownLayout({x, y, height, width})}>

            <FlatList data={CountryCode} keyExtractor={(item) => item.code}
                      renderItem={({item}) => <Text style={styles.flagText} 
                                                    onPress={(country) => {setSelectedCountry(country)
                                                                           setIsDropdownOpen(false)}}> 
                                                  {item.dial_code} {item.name} 
                                              </Text>
                                              /*<FlagItem {...item} /> ->이게 원래 플래그 아이템 자바스크립트 연동 */}/>
          </View>
        )}


    </View>
  );
};// 현재 API 서비스가 중단됨에 따라 기존 국가 정보 및 국기 표출이 안됨 (503 bad request) 
/* 원래라면 플래그 아이템을 통해 데이터를 주고 받아야 하는데 원 API에서 중지로 임시 조치
  (드롭 다운시 클릭하면 국가 선택이 나타나지 않음) */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
  },
  headerTitle:{
      fontSize: 20,
      fontFamily: Fonts.POPPINS_MEDIUM,
      lineHeight: 20 * 1.4,
      width: Display.setWidth(80),
      textAlign: 'center',
  },
  title: {
      fontSize: 20,
      fontFamily: Fonts.POPPINS_MEDIUM,
      lineHeight: 20 * 1.4,
      marginTop: 50,
      marginBottom: 10,
      marginHorizontal: 20,
  },
  content: {
      fontSize:20,
      fontFamily: Fonts.POPPINS_MEDIUM,
      marginTop: 10,
      marginBottom: 20,
      marginHorizontal: 20,
  },
  inputContianer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 50,
  },
  countryListContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    width: Display.setWidth(22),
    marginRight: 10,
    borderRadius: 8,
    height: Display.setHeight(6),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    flexDirection: "row",
  },
  phoneInputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    justifyContent: "center",
    flex: 1,
  },
  flatIcon: {
    height: 20,
    width: 20,
  },
  countryCodeText: {
    fontSize: 14,
    lineHeight: 14 * 1.4,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  inputText: {
    fontSize: 18,
    textAlignVertical: 'center',
    padding: 0,
    height: Display.setHeight(6),
    color: Colors.DEFAULT_BLACK,
  },
  countryDropdown: {
    backgroundColor: Colors.LIGHT_GREY,
    position: 'absolute',
    width: Display.setWidth(80),
    height: Display.setHeight(45),
    marginLeft: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    zIndex: 3,
  },
  flagText: {
    fontSize: 14,
    lineHeight: 14 * 1.4,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginRight: 10,
    },
});

export default ResisterPhoneScreen;