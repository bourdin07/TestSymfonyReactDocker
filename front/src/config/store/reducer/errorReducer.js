
const initialState = {};

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ERROR':
            return { ...state, ...action.error }
        case 'ERROR_LOGIN':
            return { ...state, ...action.error }
        case 'REMOVE_ERROR':
            return { }
        default:
            return state
    }
}

export default errorReducer;
