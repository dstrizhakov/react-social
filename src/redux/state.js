import avatar01 from './Avatars/1.jpg'
import avatar02 from './Avatars/2.jpg'
import avatar03 from './Avatars/3.jpg'
import avatar04 from './Avatars/4.jpg'
import avatar05 from './Avatars/5.jpg'
import avatar06 from './Avatars/6.jpg'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Dimych", avatar: avatar01},
                {id: 2, name: "Aleksander", avatar: avatar02},
                {id: 3, name: "Arina", avatar: avatar03},
                {id: 4, name: "Vasya", avatar: avatar04},
                {id: 5, name: "Valera", avatar: avatar05},
                {id: 6, name: "Kirill", avatar: avatar06},
            ],
            messagesData: [
                {id: 1, message: "Hi!", isMyMessage: true,},
                {id: 2, message: "How are you?", isMyMessage: false,},
                {id: 3, message: "Yo", isMyMessage: true,}
            ],
            newMessageBody: ""
        },
        profilePage: {
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
            newPostText: ''
        },
        sideBar: {
            friends: [
                {id: 4, name: "Vasya", avatar: avatar04},
                {id: 5, name: "Valera", avatar: avatar05},
                {id: 6, name: "Kirill", avatar: avatar06},
            ]
        },

    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;// паттерн observer/наблюдатель
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);

}
}





export default store;
window.store = store;