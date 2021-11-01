import JwtDecode from "jwt-decode";

const getUser = () => {
    try {
        let token = sessionStorage.getItem('token');
        let user = token ? JwtDecode(token) : null;
        let pageSize = sessionStorage.getItem('pageSize');
        if(pageSize === undefined || pageSize === null || pageSize === '') setPageSize(user.pageSize);
        return user
    } catch (error) {
        return null;
    }
}

const setPageSize = (pageSize) => {
    if(sessionStorage.getItem('pageSize') === undefined) sessionStorage.setItem('pageSize', pageSize);
}

const initialState = {
    ...getUser()
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PAGE_SIZE_CHANGE':
            return {...state, pageSize: action.pageSize}
        case 'DISCONNECT':
            return {}
        case 'CONNECT':
            return { ...getUser(action.token) }
        default:
            return state
    }
}

export default userReducer;
