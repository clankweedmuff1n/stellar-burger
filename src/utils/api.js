const BASE_URL = "https://norma.nomoreparties.space/api/ingredients";
const ORDER_URL = "https://norma.nomoreparties.space/api/orders";
const REGISTER_URL = "https://norma.nomoreparties.space/api/auth/register";
const LOGIN_URL = "https://norma.nomoreparties.space/api/auth/login";
const LOGOUT_URL = "https://norma.nomoreparties.space/api/auth/logout";
const TOKEN_URL = "https://norma.nomoreparties.space/api/auth/token";
const CHECK_ACCESS_URL = "https://norma.nomoreparties.space/api/auth/user";
const RESET_PASSWORD_URL = "https://norma.nomoreparties.space/api/password-reset/reset";
const FORGOT_PASSWORD_URL = "https://norma.nomoreparties.space/api/password-reset";

const checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res.status);
};

const sendOrderRequest = async (arrayId) => {
    const res = await fetch(ORDER_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'ingredients': arrayId,
        }),
    });
    return checkResponse(res);
}

async function getIngredientsRequest() {
    const res = await fetch(BASE_URL);
    return checkResponse(res);
}

const registerUserRequest = async (userDate) => {
    return fetch(REGISTER_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userDate),
    }).then(checkResponse);
};

const loginUserRequest = async (userDate) => {
    return fetch(LOGIN_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userDate),
    }).then(checkResponse);
};

const logoutUserRequest = async (refreshToken) => {
    return fetch(LOGOUT_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            token: refreshToken,
        }),
    }).then(checkResponse);
};

const checkUserAccessRequest = async (accessToken) => {
    return fetch(CHECK_ACCESS_URL, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${accessToken}`,
        },
    }).then(checkResponse);
};

const refreshTokenRequest = async (refreshToken) => {
    return fetch(TOKEN_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            token: refreshToken,
        }),
    }).then(checkResponse);
};

const forgotPasswordRequest = async (email) => {
    return fetch(FORGOT_PASSWORD_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
    }).then(checkResponse);
};

const resetPasswordRequest = async (userDate) => {
    return fetch(RESET_PASSWORD_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userDate),
    }).then(checkResponse);
};

const changeUserDataRequest = async (userDate, accessToken) => {
    return fetch(CHECK_ACCESS_URL, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(userDate),
    }).then(checkResponse);
};

export {
    sendOrderRequest,
    getIngredientsRequest,
    registerUserRequest,
    loginUserRequest,
    logoutUserRequest,
    checkUserAccessRequest,
    refreshTokenRequest,
    forgotPasswordRequest,
    resetPasswordRequest,
    changeUserDataRequest,
};