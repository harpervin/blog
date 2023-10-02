import jwt from "jsonwebtoken";

export function generateAccessToken(user) {
    const accessToken = jwt.sign(
        { user_id: user._id },
        process.env.ACCESS_SECRET_KEY,
        {
            expiresIn: "15m",
        }
    );
    return accessToken;
}

export function generateRefreshToken(user) {
    // Creating refresh token
    const refreshToken = jwt.sign(
        { user_id: user._id },
        process.env.REFRESH_SECRET_KEY,
        {
            expiresIn: "1d",
        }
    );
    return refreshToken;
}
