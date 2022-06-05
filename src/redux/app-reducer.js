import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSucsess = () => ({
    type: INITIALIZED_SUCCESS
})

//==============thunk-creators==============//
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    ///let promise = dispatch(something());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSucsess());
        });

}

export default appReducer;