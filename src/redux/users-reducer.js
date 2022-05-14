import avatar01 from "./Avatars/1.jpg";
import avatar02 from "./Avatars/2.jpg";
import avatar03 from "./Avatars/3.jpg";
import avatar04 from "./Avatars/4.jpg";
import avatar05 from "./Avatars/5.jpg";
import avatar06 from "./Avatars/6.jpg";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [

    ]
};

const usersReducer = (state = initialState, action) =>{


    switch (action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id ===action.userId) {
                        return {...user, followed: true}
                    }
                 return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id ===action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case SET_USERS:
            return {...state, users:[ ...state.users, ...action.users ]}
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export default usersReducer;