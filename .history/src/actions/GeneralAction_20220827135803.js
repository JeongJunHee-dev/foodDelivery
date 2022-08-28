const types = {
    SET_IS_APP_LOADING: 'SET_IS_APP_LOADING',
    SET_TOKEN: 'SET_TOKEN'
}; //small 메모리 사용으로 누수 방지

const setIsAppLoading = (isAppLoading) => {
    return {
        type: types.SET_IS_APP_LOADING,
        payload: isAppLoading
    };
};

const setToken = (token) => {
    return {
        type: ypes.SET_TOKEN,
        payload: token
    };
};

export default {setIsAppLoading, setToken, types};