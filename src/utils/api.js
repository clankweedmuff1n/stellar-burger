const BASE_URL = 'https://norma.nomoreparties.space/api';

const checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res.status);
};

export const sendOrder = async (arrayId) => {
    const res = await fetch(`${BASE_URL}/orders`, {
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

export async function getIngredientsApi() {
    const res = await fetch(`${BASE_URL}/ingredients`);
    return checkResponse(res);
}