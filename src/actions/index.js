import { API_BASE_URL } from "../config";

import sleeper from "../helpers/Sleeper";

const API = API_BASE_URL;

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const signUpSuccess = payload => ({
    type: SIGNUP_SUCCESS,
    payload
});

export const signUp = credentials => dispatch => {
    const url = API + "/users/signup";
    const payload = {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
            "Content-Type": "application/json"
        }
    };

    return fetch(url, payload)
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .then(res => dispatch(setUniMsg(res.message, "failed")))
                    .then(sleeper(2500))
                    .then(() => dispatch(setUniMsg("", "")))
                .catch(err => console.log(err));   
            }

            if (res.status === 201) {
                dispatch(
                    signUpSuccess({
                        success: true,
                        username: credentials.username,
                        password: credentials.password
                    })
                );
            } else {
                return res
                    .json()
                    .then(res => {
                        console.log("error", res);
                    })
                .catch(err => console.log("2error", err));
            }
        })
        .catch(err => console.log("1 error", err));
};

export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const signInSuccess = payload => ({
    type: SIGNIN_SUCCESS,
    payload
});

export const signIn = credentials => dispatch => {
    const url = API + "/auth/signin";

    const payload = {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
            "Content-Type": "application/json"
        }
    };

    return fetch(url, payload)
        .then(res => {
            if (!res.ok && res.status === 401 || res.status !=200) {
                dispatch(setUniMsg("Wrong Username or Password!", "failed"));
            }
            return res.json();
        })
        .then(res => {
            const token = res.authtoken;
            const userID = res.userid;
            localStorage.setItem("localtoken", token);
            localStorage.setItem("authedUser", userID);
        })
        .then(() => {
            if (localStorage.getItem("localtoken") && localStorage.getItem("authedUser")) {
                dispatch(signInSuccess(true));
            }
        })
        .catch(err => {
            setTimeout(function() {
                    dispatch(setUniMsg("", ""));
                }, 2500);
                console.log("");
        });
};

export const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";
export const signOutSuccess = payload => ({
    type: SIGN_OUT_SUCCESS,
    payload
});

export const signOut = () => dispatch => {
    localStorage.removeItem("localtoken");
    localStorage.removeItem("authedUser");
    dispatch(signOutSuccess(false));
}

//refresh tokens
export const VERIFY_TOKEN_SUCCESS = "VERIFY_TOKEN_SUCCESS";
export const verifyTokenSuccess = payload => ({
    type: VERIFY_TOKEN_SUCCESS,
    payload
});

export const verifyToken = token => dispatch => {
    const url = API + "/auth/refresh";
    const payload = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    };

    return fetch(url, payload)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            } else if (res.status === 201) {
                return res.json();
            }
        })
        .then(res => {
            const token = res.authToken;
            localStorage.setItem("localtoken", token);
            dispatch(verifyTokenSuccess(true));
        })
        .catch(err => console.log(err));
};

export const FETCH_EXPENSES_SUCCESS = "FETCH_EXPENSES_SUCCESS";
export const fetchExpensesSuccess = expenses => ({
    type: FETCH_EXPENSES_SUCCESS,
    expenses
});

export const fetchExpenses = () => dispatch => {
    const userid = localStorage.getItem("authedUser");
    const url = `${API}/expenses/user/${userid}`;
    const localToken = localStorage.getItem("localtoken");

    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localToken}`
            }
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(expenses => {
            dispatch(fetchExpensesSuccess(expenses));
        })
        .catch(err => console.log(err));
}

//fetch the total expenses for each month
export const FETCH_MONTHS_SUCCESS = "FETCH_MONTHS_SUCCESS";
export const fetchMonthsSuccess = months => ({
    type: FETCH_MONTHS_SUCCESS,
    months
});

export const fetchMonths = () => dispatch => {
    const userid = localStorage.getItem("authedUser");
    const url = `${API}/expenses/user_month/${userid}`;
    const localToken = localStorage.getItem("localtoken");

    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localToken}`
            }
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(months => {
            dispatch(fetchMonthsSuccess(months));
        })
        .catch(err => console.log(err));
}

//fetch the total expenses for current day
export const FETCH_WEEK_SUCCESS = "FETCH_WEEK_SUCCESS";
export const fetchWeekSuccess = week => ({
    type: FETCH_WEEK_SUCCESS,
    week
});

export const fetchWeek = () => dispatch => {
    const userid = localStorage.getItem("authedUser");
    const url = `${API}/expenses/user_current_week/${userid}`;
    const localToken = localStorage.getItem("localtoken");

    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localToken}`
            }
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(data => {
            let week = data[0].total.$numberDecimal;
            dispatch(fetchWeekSuccess(week));
        })
        .catch(err => console.log(err));
}

export const FETCH_MONTH_SUCCESS = "FETCH_MONTH_SUCCESS";
export const fetchMonthSuccess = month => ({
    type: FETCH_MONTH_SUCCESS,
    month
});

export const fetchMonth = () => dispatch => {
    const userid = localStorage.getItem("authedUser");
    const url = `${API}/expenses/user_current_month/${userid}`;
    const localToken = localStorage.getItem("localtoken");

    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localToken}`
            }
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(data => {
            let month = data[0].total.$numberDecimal;
            dispatch(fetchMonthSuccess(month));
        })
        .catch(err => console.log(err));
}

export const FETCH_TOTAL_SUCCESS = "FETCH_TOTAL_SUCCESS";
export const fetchTotalSuccess = total => ({
    type: FETCH_TOTAL_SUCCESS,
    total
});

export const fetchTotal = () => dispatch => {
    const userid = localStorage.getItem("authedUser");
    const url = `${API}/expenses/user_sum/${userid}`;
    const localToken = localStorage.getItem("localtoken");

    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localToken}`
            }
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(data => {
            let total = data[0].total.$numberDecimal;
            dispatch(fetchTotalSuccess(total));
        })
        .catch(err => console.log(err));
}

export const CREATE_EXPENSE_SUCCESS = "CREATE_EXPENSE_SUCCESS";
export const createExpenseSuccess = expense => ({
    type: CREATE_EXPENSE_SUCCESS,
    expense,
    success: "Success",
    color: "success"
});

export const SET_UNI_MSG = "SET_UNI_MSG";
export const setUniMsg = (msg, status) => ({
    type: SET_UNI_MSG,
    msg,
    color: status
});

export const createExpense = expense => dispatch => {
    const url = API + '/expenses/';
    const localToken = localStorage.getItem("localtoken");

    return fetch(url, {
        method: "POST",
        body: JSON.stringify(expense),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localToken}`
        }
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText)
        }
        return res.json();
    })
    .then(expense => {
        dispatch(createExpenseSuccess(expense));
        dispatch(fetchWeek());
        dispatch(fetchMonth());
        dispatch(fetchTotal());

        //for the left overview container
        dispatch(fetchMonths());
    })
    .then(sleeper(3000))
    .then(() => dispatch(setUniMsg("", "")))
    .catch(err => console.log(err));
}