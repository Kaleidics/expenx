import { SIGNUP_SUCCESS, SIGNIN_SUCCESS } from "../actions";

const initialState = {
    auth: false,
    signUpState: {
        success: true,
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

    if (action.type === SIGNIN_SUCCESS) {
        return Object.assign({}, state, {
            auth: action.payload
        });
    }

    return state;
};
