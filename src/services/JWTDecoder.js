export const decodeJWT = (JWTToken) => {
    return JSON.parse(
        atob(JWTToken.split('.')[1])
    );
}
