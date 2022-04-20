export const actionTypes = {
    error: 'ERROR',
    data: 'DATA',
    loading: 'LOADING',
}

export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.error: return {
            ...state,
            error: action.payload,
        }
        case actionTypes.loading: return {
            ...state,
            loading: action.payload,
        }
        case actionTypes.data: return {
            ...state,
            data: action.payload,
        }
        default: return {...state};
    }
};