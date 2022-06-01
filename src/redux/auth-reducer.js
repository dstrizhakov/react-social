import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTO_URL = 'SET_USER_PHOTO_URL';


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    userPhotoUrl: null
};

const authReducer = (state = initialState, action) =>{


    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true

            }
        case SET_USER_PHOTO_URL:
            return {
                ...state,
                ...action.userPhotoUrl,
            }

        default:
            return state;

    }
}

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
export const setUserPhotoUrl = (userPhotoUrl) => ({type: SET_USER_PHOTO_URL, userPhotoUrl })

//==============thunk-creators==============//
export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode ===0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
}

export default authReducer;