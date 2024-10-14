export function addTokenToHeaders({headers}) {
    const token = localStorage.getItem("token");
    if (!token) {
        headers.Authorization=` ${token}`;
    return headers;
    }
}