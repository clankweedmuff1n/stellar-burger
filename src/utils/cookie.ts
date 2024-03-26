export function getToken(name: string): string | undefined {
    if (localStorage.getItem(name) == null) return undefined;
    else localStorage.getItem(name);
}

export function parseToken(name: string): string {
    return name.split("Bearer ")[1];
}

export function setToken(name: string, value: string): void {
    localStorage.setItem(name, value);
}

export function deleteToken(name: string): void {
    localStorage.removeItem(name);
}