import avatar01 from "./Avatars/1.jpg";
import avatar02 from "./Avatars/2.jpg";
import avatar03 from "./Avatars/3.jpg";
import avatar04 from "./Avatars/4.jpg";
import avatar05 from "./Avatars/5.jpg";
import avatar06 from "./Avatars/6.jpg";


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
    ]
};

const dialogsReducer = (state = initialState, action) =>{


    switch (action.type){

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            let lastId = state.messagesData.length
            return  {
                ...state,
                messagesData:[...state.messagesData, {id: lastId, message: body, isMyMessage: true,}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;