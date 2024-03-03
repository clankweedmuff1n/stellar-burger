import {checkResponse} from "./fetchWithRefresh";

export const BASE_URL = "https://norma.nomoreparties.space/api/";
const INGREDIENTS_URL = BASE_URL + "ingredients";
const ORDER_URL = BASE_URL + "orders";
const REGISTER_URL = BASE_URL + "auth/register";
const LOGIN_URL = BASE_URL + "auth/login";
const LOGOUT_URL = BASE_URL + "auth/logout";
const TOKEN_URL = BASE_URL + "auth/token";
const CHECK_ACCESS_URL = BASE_URL + "auth/user";
const RESET_PASSWORD_URL = BASE_URL + "password-reset/reset";
const FORGOT_PASSWORD_URL = BASE_URL + "password-reset";

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
    const res = await fetch(INGREDIENTS_URL);
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