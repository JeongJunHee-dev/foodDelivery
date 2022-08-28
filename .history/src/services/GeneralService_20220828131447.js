import AsyncStorage from "@react-native-async-storage/async-storage";

const setFirstTimeUse = () => {
    AsyncStorage.setItem('isFirstTimeUse', 'true');
};

const getFirstTimeUse = () => {
    return AsyncStorage.getItem('isFirstTimeUse');
};