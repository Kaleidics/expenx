import { SIGNUP_SUCCESS, SIGNIN_SUCCESS, VERIFY_TOKEN_SUCCESS, SIGN_OUT_SUCCESS, FETCH_EXPENSES_SUCCESS, CREATE_EXPENSE_SUCCESS, SET_UNI_MSG, FETCH_TOTAL_SUCCESS } from "../actions";

const initialState = {
    auth: false,
    signUpState: {
        success: false,
        username: null,
        password: null
    },
    expenses: null,
    universalMessage: null,
    total: ""
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

    if (action.type === SIGN_OUT_SUCCESS) {
        return Object.assign({}, state, {
            auth: action.payload
        });
    }

    if (action.type === VERIFY_TOKEN_SUCCESS) {
        return Object.assign({}, state, {
            auth: action.payload
        });
    }

    if (action.type === FETCH_EXPENSES_SUCCESS) {
        return Object.assign({}, state, {
            expenses: action.expenses
        });
    }

    if (action.type === FETCH_TOTAL_SUCCESS) {
        return Object.assign({}, state, {
            total: action.total
        });
    }

    if (action.type === CREATE_EXPENSE_SUCCESS) {
        console.log("reducercreate")
        return Object.assign({}, state, {
            expenses: [action.expense, ...state.expenses],
            universalMessage: action.success
        });
    }

    if (action.type === SET_UNI_MSG) {
        console.log("CLEARED", action.clear)
        return Object.assign({}, state, {
            universalMessage: action.msg
        });
    }

    return state;
};
