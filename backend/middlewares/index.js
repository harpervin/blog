import jwt from "jsonwebtoken";
import RefreshTokenModel from "../models/refreshToken.model.js";
import {
    generateAccessToken,
    generateRefreshToken,
} from "../controller/auth.js";
import User from "../models/user.model.js";

async function authenticateToken(req, res, next) {
    try {
        console.log("authenticate Token running");

        const accessToken = null;

        const { username } = req.body;
        console.log(username);

        const user = await User.findOne({ username });

        // check for refresh token
        const existingRefreshTokenDoc = await RefreshTokenModel.findOne({
            username: username,
        });

        console.log(existingRefreshTokenDoc);

        const bearerToken = req.headers.authorization;

        if (bearerToken != undefined) {
            accessToken = bearerToken.split(" ")[1]; // Extract the token part
        }

        // If no access, no refresh token present, route to client login page
        if (accessToken == null && existingRefreshTokenDoc == null) {
            console.log("not logged in");
            return next(res.status(401).json({ error: "Access Denied" }));
        } else if (accessToken == null && existingRefreshTokenDoc) {
            console.log("access token expired");

            // Creating access token
            const newAccessToken = generateAccessToken(user);

            // Creating refresh token
            const newRefreshToken = generateRefreshToken(user);

            // Update existing refresh token
            existingRefreshTokenDoc.refreshToken = newRefreshToken;
            await existingRefreshTokenDoc.save();

            // Sending success message and access token to client
            return res.status(200).json({
                    accessToken: newAccessToken,
                    username: user.username,
                });
        } else if (accessToken && existingRefreshTokenDoc) {
            console.log("access granted");

            jwt.verify(
                accessToken,
                process.env.ACCESS_SECRET_KEY,
                (err, user) => {
                    if (err) {
                        console.log(err);
                    }
                    // what does this mean
                    // Verified
                    req.user = user;

                    next();
                }
            );
        }
    } catch (e) {
        console.log(e);
    }
}

export default authenticateToken;
