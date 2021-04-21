const initState = {
    count: 0
}

const reducer = (state = initState, action) => {
    if (action.type === 'INC') {
        return {
            ...state,
            count: state.count + action.num
        }
    }
    return state;
}

export default reducer;