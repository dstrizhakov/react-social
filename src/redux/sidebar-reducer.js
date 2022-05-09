import avatar04 from "./Avatars/4.jpg";
import avatar05 from "./Avatars/5.jpg";
import avatar06 from "./Avatars/6.jpg";

let initialState = {
    friends: [
        {id: 4, name: "Vasya", avatar: avatar04},
        {id: 5, name: "Valera", avatar: avatar05},
        {id: 6, name: "Kirill", avatar: avatar06},
    ]
};
const sidebarReducer = (state = initialState, action) =>{
    return state;
}
export default sidebarReducer;