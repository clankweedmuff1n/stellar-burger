const BASE_URL = 'https://norma.nomoreparties.space/api/ingredients';
const ORDER_URL = 'https://norma.nomoreparties.space/api/orders';

const checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res.status);
};

export const apiOrder = async (arrayId) => {
    const res = await fetch(`${ORDER_URL}`, {
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
    const res = await fetch(`${BASE_URL}`);
    return checkResponse(res);
}