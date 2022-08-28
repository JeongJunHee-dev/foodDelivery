import AsyncStorage from "@react-native-async-storage/async-storage";

const setFirstTimeUse = () => {
    AsyncStorage.setItem("isFirstTimeUse")
}