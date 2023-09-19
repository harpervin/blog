import Cookies from "js-cookie";

const accessTokenExpMinutes = 15;
const accessTokenExpDate = new Date(
    new Date().getTime() + accessTokenExpMinutes * 60 * 1000
);

const refreshTokenExpDays = 7;
const refreshTokenExpDate = new Date(
    new Date().getTime() + refreshTokenExpDays * 24 * 60 * 60 * 1000
);

export const setAccessToken = (accessToken) => {
    Cookies.set("access_token", accessToken, {
        expires: accessTokenExpDate,
        path: "/",
    });
};

export const setRefreshToken = (refreshToken) => {
    Cookies.set("refresh_token", refreshToken, {
        expires: refreshTokenExpDate,
        path: "/",
    });
};

export const setUsername = (username) => {
    Cookies.set("username", username, {
        expires: refreshTokenExpDate,
        path: "/",
    });
};
