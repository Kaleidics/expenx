import { SIGNUP_SUCCESS } from "../actions";

const initialState = {
    auth: false,
    signUpState: {
        success: false,
        username: null,
        password: null
    }
};

export const Reducer = (state = initialState, action) => {
     if (action.type === SIGNUP_SUCCESS) {
         return Object.assign({}, state, {
             signUpState: action.payload
         });
     }
     
    return state;
};
