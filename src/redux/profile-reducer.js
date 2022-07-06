import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
    postsData: [
        {
            id: 1,
            message: "Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение. В метод также передаётся набор аргументов, которые будут установлены перед переданными в привязанную функцию аргументами при её вызове.",
            likeCount: 11
        },
        {
            id: 2,
            message: "Что бы обновить store необходимо вызвать метод dispatch(). Он вызывается у объекта store который вы создаёте в store.js. Этот объект принято называть store поэтому обновление состояния в моём случае выглядит так:\n" +
                "\n" +
                "store.dispatch({ type: ACTION_1, value_1: \"Some text\" });\n" +
                "\n" +
                "ACTION_1 это константа события о которой речь пойдет дальше (см. Actions).\n" +
                "\n" +
                "Эта функция вызовет функцию reducer который обработает событие и обновит соответствующие поля хранилища.",
            likeCount: 16
        },
        {
            id: 3,
            message: "На самом деле передавать объект события напрямую в dispatch() является признаком плохого тона. Для этого нужно использовать функцию под названием actionCreator. Она делает ровно то что и ожидается. Создаёт событие! Вызов этой функции нужно передавать как аргумент в dispatch а в actionCreator передавать необходимое значение (value). Базовый actionCreator выглядит следующим образом:\n" +
                "\n" +
                "function action_1(value) {\n" +
                "    return { \n" +
                "        type: ACTION_1,\n" +
                "        value_1: value\n" +
                "    };\n" +
                "}\n" +
                "\n" +
                "export default action_1;\n" +
                "\n" +
                "Таким образом вызов dispatch должен выглядеть так:\n" +
                "\n" +
                "store.dispatch(action_1(\"Some value\"));\n" +
                "\n" +
                "С использованием actionCreator код становится более чистым.",
            likeCount: 65
        },
    ],
    profile: null,
    status: ""
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
            case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
            case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;

    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})


//==============thunk-creators==============//

export const getUserProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(data));

}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId));

    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}
export default profileReducer;