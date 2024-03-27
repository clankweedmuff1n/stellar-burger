import {checkResponse} from "./fetchWithRefresh";
import {IRegisterUserRequest} from "../services/types/RegisterUserRequest.type";
import {ILoginUserRequest} from "../services/types/LoginUserRequest.type";
import {IResetPasswordRequest} from "../services/types/ResetPasswordRequest.type";
import {IChangeUserDataRequest} from "../services/types/ChangeUserDataRequest.type";

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

const sendOrderRequest = async (arrayId: Array<string>, accessToken: string | undefined) => {

    console.log(ORDER_URL);
    console.log(accessToken);
    console.log(arrayId);

    const res = await fetch(ORDER_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
            'ingredients': arrayId,
        }),
    });
    return checkResponse(res);
}

const getIngredientsRequest = async () => {
    return fetch(`${INGREDIENTS_URL}`).then(checkResponse);
};

const registerUserRequest = async (userData: IRegisterUserRequest) => {
    return fetch(REGISTER_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    }).then(checkResponse);
};

const loginUserRequest = async (userData: ILoginUserRequest) => {
    return fetch(LOGIN_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    }).then(checkResponse);
};

const logoutUserRequest = async (refreshToken: string | undefined) => {
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

const checkUserAccessRequest = async (accessToken: string | undefined) => {
    return fetch(CHECK_ACCESS_URL, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${accessToken}`,
        },
    }).then(checkResponse);
};

const refreshTokenRequest = async (refreshToken: string | undefined) => {
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

const forgotPasswordRequest = async (email: { email: string }) => {
    return fetch(FORGOT_PASSWORD_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
    }).then(checkResponse);
};

const resetPasswordRequest = async (userData: IResetPasswordRequest) => {
    return fetch(RESET_PASSWORD_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    }).then(checkResponse);
};

const changeUserDataRequest = async (userDate: IChangeUserDataRequest, accessToken: string | undefined) => {
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