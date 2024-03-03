export function getToken(name) {
    return localStorage.getItem(name);
}

export function parseToken(name) {
    return name.split("Bearer ")[1];
}

export function setToken(name, value) {
    localStorage.setItem(name, value);
}

export function deleteToken(name) {
    localStorage.removeItem(name);
}