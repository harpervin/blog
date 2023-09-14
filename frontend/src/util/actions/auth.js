// actions/auth.js
export const reduxLogin = (user) => ({
    type: "LOGIN",
    payload: user,
});

export const reduxLogout = () => ({
    type: "LOGOUT",
});
