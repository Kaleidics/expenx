import { API_BASE_URL } from '../config';

const API = API_BASE_URL;

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const signUpSuccess = payload => ({
    type: SIGNUP_SUCCESS,
    payload
});

export const signUp = credentials => dispatch => {

    const url = API + "/users/signin";
    const payload = {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
            "Content-Type": "application/json"
        }
    };

    return fetch(url, payload)
        .then(res => {
            if (res.status === 201) {
                console.log("got", res.status, credentials.username, credentials.password);
                dispatch(signUpSuccess({
                    success: true,
                    credentials
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
