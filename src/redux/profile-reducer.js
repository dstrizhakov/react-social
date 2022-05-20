const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
    newPostText: 'it-kamasutra',
    profile: null
};
const profileReducer = (state = initialState, action) =>{
    switch (action.type){
        case ADD_POST:
            let id = state.postsData.length
            let newPost = {
                id: id + 1,
                message: state.newPostText,
                likeCount: 0
            };
            return  {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;