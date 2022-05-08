import avatar01 from './Avatars/1.jpg'
import avatar02 from './Avatars/2.jpg'
import avatar03 from './Avatars/3.jpg'
import avatar04 from './Avatars/4.jpg'
import avatar05 from './Avatars/5.jpg'
import avatar06 from './Avatars/6.jpg'

let store ={
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
            ]
        },
        profilePage: {
            postsData: [
                {id: 1, message: "Hi, it's my first post!", likeCount: 11},
                {id: 2, message: "Hi, how are you?", likeCount: 16},
                {id: 3, message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", likeCount: 65},
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
    _callSubscriber () {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;// паттерн observer/наблюдатель
    },
    dispatch (action) {
        if (action.type === 'ADD-POST'){
            let id = this._state.profilePage.postsData.length
            let newPost = {
                id: id+1,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type ==='UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    }
}

export default store;
window.store = store;