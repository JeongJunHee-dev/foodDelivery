const types = {
    SET_IS_APP_LOADING: 'SET_IS_APP_LOADING',
    SET_TOKEN: 'SET_TOKEN',
    SET_FIRST_TIME_USE: 'SET_FIRST_TIME_USE',
}; //small 메모리 사용으로 누수 방지

const setIsAppLoading = isAppLoading => {
    return {
        type: types.SET_IS_APP_LOADING,
        payload: isAppLoading
    };
};

const setToken = token => {
    return {
        type: types.SET_TOKEN,
        payload: token
    };
};

export default {setIsAppLoading, setToken, types};