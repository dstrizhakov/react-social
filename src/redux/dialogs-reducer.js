import avatar01 from "./Avatars/1.jpg";
import avatar02 from "./Avatars/2.jpg";
import avatar03 from "./Avatars/3.jpg";
import avatar04 from "./Avatars/4.jpg";
import avatar05 from "./Avatars/5.jpg";
import avatar06 from "./Avatars/6.jpg";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
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
    newMessageBody: "it"
};

const dialogsReducer = (state = initialState, action) =>{

    let stateCopy = {
        ...state,
       //messagesData:[...state.messagesData]
    };

    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            stateCopy.messagesData.push({id: stateCopy.messagesData.length, message: body, isMyMessage: true,});
            stateCopy.newMessageBody = '';
            return stateCopy;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;