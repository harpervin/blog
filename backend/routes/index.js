// import { fetchLatestBlogs, fetchBlog, supabase } from "../db/index.js";

// router.get("/latestBlogs", async (req, res) => {
//     //res.send("latest blogs");
//     const blogs = await fetchLatestBlogs();
//     console.log("Fetched latest blogs from express server: ", blogs);
//     res.send(blogs);
// });

// router.get("/getBlog/:id", async (req, res) => {
//     //res.send("latest blogs");
//     const id = req.params.id;
//     const blog = await fetchBlog(id);
//     res.send(blog);
// });

// router.post("/getUser", async (req, res) => {
//     const {
//         data: { user },
//     } = await supabase.auth.getUser();
//     console.log(data);
//     res.send(data);
// });

// router.post("/login", async (req, res) => {
//     console.log(req.body);
//     const { email, pw } = req.body;
//     let { data, error } = await supabase.auth.signInWithPassword({
//         email: email,
//         password: pw,
//     });
//     console.log(data);
//     res.send(data);
// });

// router.post("/register", async (req, res) => {
//     console.log(req.body);
//     const { email, pw, username } = req.body;

//     let { data, error } = await supabase.auth.signUp({
//         email: email,
//         password: pw,
//     });

//     if (data.user) {
//         console.log(data);
//         let { insert_data, error } = await supabase.from("usernames").insert([
//             {
//                 user_id: user.id, // Link to the user's authentication ID
//                 username: username,
//                 // Other profile data...
//             },
//         ]);

//         if (error) {
//             console.error("username error:", error);
//             res.send(error);
//         } else {
//             console.log("Profile created:", insert_data);
//             res.send(insert_data, username);
//         }
//     } else if (error) {
//         console.log("signup error: ", error.status);
//         res.sendStatus(error.status);
//     }
// });

// router.get("/featured", (req, res) => {
//     res.send("Featured Blogs Page. View all featured blogs here!");
// });

// router.get("/drafts", (req, res) => {
//     res.send("Drafts Blogs Page");
// });

import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.model.js";
import logger from "../logger/index.js";
import authenticateToken from "../middlewares/index.js";

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

        logger.debug(user._doc);

        // Creating JWT for user authentication
        const token = jwt.sign({ user_id: user._id }, process.env.SECRET_KEY, {
            expiresIn: "1h",
        });

        // Sending success message and JWT
        return res.status(200).json({ token:token, username:user.username });
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
        logger.debug("User registered successfully");
        res.status(201).json({ message: "User registered successfully" });
    } catch (e) {
        logger.error(e.code);
        res.status(401).json({ error: e.message });
    }
});

router.get("/lineups", authenticateToken, (req, res) => {
    logger.info("Authenticated");
    logger.info(req.user);
});

export default router;
