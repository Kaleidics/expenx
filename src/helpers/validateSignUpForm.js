const error = {
    a: "Please enter a valid Fullname.",
    b: "Please enter a valid email address.",
    c: "Please enter a valid password.",
    d: "Password should have six characters.",
    e: "Password should have one uppercase character.",
    f: "Password should have one lowercase character.",
    g: "Password should have one digit.",
    h: "Please accept terms of services.",
    i: "Please accept Privacy Policy.",
    x: "Please make sure your passwords match"
};

export default function validate(payload) {
    const { fullname, username, password, confirmPassword, policy, terms } = payload;

    let errors = {
        fullnameError: "",
        usernameError: "",
        passwordError: "",
        confirmPasswordError: "",
        policyError: "",
        termsError: ""
    };

    if (!fullname) {
        errors.fullnameError = error.a;
    }

    //checks for valid email via @ character
    if (!username || !/@/.test(username)) {
        errors.usernameError = error.b;
    }

    if (!password) {
        errors.passwordError = error.d;
    }

    if (!terms) {
        errors.termsError = error.h;
    }

    if (!policy) {
        errors.policyError = error.i;
    }

    //if user has inputted a password we do a more extensive check and
    // break on the closest condition so we don't unneccessary go through all errors
    //its going to complain about labels in the break statements, I think ES6 wants to phase this out
    extensiveCheck: if (password) {
        if (password.length < 6) {
            errors.passwordError = error.d;
            break extensiveCheck;
        }

        if (!/[A-Z]/.test(password)) {
            errors.passwordError = error.e;
            break extensiveCheck;
        }

        if (!/[a-z]/.test(password)) {
            errors.passwordError = error.f;
            break extensiveCheck;
        }

        if (!/\d/.test(password)) {
            errors.passwordError = error.g;
            break extensiveCheck;
        }

        if (password !== confirmPassword) {
            errors.passwordError = error.x;
            errors.confirmPasswordError = error.x;
        }
    }
    return errors;
}
