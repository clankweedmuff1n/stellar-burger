import {getToken} from "./cookie";

const BASE_WS_URL = "wss://norma.nomoreparties.space/orders";
const WS_URL_ALL = `${BASE_WS_URL}/all`;

const getSocketUrl = () => {
    const accessToken = getToken("accessToken");
    return `${BASE_WS_URL}?token=${accessToken}`;
};

export {
    WS_URL_ALL,
    getSocketUrl
};