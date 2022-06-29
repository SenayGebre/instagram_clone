const initialState = {
    currentUser: null,
}

const user = (state = initialState, action) => {
    return {...state, currentUser: action.user}
}