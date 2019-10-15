import { SIGNUP_SUCCESS, SIGNIN_SUCCESS, VERIFY_TOKEN_SUCCESS, SIGN_OUT_SUCCESS, FETCH_EXPENSES_SUCCESS, CREATE_EXPENSE_SUCCESS } from "../actions";

const initialState = {
    auth: false,
    signUpState: {
        success: false,
        username: null,
        password: null
    },
    expenses: null,
    createReponse: null
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

    if (action.type === CREATE_EXPENSE_SUCCESS) {
        return Object.assign({}, state, {
            createReponse: action.expense
        })
    }

    return state;
};
