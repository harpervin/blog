import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.model.js";
import authenticateToken from "../middlewares/index.js";
import { newAccessToken, newRefreshToken } from "../controller/auth.js";

const router = express.Router();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(400).json({ error: "Invalid password" });
        }

        console.log(user._doc);

        // Creating access token
        const accessToken = jwt.sign(
            { user_id: user._id },
            process.env.ACCESS_SECRET_KEY,
            {
                expiresIn: "15m",
            }
        );

        // Creating access token
        const refreshToken = jwt.sign(
            { user_id: user._id },
            process.env.REFRESH_SECRET_KEY,
            {
                expiresIn: "1d",
            }
        );

        // Sending success message and JWT
        return res
            .status(200)
            .json({ accessToken, refreshToken, username: user.username });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ error: e.message });
    }
});

router.post("/signup", async (req, res) => {
    // Get username, email, password
    const { username, password, email } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        username: username,
        email: email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        console.log("User registered successfully");
        res.status(201).json({ message: "User registered successfully" });
    } catch (e) {
        console.log(e.code);
        res.status(401).json({ error: e.message });
    }
});

router.post("/getNewAccessToken", (req, res) => {
    try {
        const data = req.body;
        const refresh_token = data["refresh_token"];
        console.log(refresh_token);

        jwt.verify(
            refresh_token,
            process.env.REFRESH_SECRET_KEY,
            (err, user) => {
                if (err) {
                    console.log(err);
                    return res
                        .status(403)
                        .json({ error: "Invalid refresh token" });
                }

                if (user) {
                    const accessToken = newAccessToken(user);
                    const refreshToken = newRefreshToken(user);
                    // Sending success message and JWT
                    return res.status(200).json({ accessToken, refreshToken });
                }
            }
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json({ error: e.message });
    }
});

router.get("/lineups", (req, res) => {});

export default router;
