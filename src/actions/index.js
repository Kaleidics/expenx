import { API_BASE_URL } from '../config';

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
                return Promise.reject(res.statusText);
            }

            if (res.status === 201) {
                console.log("got", res.status, credentials.username, credentials.password);
                dispatch(signUpSuccess({
                    success: true,
                    username: credentials.username,
                    password: credentials.password
                }));
            }
            else {
                return res.json()
                    .then(res => {
                        console.log("error", res);
                    })
                    .catch(err => console.log("2error",err));
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
    console.log("actions", payload)
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
            if (localStorage.getItem("localtoken") && localStorage.getItem("userID")) {
                dispatch(signInSuccess(true));
            }
        })
    .catch(err => alert("Username or Password do not match!"));
}