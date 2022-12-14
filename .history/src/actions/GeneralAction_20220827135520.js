const type = {
    SET_IS_APP_LOADING: 'SET_IS_APP_LOADING',
    SET_TOKEN: 'SET_TOKEN'
}

const setIsAppLoading = (isAppLoading) => {
    return {
        type: 'SET_IS_APP_LOADING',
        payload: isAppLoading
    }
}

const setToken = (token) => {
    return {
        type: 'SET_TOKEN',
        payload: token
    }
}

export default {setIsAppLoading, setToken};