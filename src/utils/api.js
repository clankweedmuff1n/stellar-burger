const BASE_URL = 'https://norma.nomoreparties.space/api/ingredients';


const checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res.status);
};

export default async function getIngredientsApi() {
    const res = await fetch(`${BASE_URL}`);
    return checkResponse(res);
}