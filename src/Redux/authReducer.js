const SET_AUTH = 'SET_AUTH'


let initialState = {
    userId: '',
    userName: '',
    email: '',
    imgURL: '',
    isLoged: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                userId: action.uid,
                userName: action.name,
                email: action.email,
                imgURL: action.url,
                isLoged: true
            }
        default:
            return state;

    }
}

export const setAuth = (uid, name, email, url) => ({ type: SET_AUTH, uid, name, email, url});

///////////////////////////////////////////////////////////////

export const setAuthThunk = (user) => (dispatch) =>{

    dispatch(setAuth(user.uid, user.displayName, user.email, user.photoURL))
}


///////////////////////////////////////////////////
