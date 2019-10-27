import { SIGNUP_SUCCESS, SIGNIN_SUCCESS, VERIFY_TOKEN_SUCCESS, SIGN_OUT_SUCCESS, FETCH_EXPENSES_SUCCESS, CREATE_EXPENSE_SUCCESS, SET_UNI_MSG, FETCH_TOTAL_SUCCESS, FETCH_MONTHS_SUCCESS, FETCH_WEEK_SUCCESS, FETCH_MONTH_SUCCESS } from "../actions";

const initialState = {
    auth: false,
    signUpState: {
        success: false,
        username: null,
        password: null
    },
    universalMessage: null,
    universalMessageColor: null,
    expenses: null,
    months: null,
    week: null,
    month: null,
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

    //fetch all expenses
    if (action.type === FETCH_EXPENSES_SUCCESS) {
        return Object.assign({}, state, {
            expenses: action.expenses
        });
    }

    //fetch the sum of expenses for each month
    if (action.type === FETCH_MONTHS_SUCCESS) {
        return Object.assign({}, state, {
            months: action.months
        });
    }

    //fetch the sum of all expenses to date
    if (action.type === FETCH_TOTAL_SUCCESS) {
        return Object.assign({}, state, {
            total: action.total
        });
    }

    if (action.type === FETCH_WEEK_SUCCESS) {
        return Object.assign({}, state, {
            week: action.week
        })
    }

    if (action.type === FETCH_MONTH_SUCCESS) {
        return Object.assign({}, state, {
            month: action.month
        });
    }

    if (action.type === CREATE_EXPENSE_SUCCESS) {
        console.log("reducercreate")
        return Object.assign({}, state, {
            expenses: [action.expense, ...state.expenses],
            universalMessage: action.success,
            universalMessageColor: action.color,
        });
    }

    if (action.type === SET_UNI_MSG) {
        console.log("CLEARED", action.clear)
        return Object.assign({}, state, {
            universalMessage: action.msg,
            universalMessageColor: action.color
        });
    }

    return state;
};
