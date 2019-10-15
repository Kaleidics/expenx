import { API_BASE_URL } from "../config";

const API = API_BASE_URL;
const defaultToken = localStorage.getItem("localtoken") || null;

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
                return Promise.reject(res.statusText);
            }

            if (res.status === 201) {
                console.log("got", res.status, credentials.username, credentials.password);
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
    console.log("actions", payload);
    return fetch(url, payload)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
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
        .catch(err => alert("Username or Password do not match!"));
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
            console.log("success refresh,", res.authToken);
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

    return fetch(url)
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

export const CREATE_EXPENSE_SUCCESS = "CREATE_EXPENSE_SUCCESS";
export const createExpenseSuccess = expense => ({
    type: CREATE_EXPENSE_SUCCESS,
    expense
});

export const createExpense = expense => dispatch => {
    const url = API + '/expenses/';

    return fetch(url, {
        method: "POST",
        body: JSON.stringify(expense),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${defaultToken}`
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
    })
    .catch(err => console.log(err));
}